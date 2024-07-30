import Image from "next/image";
import React from "react";
import styles from "./HomePageMain.module.css";

interface HomePageMainProps {
  image: string;
  alt: string;
  button1Target: string;
  button1Value: string;
  mainTitle: string;
  text: string;
}

export default function MainImage({
  image,
  alt,
  button1Target,
  button1Value,
  mainTitle,
  text,
}: HomePageMainProps) {
  return (
    <div className={` ${styles.mainWrapper} `}>
      <div className="section noPadding header">
        <div className="container">
          <div className={styles.relative}>
            <div className={styles.textWrapper}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                quo odit officiis mollitia, possimus sunt. Aspernatur sed ipsam
                sunt reprehenderit nostrum rem harum sequi rerum! Pariatur
                consequuntur eius doloremque maxime.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                quo odit officiis mollitia, possimus sunt. Aspernatur sed ipsam
                sunt reprehenderit nostrum rem harum sequi rerum! Pariatur
                consequuntur eius doloremque maxime.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        className={styles.mainImage}
        src={image}
        alt={alt}
        width={3000}
        height={2000}
        priority
      />
    </div>
  );
}
