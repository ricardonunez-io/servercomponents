"use client";

import { ReactNode, useRef, useState, useEffect } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import CopyToClipboard from "./copy-to-clipboard";

export default function Pre({ children }: { children: ReactNode }) {
	const preRef = useRef<HTMLPreElement | null>(null);
	const [isExpanded, setIsExpanded] = useState(false);
	const [isOverflowing, setIsOverflowing] = useState(false);
	const [maxHeight, setMaxHeight] = useState("300px");

	/* const height = isExpanded
		? "h-fit max-h-fit"
		: "max-h-[300px] sm:max-h-[350px] md:max-h-[400px] transition-height transform-gpu"; */

	/* useEffect(() => {
		if (preRef.current) {
			setIsOverflowing(preRef.current.scrollHeight > 400);
		}
	}, [isExpanded]); */

	/* useEffect(() => {
		if (preRef.current) {
			const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280 };
			let windowWidth = window.innerWidth;
			let height = 300;
			if (windowWidth >= breakpoints.sm && windowWidth < breakpoints.md) {
				height = 350;
			} else if (windowWidth >= breakpoints.md) {
				height = 400;
			}
			setIsOverflowing(preRef.current.scrollHeight > height);
		}
	}, [isExpanded]); */

	useEffect(() => {
		const checkOverflow = () => {
			const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280 };
			let windowWidth = window.innerWidth;
			let height = 300;
			if (windowWidth >= breakpoints.sm && windowWidth < breakpoints.md) {
				height = 350;
			} else if (windowWidth >= breakpoints.md) {
				height = 400;
			}
			setMaxHeight(JSON.stringify(height) + "px");
			if (preRef.current) {
				setIsOverflowing(preRef.current.scrollHeight > height);
			}
		};
		checkOverflow();
		window.addEventListener("resize", checkOverflow);
		return () => {
			window.removeEventListener("resize", checkOverflow);
		};
	}, [isExpanded]);

	const height = isExpanded ? "fit-content" : maxHeight;
	const twHeight = isExpanded
		? "h-fit max-h-fit"
		: "max-h-[300px] sm:max-h-[350px] md:max-h-[400px]";
	const animation = isOverflowing
		? { animate: { height: height, maxHeight: height } }
		: {};

	return (
		<LazyMotion features={domAnimation}>
			<m.div
				className={`group relative w-full overflow-y-hidden ${twHeight} overflow-auto`}
				{...animation}
			>
				<m.pre
					className={`relative p-4 font-mono text-sm md:text-base rounded-xl bg-gray-100 dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 overflow-auto`}
					ref={preRef}
					{...animation}
				>
					{children}
				</m.pre>
				{isOverflowing && (
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className="absolute bottom-1.5 right-2 block rounded-full text-gray-700 dark:text-gray-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all px-3 py-1"
					>
						{isExpanded ? "Show less" : "Show more"}
					</button>
				)}
				<div className="absolute right-2 top-1.5 group-hover:bg-gray-100 dark:group-hover:bg-gray-950">
					<CopyToClipboard
						getValue={() =>
							preRef.current?.querySelector("code")
								?.textContent || ""
						}
					/>
				</div>
			</m.div>
		</LazyMotion>
	);
}
