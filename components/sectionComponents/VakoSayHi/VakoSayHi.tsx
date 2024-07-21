import styles from "./VakoSayHi.module.css";
import assetsJson from "../../../json/assets.json";
import Link from "next/link";
import ContactForm from "../../../components/contactForms/CotactForm3/ContactForm";

export default function VakoLevaniWhatIDo() {
  const { chair, postbox, phone } = assetsJson;

  return (
    <section className="section">
      <div className="container">
        <div className={styles.sayHiWrapper}>
          <div className={styles.sayHiLeo}>
            <span className={`title9 font1 ${styles.sayHi}`}>Say hi to </span>
            <span className={`title9 ${styles.leo}`}>Leo.</span>
          </div>
          <p className="title3">
            If you need a designer for your project send me an email.
          </p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
