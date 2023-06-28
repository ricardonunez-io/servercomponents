export default function BlogFooter({ previousPost, nextPost, previousHref, nextHref }: { previousPost: string, nextPost: string, previousHref: string, nextHref: string }) {
	return (
		<div className="gap-x-4 my-8 grid grid-cols-2 text-base sm:text-lg md:text-xl">
			<a id="footer" href={previousHref}
				  className="grid place-items-center text-center py-8 px-4 rounded-xl hover:cursor-pointer border-2 border-gray-200 dark:border-gray-600 hover:bg-sky-200/50 hover:border-sky-200 dark:hover:bg-sky-800/50 dark:hover:border-sky-800 transition-all no-underline"
			>
				<div className="grid grid-cols-5 w-full">
					<div className="hidden sm:flex justify-center items-center text-xl md:text-2xl lg:text-3xl">←</div>
					<div className="font-bold col-span-5 sm:col-span-4 grid place-items-center">
						{previousPost}
					</div>
				</div>
			</a>
			<a id="footer" href={nextHref}
				  className="grid place-items-center text-center py-8 px-4 rounded-xl hover:cursor-pointer border-2 border-gray-200 dark:border-gray-600 hover:bg-sky-200/50 hover:border-sky-200 dark:hover:bg-sky-800/50 dark:hover:border-sky-800 transition-all no-underline"
			>
				<div className="grid grid-cols-5 w-full">
					<div className="font-bold col-span-5 sm:col-span-4 grid place-items-center">
						{nextPost}
					</div>
					<div className="hidden sm:flex justify-center items-center text-xl md:text-2xl lg:text-3xl">→</div>
				</div>
			</a>
		</div>
	)
}
