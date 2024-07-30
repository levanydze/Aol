import Image from "next/image";
import styles from "./VakoLevaniPortfolioHero.module.css";

import ScrollingButton from "../../../components/miniComponents/scrollingButton/ScrollingButton";

interface heroProps {
  h1: string;
  h2: string;
  buttonValue: string;
  image: string;
}

export default function Chachaweb({ image, h1, h2, buttonValue }: heroProps) {
  return (
    <section className="section noPadding section-pink">
      <div className="container ">
        <div className={styles.wrapper}>
          <div className={styles.sectionWrapper}>
            <div className={styles.mainWrapper}>
              <h1 className="title9 font2">{h1}</h1>
              <h2 className={`title2 ${styles.title}`}>{h2}</h2>
              <ScrollingButton
                value={buttonValue}
                viewHeight={true}
                className="button"
                button={true}
                pixels={20}
              />
            </div>
            <div>
              <Image
                src={image}
                alt="levani levanidze cartoon"
                width={1000}
                height={1500}
                priority
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
