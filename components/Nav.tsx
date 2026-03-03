"use client";
import Link from "next/link";
import { useT } from "@/lib/useT";

interface handleClick {
  (e: React.MouseEvent<HTMLAnchorElement>, id: string): void;
}

export function Navbar({
  handleClick,
  pathname,
}: {
  handleClick: handleClick;
  pathname: string;
}) {
  const t = useT();

  return (
    <nav className="flex gap-x-12 text-sm font-semibold">
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
      >
        {t.nav.services}
      </Link>

      <Link
        href="/contact"
        className={`underline-offset-4 ${pathname === "/contact" ? "underline" : "hover:underline"}`}
      >
        {t.nav.contact}
      </Link>
    </nav>
  );
}

export default Navbar;
