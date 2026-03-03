"use client";
import { useT } from "@/lib/useT";
import SectionLarge from "@/components/SectionLarge";
import Points from "@/components/Points";
import Form from "./Form";

const Contact = () => {
  const t = useT();

  return (
    <section>
      <div className="w-full h-[60vh]">
        <img
          src="/images/img-contact.jpg"
          alt="Imagen de contacto"
          className="w-full h-full object-cover"
        />
      </div>
      <SectionLarge>
        <div className="flex flex-col lg:flex-row gap-x-20 -translate-y-34">
          <div className="lg:w-2/5 flex flex-col gap-y-8 animate-fade-up">
            <h1 className="font-bold text-8xl">{t.contact.title}</h1>
            <p className="text-xl leading-snug">{t.contact.description}</p>
            <Points size="lg" />
            <div className="flex flex-col gap-y-4">
              <h2 className="font-bold text-xl">Alonso Meyer</h2>
              <div className="flex flex-col text-sm">
                <span className="font-semibold leading-snug text-base">
                  +33 766905888
                </span>
                <span>Haguenau - Strasbourg</span>
              </div>
              <div className="flex flex-col text-sm">
                <span>
                  <a
                    href="mailto:info@orbitar-360.com"
                    className="hover:underline underline-offset-4 "
                  >
                    info@orbitar-360.com
                  </a>
                </span>
                <a
                  href="http://www.orbitar360.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4 "
                >
                  www.orbitar360.com
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/10 pt-12 lg:pt-40 animate-float">
            <img
              src="/assets/forward-2.svg"
              alt="Forward Icon"
              className="h-10"
            />
          </div>
          <div className="lg:w-1/2 pt-12 lg:pt-30 animate-fade-right">
            <Form />
          </div>
        </div>
      </SectionLarge>
      <div className="w-full px-4 md:px-8 lg:px-14">
        <div className="border-t border-white"></div>
      </div>
    </section>
  );
};

export default Contact;
