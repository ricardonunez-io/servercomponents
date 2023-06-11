import React from "react";

export default function UL({ children }: { children: React.ReactNode }) {
	return (
		<ul className="text-slate-500 dark:text-slate-400 text-lg md:text-xl">
			{children}
		</ul>
	);
}
