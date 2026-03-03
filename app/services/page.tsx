import Packs from "./Packs";
import Description from "./Description";
import SectionLarge from "@/components/SectionLarge";

const Services = () => {
  return (
    <section>
      <SectionLarge>
        <Packs />
        <Description />
      </SectionLarge>
      <div className="w-full px-4 md:px-8 lg:px-14 pt-12">
        <div className="border-t border-white"></div>
      </div>
    </section>
  );
};

export default Services;
