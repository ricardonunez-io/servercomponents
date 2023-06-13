export default function H1({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="text-4xl md:text-5xl font-bold gradient clip mb-2 pb-3">
			{children}
		</h1>
	);
}
