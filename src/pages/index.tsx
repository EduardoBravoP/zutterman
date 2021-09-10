import type { NextPage } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from "../styles/pages/index.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <section className={styles.graySection}>
        <div>
          <h1>
            Measuring <br /> everything
          </h1>
          <Image
            alt="measuring tape"
            src="/MeasuringTape1.png"
            width={682}
            height={335}
          />
        </div>
      </section>

      <section className={styles.blueSection}>
        <div>
          <h1>
            We are Leader <br /> in Measure Tapes
          </h1>
          <p>There are 5x the circumference of planet earth in metric tapes.</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
