import styles from "../styles/nuttha.module.css";
import Head from "next/head";

export default function nuttha() {
  return (
    // Biggest Container
    <div className={styles.container}>
      <Head>
        <title>Nuttha Kongpreecha</title>
      </Head>
      <h1>Nuttha Kongpreecha</h1>

      <div className={styles.sub_container}>
        <div className={styles.item_container}>
          <h2>Nuttha Kongpreecha</h2>
          <img src='./Img/Image_NK/NK18.jpg' alt="myLove" className={styles.image}/>
        </div>
        <div className={styles.item_container}>
          <h2>Nuttha Kongpreecha</h2>
            <img src='./Img/Image_NK/NK17.jpg' alt="The person, who married with me" className={styles.image}/>
        </div>
        <div className={styles.item_container}>
          <h2>Nuttha Kongpreecha</h2>
          <img src='./Img/Image_NK/NK01.jpg' alt="I love her so much" className={styles.image}/>
        </div>
        <div className={styles.item_container}>
          <h2>Nuttha Kongpreecha</h2>
          <img src='./Img/Image_NK/NK03.jpg' alt="I love her so much" className={styles.image}/>
        </div>
      </div>
    </div>
  );
}
