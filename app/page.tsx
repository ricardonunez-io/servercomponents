import Card from "../components/card";
import RSCHero from "../public/rsc-hero.png";
import LibrariesVsRSC from "../public/libraries-vs-rsc.png";
import ImportCost from "../public/import-cost.png";
import NetworkWaterfall from "../public/network-waterfall.png";
import Browser from "../components/browser";
import Link from "next/link";
import ReactLogo from "@/components/react-logo";
import GithubLink from "@/components/github";

export const runtime = "edge";

const topics = [
	{
		title: "What are React Server Components (RSCs) and how are they different?",
		description: `RSCs are React components that run only on the server. This is different to server side rendering, which is when you pre-run a route's component tree on the server, render and pass HTML to the client, and then hydrate it. Because it's run only on the server, you can access private services, direct databases, etc.`,
		image: RSCHero,
		href: "/what-are-react-server-components",
	},
	{
		title: "Why build the RSC model if solutions already existed to data fetching and backend logic?",
		description: `Solutions like React Query & Redux exist, but they aren't native to React. For example, build/server logic couldn't be componentized, which led to duplicated logic. Another example is having unavoidable network waterfalls when using useEffect(), which could only really be avoided by having framework abstractions like loaders of getServerSideProps(), which each have their own unique challenges for the componentization model.`,
		image: LibrariesVsRSC,
		href: "/",
	},
	{
		title: "What's the main goal behind RSCs and what are their benefits/side effects?",
		description: `In React, we want to be able to re-use code that includes build/server logic. The mental model of fetching data, awaiting the response, and displaying it in the UI is incredibly powerful and provides a standardized primitive for getting data into your dynamic application on a per component basis, which allows for re-usability on a much more granular level than previously possible.`,
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
							className="flex items-center gap-y-4 gap-x-4 group hover:opacity-80 transition-opacity"
						>
							<ReactLogo className="w-9 sm:w-10 md:w-11 lg:w-12 pb-4 text-sky-500 dark:text-sky-400" />
							<h1 className="hidden md:flex">
								Server Components
							</h1>
							<h1 className="flex md:hidden">RSCs</h1>
						</Link>

						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold -mt-3 -mb-6">
							... are complicated.
						</h2>
						<p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mt-8 mb-4">
							Here are some resources to make them easier to
							understand and implement.
						</p>
						<div className="max-w-max">
							<GithubLink/>
						</div>
						<div className="grid mt-12">
							<Browser />
						</div>
					</div>
				</div>
				<div className="py-8 px-8 md:px-12 lg:px-16 lg:py-12 lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-4">
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
