"use client";

import MenuIcon from "../../menu-icon";
import { m, useAnimate } from "framer-motion";
import ReactIcon from "../../../public/react-icon.svg";
import Image from "next/image";
import { useState } from "react";
import { block } from "million/react";

function Spinner() {
	return (
		<svg
			className="animate-spin w-5 h-5 sm:w-6 sm:h-6 text-current"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
			/>
			<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
	);
}

function PlayButton() {
	return (
		<svg
			viewBox="0 0 51 57"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="w-5 h-5 sm:w-6 sm:h-6"
		>
			<path
				d="M5.62791 56.3769C4.27374 56.3769 3.13832 55.8874 2.22166 54.9082C1.32582 53.9499 0.877907 52.6269 0.877907 50.9394V5.87694C0.877907 4.21027 1.32582 2.89777 2.22166 1.93944C3.13832 0.960271 4.27374 0.470688 5.62791 0.470688C6.31541 0.470688 6.98207 0.585271 7.62791 0.814438C8.27374 1.0436 8.98207 1.37694 9.75291 1.81444L46.8779 23.3457C48.2737 24.1374 49.2946 24.9186 49.9404 25.6894C50.5862 26.4394 50.9092 27.3457 50.9092 28.4082C50.9092 29.4915 50.5862 30.4082 49.9404 31.1582C49.2946 31.9082 48.2737 32.6894 46.8779 33.5019L9.75291 55.0019C8.98207 55.4603 8.27374 55.804 7.62791 56.0332C6.98207 56.2624 6.31541 56.3769 5.62791 56.3769Z"
				fill="currentColor"
				className="text-gray-700 dark:text-gray-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-all"
			/>
		</svg>
	);
}

export default function ServerRendering({ caption }: { caption: string }) {
	const [iconScope, iconAnimate] = useAnimate();
	const [tooltipScope, tooltipAnimate] = useAnimate();
	const [renderToStringScope, renderToStringAnimate] = useAnimate();
	const [navScope, navAnimate] = useAnimate();
	const [copyScope, copyAnimate] = useAnimate();
	const [heroScope, heroAnimate] = useAnimate();
	const [logoCloudScope, logoCloudAnimate] = useAnimate();
	const [isPlaying, setIsPlaying] = useState(false);

	async function tooltipAnimation() {
		await tooltipAnimate(
			tooltipScope.current,
			{ translateY: "-100%", opacity: 1 },
			{ duration: 0.8, delay: 1.5 }
		);
		await tooltipAnimate(
			tooltipScope.current,
			{ translateX: "150%" },
			{
				ease: "easeInOut",
				duration: 1,
				delay: 1.5,
			}
		);
		await tooltipAnimate(
			tooltipScope.current,
			{ opacity: 0, translateY: "200%" },
			{ ease: "easeInOut", duration: 1 }
		);
		await tooltipAnimate(
			tooltipScope.current,
			{ translateX: "0%" },
			{ duration: 0 }
		);
	}

	async function iconAnimation() {
		await iconAnimate(iconScope.current, { opacity: 1 }, { duration: 0.5 });
		await iconAnimate(
			iconScope.current,
			{ rotate: 30 },
			{ ease: "linear", delay: 0.5 }
		);
		await iconAnimate(
			iconScope.current,
			{ rotate: [30, 0] },
			{ type: "spring", stiffness: 500 }
		);
		await iconAnimate(
			iconScope.current,
			{ opacity: 0 },
			{ duration: 0.7, delay: 1 }
		);
	}

	async function renderToStringAnimation() {
		await renderToStringAnimate(
			renderToStringScope.current,
			{ opacity: 1 },
			{ duration: 0.7 }
		);
		await renderToStringAnimate(
			renderToStringScope.current,
			{ opacity: 0 },
			{ delay: 2.5, duration: 0.7 }
		);
	}

	async function browserAnimation() {
		await navAnimate(
			navScope.current,
			{ opacity: 0, translateY: 0 },
			{ delay: 0, duration: 0 }
		);
		await copyAnimate(
			copyScope.current,
			{ opacity: 0, translateY: 0 },
			{ delay: 0, duration: 0 }
		);
		await heroAnimate(
			heroScope.current,
			{ opacity: 0, translateY: 0 },
			{ delay: 0, duration: 0 }
		);
		await logoCloudAnimate(
			logoCloudScope.current,
			{ opacity: 0, translateY: 0 },
			{ delay: 0, duration: 0 }
		);

		await navAnimate(
			navScope.current,
			{ opacity: 1, translateY: [-20, 0] },
			{ delay: 5.5 }
		);
		await copyAnimate(copyScope.current, {
			opacity: 1,
			translateY: [-20, 0],
		});
		await heroAnimate(heroScope.current, {
			opacity: 1,
			translateY: [-20, 0],
		});
		await logoCloudAnimate(logoCloudScope.current, {
			opacity: 1,
			translateY: [-20, 0],
		});
	}

	async function playAnimation() {
		await Promise.all([
			iconAnimation(),
			browserAnimation(),
			tooltipAnimation(),
			renderToStringAnimation(),
		]);
	}

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function handleClick() {
		setIsPlaying(true);
		await delay(100);
		await playAnimation();
		setIsPlaying(false);
	}

	return (
		<div className="my-4 h-full">
			<div className="flex justify-between items-center overflow-hidden">
				<div className="flex justify-between items-center w-full">
					<div className="grid place-items-center mr-4 sm:mr-6 md:mr-8 lg:mr-10">
						<m.div
							className="mb-6 z-50 absolute"
							ref={tooltipScope}
							style={{ opacity: 0, translateY: "200%" }}
						>
							<span className="font-mono text-lg sm:text-xl md:text-2xl border-2 border-gray-500 dark:border-gray-600 rounded-lg p-2 bg-gray-50 dark:bg-stone-950">
								`&lt;html/&gt;`
							</span>
						</m.div>
						<span className="font-mono absolute translate-x-[44%] -translate-y-[250%] sm:-translate-y-[328%] md:-translate-y-[570%]">
							Server
						</span>
						<Image
							src={ReactIcon}
							alt="React Icon"
							className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 opacity-0"
							ref={iconScope}
						/>
						<div>
							<div
								className="text-sm sm:text-base md:text-lg text-center mt-4 opacity-0"
								ref={renderToStringScope}
							>
								<div className="text-[#FFAB70]">React.</div>
								<span className="text-[#B392F0]">
									renderToString
								</span>
								()
							</div>
						</div>
					</div>
					<div
						aria-hidden="true"
						className="dark:bg-stone-950 bg-gray-50 border-2 border-gray-300 dark:border-gray-600 h-fit max-[475px]:max-h-64 w-full rounded-xl p-3 px-0 relative"
					>
						<div className="flex w-full rounded-t-xl justify-between border-b-2 border-gray-300 dark:border-gray-600 relative">
							<div className="flex my-auto min-w-fit w-full pt-2 pb-4 px-4 max-[475px]:pt-0.5 max-[475px]:pb-3">
								<div className="h-3.5 w-3.5 rounded-full bg-red-500 inline-block mr-2" />
								<div className="h-3.5 w-3.5 rounded-full bg-yellow-500 inline-block mr-2" />
								<div className="h-3.5 w-3.5 rounded-full bg-green-500 inline-block mr-2" />
							</div>
							<span className="font-mono absolute inset-0 translate-x-[44%] max-[475px]:-mt-1 max-[475px]:ml-3">
								Client
							</span>
						</div>
						<div className="mt-2 -mx-3 bg-none h-fit rounded-t-sm rounded-b-[10px] p-4 px-8 overflow-hidden">
							<div>
								<div
									className="flex items-center justify-between opacity-0"
									ref={navScope}
								>
									<div className="flex gap-x-1 items-center relative">
										<div className="rounded-full w-6 h-6 max-[475px]:w-4 max-[475px]:h-4 gradient" />
										<div className="bg-gray-300 dark:bg-gray-600 h-3 rounded-md w-12 max-[475px]:h-2" />
									</div>
									<div className="hidden md:flex items-center gap-x-2 lg:gap-x-4 relative">
										<div className="bg-gray-300 dark:bg-gray-600 h-3 rounded-md w-8" />
										<div className="bg-gray-300 dark:bg-gray-600 h-3 rounded-md w-8" />
									</div>
									<div className="hidden md:flex items-center relative gap-x-4">
										<div className="text-gray-600/50 dark:text-gray-300/50 text-sm font-medium">
											Log In
										</div>
										<div className="text-gray-600/50 dark:text-gray-300/50 text-sm font-medium">
											Sign Up
										</div>
									</div>
									<div className="relative md:hidden -mt-1">
										<MenuIcon className="stroke-gray-300/50" />
									</div>
								</div>
								<div className="grid grid-cols-2 pt-6 space-x-2">
									<div className="opacity-0" ref={copyScope}>
										<div className="relative">
											<div className="mt-2 bg-gray-300 dark:bg-gray-600 h-3 rounded-sm w-20 max-w-full max-[475px]:h-1.5 max-[475px]:mt-1" />
											<div className="mt-4 bg-gray-300 dark:bg-gray-600 h-6 rounded-md w-28 max-w-full max-[475px]:h-3 max-[475px]:mt-2" />
											<div className="mt-2 bg-gray-300 dark:bg-gray-600 h-3 rounded-sm w-36 max-w-full max-[475px]:h-1.5 max-[475px]:mt-1" />
											<div className="mt-2 bg-gray-300 dark:bg-gray-600 h-3 rounded-sm w-48 max-w-full max-[475px]:h-1.5 max-[475px]:mt-1" />
											<div className="mt-2 bg-gray-300 dark:bg-gray-600 h-3 rounded-sm w-32 max-w-full max-[475px]:h-1.5 max-[475px]:mt-1" />
										</div>
										<div className="mt-8 gradient h-5 rounded-full w-16 inset-0 px-2 max-[475px]:h-3 max-[475px]:w-full" />
									</div>
									<div
										className="relative h-40 md:h-64 w-full opacity-0"
										ref={heroScope}
									>
										<div className="mt-2 bg-gray-300 dark:bg-gray-600 h-24 sm:h-32 md:h-full rounded-md w-full relative"></div>
									</div>
								</div>
							</div>
							<div className="mt-12 hidden md:grid">
								<div
									className="relative pt-4 opacity-0"
									ref={logoCloudScope}
								>
									<div className="mx-auto h-3 rounded-sm bg-gray-300 dark:bg-gray-600 w-32" />
									<div className="mt-4 flex gap-x-4 justify-center">
										<div className="rounded-full w-6 h-6 bg-gray-300 dark:bg-gray-600" />
										<div className="rounded-full w-6 h-6 bg-gray-300 dark:bg-gray-600" />
										<div className="rounded-full w-6 h-6 bg-gray-300 dark:bg-gray-600" />
										<div className="rounded-full w-6 h-6 bg-gray-300 dark:bg-gray-600" />
										<div className="rounded-full w-6 h-6 bg-gray-300 dark:bg-gray-600" />
										<div className="rounded-full w-6 h-6 bg-gray-300 dark:bg-gray-600 hidden sm:flex" />
										<div className="rounded-full w-6 h-6 bg-gray-300 dark:bg-gray-600 hidden md:flex" />
										<div className="rounded-full w-6 h-6 bg-gray-300 dark:bg-gray-600 hidden lg:flex" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center">
				<div className="mr-3">
					<div className="w-12 h-[56px] sm:w-16 sm:h-[72px] bg-gray-300 border-gray-300 dark:bg-gray-600 dark:border-gray-600 rounded-xl md:rounded-2xl border-2 absolute" />
					<button
						onClick={handleClick}
						disabled={isPlaying}
						aria-label="play animation"
						className="group w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-600 rounded-xl md:rounded-2xl border-2 grid place-items-center hover:bg-gray-200 dark:hover:bg-gray-700 disabled:bg-gray-100 dark:disabled:bg-gray-800 active:scale-90 transition-all duration-150 relative text-gray-700 dark:text-gray-300"
					>
						<>{isPlaying ? <Spinner /> : <PlayButton />}</>
					</button>
				</div>
				<div className="flex items-center text-sm sm:text-base md:text-lg text-center mt-4">
					<div>{caption}</div>
				</div>
			</div>
		</div>
	);
}
