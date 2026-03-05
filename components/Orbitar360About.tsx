"use client";
import { useT } from "@/lib/useT";
import SectionLarge from "./SectionLarge";
import Points from "./Points";
import { useInView } from "react-intersection-observer";

const Orbigar360About = () => {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <section
      style={{
        backgroundImage: "url(/images/bg-orbitar.jpg)",
        backgroundSize: "cover",
      }}
      ref={ref}
      className={`opacity-0 bg-cover bg-center bg-no-repeat ${inView ? "animate-fade-in" : ""}`}
    >
      <SectionLarge>
        <div
          className={`w-full rounded-3xl bg-black/85  p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative opacity-0 ${inView ? "animate-scale-in" : ""}`}
        >
          <div className="absolute right-8 top-8">
            <Points size="lg" />
          </div>
          <div className="w-full overflow-hidden flex flex-col gap-y-6 mt-10 lg:mt-0">
            <div
              className="w-full overflow-hidden aspect-square rounded-2xl p-4 relative"
              style={{
                backgroundImage: "url(/images/orbitar-img.jpg)",
                backgroundSize: "cover",
              }}
            >
              <div className="top-0 border-2 rounded-2xl border-white h-full w-full z-10"></div>
            </div>
            <div className="flex justify-center items-center gap-x-4">
              <span className="font-medium">Tecnología</span>
              <span>
                <img
                  src="/assets/matterport.svg"
                  alt="Logo Matterport"
                  className="w-34"
                />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 lg:not-even:pt-10 text-center lg:text-left">
            <h2 className="font-bold text-3xl">{t.orbitar360About.title}</h2>
            <p className="whitespace-break-spaces text-sm">
              {t.orbitar360About.description}
            </p>
            <div className="flex items-center gap-x-4">
              <span>
                <img
                  src="/assets/pin.svg"
                  alt="Logo Location"
                  className="w-8"
                />
              </span>
              <p className="text-sm text-left">{t.orbitar360About.address}</p>
            </div>
          </div>
        </div>
      </SectionLarge>
    </section>
  );
};

export default Orbigar360About;
