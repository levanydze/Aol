import React from "react";
import styles from "./ItemsServicesArray.module.css";
import { fetchData } from "../DataFetch";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

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

export default async function ItemsServicesArray({
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
                <p className="title2">{project.text}</p>
                <h3 className="title5">{project.title}</h3>
                <Link className="button" href={`/services/${project.id}`}>
                  See This Project
                  <HiOutlineArrowNarrowRight />
                </Link>
              </div>
              <div>
                <Link href={`/services/${project.id}`}>
                  <Image
                    src={project.image}
                    width={1500}
                    height={2000}
                    alt={project.title}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
