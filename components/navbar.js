import Link from "next/link";
import styles from "../styles/navbar.module.css";
import Head from "next/head";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        />
        <title>Check-It</title>
      </Head>
      {/* Logo Linking Home */}
      <Link href="/">
        <img src="./Img/LG01.png" alt="logo" className={styles.logo} />
      </Link>

      {/* Quote on Navbar */}
      <span className={styles.text}>
        <h4 className={styles.font}>Check your class.</h4>
        <h5 className={styles.font}>Check-IT</h5>
      </span>

      {/* navigation on create class */}
      <div className={styles.button_ctn}>
        <Link href="/create_class">
          <span>
            <button type="button" className={styles.button}>
              Create Class Pages
            </button>
          </span>
        </Link>
        <Link href="/Made_by">
          <span>
            <button type="button" className={styles.button_2}>
              Made By
            </button>
          </span>
        </Link>
        <Link href="/test">
          <span>
            <button type="button" className={styles.button_2}>
              Testing
            </button>
          </span>
        </Link>
      </div>
    </div>
  );
}
