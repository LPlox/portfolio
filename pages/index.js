import Head from "next/head";
import styles from "../styles/Home.module.css";

import Nav from "../components/Nav";
import LinkWrapper from "../components/HomepageLinkWrapper";

const projectList = [
  {
    slug: "https://drive.google.com/file/d/1iPHFFlYQxnTFg6wUpLCFh2oicT1C-6xq/view",
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
  },
  {
    slug: "https://travis-ci-globe.netlify.app/",
    order: [
      { type: "TitleContainer", params: { title: "TRAVIS", fonttype: "typefesse" } },
      { type: "ImageContainer", params: { image: "globe.png", styling: "" } },
      { type: "TitleContainer", params: { title: "CASTOR KTH HACKATHON", fonttype: "typefesse" } },
      { type: "Tags", params: { tags: ["3D", "WEBGL"] } },
    ],
  },
  {
    slug: "https://www.svenskplast.se/",
    order: [
      { type: "ImageContainer", params: { image: "circular.png", styling: "spin" } },
      { type: "TitleContainer", params: { title: "Svensk plast webpage", fonttype: "gulax" } },
      { type: "ImageContainer", params: { image: "circular.png", styling: "spin" } },
      { type: "Tags", params: { tags: ["wordpress", "javascript"] } },
      //   { type: "LinkDescription", params: { description: "Development notes: Animated graphical svg elements on scroll" } },
      { type: "ImageContainer", params: { image: "arrow_right.png", styling: "" } },
    ],
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
  },
  {
    slug: "https://player.vimeo.com/video/716758661?h=b870e802ee&dnt=1&app_id=122963",
    order: [
      { type: "TitleContainer", params: { title: "FISH OF YOU", fonttype: "picnic" } },
      { type: "ImageContainer", params: { image: "fish.png", styling: "" } },
      { type: "TitleContainer", params: { title: "TIKTOK FILTER", fonttype: "picnic" } },
      { type: "ImageContainer", params: { image: "fishbones.png", styling: "" } },
      { type: "Tags", params: { tags: ["3D", "Effect house", "tiktok"] } },
    ],
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

      {/* <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
