import "./globals.css";
import Footer from "@/components/footer";
import type { ReactNode } from "react";

export const metadata = {
	icons: "./favicon.ico",
	twitter: {
		card: 'summary_large_image',
		title: "ServerComponents.dev | What are RSCs",
	},
	openGraph: {
		title: "ServerComponents.dev | What are RSCs"
	}
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			{/* eslint-disable-next-line @next/next/no-head-element */}
			<head>
				<meta name="twitter:text:title" content="ServerComponents.dev | What are RSCs" />
			</head>
			<body className="dark:bg-neutral-900 dark:text-gray-300 bg-gray-50 text-gray-700 text-base font-medium md:text-lg overflow-x-hidden">
				<div className="relative">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
