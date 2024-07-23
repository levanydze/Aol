import Image from "next/image";
import styles from "./Header.module.css";
import { companyLogo } from "../../../controlFolder/control";
import Link from "next/link";

export default function Header3() {
  return (
    <header className="section header absolute ">
      <div className={`container`}>
        <div className={` ${styles.headWrapper}`}>
          <Link href="/">
            <Image width={200} height={50} src={companyLogo} alt="" />
          </Link>
          <div className={styles.navButtonWrap}>
            <nav>
              <ul>
                <li className="font1">Portfolio</li>
                <li className="font1">About</li>
              </ul>
            </nav>
            <button className="button button-bold">Get In Touch</button>
          </div>
        </div>
      </div>
    </header>
  );
}
