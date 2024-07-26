import React from "react";
import styles from "./page.module.css";
import NestedDetails from "./NestedDetails/NestedDetails";
import VakoSayHi from "../../../../components/sectionComponents/VakoSayHi/VakoSayHi";
import Divider from "../../../../components/miniComponents/Divider/Divider";

// metadata
import { findDataById } from "../DataFetch";
export const generateMetadata = async ({ params }: MenuDetailsPageProps) => {
  try {
    const data = await findDataById(params.arrayId);
    return {
      title: data.title,
      description: data.text1, // Assuming there's a 'description' field
      alternates: {
        canonical: `/projects/${data.title.replace(/\s+/g, "-").toLowerCase()}`, // Clean up title for URL
      },
    };
  } catch (error) {}
};

interface MenuDetailsPageProps {
  params: {
    arrayId: string;
  };
}

export default function ArrayNestedPage({ params }: MenuDetailsPageProps) {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className={`fadeOut ${styles.pageDetailWrapper}`}>
            <div className={styles.lowerDiv}></div>
            <NestedDetails arrayId={params.arrayId} />
          </div>
        </div>
      </section>
      <Divider />
      <VakoSayHi />
    </>
  );
}
