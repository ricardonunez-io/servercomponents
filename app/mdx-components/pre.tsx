"use client";

import { ReactNode, useRef } from "react";
import CopyToClipboard from "./copy-to-clipboard";

export default function Pre({ children }: { children: ReactNode }) {
	const preRef = useRef<HTMLPreElement | null>(null);

	return (
		<div className="group relative w-full overflow-y-hidden">
			<pre
				className="overflow-x-scroll relative p-4 font-mono rounded-xl bg-gray-100 dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800"
				ref={preRef}
			>
				{children}
			</pre>
			<div className="absolute right-1 top-1 group-hover:bg-inherit">
				<CopyToClipboard
					getValue={() =>
						preRef.current?.querySelector("code")?.textContent || ""
					}
				/>
			</div>
		</div>
	);
}
