import { headers } from "next/headers";

export default function SubtitleTransition() {
	const headersList = headers();
	const referrer = headersList.get("referrer");

	console.log(headersList);

	/* if (referrer === "/") {
		return (
			<LazyMotion features={domAnimation}>
				<motion.div
					initial={{ height: "fitContent", opacity: 1 }}
					animate={{ height: 0, opacity: 0 }}
					transition={{ duration: 0.75, ease: "easeInOut" }}
				>
					<p className="text-2xl sm:text-3xl md:text-4xl font-bold">
						... are complicated.
					</p>
					<p className="text-lg md:text-xl text-slate-500 dark:text-slate-400">
						Here are some resources to make them easier to
						understand and implement.
					</p>
				</motion.div>
			</LazyMotion>
		);
	} else {
		return <></>;
	} */

	return <></>;
}
