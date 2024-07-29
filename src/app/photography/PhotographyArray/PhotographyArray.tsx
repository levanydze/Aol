import React from "react";
import styles from "./PhotographyArray.module.css";
import { fetchData } from "../DataFetch";
import FramerSlider from "../../../../components/animations/SliderAnimationDynamic/FramerSlider";

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
    <>
      {data.slice(0, arrayNumber).map((project) => (
        <section className="section" key={project.id}>
          <div className="container">
            <div className={styles.mainWrap}>
              <div className={styles.textWrap}>
                <p className="title2">{project.location}</p>
                <h3 className="title8 font1">{project.title}</h3>
              </div>
              <div className={styles.sliderWrapper}>
                <FramerSlider images={project.images} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
