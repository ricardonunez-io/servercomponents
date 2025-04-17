import ReactLogo from "@/components/logos/react-logo";
import Link from "next/link";

export default function NavLink() {
  return (
    <Link
      href="/"
      className="flex text-base font-medium text-neutral-900 dark:text-neutral-100 items-center gap-x-2 group hover:opacity-80 transition-opacity no-underline"
      id="home-page"
    >
      <ReactLogo width={28} className="text-sky-600 dark:text-sky-400" />
      <span className="hidden md:flex text-base">Server Components</span>
      <span className="flex md:hidden text-base">RSCs</span>
    </Link>
  );
}
