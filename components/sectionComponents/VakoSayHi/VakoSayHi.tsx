import styles from "./VakoSayHi.module.css";
import assetsJson from "../../../json/assets.json";
import Link from "next/link";

export default function VakoLevaniWhatIDo() {
  const { chair, postbox, phone } = assetsJson;

  return (
    <section className="section">
      <div className="container">
        <div className={styles.sayHiWrapper}>
          <span className="title9">Say hi to Leo.</span>
          <p className="title3">
            If you need a designer for your project send me an email.
          </p>
          <Link className="button" href="./">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
