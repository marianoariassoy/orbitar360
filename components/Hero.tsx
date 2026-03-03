"use client";
import { useT } from "@/lib/useT";
import Lan from "./Lan";
import { Forward } from "@/lib/icons";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const data = [
    {
      image: "/images/hero-1.jpg",
    },
    {
      image: "/images/hero-2.jpg",
    },
  ];

  return (
    <section id="hero" className="h-screen w-screen relative" ref={ref}>
      <div className="absolute h-screen w-full z-20 pt-[15vh] pb-[5vh] px-8 flex flex-col items-center justify-between animate-fade-in">
        <div className=" text-center">
          <h1 className="font-bold text-4xl text-center mb-2">
            {t.hero.title}
          </h1>
          <p className="text-lg">{t.hero.description}</p>
        </div>

        <a
          href="https://my.matterport.com/show/?m=Hkvy9cuP7Qp"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white rounded-full px-4 py-2 lg:text-xl font-bold hover:px-6 transition-all cursor-pointer flex items-center gap-x-2 animate-fade-up"
        >
          <span>
            <Forward />
          </span>
          <span>{t.hero.button}</span>
        </a>
      </div>

      <div className="absolute top-1/2 right-4 lg:right-8 -translate-y-1/2 z-30 animate-fade-left">
        <Lan />
      </div>

      <Fade
        autoplay={true}
        duration={4000}
        transitionDuration={500}
        infinite={true}
        pauseOnHover={false}
        arrows={false}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`h-screen w-screen bg-center bg-cover ${inView ? "animate-fade-in" : ""}`}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          ></div>
        ))}
      </Fade>
    </section>
  );
};

export default Hero;
