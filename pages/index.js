import Head from "next/head";
import styles from "../styles/Home.module.css";

import Nav from "../components/Nav";
import LinkWrapper from "../components/HomepageLinkWrapper";

const projectList = [
  {
    slug: "svensk-plast-webpage",
    order: [
      { type: "ImageContainer", params: { image: "circular.png", styling: "spin" } },
      { type: "TitleContainer", params: { title: "Svensk plast webpage", fonttype: "gulax" } },
      { type: "ImageContainer", params: { image: "circular.png", styling: "spin" } },
      { type: "Tags", params: { tags: ["wordpress", "javascript"] } },
      { type: "LinkDescription", params: { description: "Development notes: Animated graphical svg elements on scroll" } },
      { type: "ImageContainer", params: { image: "arrow_right.png", styling: "" } },
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
