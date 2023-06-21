import type { MDXComponents } from "mdx/types";
import H1 from "@/app/mdx-components/h1";
import H2 from "@/app/mdx-components/h2";
import H3 from "@/app/mdx-components/h3";
import P from "@/app/mdx-components/p";
import Pre from "@/app/mdx-components/pre";
import A from "@/app/mdx-components/a";
import UL from "@/app/mdx-components/ul";
import OL from "@/app/mdx-components/ol";
import LI from "@/app/mdx-components/li";
import Blockquote from "@/app/mdx-components/blockquote";

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
