import Image from "next/image";

import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <h3>Follow Us</h3>
          <div className={styles.socials}>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer">
              <Image alt="Youtube" src="/youtube.svg" width={43} height={43} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Facebook"
                src="/facebook.svg"
                width={43}
                height={43}
              />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <Image alt="Twitter" src="/twitter.svg" width={43} height={43} />
            </a>
          </div>
        </div>

        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>2490 Leisure Lane San Luis Obispo California</p>
        </div>
      </div>
    </footer>
  );
}
