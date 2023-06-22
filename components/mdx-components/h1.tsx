export default function H1({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="text-4xl md:text-5xl font-bold text-sky-500 dark:text-sky-400 mb-2 pb-3">
			{children}
		</h1>
	);
}
