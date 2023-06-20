import MenuIcon from "@/app/menu-icon";

function Spinner({ size }: { size: number }) {
	return (
		<svg
			className={`animate-spin w-${size} h-${size} text-current`}
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

export default function SpinnerAnimation({ caption }: { caption: string }) {
	return (
		<div className="my-4 h-full max-w-2xl mx-auto">
			<div
				aria-hidden="true"
				className="dark:bg-stone-950 bg-gray-50 border-2 border-gray-300 dark:border-gray-600 h-fit max-[475px]:max-h-64 w-full rounded-xl p-3 px-0 relative"
			>
				<div
					className="flex w-full rounded-t-xl justify-between border-b-2 border-gray-300 dark:border-gray-600 relative">
					<div className="flex my-auto min-w-fit w-full pt-2 pb-4 px-4 max-[475px]:pt-0.5 max-[475px]:pb-3">
						<div className="h-3.5 w-3.5 rounded-full bg-red-500 inline-block mr-2"/>
						<div className="h-3.5 w-3.5 rounded-full bg-yellow-500 inline-block mr-2"/>
						<div className="h-3.5 w-3.5 rounded-full bg-green-500 inline-block mr-2"/>
					</div>
				</div>
				<div className="mt-2 -mx-3 bg-none rounded-t-sm rounded-b-[10px] p-4 px-8">
					<div>
						<div className="flex items-center justify-between">
							<Spinner size={6}/>
							<div className="hidden md:flex items-center gap-x-2 lg:gap-x-4 relative">
								<Spinner size={6}/>
							</div>
							<div className="hidden md:flex items-center relative gap-x-4">
								<Spinner size={6}/>
							</div>
							<div className="relative md:hidden -mt-1">
								<Spinner size={6}/>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 md:mt-12 space-x-2 place-items-center">
							<div className="md:mt-12">
								<Spinner size={24}/>
							</div>
							<div className="hidden md:flex md:mt-12">
								<Spinner size={24}/>
							</div>
						</div>
						<div className="justify-center pt-12 hidden md:flex">
							<Spinner size={10}/>
						</div>
					</div>
				</div>
			</div>
			<div className="text-sm sm:text-base md:text-lg text-center mt-4">
				<div>{caption}</div>
			</div>
		</div>
	)
}
