import { useEffect, useRef } from "react";
import TitleContainer from "./TitleContainer";
import ImageContainer from "./ImageContainer";
import LinkDescription from "./LinkDescription";
import Tags from "./Tags";
import style from "../styles/HomepageLinkWrapper.module.css";

export default function HomepageLinkWrapper({ project }) {
  const components = {
    TitleContainer: TitleContainer,
    ImageContainer: ImageContainer,
    Tags: Tags,
    LinkDescription: LinkDescription,
  };

  const linkRef = useRef(null);
  const doubleLinkArr = [
    ...project.order,
    ...project.order,
    ...project.order,
    ...project.order,
  ];
  const rate = 0.5;

  let hover = false,
    minScrollLeft = 2,
    maxScrollLeft,
    leftToRightDir,
    cloneWidth,
    windowWidth = 0,
    disableScroll = false;
  const requestRef = useRef();
  const previousPosRef = useRef(0);

  const reCalc = () => {
    windowWidth = window.innerWidth;
    cloneWidth = linkRef.current.scrollWidth / 4;
    maxScrollLeft = linkRef.current.scrollWidth - windowWidth - minScrollLeft;
  };

  useEffect(() => {
    leftToRightDir = project.id % 2 == 0;
    reCalc();

    previousPosRef.current = maxScrollLeft;
    linkRef.current.scrollLeft = maxScrollLeft;

    window.addEventListener("resize", reCalc);
    window.addEventListener("load", reCalc);

    requestRef.current = requestAnimationFrame(animateScroll);
    return () => {
      window.removeEventListener("resize", reCalc);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  //https://stackoverflow.com/questions/62653091/cancelling-requestanimationrequest-in-a-react-component-using-hooks-doesnt-work
  const animateScroll = () => {
    if (!hover) {
      if (leftToRightDir) {
        previousPosRef.current += rate;
        linkRef.current.scrollLeft = previousPosRef.current;
      } else if (!leftToRightDir) {
        previousPosRef.current -= rate;
        linkRef.current.scrollLeft = previousPosRef.current;
      }
    }

    requestRef.current = requestAnimationFrame(animateScroll);
  };

  const pauseScrollAnimation = () => {
    linkRef.current.scrollLeft = previousPosRef.current;
    hover = true;
  };

  const continueScrollAnimation = () => {
    hover = false;
    previousPosRef.current = linkRef.current.scrollLeft;
  };

  const continueScrollAnimationWithDelay = () => {
    setInterval(() => {
      hover = false;
      previousPosRef.current = linkRef.current.scrollLeft;
    }, 5000);
  };

  //https://codepen.io/tdextrous/pen/ROBvyz?editors=0010

  function handleScroll(e) {
    const container = e.currentTarget;

    if (!disableScroll) {
      if (maxScrollLeft <= container.scrollLeft) {
        //Going right
        //Because each section is not 100vw we have to calculate where the section matches the ending of a clone section
        container.scrollLeft = cloneWidth - windowWidth;
        disableScroll = true;
      } else if (minScrollLeft >= container.scrollLeft) {
        //Going left
        container.scrollLeft = cloneWidth * 3;
        disableScroll = true;
      }
      previousPosRef.current = container.scrollLeft;
    }

    setTimeout(() => {
      disableScroll = false;
    }, 40);
  }

  return (
    <a
      className={style.linkwrapper}
      href={`${project.slug}`}
      onMouseEnter={pauseScrollAnimation}
      onMouseLeave={continueScrollAnimation}
      onTouchStart={pauseScrollAnimation}
      onTouchEnd={continueScrollAnimationWithDelay}
      onScroll={handleScroll}
      ref={linkRef}
      target="_blank"
      rel="noreferrer"
    >
      {doubleLinkArr.map((component, index) => {
        let Component = components[component.type];
        return <Component key={index} {...component.params} />;
      })}
    </a>
  );
}
