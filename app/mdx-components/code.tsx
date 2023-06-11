export default function Code({ children }: { children: React.ReactNode }) {
	return (
		<code className="mx-1 font-mono text-base text-slate-700 dark:text-slate-300 md:text-lg my-0">
			{children}
		</code>
	);
}
