import "./globals.css";
import Footer from "@/components/footer";
import type { ReactNode } from "react";

export const metadata = {
	icons: "./favicon.ico",
	twitter: {
		card: 'summary_large_image',
		title: "ServerComponents.dev | What are RSCs"
	},
	openGraph: {
		title: "ServerComponents.dev | What are RSCs"
	}
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
		{/* eslint-disable-next-line @next/next/no-head-element */}
		<body className="dark:bg-stone-950 dark:text-gray-300 dark:bg-dark-hero-pattern bg-gray-50 text-gray-700 bg-hero-pattern text-base font-medium md:text-lg overflow-x-hidden">
		<div className="relative">
			{children}
		</div>
		<Footer/>
		</body>
		</html>
	);
}
