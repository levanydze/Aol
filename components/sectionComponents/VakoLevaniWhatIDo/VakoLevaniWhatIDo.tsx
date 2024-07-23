import styles from "./VakoLevaniWhatIDo.module.css";
import assetsJson from "../../../json/assets.json";

export default function VakoLevaniWhatIDo() {
  const { chair, postbox, phone } = assetsJson;

  // Data array representing the content of each section
  const sections = [
    {
      image: chair,
      subtitle: "Design",
      description:
        "Be it website or mobile app design, my clients get the product that has the best combination of outstanding user experience and visual aesthetics.",
    },
    {
      image: postbox,
      subtitle: "Website Development",
      description:
        "By designing in Webflow I am able to deliver a fully responsive website with a clean, semantic code. This lets my clients cut huge costs on development. Read more about Webflow here.",
    },
    {
      image: phone,
      subtitle: "Landing Pages",
      description:
        "When it comes to landing pages, I deliver an all-inclusive package. I design, build and host your page for free. You'll get a responsive page optimized for conversions.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className={styles.whatIDoWrapper}>
          <div className={styles.h3}>
            <h3 className={`title9 ${styles.whatI}`}> What I</h3>
            <h3 className={`title9 ${styles.do}`}> do.</h3>
          </div>
          <div className={styles.sections}>
            {sections.map((section, index) => (
              <div key={index}>
                <img src={section.image} width={100} height={100} alt="" />
                <h4 className="title3">{section.subtitle}</h4>
                <p className="title2">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
