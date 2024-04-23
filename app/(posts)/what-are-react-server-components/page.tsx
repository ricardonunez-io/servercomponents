import RSCs from "./rscs.mdx";
import PageMap from "./rscs-pagemap.mdx";

export const metadata = {
	title: "What are React Server Components?",
	description: "A brief introduction to React Server Components and how they differ to Server-Side Rendering",
	publisher: "Ricardo Nunez",
};

export default function RSCsPage() {
	return (
		<div className="lg:grid lg:grid-cols-4 w-full gap-x-4">
			<div className="col-span-4 max-w-4xl mx-auto xl:col-span-3 h-fit w-full">
				<RSCs />
			</div>
			<div className="hidden xl:grid xl:col-span-1 h-fit sticky top-32 w-full">
				<PageMap />
			</div>
		</div>
	);
}
