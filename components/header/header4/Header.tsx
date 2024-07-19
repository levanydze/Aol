import Image from "next/image";
import styles from "./Header.module.css";
import { companyLogo } from "../../../controlFolder/control";

export default function Header3() {
  return (
    <header className="section header ">
      <div className={`container`}>
        <div className={` ${styles.headWrapper}`}>
          <Image width={200} height={50} src={companyLogo} alt="" />
          <div className={styles.navButtonWrap}>
            <nav>
              <ul>
                <li className="font1">Portfolio</li>
                <li className="font1">About</li>
              </ul>
            </nav>
            <button className="button button-bold">Gsset In Touch</button>
          </div>
        </div>
      </div>
    </header>
  );
}
