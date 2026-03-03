"use client";
import { useT } from "@/lib/useT";
import MenuServices from "./MenuServices";
import { Forward } from "@/lib/icons";
import { useInView } from "react-intersection-observer";
import { ThreeD, Medidas, Recorrer, Planta } from "@/lib/icons";

const Orbitar360Services = () => {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const data = [
    {
      title: t.Orbitar360Services.option1,
      icon: ThreeD,
    },
    {
      title: t.Orbitar360Services.option2,
      icon: Medidas,
    },
    {
      title: t.Orbitar360Services.option3,
      icon: Recorrer,
    },
    {
      title: t.Orbitar360Services.option4,
      icon: Planta,
    },
  ];

  return (
    <section
      className="flex flex-col lg:flex-row gap-x-12 gap-y-8 lg:h-[80vh]"
      ref={ref}
    >
      <div
        className={`w-full lg:w-2/5 pt-20 pb-8 px-4 flex items-center justify-end relative ${inView ? "animate-fade-right" : ""}`}
      >
        <div className="w-full max-w-md flex flex-col gap-y-8">
          <MenuServices data={data} />

          <h2 className="font-bold text-3xl mb-4">
            {t.Orbitar360Services.title}
          </h2>
          <nav className="flex flex-col gap-y-4">
            {data.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex gap-x-4 items-center">
                  <div className="w-12 flex justify-center">
                    <Icon className="h-8 w-auto" />
                  </div>
                  <div className="w-0.5 h-8 bg-primary"></div>
                  <div className="font-medium">{item.title}</div>
                </div>
              );
            })}
          </nav>
          <div className="lg:absolute bottom-8 right-8 mt-8">
            <a
              href="https://my.matterport.com/show/?m=Hkvy9cuP7Qp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold flex items-center gap-x-3 hover:gap-x-2 transition-all hover:text-primary"
            >
              <span>
                <Forward />
              </span>
              <span>{t.Orbitar360Services.button}</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className={`w-full lg:w-3/5 bg-no-repeat relative bg-cover h-[80vh] lg:h-auto ${inView ? "animate-fade-left" : ""}`}
        style={{
          backgroundImage: `url(/images/orbitar-services-1.jpg)`,
        }}
      >
        <div className="absolute bottom-8 left-8">
          <MenuServices data={data} />
        </div>
      </div>
    </section>
  );
};

export default Orbitar360Services;
