import Solutions from "./solutions.mdx";

export const runtime = "edge";
export const metadata = {
	title: "The Problems That React Server Components Solve",
	description: "How React Server Components address data fetching, composing business logic, and bundle sizes",
	publisher: "Ricardo Nunez",
}

export default function RSCsPage() {
	return <Solutions />;
}
