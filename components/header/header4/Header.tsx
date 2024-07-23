import Image from "next/image";
import styles from "./Header.module.css";
import { companyLogo } from "../../../controlFolder/control";
import Link from "next/link";
import ScrollingButton from "../../miniComponents/scrollingButton/ScrollingButton";

export default function Header3() {
  return (
    <header className="section noPadding absolute ">
      <div className={`container`}>
        <div className={` ${styles.headWrapper}`}>
          <Link href="/">
            <Image width={200} height={50} src={companyLogo} alt="" />
          </Link>
          <div className={styles.navButtonWrap}>
            <nav>
              <ul>
                <ScrollingButton
                  value="Portfolio"
                  pixels={1700}
                  direction="down"
                  bottomOffset={0}
                  className="font1"
                  button={false}
                />
                <li className="font1">About</li>
              </ul>
            </nav>
            {/* <button className="button button-bold">Get In Touch</button> */}
            <ScrollingButton
              value="Get In Touch"
              pixels={10000}
              direction="down"
              bottomOffset={150}
              className="button button-bold"
              button={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
