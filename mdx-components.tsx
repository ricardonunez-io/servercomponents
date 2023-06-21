import type { MDXComponents } from "mdx/types";
import H1 from "@/components/mdx-components/h1";
import H2 from "@/components/mdx-components/h2";
import H3 from "@/components/mdx-components/h3";
import P from "@/components/mdx-components/p";
import Pre from "@/components/mdx-components/pre";
import A from "@/components/mdx-components/a";
import UL from "@/components/mdx-components/ul";
import OL from "@/components/mdx-components/ol";
import LI from "@/components/mdx-components/li";
import Blockquote from "@/components/mdx-components/blockquote";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		pre: ({ children }) => <Pre>{children}</Pre>,
		h1: ({ children }) => <H1>{children}</H1>,
		h2: ({ children }) => <H2>{children}</H2>,
		h3: ({ children }) => <H3>{children}</H3>,
		p: ({ children }) => <P>{children}</P>,
		ul: ({ children }) => <UL>{children}</UL>,
		li: ({ children }) => <LI>{children}</LI>,
		// @ts-expect-error
		a: ({ children, href }) => <A href={href}>{children}</A>,
		blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
		ol: ({ children }) => <OL>{children}</OL>,
		...components,
	};
}
