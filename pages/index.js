import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Nav from "../components/Nav";
import LinkWrapper from "../components/HomepageLinkWrapper";

const projectList = [{ fontIndex: "0", order: { ImageContainer: "circular.png", TitleContainer: "Svensk plast webpage" } }];

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
