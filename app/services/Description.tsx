"use client";
import { useT } from "@/lib/useT";

const Description = () => {
  const t = useT();

  const data = [
    {
      icon: "tour.svg",
      title: t.services.item1,
    },
    {
      icon: "play.svg",
      title: t.services.item2,
    },
    {
      icon: "foto.svg",
      title: t.services.item3,
    },
  ];
  return (
    <section>
      <h1 className="font-bold text-3xl lg:text-4xl text-center pt-12 pb-20 animate-fade-in">
        {t.services.title2}
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-y-12 gap-x-20">
        {data.map((item, index) => (
          <article
            className={`flex flex-col items-center justify-center gap-y-6 w-full max-w-40 lg:max-w-30 animate-scale-in ${index === 0 ? "delay-300" : index === 1 ? "delay-200" : "delay-100"}`}
            key={index}
          >
            <div>
              <img
                src={`/assets/${item.icon}`}
                alt="Icon"
                className="h-12 max-w-12 lg:w-14 l:gh-14"
              />
            </div>
            <div className="w-12 bg-secondary h-0.5"></div>
            <p className="font-semibold text-center text-sm lg:text-base">
              {item.title}
            </p>
          </article>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-30">
        <img src="/assets/pin.svg" alt="Pin Icon" className="w-6" />
        <p className="text-sm text-center lg:text-left">{t.services.address}</p>
      </div>
    </section>
  );
};

export default Description;
