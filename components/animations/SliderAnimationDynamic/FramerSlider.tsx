"use client";

import { Example } from "./Example";
import styles from "./FramerSlider.module.css";

export interface sliderProps {
  images: string[];
}

function FramerSlider({ images }: sliderProps) {
  return (
    <div className={styles.exampleContainer}>
      <Example images={images} />
    </div>
  );
}

export default FramerSlider;
