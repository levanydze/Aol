import styles from "./NestedDetails.module.css";
import Link from "next/link";
// import AlbumSlider from "../../../../../../components/Sliders/AlbumSlider/AlbumSlider";

//mapping and routes
import { findDataById } from "../../DataFetch";
import { ProjectProps } from "../../ItemsServicesArray/ItemsServicesArray";
import Image from "next/image";
interface MenuDetailsProps {
  arrayId: string;
}

export default async function NestedDetails({ arrayId }: MenuDetailsProps) {
  const data: ProjectProps = await findDataById(arrayId);

  return (
    <>
      <div className={styles.mainWrapper}>
        <h1 className="title9">{data.location}</h1>
        <div className={styles.textWrapper}>
          {/* <h2 className="title3">{data.title}</h2> */}
          <p className="text1">{data.text1}</p>
          <p className="text1">{data.text2}</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            width={1000}
            height={3000}
            alt={data.title}
            src={data.wholeImage}
            title={data.title}
          />
        </div>
      </div>
    </>
  );
}
