import type { MDXComponents } from "mdx/types";
import H1 from "@/app/mdx-components/h1";
import H2 from "@/app/mdx-components/h2";
import H3 from "@/app/mdx-components/h3";
import P from "@/app/mdx-components/p";
import Pre from "@/app/mdx-components/pre";
import Code from "@/app/mdx-components/code";
import A from "@/app/mdx-components/a";
import UL from "@/app/mdx-components/ul";
import LI from "@/app/mdx-components/li";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		pre: ({ children }) => <Pre>{children}</Pre>,
		// code: ({ children }) => <Code>{children}</Code>,
		h1: ({ children }) => <H1>{children}</H1>,
		h2: ({ children }) => <H2>{children}</H2>,
		h3: ({ children }) => <H3>{children}</H3>,
		p: ({ children }) => <P>{children}</P>,
		ul: ({ children }) => <UL>{children}</UL>,
		li: ({ children }) => <LI>{children}</LI>,
		// @ts-expect-error
		a: ({ children, href }) => <A href={href}>{children}</A>,
		...components,
	};
}
