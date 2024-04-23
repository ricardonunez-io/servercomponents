import Card from "../components/card";
import RSCHero from "../public/rsc-hero.png";
import LibrariesVsRSC from "../public/libraries-vs-rsc.png";
import ImportCost from "../public/import-cost.png";
import Browser from "../components/animations/browser";
import ReactLogo from "@/components/logos/react-logo";
import GithubLink from "@/components/github-link";
import Link from "next/link";

export const metadata = {
	title: "React Server Components",
	description:
		"An outline of React Server Components, what they are, why they're here, and how to use them conceptually.",
};

const topics = [
	{
		title: "What Are React Server Components and How Are They Different?",
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
		href: "/incremental-adoption",
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col text-left">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 space-y-4">
				<div className="lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:grid lg:place-items-center">
					<div className="relative pt-12 px-8 lg:px-16 w-full h-full flex flex-col justify-center">
						<Link id="home-page"
							href="/"
							className="flex items-center max-w-max gap-y-4 gap-x-4 group hover:opacity-80 transition-opacity no-underline"
						>
							<ReactLogo className="w-9 sm:w-10 md:w-11 lg:w-12 pb-4 text-sky-600 dark:text-sky-400" />
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
							<GithubLink />
						</div>
						<div className="grid mt-12">
							<Browser />
						</div>
					</div>
				</div>
				<div className="py-8 px-8 md:px-12 lg:px-16 lg:py-12 md:grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 md:gap-x-8 md:gap-y-8">
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
					<Link id="home-page" href="/credits" className="col-span-1 no-underline">
						<div
							className="flex flex-col rounded-xl hover:cursor-pointer border-2 border-gray-200 dark:border-gray-600 pt-6 pb-2 hover:bg-sky-200/50 hover:border-sky-200 dark:hover:bg-sky-800/50 dark:hover:border-sky-800 transition-all mb-8 md:mb-0 xl:my-0 md:h-full"
						>
							<div className="font-bold text-xl md:text-2xl text-sky-600 dark:text-sky-400 px-6 lg:px-8 pt-8">
								Credits
							</div>
							<div className="px-6 lg:px-8 text-gray-500 dark:text-gray-300 text-lg md:text-xl">
								<p>
									Much of the inspiration for this was Dan Abramov&apos;s and Joe Savona&apos;s appearance on the Javascript Jabber podcast, from which I took a lot of examples, explanations, and information.
								</p>
								<p>
									Click here to see the resources I used.
								</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
