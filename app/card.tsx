import Image from "next/image";
import Link from "next/link";

export default function Card({
	title,
	description,
	hover,
	image,
	imageDescription,
	href,
}: {
	title: string;
	description: string;
	hover: boolean;
	image: any;
	imageDescription: string;
	href: string;
}) {
	let hoverState;
	if (hover) {
		hoverState =
			"hover:bg-cyan-200/50 hover:border-cyan-200 dark:hover:bg-cyan-800/50 dark:hover:border-cyan-800 transition-all hover:cursor-pointer";
	}

	return (
		<Link href={href}>
			<div
				className={`flex h-full flex-col gap-y-2 rounded-xl hover:cursor-pointer border-2 border-slate-200 dark:border-slate-600 pb-12 ${
					hoverState ? hoverState : ""
				}`}
			>
				<div className="w-full flex flex-col p-6 mb-4">
					<Image src={image} alt={imageDescription} />
				</div>
				<div className="font-semibold text-lg md:text-xl px-6 lg:px-8">
					{title}
				</div>
				<div className="line-clamp-4 px-6 lg:px-8 text-slate-500 dark:text-slate-400 text-lg md:text-xl">
					{description}
				</div>
			</div>
		</Link>
	);
}
