import Divider from "../../../components/miniComponents/Divider/Divider";
import VakoSayHi from "../../../components/sectionComponents/VakoSayHi/VakoSayHi";
import PhotographyArray from "./PhotographyArray/PhotographyArray";
import imagesJson from "../../../json/images.json";
import { companyFullName } from "@/controlFolder/control";
import VakoLevaniPortfolioHero from "../../../components/Hero/VakoLevaniPortfolioHero/VakoLevaniPortfolioHero";
import VakoLevaniWhatIDo from "../../../components/sectionComponents/VakoLevaniWhatIDo/VakoLevaniWhatIDo";

export const metadata = {
  title: "Photography",
};

export default function Photography() {
  const { mePngCamera } = imagesJson;
  return (
    <div className="fadeOut">
      <VakoLevaniPortfolioHero
        image={mePngCamera}
        h1="Explore My Photography"
        h2="I have a passion for mountains and photography. In 2017, I won the Golden Camera award by FEP for my landscape work. As a perfectionist, I ensure every detail is perfect. Building websites with stunning photos suits my dedication to excellence."
        buttonValue="See Photos B2elow"
      />
      <PhotographyArray title="ss" span="ss2" arrayNumber={99} />
      <VakoLevaniWhatIDo />
      <Divider />
      <VakoSayHi />
    </div>
  );
}
