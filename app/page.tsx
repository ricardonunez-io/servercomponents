import Card from "./card";
import Image from "next/image";
import RSCHero from "../public/rsc-hero.png";
import LibrariesVsRSC from "../public/libraries-vs-rsc.png";
import ImportCost from "../public/import-cost.png";
import ReactIcon from "../public/react-icon.svg";
import NetworkWaterfall from "../public/network-waterfall.png";
import Browser from "./browser";

const topics = [
	{
		title: "What are React Server Components (RSCs) and how are they different?",
		description: `RSCs are React components that run only on the server. This is different to server side rendering, which is when you pre-run a route's component tree on the server, render and pass HTML to the client, and then hydrate it. Because it's run only on the server, you can access private services, direct databases, etc.`,
		image: RSCHero,
	},
	{
		title: "Why build the RSC model if solutions already existed to data fetching and backend logic?",
		description: `Solutions like React Query & Redux exist, but they aren't native to React. For example, build/server logic couldn't be componentized, which led to duplicated logic. Another example is having unavoidable network waterfalls when using useEffect(), which could only really be avoided by having framework abstractions like loaders of getServerSideProps(), which each have their own unique challenges for the componentization model.`,
		image: LibrariesVsRSC,
	},
	{
		title: "What's the main goal behind RSCs and what are their benefits/side effects?",
		description: `In React, we want to be able to re-use code that includes build/server logic. The mental model of fetching data, awaiting the response, and displaying it in the UI is incredibly powerful and provides a standardized primitive for getting data into your dynamic application on a per component basis, which allows for re-usability on a much more granular level than previously possible.`,
		image: ImportCost,
	},
	{
		title: "Network waterfalls and how RSCs help devs minimize them.",
		description: `Network waterfalls (when requests are staggered sequentially) haven't natively been solved as much as band-aided by things like useEffect(). Framework solutions exist that minimize the problem (i.e. Remix loaders with parallelized requests), but RSCs help minimize them on a per-component basis rather than a per page/route basis by allowing you to fetch data for your entire component tree by component at initial request time, instead of having to ping-pong back and forth between server and client upon each component's render.`,
		image: NetworkWaterfall,
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col text-left">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 space-y-4">
				<div className="md:sticky md:top-0 md:h-screen md:max-h-screen md:grid md:place-items-center">
					<div className="relative pt-12 px-8">
						<h1 className="text-4xl md:text-5xl font-extrabold gradient clip flex flex-col lg:flex-row lg:items-center gap-y-4 gap-x-4">
							<Image
								src={ReactIcon}
								alt="React Icon"
								className="w-16 h-16"
							/>
							Server Components
						</h1>
						<p className="mt-2 md:mt-1 lg:mt-0 text-2xl sm:text-3xl md:text-4xl font-bold lg:ml-20 -pt-4">
							... are complicated.
						</p>
						<p className="mt-4 mb-8 text-lg md:text-xl text-slate-500 dark:text-slate-400 lg:ml-20">
							Here are some resources to make them easier to
							understand and implement.
						</p>
						<Browser />
					</div>
				</div>
				<div className="py-8 px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3 justify-items-center">
					{topics.map((topic) => (
						<Card
							key={topic.title}
							title={topic.title}
							description={topic.description}
							hover={true}
							image={topic.image}
							imageDescription={topic.title + "hero image"}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
