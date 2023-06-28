"use client";

import MenuIcon from "../menu-icon";
import ReactIcon from "../../../public/react-icon.svg";
import Image from "next/image";
import ReactLogo from "@/components/logos/react-logo";

export default function HydrationAnimation({ caption }: { caption: string }) {
	return (
		<div className="my-4 h-full" aria-hidden="true">
			<div className="flex justify-between items-center overflow-hidden">
				<div className="flex items-center w-full">
					<div className="basis-1/3 md:basis-1/4 relative flex items-center">
						<div className="flex flex-col justify-center items-center">
							<ReactLogo className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-sky-500 dark:text-sky-400"/>
								<div className="text-center text-sky-500 dark:text-sky-400 text-sm sm:text-base md:text-lg">
									<div>Event Listeners</div>
									<div>Side Effects</div>
									<div>Click Handlers</div>
									<div>State Updates</div>
									Etc.
								</div>
						</div>
						<div className="w-full h-1 absolute translate-x-[70px] sm:translate-x-[86px] md:translate-x-[104px] lg:translate-x-[118px] shimmer-first hidden md:flex"/>
					</div>
					<div
						className="dark:bg-stone-950 bg-gray-50 border-2 border-gray-300 dark:border-gray-600 h-fit max-[475px]:max-h-64 w-full rounded-xl p-3 px-0 relative basis-2/3 md:basis-3/4 shimmer"
					>
						<div className="flex w-full rounded-t-xl justify-between border-b-2 border-gray-300 dark:border-gray-600 relative">
							<div className="flex my-auto min-w-fit w-full pt-2 pb-4 px-4 max-[475px]:pt-0.5 max-[475px]:pb-3">
								<div className="h-3.5 w-3.5 rounded-full bg-red-500 inline-block mr-2"/>
								<div className="h-3.5 w-3.5 rounded-full bg-yellow-500 inline-block mr-2"/>
								<div className="h-3.5 w-3.5 rounded-full bg-green-500 inline-block mr-2"/>
							</div>
						</div>
						<div className="mt-2 -mx-3 bg-none h-fit rounded-t-sm rounded-b-[10px] p-4 px-8 overflow-hidden">
							<div>
								<div
									className="flex items-center justify-between "
								>
									<div className="flex gap-x-1 items-center relative">
										<div className="rounded-full w-6 h-6 max-[475px]:w-4 max-[475px]:h-4 bg-gray-300 dark:bg-gray-600 shimmer"/>
										<div className="bg-gray-300 dark:bg-gray-600 shimmer h-3 rounded-md w-12 max-[475px]:h-2"/>
									</div>
									<div className="hidden md:flex items-center gap-x-2 lg:gap-x-4 relative">
										<div className="bg-gray-300 dark:bg-gray-600 shimmer h-3 rounded-md w-8"/>
										<div className="bg-gray-300 dark:bg-gray-600 shimmer h-3 rounded-md w-8"/>
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
										<MenuIcon className="stroke-gray-300/50"/>
									</div>
								</div>
								<div className="grid grid-cols-2 pt-6 space-x-2">
									<div>
										<div className="relative">
											<div className="mt-2 bg-gray-300 shimmer dark:bg-gray-600 h-3 rounded-sm w-20 max-w-full max-[475px]:h-1.5 max-[475px]:mt-1"/>
											<div className="mt-4 bg-gray-300 shimmer dark:bg-gray-600 h-6 rounded-md w-28 max-w-full max-[475px]:h-3 max-[475px]:mt-2"/>
											<div className="mt-2 bg-gray-300 shimmer dark:bg-gray-600 h-3 rounded-sm w-36 max-w-full max-[475px]:h-1.5 max-[475px]:mt-1"/>
											<div className="mt-2 bg-gray-300 shimmer dark:bg-gray-600 h-3 rounded-sm w-48 max-w-full max-[475px]:h-1.5 max-[475px]:mt-1"/>
											<div className="mt-2 bg-gray-300 shimmer dark:bg-gray-600 h-3 rounded-sm w-32 max-w-full max-[475px]:h-1.5 max-[475px]:mt-1"/>
										</div>
										<div className="mt-8 bg-gray-300 dark:bg-gray-600 shimmer h-5 rounded-full w-16 inset-0 px-2 max-[475px]:h-3 max-[475px]:w-full"/>
									</div>
									<div className="relative h-40 md:h-64 w-full">
										<div className="mt-2 bg-gray-300 shimmer dark:bg-gray-600 h-24 sm:h-32 md:h-full rounded-md w-full relative shimmer"/>
									</div>
								</div>
							</div>
							<div className="mt-12 hidden md:grid">
								<div
									className="relative pt-4 "
								>
									<div className="mx-auto h-3 rounded-sm bg-gray-300 shimmer dark:bg-gray-600 w-32"/>
									<div className="mt-4 flex gap-x-4 justify-center">
										<div className="rounded-full w-6 h-6 bg-gray-300 shimmer dark:bg-gray-600"/>
										<div className="rounded-full w-6 h-6 bg-gray-300 shimmer dark:bg-gray-600"/>
										<div className="rounded-full w-6 h-6 bg-gray-300 shimmer dark:bg-gray-600"/>
										<div className="rounded-full w-6 h-6 bg-gray-300 shimmer dark:bg-gray-600"/>
										<div className="rounded-full w-6 h-6 bg-gray-300 shimmer dark:bg-gray-600"/>
										<div className="rounded-full w-6 h-6 bg-gray-300 shimmer dark:bg-gray-600 hidden sm:flex"/>
										<div className="rounded-full w-6 h-6 bg-gray-300 shimmer dark:bg-gray-600 hidden md:flex"/>
										<div className="rounded-full w-6 h-6 bg-gray-300 shimmer dark:bg-gray-600 hidden lg:flex"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-sm sm:text-base md:text-lg text-center mt-4 px-8">
				{caption}
			</div>
		</div>
	);
}
