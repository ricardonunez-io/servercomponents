import React from "react";

export default function LI({ children }: { children: React.ReactNode }) {
	return (
		<li className="text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-xl py-4">
			{children}
		</li>
	);
}
