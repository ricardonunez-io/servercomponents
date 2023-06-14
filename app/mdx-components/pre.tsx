"use client";

import { ReactNode, useRef, useState, useEffect } from "react";
import CopyToClipboard from "./copy-to-clipboard";

export default function Pre({ children }: { children: ReactNode }) {
	const preRef = useRef<HTMLPreElement | null>(null);
	const [isExpanded, setIsExpanded] = useState(false);
	const [isOverflowing, setIsOverflowing] = useState(false);
	const [isPreHidden, setIsPreHidden] = useState(false);
	const [theme, setTheme] = useState<"dark" | "light">("dark");

	useEffect(() => {
		if (preRef.current) {
			setIsOverflowing(preRef.current.scrollHeight > 350);
		}
		if (isOverflowing && preRef.current) {
			preRef.current.classList.add("h-1000px");
		}
	}, [isExpanded, isOverflowing]);

	useEffect(() => {
		const darkModeMediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);
		const setDarkMode = (e: MediaQueryListEvent) => {
			const newTheme = e.matches ? "dark" : "light";
			setTheme(newTheme);
			if (preRef.current) {
				let element = preRef.current.querySelector(
					`code[data-theme=${newTheme}]`
				);
				setIsPreHidden(!element);
			}
		};
		setDarkMode({
			matches: darkModeMediaQuery.matches,
		} as MediaQueryListEvent);
		darkModeMediaQuery.addEventListener("change", setDarkMode);
		return () => {
			darkModeMediaQuery.removeEventListener("change", setDarkMode);
		};
	}, [isPreHidden, theme]);

	const height = isExpanded ? "max-h-fit" : "max-h-[350px]";

	return (
		<div
			className={`group relative w-full overflow-y-hidden ${height} delay-0 transition-none overflow-auto rounded-xl ${
				isPreHidden ? "hidden" : "grid"
			}`}
		>
			<pre
				className={`relative p-4 font-mono text-sm md:text-base bg-gray-100 dark:bg-gray-900 overflow-auto`}
				ref={preRef}
			>
				{children}
			</pre>
			{isOverflowing && (
				<button
					onClick={() => setIsExpanded(!isExpanded)}
					className="absolute bottom-1.5 right-2 block rounded-full text-gray-700 dark:text-gray-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all px-3 py-1"
				>
					{isExpanded ? "Show less" : "Show more"}
				</button>
			)}
			<div className="absolute right-2 top-1.5 group-hover:bg-gray-100 dark:group-hover:bg-gray-900 rounded-xl">
				<CopyToClipboard
					getValue={() =>
						preRef.current?.querySelector("code")?.textContent || ""
					}
				/>
			</div>
		</div>
	);
}
