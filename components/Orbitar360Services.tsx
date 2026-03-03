"use client";
import { useT } from "@/lib/useT";
// import MenuServices from "./MenuServices";
import { Forward } from "@/lib/icons";
import { useInView } from "react-intersection-observer";

const Orbitar360Services = () => {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const data = [
    {
      title: t.Orbitar360Services.option1,
      icon: "3d.svg",
    },
    {
      title: t.Orbitar360Services.option2,
      icon: "planta.svg",
    },
    {
      title: t.Orbitar360Services.option3,
      icon: "recorrer.svg",
    },
    {
      title: t.Orbitar360Services.option4,
      icon: "medidas.svg",
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
          {/* <div className="mb-8">
            <MenuServices />
          </div> */}
          <h2 className="font-bold text-3xl mb-4">
            {t.Orbitar360Services.title}
          </h2>
          <nav className="flex flex-col gap-y-4">
            {data.map((item, index) => (
              <div key={index} className="flex gap-x-4 items-center">
                <div className="w-7 flex justify-center">
                  <img
                    src={`/assets/${item.icon}`}
                    alt="Icon"
                    className="h-6"
                  />
                </div>
                <div className="w-0.5 h-8 bg-primary"></div>
                <div className="text-semibold">{item.title}</div>
              </div>
            ))}
          </nav>
          <div className="lg:absolute bottom-8 right-8 mt-8">
            <button className="font-bold flex items-center gap-x-2">
              <span>
                <Forward />
              </span>
              <span>{t.Orbitar360Services.button}</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full lg:w-3/5 bg-no-repeat relative h-[80vh] lg:h-auto ${inView ? "animate-fade-left" : ""}`}
      >
        <iframe
          src="https://my.matterport.com/show/?m=Hkvy9cuP7Qp"
          title="Orbitar360"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Orbitar360Services;
