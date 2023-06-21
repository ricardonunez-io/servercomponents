"use client";

import { Mermaid as MermaidComponent } from 'mdx-mermaid/lib/Mermaid';

export default function Mermaid({ chart }: { chart: string }) {
	return <MermaidComponent chart={chart} />;
}
