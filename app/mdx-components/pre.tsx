"use client";

import { ReactNode, useRef } from "react";
import CopyToClipboard from "./copy-to-clipboard";

export default function Pre({ children }: { children: ReactNode }) {
	const preRef = useRef<HTMLPreElement | null>(null);

	return (
		<pre className="w-full">
			<code
				ref={preRef}
				className="group flex justify-between w-full pt-6 pb-4 px-6 m-1 font-mono rounded-xl bg-slate-800 overflow-x-scroll"
			>
				{children}
				<div className="-mt-2">
					<CopyToClipboard
						getValue={() =>
							preRef.current?.querySelector("code")
								?.textContent || ""
						}
					/>
				</div>
			</code>
		</pre>
	);
}
