import React from "react";

export default function P({ children }: { children: React.ReactNode }) {
	return (
		<p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-xl py-4">
			{children}
		</p>
	);
}
