import Link from "next/link";
import styles from "./NotFoundComponent.module.css";
import PageHeadImage from "../../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";

function NotFoundComponent() {
  const { notFoundPage } = imagesJson;
  return (
    <div>
      <div className={styles.notFound}>
        <h6 className="title5">404</h6>
        <h1 className="title3">
          Sorry, the page you are looking for was not found!
        </h1>
        <Link className="button" href="./">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundComponent;
