import { useState, useEffect, useRef } from "react";
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

  useEffect(() => {
    linkRef.current.scrollLeft = linkRef.current.scrollWidth / 4 - 10;
  }, []);

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
    <a className={style.linkwrapper} href={`/project/${project.slug}`} onScroll={handleScroll} ref={linkRef}>
      {/* {scrollX > 100 ? "Scrolled more than 100px" : "Still somewhere near the top!"} */}
      {doubleLinkArr.map((component, index) => {
        let Component = components[component.type];
        return <Component key={index} {...component.params} />;
      })}
    </a>
  );
}
