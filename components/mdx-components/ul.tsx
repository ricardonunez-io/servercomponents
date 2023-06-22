import React from "react";

export default function UL({ children }: { children: React.ReactNode }) {
	return (
		<ul className="list-disc list-outside px-8">
			{children}
		</ul>
	);
}
