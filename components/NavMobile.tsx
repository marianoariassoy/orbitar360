"use client";
import Link from "next/link";
import { useT } from "@/lib/useT";

interface handleClick {
  (e: React.MouseEvent<HTMLAnchorElement>, id: string): void;
}

export function NavMobile({
  handleClick,
  pathname,
  setIsOpen,
}: {
  handleClick: handleClick;
  pathname: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const t = useT();

  return (
    <div className="absolute w-screen h-screen bg-black/60 flex flex-col justify-center items-center backdrop-blur-md z-40">
      <nav className="flex flex-col gap-y-8 text-lg font-semibold text-center">
        <Link
          href="/#top"
          className="hover:underline underline-offset-4"
          onClick={(e) => handleClick(e, "top")}
        >
          {t.nav.home}
        </Link>

        <Link
          href="/#orbitar360"
          className="hover:underline underline-offset-4"
          onClick={(e) => handleClick(e, "orbitar360")}
        >
          {t.nav.orbitar}
        </Link>

        <Link
          href="/services"
          className={`underline-offset-4 ${pathname === "/services" ? "underline" : "hover:underline"}`}
          onClick={() => setIsOpen(false)}
        >
          {t.nav.services}
        </Link>

        <Link
          href="/contact"
          className={`underline-offset-4 ${pathname === "/contact" ? "underline" : "hover:underline"}`}
          onClick={() => setIsOpen(false)}
        >
          {t.nav.contact}
        </Link>
      </nav>
    </div>
  );
}

export default NavMobile;
