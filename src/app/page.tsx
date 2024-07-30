import { mainTitle } from "../../controlFolder/control";
import { companyDescription } from "../../controlFolder/control";
import VakoLevaniProtfolioHero from "../../components/Hero/VakoLevaniPortfolioHero/VakoLevaniPortfolioHero";
import VakoLevaniWhatIDo from "../../components/sectionComponents/VakoLevaniWhatIDo/VakoLevaniWhatIDo";
import VakoSayHi from "../../components/sectionComponents/VakoSayHi/VakoSayHi";
import Divider from "../../components/miniComponents/Divider/Divider";
import imagesJson from "../../json/images.json";

export const metadata = {
  title: `${mainTitle}`,
  description: `${companyDescription}`,
};

import ItemsServicesArray from "./projects/ItemsServicesArray/ItemsServicesArray";

export default function Home() {
  const { mePngCartoon } = imagesJson;

  return (
    <main className="fadeOut">
      <VakoLevaniProtfolioHero
        image={mePngCartoon}
        h1="Hi. I'm Levani."
        h2="I'm a UX/UI designer, Webflow/NextJs developer and professional photographer. I create visually stunning, user-friendly designs and responsive websites, complete with memorable photographs."
        buttonValue="See My Work Below"
      />
      <ItemsServicesArray
        title="Our Services"
        span="Services You Can Order"
        arrayNumber={99}
      />
      <VakoLevaniWhatIDo />
      <Divider />
      <VakoSayHi />
    </main>
  );
}
