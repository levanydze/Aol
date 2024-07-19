import styles from "./LowerFoot.module.css";
import { companyFullName } from "../../../controlFolder/control";

export default function LowerFoot() {
  return (
    <div className="container2">
      <section>
        <div className={styles.lowerWrap}>
          <p>© Copyright - Levani Levanidze</p>
        </div>
      </section>
    </div>
  );
}
