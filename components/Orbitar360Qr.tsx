"use client";
import { useT } from "@/lib/useT";
import SectionLarge from "./SectionLarge";
import { useInView } from "react-intersection-observer";

const Orbitar360Qr = () => {
  const t = useT();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <section className="bg-primary" ref={ref}>
      <SectionLarge>
        <div
          className={`border-2 border-white rounded-3xl overflow-hidden opacity-0 ${inView ? "animate-fade-right" : ""}`}
        >
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-3/5 p-6 lg:p-12 flex flex-col justify-center gap-y-4">
              <h2 className="font-bold text-3xl">{t.Orbitar360Qr.title}</h2>
              <p className="whitespace-break-spaces text-sm">
                {t.Orbitar360Qr.description}
              </p>
            </div>
            <div className="w-1/10 items-center justify-center hidden lg:flex">
              <img
                src="/assets/forward-2.svg"
                alt="QR Code"
                className="h-14 animate-float "
              />
            </div>
            <div className="lg:w-3/10 relative aspect-square p-4 pt-0 lg:p-6">
              <img
                src="/images/orbitar-qr.jpg"
                alt="Orbitar 360 QR"
                className=" inset-0 w-full h-full object-cover rounded-t-3xl rounded-b-3xl"
              />
            </div>
          </div>
        </div>
      </SectionLarge>
    </section>
  );
};

export default Orbitar360Qr;
