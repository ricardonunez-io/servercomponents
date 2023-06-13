"use client";

import MenuIcon from "../../menu-icon";
import { m, useAnimate } from "framer-motion";
import ReactIcon from "../../../public/react-icon.svg";
import Image from "next/image";
import { useState } from "react";

function Spinner() {
	return (
		<svg
			className="animate-spin w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 text-current"
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
				stroke-width="4"
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
			className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-12 lg:h-12"
		>
			<path
				d="M5.62791 56.3769C4.27374 56.3769 3.13832 55.8874 2.22166 54.9082C1.32582 53.9499 0.877907 52.6269 0.877907 50.9394V5.87694C0.877907 4.21027 1.32582 2.89777 2.22166 1.93944C3.13832 0.960271 4.27374 0.470688 5.62791 0.470688C6.31541 0.470688 6.98207 0.585271 7.62791 0.814438C8.27374 1.0436 8.98207 1.37694 9.75291 1.81444L46.8779 23.3457C48.2737 24.1374 49.2946 24.9186 49.9404 25.6894C50.5862 26.4394 50.9092 27.3457 50.9092 28.4082C50.9092 29.4915 50.5862 30.4082 49.9404 31.1582C49.2946 31.9082 48.2737 32.6894 46.8779 33.5019L9.75291 55.0019C8.98207 55.4603 8.27374 55.804 7.62791 56.0332C6.98207 56.2624 6.31541 56.3769 5.62791 56.3769Z"
				fill="currentColor"
				className="text-white group-hover:text-emerald-500 transition-all"
			/>
		</svg>
	);
}

export default function ServerRendering({ caption }: { caption: string }) {
	const [iconScope, iconAnimate] = useAnimate();
	const [browserScope, browserAnimate] = useAnimate();
	const [tooltipScope, tooltipAnimate] = useAnimate();
	const [isPlaying, setIsPlaying] = useState(false);
	const [renderToStringScope, renderToStringAnimate] = useAnimate();

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
		await browserAnimate(
			browserScope.current,
			{ opacity: [0, 1] },
			{ delay: 5.5 }
		);
		await browserAnimate(
			browserScope.current,
			{ opacity: 0 },
			{ delay: 3, duration: 0.7 }
		);
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
		<div className="my-4">
			<div className="flex justify-between items-center overflow-hidden">
				<div className="flex justify-between items-center w-full">
					<div className="grid place-items-center mr-4 sm:mr-6 md:mr-8 lg:mr-10">
						<m.div
							className="mb-6 z-50 absolute"
							ref={tooltipScope}
							style={{ opacity: 0, translateY: "200%" }}
						>
							<code className="text-lg sm:text-xl md:text-2xl border-2 border-slate-500 dark:border-slate-600 rounded-lg p-2 bg-slate-50 dark:bg-gray-950">
								`&lt;html/&gt;`
							</code>
						</m.div>
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
						className="dark:bg-stone-950 bg-slate-50 border-2 border-slate-300 dark:border-slate-600 h-fit max-[475px]:max-h-64 w-full rounded-xl p-3 px-0 relative"
					>
						<div className="flex w-full rounded-t-xl justify-between border-b-2 border-slate-300 dark:border-slate-600">
							<div className="flex my-auto min-w-fit w-full pt-2 pb-4 px-4 max-[475px]:pt-0.5 max-[475px]:pb-2">
								<div className="h-3.5 w-3.5 rounded-full bg-red-500 inline-block mr-2" />
								<div className="h-3.5 w-3.5 rounded-full bg-yellow-500 inline-block mr-2" />
								<div className="h-3.5 w-3.5 rounded-full bg-green-500 inline-block mr-2" />
							</div>
						</div>
						<div
							ref={browserScope}
							className="mt-2 -mx-3 bg-none h-fit rounded-t-sm rounded-b-[10px] p-4 px-8 overflow-hidden opacity-0"
						>
							<div>
								<div className="flex items-center justify-between">
									<div className="flex gap-x-1 items-center relative">
										<div className="rounded-full w-6 h-6 max-[475px]:w-4 max-[475px]:h-4 gradient" />
										<div className="bg-slate-300 dark:bg-slate-600 h-3 rounded-md w-12 max-[475px]:h-2" />
									</div>
									<div className="hidden md:flex items-center gap-x-2 lg:gap-x-4 relative">
										<div className="bg-slate-300 dark:bg-slate-600 h-3 rounded-md w-8" />
										<div className="bg-slate-300 dark:bg-slate-600 h-3 rounded-md w-8" />
									</div>
									<div className="hidden md:flex items-center relative gap-x-4">
										<div className="text-slate-600/50 dark:text-slate-300/50 text-sm font-medium">
											Log In
										</div>
										<div className="text-slate-600/50 dark:text-slate-300/50 text-sm font-medium">
											Sign Up
										</div>
									</div>
									<div className="relative md:hidden -mt-1">
										<MenuIcon className="stroke-slate-300/50" />
									</div>
								</div>
								<div className="grid grid-cols-2 pt-6 space-x-2">
									<div>
										<div className="relative">
											<div className="mt-2 bg-slate-300 dark:bg-slate-600 h-3 rounded-sm w-20 max-w-full max-[475px]:h-1.5 max-[475px]:mt-1" />
											<div className="mt-4 bg-slate-300 dark:bg-slate-600 h-6 rounded-md w-28 max-w-full max-[475px]:h-3 max-[475px]:mt-2" />
											<div className="mt-2 bg-slate-300 dark:bg-slate-600 h-3 rounded-sm w-36 max-w-full max-[475px]:h-1.5 max-[475px]:mt-1" />
											<div className="mt-2 bg-slate-300 dark:bg-slate-600 h-3 rounded-sm w-48 max-w-full max-[475px]:h-1.5 max-[475px]:mt-1" />
											<div className="mt-2 bg-slate-300 dark:bg-slate-600 h-3 rounded-sm w-32 max-w-full max-[475px]:h-1.5 max-[475px]:mt-1" />
										</div>
										<div className="mt-8 gradient h-5 rounded-full w-16 inset-0 px-2 max-[475px]:h-3 max-[475px]:w-full" />
									</div>

									<div className="relative h-40 md:h-64 w-full">
										<div className="mt-2 bg-slate-300 dark:bg-slate-600 h-24 sm:h-32 md:h-full rounded-md w-full relative"></div>
									</div>
								</div>
							</div>
							<div className="mt-12 hidden md:grid">
								<div className="relative pt-4">
									<div className="mx-auto h-3 rounded-sm bg-slate-300 dark:bg-slate-600 w-32" />
									<div className="mt-4 flex gap-x-4 justify-center">
										<div className="rounded-full w-6 h-6 bg-slate-300 dark:bg-slate-600" />
										<div className="rounded-full w-6 h-6 bg-slate-300 dark:bg-slate-600" />
										<div className="rounded-full w-6 h-6 bg-slate-300 dark:bg-slate-600" />
										<div className="rounded-full w-6 h-6 bg-slate-300 dark:bg-slate-600" />
										<div className="rounded-full w-6 h-6 bg-slate-300 dark:bg-slate-600" />
										<div className="rounded-full w-6 h-6 bg-slate-300 dark:bg-slate-600 hidden sm:flex" />
										<div className="rounded-full w-6 h-6 bg-slate-300 dark:bg-slate-600 hidden md:flex" />
										<div className="rounded-full w-6 h-6 bg-slate-300 dark:bg-slate-600 hidden lg:flex" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center">
				<div className="mr-6 sm:mr-8 md:mr-10 lg:mr-12">
					<div className="w-12 h-[56px] sm:w-16 sm:h-[72px] md:w-20 md:h-[88px] lg:w-24 lg:h-[104px] bg-gray-600 rounded-lg border-2 border-gray-600 absolute  transition-all" />
					<button
						onClick={handleClick}
						disabled={isPlaying}
						aria-label="play animation"
						className="group w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-800 rounded-lg border-2 border-gray-600 text-white grid place-items-center hover:bg-gray-700 disabled:opacity-50 disabled:bg-gray-950 active:scale-90 transition-all transform-gpu duration-150 relative"
					>
						<>{isPlaying ? <Spinner /> : <PlayButton />}</>
					</button>
				</div>
				<div className="text-sm sm:text-base md:text-lg text-center mt-4">
					{caption}
				</div>
			</div>
		</div>
	);
}
