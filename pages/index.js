import Head from "next/head";
import styles from "../styles/Home.module.css";

import Nav from "../components/Nav";
import LinkWrapper from "../components/HomepageLinkWrapper";

const projectList = [
  {
    slug: "https://youtu.be/XUCcWH_OOnk",
    order: [
      { type: "TitleContainer", params: { title: "﹏ KIA ﹏", fonttype: "picnic" } },
      { type: "ImageContainer", params: { image: "kia01.png", styling: "" } },
      { type: "TitleContainer", params: { title: "﹏ INSTORE ﹏", fonttype: "picnic" } },
      { type: "ImageContainer", params: { image: "kia02.png", styling: "" } },
      { type: "TitleContainer", params: { title: "﹏ Touch screen ﹏", fonttype: "picnic" } },
      { type: "ImageContainer", params: { image: "kia03.png", styling: "" } },
      { type: "TitleContainer", params: { title: "﹏ PWA ﹏", fonttype: "picnic" } },
      { type: "Tags", params: { tags: ["nuxt", "vue", "touch", "animation"] } },
    ],
    id: "1",
  },
  {
    slug: "https://wise-materials.org/",
    order: [
      { type: "TitleContainer", params: { title: "WISE", fonttype: "pilowlava" } },
      { type: "ImageContainer", params: { image: "dog01.png", styling: "" } },
      { type: "TitleContainer", params: { title: "WISE", fonttype: "pilowlava" } },
      { type: "ImageContainer", params: { image: "dog02.png", styling: "" } },
      { type: "TitleContainer", params: { title: "WISE", fonttype: "pilowlava" } },
      { type: "ImageContainer", params: { image: "dog03.png", styling: "" } },
      { type: "TitleContainer", params: { title: "WISE", fonttype: "pilowlava" } },
      { type: "ImageContainer", params: { image: "dog04.png", styling: "spinBackwards" } },
      { type: "Tags", params: { tags: ["Javascript", "Wordpress", "animation"] } },
    ],
    id: "2",
  },
  {
    slug: "https://travis-ci-globe.netlify.app/",
    order: [
      { type: "TitleContainer", params: { title: "TRAVIS", fonttype: "typefesse" } },
      { type: "ImageContainer", params: { image: "globe.png", styling: "" } },
      { type: "TitleContainer", params: { title: "CASTOR KTH HACKATHON", fonttype: "typefesse" } },
      { type: "ImageContainer", params: { image: "globe.png", styling: "" } },
      { type: "TitleContainer", params: { title: "TRAVIS", fonttype: "typefesse" } },
      { type: "Tags", params: { tags: ["3D", "WEBGL"] } },
    ],
    id: "3",
  },
  {
    slug: "https://www.svenskplast.se/",
    order: [
      { type: "ImageContainer", params: { image: "circular.png", styling: "spin" } },
      { type: "TitleContainer", params: { title: "Svensk plast webpage", fonttype: "gulax" } },
      { type: "ImageContainer", params: { image: "circular.png", styling: "spin" } },
      { type: "TitleContainer", params: { title: "Svensk plast webpage", fonttype: "gulax" } },
      { type: "ImageContainer", params: { image: "circular.png", styling: "spin" } },
      { type: "TitleContainer", params: { title: "Svensk plast webpage", fonttype: "gulax" } },
      { type: "Tags", params: { tags: ["wordpress", "javascript"] } },
      //   { type: "LinkDescription", params: { description: "Development notes: Animated graphical svg elements on scroll" } },
      { type: "ImageContainer", params: { image: "arrow_right.png", styling: "" } },
    ],
    id: "4",
  },
  {
    slug: "https://jobbadigifysiskt.se/",
    order: [
      { type: "TitleContainer", params: { title: "JOBBA DIGIFYSISKT", fonttype: "solidemirage" } },
      { type: "TitleContainer", params: { title: "✱ ✱ ✱ ✱ ✱ ✱ ✱", fonttype: "solidemirage" } },
      { type: "TitleContainer", params: { title: "REGION STOCKHOLM", fonttype: "solidemirage" } },
      { type: "TitleContainer", params: { title: "✱ ✱ ✱ ✱ ✱ ✱ ✱", fonttype: "solidemirage" } },
      { type: "Tags", params: { tags: ["Jamstack", "Gridsome", "vue", "graphql"] } },
    ],
    id: "5",
  },
  {
    slug: "https://sparvagsmuseet.se/",
    order: [
      { type: "TitleContainer", params: { title: "Spårvagnsmuseet", fonttype: "pilowlava" } },
      { type: "ImageContainer", params: { image: "train01.png", styling: "" } },
      { type: "TitleContainer", params: { title: "Spårvagnsmuseet", fonttype: "pilowlava" } },
      { type: "ImageContainer", params: { image: "train02.png", styling: "" } },
      { type: "TitleContainer", params: { title: "Spårvagnsmuseet", fonttype: "pilowlava" } },
      { type: "ImageContainer", params: { image: "train03.png", styling: "" } },
      { type: "TitleContainer", params: { title: "Spårvagnsmuseet", fonttype: "pilowlava" } },
      { type: "ImageContainer", params: { image: "train04.png", styling: "" } },
      { type: "Tags", params: { tags: ["react", "typescript", "contentful"] } },
      { type: "ImageContainer", params: { image: "train05.png", styling: "" } },
    ],
    id: "6",
  },
  {
    slug: "https://player.vimeo.com/video/716758661?h=b870e802ee&dnt=1&app_id=122963",
    order: [
      { type: "TitleContainer", params: { title: "FISH OF YOU", fonttype: "picnic" } },
      { type: "ImageContainer", params: { image: "fishbones.png", styling: "" } },
      { type: "TitleContainer", params: { title: "TIKTOK FILTER", fonttype: "picnic" } },
      { type: "ImageContainer", params: { image: "fishbones.png", styling: "" } },
      { type: "Tags", params: { tags: ["3D", "Effect house", "tiktok"] } },
    ],
    id: "7",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio - Lina Wang</title>
        <meta name="description" content="Work portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main} id="main">
        {projectList.map((project, i) => (
          <LinkWrapper project={project} key={i} />
        ))}
      </main>

      <footer className={styles.footer}>
        <p>
          All fonts used are from{" "}
          <a href="https://velvetyne.fr/" target="_blank" rel="noreferrer">
            velvetyne
          </a>{" "}
          | Dogs icons by Anya Derevyanko from{" "}
          <a href="https://thenounproject.com/browse/collection-icon/dogs-140344/?p=1" target="_blank" rel="noreferrer">
            Noun Project
          </a>{" "}
          | Train icons by Lluisa Iborra from{" "}
          <a href="https://thenounproject.com/browse/collection-icon/toy-train-40887/?p=1" target="_blank" rel="noreferrer">
            Noun Project
          </a>{" "}
          | Fish icon by DinosoftLab from{" "}
          <a href="https://thenounproject.com/icon/fish-1375938/" target="_blank" rel="noreferrer">
            Noun Project
          </a>
        </p>
      </footer>
    </div>
  );
}
