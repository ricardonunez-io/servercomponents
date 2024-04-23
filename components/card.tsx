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
		<Link id="home-page" href={href} className="no-underline">
			<div
				className="flex md:h-full flex-col gap-y-2 rounded-xl hover:cursor-pointer border-2 border-gray-200 dark:border-gray-600 pt-0 pb-8 hover:bg-sky-200/50 hover:border-sky-200 dark:hover:bg-sky-800/50 dark:hover:border-sky-800 transition-all mb-8 xl:my-0"
			>
				<div className="w-full flex flex-col p-6 mb-4">
					<Image src={image} alt={imageDescription} />
				</div>
				<div className="font-bold text-xl md:text-2xl text-sky-600 dark:text-sky-400 px-6 lg:px-8">
					{title}
				</div>
				<p className="line-clamp-4 px-6 lg:px-8 text-gray-500 dark:text-gray-300 my-2">
					{description}
				</p>
			</div>
		</Link>
	);
}
