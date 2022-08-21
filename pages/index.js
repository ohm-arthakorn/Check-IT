import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        {/* <Link href="/create_class">
          <img src="./Img/Image_NK/NK17.jpg" className={styles.image} />
        </Link> */}
        <div>
          <form className={styles.form_ctn}>
            <label for="Name">Name :</label>
            <input type="text" id="name" name="Name" />
            <label for="Lastname">Lastname :</label>
            <input type="text" id="lastname" lastname="lastname" />
            <button type="submit">Send</button>
          </form>
        </div>
        
      </div>
    </div>
  );
}
