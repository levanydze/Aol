import Divider from "../../../components/miniComponents/Divider/Divider";
import VakoSayHi from "../../../components/sectionComponents/VakoSayHi/VakoSayHi";
import PhotographyArray from "./PhotographyArray/PhotographyArray";
import HomePageMain from "../../../components//Hero/vkLeoPhotography/HomePageMain";
import imagesJson from "../../../json/images.json";
import { companyFullName } from "@/controlFolder/control";
import VakoLevaniPortfolioHero from "../../../components/Hero/VakoLevaniPortfolioHero/VakoLevaniPortfolioHero";

export const metadata = {
  title: "Photography",
};

export default function Photography() {
  const { mePngCamera } = imagesJson;
  return (
    <>
      <VakoLevaniPortfolioHero
        image={mePngCamera}
        h1="Explore My Photography"
        h2="I have a passion for mountains and photography. In 2017, I won the Golden Camera award by FEP for my landscape work. As a perfectionist, I ensure every detail is perfect. Building websites with stunning photos suits my dedication to excellence."
        buttonValue="See photos below"
      />
      {/* <HomePageMain
        image="https://github.com/levanydze/SUP/blob/main/VkLeo/photography/Landscape/2-min.jpg?raw=true"
        alt={companyFullName}
        button1Target=""
        button1Value=""
        mainTitle=""
        text=""
      /> */}
      {/* <section className="section"> */}
      {/* <div className="container"> */}
      <div className="fadeOut">
        <PhotographyArray title="ss" span="ss2" arrayNumber={99} />
      </div>
      {/* </div> */}
      {/* // </section> */}
      <Divider />
      <VakoSayHi />
    </>
  );
}
