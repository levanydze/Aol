import Divider from "../../../components/miniComponents/Divider/Divider";
import VakoSayHi from "../../../components/sectionComponents/VakoSayHi/VakoSayHi";

export const metadata = {
  title: "Hire me",
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="fadeOut"></div>
        </div>
      </section>
      <Divider />
      <VakoSayHi />
    </>
  );
}
