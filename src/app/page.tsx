import imagesJson from "../../json/images.json";
import assetsJson from "../../json/assets.json";
import { mainTitle } from "../../controlFolder/control";
import { companyDescription } from "../../controlFolder/control";
import VakoLevaniProtfolioHero from "../../components/Hero/VakoLevaniPortfolioHero/VakoLevaniPortfolioHero";
import VakoLevaniWhatIDo from "../../components/sectionComponents/VakoLevaniWhatIDo/VakoLevaniWhatIDo";
import VakoSayHi from "../../components/sectionComponents/VakoSayHi/VakoSayHi";
import Divider from "../../components/miniComponents/Divider/Divider";
export const metadata = {
  title: `${mainTitle}`,
  description: `${companyDescription}`,
};

export default function Home() {
  const { aboutPage } = imagesJson;
  return (
    <main className="fadeOut">
      <VakoLevaniProtfolioHero
        h1="Hi. I'm Leo"
        h2="I'm a UX/UI designer, Webflow developer, and a best-selling instructor. If you're looking for a capable designer, get in touch."
        buttonValue="See My Work Below"
      />
      <VakoLevaniWhatIDo />
      <Divider />

      <VakoSayHi />
      <Divider />
    </main>
  );
}
