import Image from "next/image";
import styles from "./VakoLevaniPortfolioHero.module.css";
import imagesJson from "../../../json/images.json";

interface heroProps {
  h1: string;
  h2: string;
  buttonValue: string;
}

export default function Chachaweb({ h1, h2, buttonValue }: heroProps) {
  const { mePngCartoon } = imagesJson;
  return (
    <section className="section header">
      <div className="container ">
        <div className={styles.sectionWrapper}>
          <div className={styles.mainWrapper}>
            <h1 className="title8">{h1}</h1>
            <h2 className={`title2 ${styles.title}`}>{h2}</h2>
            <button className="button button-bold">{buttonValue}</button>
          </div>
          <div>
            <Image
              src={mePngCartoon}
              alt="levani levanidze cartoon"
              width={1000}
              height={1500}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
