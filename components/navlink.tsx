import ReactLogo from "@/components/logos/react-logo";
import Link from "next/link";

export default function NavLink() {
	return (
		<Link
			href="/"
			className="flex text-2xl md:text-3xl font-bold text-sky-500 dark:text-sky-400 items-center gap-x-2 group hover:opacity-80 transition-opacity no-underline"
			id="home-page"
		>
			<ReactLogo width={36} />
			<span className="hidden md:flex pb-2">Server Components</span>
			<span className="flex md:hidden">RSCs</span>
		</Link>
	);
}
