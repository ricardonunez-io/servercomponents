export default function Code({ children }: { children: React.ReactNode }) {
	return (
		<code className="px-1 py-0.5 m-1 border-[2px] border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-mono rounded-md">
			{children}
		</code>
	);
}
