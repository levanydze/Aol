import styles from "./NestedDetails.module.css";
//mapping and routes
import { findDataById } from "../../DataFetch";
import { ProjectProps } from "../../ItemsServicesArray/ItemsServicesArray";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface projectProps {
  arrayId: string;
}

export default async function NestedDetails({ arrayId }: projectProps) {
  const data: ProjectProps = await findDataById(arrayId);

  return (
    <>
      <div className={styles.mainWrapper}>
        <h1 className="title5">{data.location}</h1>
        <div className={styles.textWrapper}>
          <div>
            <h3 className="title3">Project Overview</h3>
            <p className="text1">{data.text1}</p>
          </div>
          <div>
            <h3 className="title3">Innovative Solutions</h3>
            <p className="text1">{data.text2}</p>
          </div>
        </div>
        <div className={styles.liveButtonWrapper}>
          {data.link && (
            <Link
              className={`button ${styles.liveButton}`}
              href={data.link}
              target="_blank"
            >
              Preview in browser
              <HiOutlineArrowNarrowRight />
            </Link>
          )}
        </div>

        <div className={styles.imageWrapper}>
          <Image
            width={1000}
            height={3000}
            alt={data.title}
            src={data.wholeImage}
            title={data.title}
            priority
          />
        </div>
      </div>
    </>
  );
}
