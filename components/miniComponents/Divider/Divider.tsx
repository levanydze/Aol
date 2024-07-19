import styles from "./Divider.module.css";

export default function Divider() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.thinLine}></div>
      </div>
    </section>
  );
}
