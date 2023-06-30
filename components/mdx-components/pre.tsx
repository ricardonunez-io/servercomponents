"use client";

import { ReactNode, useRef, useState, useEffect } from "react";
import CopyToClipboard from "./copy-to-clipboard";

export default function Pre({ children }: { children: ReactNode }) {
	const preRef = useRef<HTMLPreElement | null>(null);
	const [isExpanded, setIsExpanded] = useState(false);
	const [isOverflowing, setIsOverflowing] = useState(false);
	
	useEffect(() => {
		if (preRef.current) {
			setIsOverflowing(preRef.current.scrollHeight > 350);
		}
		if (isOverflowing && preRef.current) {
			preRef.current.classList.add("h-1000px");
		}
	}, [isExpanded, isOverflowing]);
	
	
	const height = isExpanded ? "max-h-fit" : "max-h-[350px]";
	
	return (
		<div className={`p-4 my-4 group relative w-full overflow-y-hidden transition-none overflow-auto rounded-xl dark:bg-[#111111] bg-gray-50 border-[1px] border-gray-300 dark:border-gray-600`}>
			<pre
				className={`relative font-mono text-sm md:text-base ${height} overflow-auto overflow-y-scroll`}
				ref={preRef}
			>
				{children}
			</pre>
			{isOverflowing && (
				<button
					onClick={() => setIsExpanded(!isExpanded)}
					className="absolute bottom-1.5 right-2 block rounded-lg text-gray-600 dark:text-gray-400
					bg-gray-50 dark:bg-[#111111]
					border-[1.5px] border-gray-300 dark:border-gray-700
					hover:bg-gray-100 dark:hover:bg-gray-800
					hover:border-gray-400 dark:hover:border-gray-500
					transition-all px-3 py-1"
				>
					{isExpanded ? "Show less" : "Show more"}
				</button>
			)}
			<div className="absolute right-1 top-2 group-hover:bg-gray-50 dark:group-hover:bg-[#111111] rounded-xl">
				<CopyToClipboard
					getValue={() =>
						preRef.current?.querySelector("code")?.textContent || ""
					}
				/>
			</div>
		</div>
	);
}
