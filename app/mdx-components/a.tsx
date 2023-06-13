import React from "react";

export default function A({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) {
	return (
		<a
			className="text-cyan-500 dark:text-cyan-500 underline hover:text-gray-600 dark:hover:text-gray-300 text-lg md:text-xl py-4 hover:cursor-pointer"
			href={href}
		>
			{children}
		</a>
	);
}
