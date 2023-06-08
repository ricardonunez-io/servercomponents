export default function H1({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="text-4xl md:text-5xl font-semibold gradient clip mb-4">
			{children}
		</h1>
	);
}
