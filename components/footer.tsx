import VercelLogo from "@/components/logos/vercel-logo";

export default function Footer() {
	return (
		<footer
			className="py-6 px-8 bg-gray-50 dark:bg-stone-950 border-t-2 border-gray-200 dark:border-gray-800 flex flex-col items-center gap-y-4 lg:flex-row lg:justify-between relative z-[10000]">
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
		</footer>
	)
}
