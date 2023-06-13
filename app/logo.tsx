import Link from "next/link";
import Image from "next/image";
import ReactIcon from "../public/react-icon.svg";

export default function Logo() {
	return (
		<Link
			href="/"
			className="flex text-2xl md:text-3xl font-bold gradient clip items-center gap-y-4 gap-x-4 group hover:opacity-80 transition-opacity"
		>
			<Image src={ReactIcon} alt="React Icon" className="w-12 h-12" />
			<span className="hidden md:flex pb-2">Server Components</span>
			<span className="flex md:hidden">RSCs</span>
		</Link>
	);
}
