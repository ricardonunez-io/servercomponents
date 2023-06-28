import RSCs from "./rscs.mdx";

export const runtime = "edge";
export const metadata = {
	title: "What are React Server Components?",
	description: "A brief introduction to React Server Components and how they differ to Server-Side Rendering",
	publisher: "Ricardo Nunez",
}

export default function RSCsPage() {
	return <RSCs />;
}
