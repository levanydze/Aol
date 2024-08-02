import styles from "./VakoLevaniWhatIDo.module.css";
import assetsJson from "../../../json/assets.json";
import Link from "next/link";

export default function VakoLevaniWhatIDo() {
  const { designIcon2, developmentIcon, cameraIcon2 } = assetsJson;

  // Data array representing the content of each section
  const sections = [
    {
      image: designIcon2,
      subtitle: "Design",
      description:
        "I create modern, stylish websites that look great and are easy to use on any device. I use a strategy that ensures I understand exactly what you want, so the final design meets your expectations.",
      link: "",
      linkText: "",
    },
    {
      image: developmentIcon,
      subtitle: "Website Development",
      description:
        "Using Webflow or Next.js, I create fully responsive websites that work perfectly on any device, including mobile phones. My approach ensures your website is clean, fast, and provides a great user experience for all visitors.",
      link: "",
      linkText: "",
    },
    {
      image: cameraIcon2,
      subtitle: "Photography",
      description:
        "As a highly qualified photographer, I create images that speak for your business, improving your website to be more custom and trustworthy. See more at my ",
      link: "https://artoflevanidze.com",
      linkText: "photography website.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className={styles.whatIDoWrapper}>
          <div className={styles.h3}>
            <h3 className={`title9 font2 ${styles.whatI}`}> What I</h3>
            <h3 className={`title9 font2 ${styles.do}`}> do.</h3>
          </div>
          <div className={styles.sections}>
            {sections.map((section, index) => (
              <div key={index}>
                <img src={section.image} width={100} height={100} alt="" />
                <h4 className="title4">{section.subtitle}</h4>
                <p className="title2">
                  {section.description}
                  {section.link ? (
                    <Link target="_blank" href={section.link}>
                      {section.linkText}
                    </Link>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
