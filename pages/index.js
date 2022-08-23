import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      {/* Import font here! */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* Introduction about websites */}
      <div className={styles.container}>
        <div className={styles.intro_ctn}>
          <div className={styles.title}>
            <h1 className={styles.font}>Introduction</h1>
          </div>
          <div className={styles.subtitle}>
            <h2 className={styles.font}>What is Check-IT ?</h2>
          </div>
          <div>
            <p className={styles.font}>
              Check-IT is a website for recording attendance of students of
              Patumkongka School. This website was created by students of
              Patumkongka School to solve environmental problems. due to Using a
              large amount of paper from the use of paper for check names.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
