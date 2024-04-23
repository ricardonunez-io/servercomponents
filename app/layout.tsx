import "./globals.css";
import Footer from "@/components/footer";
import type { ReactNode } from "react";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

const inter = localFont({
	src: [
		{
			path: "../public/InterVariable.woff2",
			style: "normal",
			weight: "100 900",
		},
		{
			path: "../public/InterVariable-Italic.woff2",
			style: "italic",
			weight: "100 900",
		},
	],
	fallback: ["-apple-system", "BlinkMacSystemFont", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
	variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin-ext"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrains_mono",
	fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "'Liberation Mono'", "Monaco", "Consolas", "'Courier New'", "monospace"],
});

export const metadata = {
	icons: "./favicon.ico",
	// metadataBase: "",
	twitter: {
		card: 'summary_large_image',
		title: "ServerComponents.dev | What are RSCs",
	},
	openGraph: {
		title: "ServerComponents.dev | What are RSCs"
	}
};

export default function RootLayout({ children }: { children: ReactNode; }) {
	return (
		<html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
			{/* eslint-disable-next-line @next/next/no-head-element */}
			<head>
				<meta name="twitter:text:title" content="ServerComponents.dev | What are RSCs" />
			</head>
			<body className={`dark:bg-gray-900 dark:text-gray-300 bg-gray-50 text-gray-700 font-medium text-sm md:text-base overflow-x-hidden`}>
				<div className="relative">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
