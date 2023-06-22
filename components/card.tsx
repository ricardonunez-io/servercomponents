import Image from "next/image";
import Link from "next/link";

export default function Card({
	title,
	description,
	image,
	imageDescription,
	href,
}: {
	title: string;
	description: string;
	image: any;
	imageDescription: string;
	href: string;
}) {
	return (
		<Link href={href}>
			<div
				className="flex my-4 lg:h-full flex-col gap-y-2 rounded-xl hover:cursor-pointer border-2 border-gray-200 dark:border-gray-600 pb-12 hover:bg-sky-200/50 hover:border-sky-200 dark:hover:bg-sky-800/50 dark:hover:border-sky-800 transition-all"
			>
				<div className="w-full flex flex-col p-6 mb-4">
					<Image src={image} alt={imageDescription} />
				</div>
				<div className="font-bold text-lg md:text-xl px-6 lg:px-8">
					{title}
				</div>
				<div className="line-clamp-4 px-6 lg:px-8 text-gray-500 dark:text-gray-400 text-lg md:text-xl">
					{description}
				</div>
			</div>
		</Link>
	);
}
