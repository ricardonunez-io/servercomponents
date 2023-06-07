import React from "react";

export default function P({ children }: { children: React.ReactNode }) {
	return (
		<p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl py-4">
			{children}
		</p>
	);
}
