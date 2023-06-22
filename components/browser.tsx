"use client";

import MenuIcon from "./menu-icon";
import { m, LazyMotion, domAnimation } from "framer-motion";

export default function Browser() {
	const draw = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: (i: any) => {
			const delay = 2;
			return {
				pathLength: 1,
				opacity: 1,
				transition: {
					pathLength: {
						delay,
						type: "spring",
						duration: 2,
						bounce: 0,
					},
					opacity: { delay, duration: 0.01 },
				},
			};
		},
	};

	return (
		<LazyMotion features={domAnimation}>
			<m.div
				aria-hidden="true"
				className="dark:bg-stone-950 bg-gray-50 border-2 border-gray-300 dark:border-gray-600 h-fit w-full rounded-xl p-3 px-0 relative bg-blend-exclusion z-50"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5, ease: "easeOut" }}
			>
				<div className="flex w-full rounded-t-xl justify-between border-b-2 border-gray-300 dark:border-gray-600">
					<div className="flex my-auto min-w-fit w-full pt-2 pb-4 px-4">
						<div className="h-3.5 w-3.5 rounded-full bg-red-500 inline-block mr-2" />
						<div className="h-3.5 w-3.5 rounded-full bg-yellow-500 inline-block mr-2" />
						<div className="h-3.5 w-3.5 rounded-full bg-green-500 inline-block mr-2" />
					</div>
					<m.div
						className="flex bg-none space-x-4 mr-4 font-mono"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 4, duration: 2 }}
					>
						<code className="text-sky-500 dark:text-sky-400">
							Server
						</code>
						<code className="text-pink-500">Client</code>
					</m.div>
				</div>
				<div className="mt-2 -mx-3 bg-none h-fit rounded-t-sm rounded-b-[10px] p-4 px-8 overflow-hidden">
					<div>
						<div className="flex items-center justify-between">
							<div className="flex gap-x-1 items-center relative">
								<m.svg
									initial="hidden"
									animate="visible"
									className="absolute w-24 h-10 -ml-2 -mt-2 rounded-md inset-0"
								>
									<m.rect
										className="h-full rounded-lg w-full absolute stroke-[6] stroke-sky-500"
										xmlns="http://www.w3.org/2000/svg"
										strokeLinecap="round"
										variants={draw}
										fill="none"
									/>
								</m.svg>
								<div className="rounded-full w-6 h-6 gradient" />
								<div className="bg-gray-300 dark:bg-gray-600 h-3 rounded-md w-12" />
							</div>
							<div className="hidden md:flex items-center gap-x-2 lg:gap-x-4 relative">
								<m.svg
									initial="hidden"
									animate="visible"
									className="absolute w-28 h-10 -ml-4 -mt-3.5 rounded-md inset-0"
								>
									<m.rect
										className="h-full rounded-lg w-full absolute stroke-[6] stroke-pink-500"
										xmlns="http://www.w3.org/2000/svg"
										strokeLinecap="round"
										variants={draw}
										fill="none"
									/>
								</m.svg>
								<div className="bg-gray-300 dark:bg-gray-600 h-3 rounded-md w-8" />
								<div className="bg-gray-300 dark:bg-gray-600 h-3 rounded-md w-8" />
							</div>
							<div className="hidden md:flex items-center relative gap-x-4">
								<m.svg
									initial="hidden"
									animate="visible"
									className="absolute w-10 md:w-36 h-10 -ml-5 -mt-2.5 rounded-md inset-0"
								>
									<m.rect
										className="h-full rounded-lg w-full absolute stroke-[6] stroke-pink-500"
										xmlns="http://www.w3.org/2000/svg"
										strokeLinecap="round"
										variants={draw}
										fill="none"
									/>
								</m.svg>
								<div className="text-gray-600/50 dark:text-gray-300/50 text-sm font-medium">
									Log In
								</div>
								<div className="text-gray-600/50 dark:text-gray-300/50 text-sm font-medium">
									Sign Up
								</div>
							</div>
							<div className="relative md:hidden">
								<m.svg
									initial="hidden"
									animate="visible"
									className="absolute w-10 h-10 -ml-[11px] -mt-[13px] rounded-md inset-0"
								>
									<m.rect
										className="h-full rounded-lg w-full absolute stroke-[6] stroke-pink-500"
										xmlns="http://www.w3.org/2000/svg"
										strokeLinecap="round"
										variants={draw}
										fill="none"
									/>
								</m.svg>
								<MenuIcon className="stroke-gray-300/50" />
							</div>
						</div>
						<div className="grid grid-cols-2 pt-6 space-x-2">
							<div>
								<div className="relative">
									<m.svg
										initial="hidden"
										animate="visible"
										className="w-52 max-w-full h-full rounded-md"
									>
										<m.rect
											className="h-full rounded-lg w-full absolute stroke-[6] stroke-sky-500 dark:stroke-sky-400"
											xmlns="http://www.w3.org/2000/svg"
											strokeLinecap="round"
											variants={draw}
											fill="none"
										/>
									</m.svg>
									<div className="absolute inset-0 px-2 pt-3">
										<div className="mt-2 bg-gray-300 dark:bg-gray-600 h-3 rounded-sm w-20 max-w-full" />
										<div className="mt-4 bg-gray-300 dark:bg-gray-600 h-6 rounded-md w-28 max-w-full" />
										<div className="mt-2 bg-gray-300 dark:bg-gray-600 h-3 rounded-sm w-36 max-w-full" />
										<div className="mt-2 bg-gray-300 dark:bg-gray-600 h-3 rounded-sm w-48 max-w-full" />
										<div className="mt-2 bg-gray-300 dark:bg-gray-600 h-3 rounded-sm w-32 max-w-full" />
									</div>
								</div>
								<div className="relative mt-2 h-fit">
									<m.svg
										initial="hidden"
										animate="visible"
										className="w-24 h-10 rounded-md"
									>
										<m.rect
											className="h-full rounded-lg w-full absolute stroke-[6] stroke-pink-500"
											xmlns="http://www.w3.org/2000/svg"
											strokeLinecap="round"
											variants={draw}
											fill="none"
										/>
									</m.svg>
									<div className="mt-2.5 mx-3.5 gradient h-5 rounded-full w-16 absolute inset-0 px-2" />
								</div>
							</div>

							<div className="relative h-40 md:h-64 w-full">
								<div className="mt-2 bg-gray-300 dark:bg-gray-600 h-full rounded-md w-full relative">
									<m.svg
										initial="hidden"
										animate="visible"
										className="w-full h-full rounded-md"
									>
										<m.rect
											className="h-full rounded-lg w-full absolute stroke-[6] stroke-sky-500 dark:stroke-sky-400"
											xmlns="http://www.w3.org/2000/svg"
											strokeLinecap="round"
											variants={draw}
											fill="none"
										/>
									</m.svg>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-12 hidden md:grid">
						<div className="relative pt-4">
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
							<m.svg
								initial="hidden"
								animate="visible"
								className="absolute w-full h-[5.2rem] rounded-md inset-0"
							>
								<m.rect
									className="w-full h-full absolute rounded-lg stroke-[6] stroke-sky-500 dark:stroke-sky-400"
									xmlns="http://www.w3.org/2000/svg"
									strokeLinecap="round"
									variants={draw}
									fill="none"
								/>
							</m.svg>
						</div>
					</div>
				</div>
			</m.div>
		</LazyMotion>
	);
}
