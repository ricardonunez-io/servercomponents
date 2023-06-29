import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
	icons: "./favicon.ico",
	openGraph: {},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="dark:bg-stone-950 dark:text-gray-300 dark:bg-dark-hero-pattern bg-gray-50 text-gray-700 bg-hero-pattern text-base font-medium md:text-lg overflow-x-hidden">
			<div className="relative">
				{children}
			</div>
			<Footer/>
			</body>
		</html>
	);
}
