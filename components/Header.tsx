"use client";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Points from "./Points";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavMobile from "./NavMobile";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      scrollTo(id);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-screen flex items-center gap-x-4 z-50 from-black  to-transparent transition-all ${scrolled ? "bg-linear-to-b" : ""} opacity-0 animate-fade-down duration-200 ease-out`}
      >
        <div className="lg:flex-1 w-1/2">
          <Link href="/" onClick={(e) => handleClick(e, "top")}>
            <div className="px-8 py-4 bg-primary justify-center items-center inline-flex hover:bg-secondary transition-all">
              <img
                src="/assets/logo.svg"
                alt="Logo Orbitar"
                className={`transition-all ${scrolled ? "w-[120px]" : "w-[200px]"}`}
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex">
          <Nav handleClick={handleClick} pathname={pathname} />
        </div>
        <div className="lg:flex-1 w-1/2 flex justify-end pr-4 md:pr-10">
          <button
            className={`cursor-pointer transition-all ${isOpen ? "rotate-90" : "rotate-0"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Points size="sm" />
          </button>
        </div>
      </header>
      <div
        className={`fixed top-0 w-screen ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden transition-all ease-linear z-40`}
      >
        <NavMobile
          handleClick={handleClick}
          pathname={pathname}
          setIsOpen={setIsOpen}
        />
      </div>
    </>
  );
};

export default Header;
