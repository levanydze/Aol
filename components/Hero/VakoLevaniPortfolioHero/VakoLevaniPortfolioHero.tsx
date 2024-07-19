import styles from "./VakoLevaniPortfolioHero.module.css";

interface heroProps {
  h1: string;
  h2: string;
  buttonValue: string;
}

export default function Chachaweb({ h1, h2, buttonValue }: heroProps) {
  return (
    <section className="section header">
      <div className="container ">
        <div className={styles.mainWrapper}>
          <h1 className="title8">{h1}</h1>
          <h2 className={`title2 ${styles.title}`}>{h2}</h2>
          <button className="button button-bold">{buttonValue}</button>
        </div>
      </div>
    </section>
  );
}
