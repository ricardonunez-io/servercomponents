import IncrementalAdoption from "./incremental-adoption.mdx";
import PageMap from "./pagemap.mdx"

export const runtime = "edge";
export const metadata = {
	title: "Credits for ServerComponents.dev",
	description: "Whose knowledge and work made this site possible",
	publisher: "Ricardo Nunez",
}

export default function RSCsPage() {
	return (
		<div className="lg:grid lg:grid-cols-4 w-full gap-x-4">
			<div className="col-span-4 max-w-4xl mx-auto xl:col-span-3 h-fit w-full">
				<IncrementalAdoption/>
			</div>
			<div className="hidden xl:grid xl:col-span-1 h-fit sticky top-32 w-full">
				<PageMap />
			</div>
		</div>
	);
}
