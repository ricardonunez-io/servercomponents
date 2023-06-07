"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

export default function SubtitleTransition() {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				initial={{ height: "fitContent", opacity: 1 }}
				animate={{ height: 0, opacity: 0 }}
				transition={{ duration: 0.75, ease: "easeInOut" }}
			>
				<p className="text-2xl sm:text-3xl md:text-4xl font-bold">
					... are complicated.
				</p>
				<p className="text-lg md:text-xl text-slate-500 dark:text-slate-400">
					Here are some resources to make them easier to understand
					and implement.
				</p>
			</m.div>
		</LazyMotion>
	);
}
