"use client";
import { useT } from "@/lib/useT";
import { useLanguage } from "@/context/LanguageContext";
import SectionLarge from "./SectionLarge";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Axios from "axios";
import Loader from "@/components/Loader";

interface Data {
  title_es: string;
  title_en: string;
  title_fr: string;
  title_pr: string;
  text_es: string;
  text_en: string;
  text_fr: string;
  text_pr: string;
}

const Orbitar360Qr = () => {
  const { locale } = useLanguage();
  const api = process.env.NEXT_PUBLIC_API_URL + "/textos";
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(api);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [api]);

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
              {loading ? (
                <div>
                  <Loader />
                </div>
              ) : (
                <>
                  <h2 className="font-bold text-3xl">
                    {locale === "es" && data[2].title_es}
                    {locale === "en" && data[2].title_en}
                    {locale === "fr" && data[2].title_fr}
                    {locale === "pt" && data[2].title_pr}
                  </h2>
                  <p className="whitespace-break-spaces text-sm">
                    {locale === "es" && data[2].text_es}
                    {locale === "en" && data[2].text_en}
                    {locale === "fr" && data[2].text_fr}
                    {locale === "pt" && data[2].text_pr}
                  </p>
                </>
              )}
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
