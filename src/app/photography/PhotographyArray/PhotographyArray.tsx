import React from "react";
import styles from "./PhotographyArray.module.css";
import { fetchData } from "../DataFetch";
import FramerSlider from "../../../../components/animations/SliderAnimationDynamic/FramerSlider";
import AlbumSlider from "../../../../components/animations/AlbumSlider/AlbumSlider";

export interface ProjectProps {
  id: string;
  text: string;
  link: string;
  title: string;
  mainImage: string;
  images: string[];
  alt: string;
  description: string;
  [key: string]: any;
}

interface ItemsArrayProps {
  title: string;
  span: string;
  arrayNumber: number;
}

export default async function PhotographyArray({
  title,
  span,
  arrayNumber,
}: ItemsArrayProps) {
  const data: ProjectProps[] = await fetchData();

  return (
    <div className={styles.wrapper}>
      {data.slice(0, arrayNumber).map((project, index) => (
        <div className={styles.mainWrap} key={index}>
          <div className={styles.textWrap}>
            <h3 className="title4 font1">{project.title}</h3>
            <span className="text1">© Levani Levanidze 2024</span>
          </div>
          <div className={styles.sliderWrapper}>
            <AlbumSlider title="" images={project.images} />
          </div>
        </div>
      ))}
    </div>
  );
}
