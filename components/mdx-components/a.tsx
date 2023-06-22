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
			className="text-sky-600 dark:text-sky-400 hover:underline text-lg md:text-xl py-1 hover:cursor-pointer"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}
