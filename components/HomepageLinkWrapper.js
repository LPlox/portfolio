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
  const doubleLinkArr = [...project.order, ...project.order, ...project.order, ...project.order];
  const rate = 0.5;

  let hover = false,
    minScrollLeft = 1,
    maxScrollLeft;
  const requestRef = useRef();
  const previousTimeRef = useRef(0);

  useEffect(() => {
    //handleScroll
    maxScrollLeft = linkRef.current.scrollWidth / 4;

    console.log(linkRef.current.scrollWidth / 4);

    // ScrollCount
    if (project.id % 2 == 0) {
      previousTimeRef.current = 5;
      linkRef.current.scrollLeft = minScrollLeft;
    } else if (!project.id % 2 == 0) {
      previousTimeRef.current = maxScrollLeft;
      linkRef.current.scrollLeft = maxScrollLeft;
    }

    requestRef.current = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  //https://stackoverflow.com/questions/62653091/cancelling-requestanimationrequest-in-a-react-component-using-hooks-doesnt-work
  const animateScroll = () => {
    if (!hover) {
      if (project.id % 2 == 0) {
        previousTimeRef.current += rate;
        linkRef.current.scrollLeft = previousTimeRef.current;
      } else if (!project.id % 2 == 0) {
        previousTimeRef.current -= rate;
        linkRef.current.scrollLeft = previousTimeRef.current;
      }

      //   if (project.id == 1) {
      //     console.log("link: " + linkRef.current.scrollLeft, "count: " + previousTimeRef.current);
      //     console.log(minScrollLeft, linkRef.current.scrollLeft);
      //   }
    }

    requestRef.current = requestAnimationFrame(animateScroll);
  };

  const pauseScrollAnimation = () => {
    linkRef.current.scrollLeft = previousTimeRef.current;
    hover = true;
  };

  const continueScrollAnimation = () => {
    hover = false;
    previousTimeRef.current = linkRef.current.scrollLeft;
  };

  const continueScrollAnimationWithDelay = () => {
    setInterval(() => {
      hover = false;
      previousTimeRef.current = linkRef.current.scrollLeft;
    }, 5000);
  };

  //https://codepen.io/tdextrous/pen/ROBvyz?editors=0010

  function handleScroll(e) {
    const container = e.currentTarget;

    if (maxScrollLeft < container.scrollLeft) {
      container.scrollLeft = minScrollLeft;
    } else if (minScrollLeft > container.scrollLeft) {
      container.scrollLeft = maxScrollLeft;
    }

    previousTimeRef.current = container.scrollLeft;
  }

  return (
    <a className={style.linkwrapper} href={`${project.slug}`} onMouseEnter={pauseScrollAnimation} onMouseLeave={continueScrollAnimation} onTouchStart={pauseScrollAnimation} onTouchEnd={continueScrollAnimationWithDelay} onScroll={handleScroll} ref={linkRef} target="_blank" rel="noreferrer">
      {doubleLinkArr.map((component, index) => {
        let Component = components[component.type];
        return <Component key={index} {...component.params} />;
      })}
    </a>
  );
}
