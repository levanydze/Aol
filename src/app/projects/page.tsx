import VakoLevaniWhatIDo from "../../../components/sectionComponents/VakoLevaniWhatIDo/VakoLevaniWhatIDo";
import ItemsServicesArray from "./ItemsServicesArray/ItemsServicesArray";
export const metadata = {
  title: "Services",
};

export default function ProjectsPage() {
  return (
    <div className="fadeOut">
      <ItemsServicesArray
        title="Our Services"
        span="Services You Can Order"
        arrayNumber={99}
      />
    </div>
  );
}
