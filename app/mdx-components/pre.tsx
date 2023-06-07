"use client";

import { ReactNode, useRef } from "react";
import CopyToClipboard from "./copy-to-clipboard";

export default function Pre({ children }: { children: ReactNode }) {
	const preRef = useRef<HTMLPreElement | null>(null);

	return (
		<pre>
			<code ref={preRef} className="group flex justify-between">
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
