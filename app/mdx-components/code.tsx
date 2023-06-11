export default function Code({ children }: { children: React.ReactNode }) {
	return (
		<code className="px-1.5 py-[0.175rem] mx-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-mono rounded-md text-base md:text-lg max-w-full my-0">
			{children}
		</code>
	);
}
