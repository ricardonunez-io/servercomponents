import type { MDXComponents } from "mdx/types";
import Pre from "@/components/mdx-components/pre";
import A from "@/components/mdx-components/a";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		pre: ({ children }) => <Pre>{children}</Pre>,
		/* @ts-expect-error-TS2322 */
		a: ({ children, href }) => <A href={href}>{children}</A>,
		...components,
	};
}
