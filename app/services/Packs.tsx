"use client";
import { useT } from "@/lib/useT";
import { useLanguage } from "@/context/LanguageContext";
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
  price: string;
  subtitle_es: string;
  subtitle_en: string;
  subtitle_fr: string;
  subtitle_pr: string;
}

const Packs = () => {
  const t = useT();
  const { locale } = useLanguage();
  const api = process.env.NEXT_PUBLIC_API_URL + "/servicios";
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

  return (
    <section>
      <h1 className="font-bold text-3xl lg:text-4xl text-center my-20 animate-fade-in">
        {t.services.title}
      </h1>
      {loading ? (
        <div className="mt-8 px-12">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {data.map((item, index) => (
            <article
              key={index}
              className={`flex flex-col gap-y-4 border-2 border-white rounded-3xl overflow-hidden animate-fade-up ${index === 0 ? "delay-100" : index === 1 ? "delay-200" : "delay-300"}`}
            >
              <div
                className={`flex items-center justify-between px-4 lg:px-6 py-4 ${index === 2 ? "bg-secondary" : "bg-primary"}`}
              >
                <h3 className="font-semibold text-lg lg:text-2xl">
                  {locale === "es" && item.title_es}
                  {locale === "en" && item.title_en}
                  {locale === "fr" && item.title_fr}
                  {locale === "pt" && item.title_pr}
                </h3>
                <span>
                  <img
                    src="/assets/forward-2.svg"
                    alt="Icon Down"
                    className="h-8 rotate-90"
                  />
                </span>
              </div>
              <div className="flex flex-col gap-y-4 px-4 lg:px-6 pb-6">
                <h4 className="font-bold">{t.services.subtitle}</h4>
                <p className="whitespace-break-spaces text-sm">
                  {locale === "es" && item.text_es}
                  {locale === "en" && item.text_en}
                  {locale === "fr" && item.text_fr}
                  {locale === "pt" && item.text_pr}
                </p>
                {item.subtitle_fr && (
                  <span className="font-bold">
                    {locale === "es" && item.subtitle_es}
                    {locale === "en" && item.subtitle_en}
                    {locale === "fr" && item.subtitle_fr}
                    {locale === "pt" && item.subtitle_pr}
                  </span>
                )}
                <span className="font-extrabold text-2xl not-even:lg:text-3xl">
                  {item.price
                    ? item.price + " €"
                    : locale === "es"
                      ? "Cotizar"
                      : locale === "en"
                        ? "Contact us"
                        : locale === "fr"
                          ? "Contactez nous"
                          : locale === "pt"
                            ? "Contate-nos"
                            : ""}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Packs;
