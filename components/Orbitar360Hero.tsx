"use client";
import { useT } from "@/lib/useT";
import SectionSmall from "./SectionSmall";
import { useInView } from "react-intersection-observer";

const Orbitar360Hero = () => {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className={`opacity-0 ${inView ? "animate-fade-in" : ""}`}
    >
      <SectionSmall>
        <div className="flex justify-center mb-8">
          <img
            src="/assets/logo.svg"
            alt="Logo Orbitar"
            className="w-1/2 lg:w-[250px]"
          />
        </div>
        <h1 className="font-bold text-3xl text-center mb-2">
          {t.orbitar360Hero.title}
        </h1>
        <div
          className={`flex items-center gap-x-6 md:px-20 ${inView ? "animate-fade-up" : ""}`}
        >
          <div className="w-50 flex justify-center">
            <img
              src="/assets/about.svg"
              className="w-full max-w-14"
              alt="Icon About"
            />
          </div>
          <span className="bg-secondary w-1 h-20 rounded-full"></span>
          <p className="whitespace-break-spaces text-sm leading-snug">
            {t.orbitar360Hero.description}
          </p>
        </div>
      </SectionSmall>
    </section>
  );
};

export default Orbitar360Hero;
