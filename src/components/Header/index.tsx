import Image from "next/image";
import { useState } from "react";

import styles from "./styles.module.scss";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image
          alt="Zutterman"
          src="/Logo.svg"
          width={262}
          height={70}
          layout="responsive"
        />
      </div>

      <div className={styles.miniLogo}>
        <Image
          alt="Zutterman"
          src="/MiniLogo.svg"
          width={40}
          height={40}
          className={styles.miniLogo}
        />
      </div>

      <div className={styles.links}>
        <a href="#">ABOUT US</a>
        <a href="#">MODELS</a>
        <a href="#">GUARANTEE</a>
      </div>

      <div className={styles.menuButton} onClick={() => setShowMenu(true)}>
        <Image alt="Menu" src="/menu.svg" width={6} height={26} />
      </div>

      {showMenu && (
        <div className={styles.menu}>
          <div className={styles.x}>
            <Image
              alt="Fechar"
              src="/x.svg"
              width={25}
              height={25}
              onClick={() => setShowMenu(false)}
              priority
            />
          </div>

          <div>
            <a href="#">ABOUT US</a>
            <a href="#">MODELS</a>
            <a href="#">GUARANTEE</a>
          </div>
        </div>
      )}
    </header>
  );
}
