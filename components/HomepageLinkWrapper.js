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

  let hover = false;
  const requestRef = useRef();
  const previousTimeRef = useRef(0);

  useEffect(() => {
    //handleScroll
    linkRef.current.scrollLeft = linkRef.current.scrollWidth / 4 - 10;

    // ScrollCount
    previousTimeRef.current = linkRef.current.scrollWidth / 4 - 10;
    requestRef.current = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  //https://stackoverflow.com/questions/62653091/cancelling-requestanimationrequest-in-a-react-component-using-hooks-doesnt-work
  const animateScroll = () => {
    if (!hover && project.id % 2 == 0) {
      previousTimeRef.current += rate;
      linkRef.current.scrollLeft = previousTimeRef.current;
    } else if (!hover && !project.id % 2 == 0) {
      previousTimeRef.current -= rate;
      linkRef.current.scrollLeft = previousTimeRef.current;
    }

    requestRef.current = requestAnimationFrame(animateScroll);
    // console.log(linkRef.current);
  };

  const pauseScrollAnimation = () => {
    hover = true;
  };

  const continueScrollAnimation = () => {
    hover = false;
    previousTimeRef.current = linkRef.current.scrollLeft;
  };

  //https://codepen.io/tdextrous/pen/ROBvyz?editors=0010
  //https://www.storyblok.com/tp/react-dynamic-component-from-json
  //https://stackoverflow.com/questions/41305344/reactjs-transferring-props-to-dynamic-component
  //https://stackoverflow.com/questions/63203220/i-want-to-implement-react-horizontal-infinite-scroll-not-getting-proper-solutio

  function handleScroll(e) {
    const container = e.currentTarget;
    const minScrollLeft = 5;
    const maxScrollLeft = container.scrollWidth / 4;

    if (maxScrollLeft < container.scrollLeft) {
      container.scrollLeft = minScrollLeft;
    } else if (minScrollLeft > container.scrollLeft) {
      container.scrollLeft = maxScrollLeft;
    }
  }

  return (
    <a className={style.linkwrapper} href={`${project.slug}`} onMouseEnter={pauseScrollAnimation} onMouseLeave={continueScrollAnimation} onTouchStart={pauseScrollAnimation} onScroll={handleScroll} ref={linkRef} target="_blank" rel="noreferrer">
      {doubleLinkArr.map((component, index) => {
        let Component = components[component.type];
        return <Component key={index} {...component.params} />;
      })}
    </a>
  );
}
