"use client";
import { useT } from "@/lib/useT";

const Packs = () => {
  const t = useT();

  const data = [
    {
      title: "Pack escencial",
      description: ` Relevamiento digital completo del espacio
• Tour virtual 360°
• Enlace de visita para compartir
• Código QR portable
• Microvideos y fotografías`,
      bonus: "(Acceso x 3 meses) ",
      price: "350 €",
    },
    {
      title: "Pack escencial",
      description: ` Relevamiento digital completo del espacio
• Tour virtual 360°
• Enlace de visita para compartir
• Código QR portable
• Microvideos y fotografías`,
      bonus: "(Acceso x 3 meses) ",
      price: "45 €",
    },
    {
      title: "Pack adaptado",
      description: ` Relevamiento digital completo del espacio
• Tour virtual 360°
• Enlace de visita para compartir
• Código QR portable
• Microvideos y fotografías`,
      bonus: "(Acceso x 3 meses) ",
      price: "Cotizar",
    },
  ];

  return (
    <section>
      <h1 className="font-bold text-3xl lg:text-4xl text-center my-20 animate-fade-in">
        {t.services.title}
      </h1>
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
                {item.title}
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
                {item.description}
              </p>
              <span className="font-bold">{item.bonus}</span>
              <span className="font-extrabold text-2xl not-even:lg:text-3xl">
                {item.price}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Packs;
