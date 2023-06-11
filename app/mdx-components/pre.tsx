"use client";

import { ReactNode, useRef } from "react";
import CopyToClipboard from "./copy-to-clipboard";

export default function Pre({ children }: { children: ReactNode }) {
	const preRef = useRef<HTMLPreElement | null>(null);

	return (
		<pre className="w-full my-4">
			<code
				ref={preRef}
				className="group flex justify-between w-full p-3 m-1 text-slate-500 dark:text-slate-500 bg-slate-800 dark:bg-slate-800 font-mono rounded-xl text-base md:text-lg max-w-full overflow-x-scroll"
			>
				{children}
				<CopyToClipboard
					getValue={() =>
						preRef.current?.querySelector("code")?.textContent || ""
					}
				/>
			</code>
		</pre>
	);
}
