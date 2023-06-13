import React from "react";

export default function UL({ children }: { children: React.ReactNode }) {
	return (
		<ul className="text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-xl">
			{children}
		</ul>
	);
}
