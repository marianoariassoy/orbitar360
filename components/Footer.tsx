"use client";
import { useT } from "@/lib/useT";
import SectionLarge from "./SectionLarge";
import Nav from "./Nav";
import Points from "./Points";
import { usePathname } from "next/navigation";

const Footer = () => {
  const t = useT();
  const year = new Date().getFullYear();
  const pathname = usePathname();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollTo(id);
    }
  };
  return (
    <footer>
      <SectionLarge>
        <div className="w-full flex items-center gap-x-4 mb-12 text-sm pt-4 lg:pt-12">
          <div className="flex-1">
            <img src="/assets/logo.svg" alt="Logo Orbitar" className="h-4" />
          </div>
          <div className="hidden lg:block">
            <Nav handleClick={handleClick} pathname={pathname} />
          </div>
          <div className="flex-1 flex justify-end">
            <Points size="sm" />
          </div>
        </div>
        <div className="flex justify-between gap-4 items-end text-sm">
          <div className="flex flex-col">
            <span>{year}</span>
            <span>{t.footer.title}</span>
          </div>
          <div className="text-right">{t.footer.made}</div>
        </div>
      </SectionLarge>
    </footer>
  );
};

export default Footer;
