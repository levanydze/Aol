import Divider from "../../../components/miniComponents/Divider/Divider";
import VakoSayHi from "../../../components/sectionComponents/VakoSayHi/VakoSayHi";
import PhotographyArray from "./PhotographyArray/PhotographyArray";

export const metadata = {
  title: "Photography",
};

export default function Photography() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="fadeOut">
            <PhotographyArray title="ss" span="ss2" arrayNumber={99} />
          </div>
        </div>
      </section>
      <Divider />
      <VakoSayHi />
    </>
  );
}
