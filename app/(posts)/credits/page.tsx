import Credits from "./credits.mdx";

export const runtime = "edge";
export const metadata = {
	title: "Credits for ServerComponents.dev",
	description: "Whose knowledge and work made this site possible",
	publisher: "Ricardo Nunez",
}

export default function RSCsPage() {
	return <Credits />;
}
