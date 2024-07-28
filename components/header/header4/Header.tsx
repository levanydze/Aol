"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import { companyLogo } from "../../../controlFolder/control";
import Link from "next/link";
import ScrollingButton from "../../miniComponents/scrollingButton/ScrollingButton";
import { usePathname } from "next/navigation";

export default function Header3() {
  const pathname = usePathname();
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
                {pathname === "/" ? (
                  <ScrollingButton
                    value="Portfolio"
                    viewHeight={true}
                    className="font1"
                    button={false}
                  />
                ) : (
                  <li className="font1">
                    <Link href="./">Portfolio</Link>
                  </li>
                )}
                <li className="font1">
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </nav>
            {/* <button className="button button-bold">Get In Touch</button> */}
            {pathname === "/" ||
            pathname.startsWith("/projects") ||
            pathname === "/about" ||
            pathname === "/employer" ? (
              <ScrollingButton
                value="Get In Touch"
                scrollToEnd={true}
                bottomOffset={200}
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
