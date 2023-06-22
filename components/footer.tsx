import Link from "next/link";

export default function Footer({ previousPost, nextPost, previousHref, nextHref }: { previousPost: string, nextPost: string, previousHref: string, nextHref: string }) {
	return (
		<footer className="gap-x-4 my-8 grid grid-cols-2">
			<Link href={previousHref}
				  className="grid place-items-center text-center py-8 px-4 rounded-xl hover:cursor-pointer border-2 border-gray-200 dark:border-gray-600 hover:bg-sky-200/50 hover:border-sky-200 dark:hover:bg-sky-800/50 dark:hover:border-sky-800 transition-all"
			>
				<div className="grid grid-cols-5 w-full">
					<div className="flex justify-center items-center text-xl md:text-2xl lg:text-3xl">←</div>
					<div className="font-bold text-lg md:text-xl col-span-4 grid place-items-center">
						{previousPost}
					</div>
				</div>
			</Link>
			<Link href={nextHref}
				  className="grid place-items-center text-center py-8 px-4 rounded-xl hover:cursor-pointer border-2 border-gray-200 dark:border-gray-600 hover:bg-sky-200/50 hover:border-sky-200 dark:hover:bg-sky-800/50 dark:hover:border-sky-800 transition-all"
			>
				<div className="grid grid-cols-5 w-full">
					<div className="font-bold text-lg md:text-xl col-span-4 grid place-items-center">
						{nextPost}
					</div>
					<div className="flex justify-center items-center text-xl md:text-2xl lg:text-3xl">→</div>
				</div>
			</Link>
		</footer>
	)
}
