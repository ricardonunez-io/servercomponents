export default function H2({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="mt-2 md:mt-1 lg:mt-0 text-2xl sm:text-3xl md:text-4xl font-semibold">
			{children}
		</h2>
	);
}
