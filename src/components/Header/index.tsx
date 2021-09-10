import Image from "next/image";

import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.image}>
        <Image
          alt="Zutterman"
          src="/Logo.svg"
          width={262}
          height={70}
          layout="responsive"
        />
      </div>

      <div className={styles.links}>
        <a href="#">ABOUT US</a>
        <a href="#">MODELS</a>
        <a href="#">GUARANTEE</a>
      </div>
    </header>
  );
}
