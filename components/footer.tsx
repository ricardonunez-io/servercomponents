import VercelLogo from "@/components/vercel-logo";

export default function Footer() {
	return (
		<footer
			className="pt-6 pb-12 px-8 bg-gray-50 dark:bg-stone-950 border-t-2 border-gray-200 dark:border-gray-800 flex flex-col items-center gap-y-4 lg:flex-row lg:justify-between relative z-[10000]">
			<div>
				Made by {" "}
				<a href="https://twitter.com/ricardonunez_io"
				   className="hover:underline text-sky-500 dark:text-sky-400"
				   target="_blank"
				   rel="noopener noreferrer"
				>
					Ricardo Nunez
				</a>
			</div>
			<a id="vercel-link"
			   target="_blank"
			   rel="noopener noreferrer"
			   href="https://vercel.com"
			   className="no-underline text-inherit hover:opacity-80 grid grid-cols-2 place-items-center gap-x-0 sm:gap-x-0.5 md:gap-x-1"
			>
				<div>Deployed on</div>
				<VercelLogo width={100}/>
			</a>
		</footer>
	)
}
