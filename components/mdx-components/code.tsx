export default function Code({ children }: { children: React.ReactNode }) {
	return (
		<code className="mx-1 font-mono text-sm sm:text-base text-gray-700 dark:text-gray-300 md:text-lg my-0">
			{children}
		</code>
	);
}