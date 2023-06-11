import Link from "next/link";
import Image from "next/image";
import ReactIcon from "../public/react-icon.svg";

export default function Logo() {
	return (
		<Link
			href="/"
			className="text-4xl md:text-5xl font-extrabold gradient clip flex flex-col lg:flex-row lg:items-center gap-y-4 gap-x-4 group hover:opacity-80 transition-opacity"
		>
			<Image src={ReactIcon} alt="React Icon" className="w-16 h-16" />
			Server Components
		</Link>
	);
}
