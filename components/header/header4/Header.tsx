"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import { companyFullName, companyLogo } from "../../../controlFolder/control";
import Link from "next/link";
import ScrollingButton from "../../miniComponents/scrollingButton/ScrollingButton";
import { usePathname } from "next/navigation";

export default function Header3() {
  const pathname = usePathname();
  return (
    <header className="section header absolute ">
      <div className={`container`}>
        <div className={` ${styles.headWrapper}`}>
          <Link href="/">
            <Image
              width={300}
              height={100}
              src={companyLogo}
              alt={companyFullName}
            />
          </Link>
          <div className={styles.navButtonWrap}>
            <nav>
              <ul>
                {pathname === "/" ? (
                  <>
                    <div className={styles.desctopPortfolio}>
                      <ScrollingButton
                        value="Portfolio"
                        viewHeight={true}
                        className="font1"
                        button={false}
                      />
                    </div>
                    <div className={styles.mobilePortfolio}>
                      <ScrollingButton
                        value="Portfolio"
                        viewHeight={true}
                        pixels={280}
                        className="font1"
                        button={false}
                      />
                    </div>
                  </>
                ) : (
                  <li className="font1">
                    <Link href="./">Portfolio</Link>
                  </li>
                )}
                <li className="font1">
                  <Link href="/photography">Photography</Link>
                </li>
              </ul>
            </nav>
            {/* <button className="button button-bold">Get In Touch</button> */}
            {pathname === "/" ||
            pathname.startsWith("/projects") ||
            pathname === "/about" ||
            pathname === "/photography" ||
            pathname === "/employer" ? (
              <ScrollingButton
                value="Get In Touch"
                scrollToEnd={true}
                bottomOffset={170}
                className="button button-bold"
                button={true}
              />
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
