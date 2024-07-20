import { websiteProjectsProps, websiteProjects } from "./websiteData";
import styles from "./ProjectsMap.module.css";
import Link from "next/link";

export default function ProjectsMap() {
  return (
    <>
      {websiteProjects.map((project: websiteProjectsProps) => (
        <section className="section" key={project.id}>
          <div className="container">
            <div className={styles.mainWrap}>
              <div className={styles.textWrap}>
                <p className="title3">{project.text}</p>
                <h3 className="title8">{project.title}</h3>
                <Link className="button" href={`/${project.id}`}>
                  See This Project
                </Link>
              </div>
              <div>
                <img
                  src={project.image}
                  width={100}
                  height={100}
                  alt={project.title}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
