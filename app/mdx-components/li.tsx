import React from "react";

export default function LI({ children }: { children: React.ReactNode }) {
	return (
		<li className="text-slate-500 dark:text-slate-400 text-lg md:text-xl py-4">
			{children}
		</li>
	);
}
