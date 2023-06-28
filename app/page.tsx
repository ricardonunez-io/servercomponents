import Card from "../components/card";
import RSCHero from "../public/rsc-hero.png";
import LibrariesVsRSC from "../public/libraries-vs-rsc.png";
import ImportCost from "../public/import-cost.png";
import NetworkWaterfall from "../public/network-waterfall.png";
import Browser from "../components/browser";
import Link from "next/link";
import ReactLogo from "@/components/react-logo";
import GithubLink from "@/components/github";
import Image from "next/image";

export const runtime = "edge";

const topics = [
	{
		title: "What Are React Server Components (RSCs) and How Are They Different?",
		description: `A brief introduction to React Server Components and how they differ to Server-Side Rendering.`,
		image: RSCHero,
		href: "/what-are-react-server-components",
	},
	{
		title: "The Problems That React Server Components Solve",
		description: `How React Server Components address data fetching, composing business logic, and bundle sizes differently than existing solutions.`,
		image: LibrariesVsRSC,
		href: "/the-problems-rscs-solve",
	},
	{
		title: "Adopting React Server Components Incrementally",
		description: `This seems like as big of a breaking change as we can get, right? Sort of... But how do we incrementally adopt RSCs to get the benefits?`,
		image: ImportCost,
		href: "/",
	},
	{
		title: "Network waterfalls and how RSCs help devs minimize them.",
		description: `Network waterfalls (when requests are staggered sequentially) haven't natively been solved as much as band-aided by things like useEffect(). Framework solutions exist that minimize the problem (i.e. Remix loaders with parallelized requests), but RSCs help minimize them on a per-component basis rather than a per page/route basis by allowing you to fetch data for your entire component tree by component at initial request time, instead of having to ping-pong back and forth between server and client upon each component's render.`,
		image: NetworkWaterfall,
		href: "/",
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col text-left">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 space-y-4">
				<div className="lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:grid lg:place-items-center">
					<div className="relative pt-12 px-8 lg:px-16 w-full h-full flex flex-col justify-center">
						<Link
							href="/"
							className="flex items-center max-w-max gap-y-4 gap-x-4 group hover:opacity-80 transition-opacity"
						>
							<ReactLogo className="w-9 sm:w-10 md:w-11 lg:w-12 pb-4 text-sky-500 dark:text-sky-400" />
							<h1 className="hidden md:flex -mt-1">
								Server Components
							</h1>
							<h1 className="flex md:hidden -mt-1">RSCs</h1>
						</Link>

						<h2 className="-mt-3 -mb-6">
							... are complicated.
						</h2>
						<p className="mt-8 mb-4">
							Here are some resources to make them easier to
							understand and implement. From a non-expert.
						</p>
						<div className="max-w-max">
							<GithubLink/>
						</div>
						<div className="grid mt-12">
							<Browser />
						</div>
					</div>
				</div>
				<div className="py-8 px-8 md:px-12 lg:px-16 lg:py-12 md:grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 md:gap-x-4 md:gap-y-4">
					<Link href="/credits" className="md:col-span-2 lg:col-span-1 xl:col-span-2">
						<div
							className="flex flex-col rounded-xl hover:cursor-pointer border-2 border-gray-200 dark:border-gray-600 pt-6 pb-2 hover:bg-sky-200/50 hover:border-sky-200 dark:hover:bg-sky-800/50 dark:hover:border-sky-800 transition-all mb-4 md:mb-0 xl:my-0"
						>
							<div className="font-bold text-xl md:text-2xl px-6 lg:px-8">
								Credits
							</div>
							<div className="px-6 lg:px-8 text-gray-500 dark:text-gray-400 text-lg md:text-xl">
								<p>
									Much of the inspiration for this was Dan Abramov&apos;s and Joe Savona&apos;s appearance on the Javascript Jabber podcast, from which I took a lot of examples, explanations, and information.
								</p>
								<p>
									I&apos;ve also learned a lot from the Tweets and videos from the Remix team, the Next team with Next 13&apos;s docs, and more. Click to see whose knowledge I used to help build this site&apos;s content.
								</p>
							</div>
						</div>
					</Link>
					{topics.map((topic) => (
						<Card
							key={topic.title}
							title={topic.title}
							description={topic.description}
							image={topic.image}
							imageDescription={topic.title + "hero image"}
							href={topic.href}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
