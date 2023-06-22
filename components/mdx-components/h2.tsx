export default function H2({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="mt-2 py-4 text-2xl sm:text-3xl md:text-4xl font-bold">
			{children}
		</h2>
	);
}
