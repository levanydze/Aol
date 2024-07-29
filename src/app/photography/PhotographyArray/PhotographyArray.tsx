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
      {data.slice(0, arrayNumber).map((project) => (
        <div className={styles.mainWrap}>
          <div className={styles.textWrap}>
            <p className="title2">{project.location}</p>
            <h3 className="title4 font1">{project.title}</h3>
          </div>
          <div className={styles.sliderWrapper}>
            <AlbumSlider title="" images={project.images} />
          </div>
        </div>
      ))}
    </div>
  );
}
