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
    title: "What Are React Server Components?",
    description: `A brief introduction to React Server Components and how they differ from Server-Side Rendering.`,
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
  {
    title: "Credits",
    description: `Much of the inspiration for this was Dan Abramov's and Joe Savona's appearance on the Javascript Jabber podcast, from which I took a lot of examples, explanations, and information.\n\nClick here to see the resources I used.`,
    href: "/credits",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-left">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 space-y-4">
        <div className="lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:grid lg:place-items-center">
          <div className="relative pt-12 px-8 lg:px-16 w-full h-full flex flex-col justify-center">
            <Link
              id="home-page"
              href="/"
              className="flex items-center max-w-max gap-y-4 gap-x-4 group hover:opacity-80 transition-opacity no-underline"
            >
              <ReactLogo className="w-8 sm:w-9 md:w-10 lg:w-11 pb-4 text-sky-600 dark:text-sky-400" />
              <h1 className="hidden md:flex -mt-1">Server Components</h1>
              <h1 className="flex md:hidden -mt-1">RSCs</h1>
            </Link>

            <h2 className="-mt-3 -mb-6">... are complicated.</h2>
            <p className="mt-8 mb-4">
              Here are some resources to make them easier to understand and
              implement. From a non-expert.
            </p>
            <div className="max-w-max">
              <GithubLink />
            </div>
            <div className="grid mt-12">
              <Browser />
            </div>
          </div>
        </div>
        <div className="py-8 px-8 md:px-12 lg:px-16 lg:py-12 md:grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 md:gap-8 *:max-h-[25rem]">
          {topics.map((topic) => (
            <Card
              key={topic.title}
              title={topic.title}
              description={topic.description}
              image={topic.image}
              imageDescription={topic.title + " hero image"}
              href={topic.href}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
