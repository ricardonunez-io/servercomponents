export default function NetworkWaterfallExample() {
	return (
		<>
			<div className="relative scale-100 lg:scale-90">
				<div
					className="relative mx-2 max-h-[75vh] select-none overflow-hidden dark:bg-stone-950 bg-gray-50 border-2 border-gray-300 dark:border-gray-600 h-fit w-full rounded-xl md:mx-4 lg:mx-auto lg:max-w-4xl">
					<div className="flex items-center justify-center border-b-2 border-gray-300 dark:border-gray-600">
						<div className="flex my-auto min-w-fit w-full py-4 px-4">
							<div className="h-3.5 w-3.5 rounded-full bg-red-500 inline-block mr-2" />
							<div className="h-3.5 w-3.5 rounded-full bg-yellow-500 inline-block mr-2" />
							<div className="h-3.5 w-3.5 rounded-full bg-green-500 inline-block mr-2" />
						</div>
					</div>
					<div className="pb-2 md:pb-4">
						<div className="h-[25vh] bg-white sm:h-[38vh] hidden md:flex">
							<div className="relative flex overflow-hidden rounded bg-white text-gray-600 md:rounded-lg h-[25vh] sm:h-[38vh]">
								<div className="border-r border-gray-100 bg-gray-50">
									<div className="p-[5.7px] lg:p-4">
										<div className="flex items-center text-[color:#23BF1F]">
											<svg className="relative top-[1px] h-[8.5px] w-[8.5px] md:h-[18px] md:w-[18px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
												<path fill="#23BF1F" fillRule="evenodd"
													  d="M12 3a9 9 0 000 18h4.5c1.398 0 2.097 0 2.648-.228a3 3 0 001.624-1.624C21 18.597 21 17.898 21 16.5V12a9 9 0 00-9-9zm-4 8a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm3 4a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1z"
													  clipRule="evenodd"></path>
											</svg>
											<div className="w-[1px] md:w-1"></div>
											<div className="font-display text-xs font-extrabold md:text-base">Fakebooks</div>
										</div>
										<div className="h-2 md:h-7"></div>
										<div className="font-bold text-gray-800">
											<div
												className="my-[1.4px] py-[1.4px] px-[2.8px] pr-4 text-[length:7px] md:my-1 md:py-1 md:px-2 md:pr-16 md:text-[length:10px] lg:text-[length:14px] undefined">Dashboard
											</div>
											<div
												className="my-[1.4px] py-[1.4px] px-[2.8px] pr-4 text-[length:7px] md:my-1 md:py-1 md:px-2 md:pr-16 md:text-[length:10px] lg:text-[length:14px] undefined">Accounts
											</div>
											<div
												className="my-[1.4px] py-[1.4px] px-[2.8px] pr-4 text-[length:7px] md:my-1 md:py-1 md:px-2 md:pr-16 md:text-[length:10px] lg:text-[length:14px] rounded bg-gray-100 md:rounded-md">Sales
											</div>
											<div
												className="my-[1.4px] py-[1.4px] px-[2.8px] pr-4 text-[length:7px] md:my-1 md:py-1 md:px-2 md:pr-16 md:text-[length:10px] lg:text-[length:14px] undefined">Expenses
											</div>
											<div
												className="my-[1.4px] py-[1.4px] px-[2.8px] pr-4 text-[length:7px] md:my-1 md:py-1 md:px-2 md:pr-16 md:text-[length:10px] lg:text-[length:14px] undefined">Reports
											</div>
										</div>
									</div>
								</div>
								<div className="flex-1">
									<div className="relative h-full p-3 md:p-10">
										<div className="font-display text-[length:10px] font-extrabold text-black md:text-3xl">Sales</div>
										<div className="h-2 md:h-6"></div>
										<div className="flex gap-2 border-b border-gray-100 pb-1 text-[length:5px] font-medium text-gray-400 md:gap-4 md:pb-4 md:text-[length:14px]">
											<div>Overview</div>
											<div>Subscriptions</div>
											<div className="font-bold text-black">Invoices</div>
											<div>Customers</div>
											<div>Deposits</div>
										</div>
										<div className="h-3 md:h-4"></div>
										<div className="relative">
											<div className="flex items-center justify-between gap-1 md:gap-4">
												<div className="">
													<div className="text-[length:5px] font-medium uppercase leading-[8.5px] text-gray-400 md:text-[12px] md:leading-[24px]">Overdue</div>
													<div className="text-[length:6.4px] text-black md:text-[length:18px]">$10,800</div>
												</div>
												<div className="flex h-[6px] flex-1 overflow-hidden rounded-full md:h-4">
													<div className="w-1/3 bg-yellow-400"></div>
													<div className="flex-1 bg-green-400"></div>
												</div>
												<div className="text-right">
													<div className="text-[length:5px] font-medium uppercase leading-[8.5px] text-gray-400 md:text-[12px] md:leading-[24px]">Due Soon</div>
													<div className="text-[length:6.4px] text-black md:text-[length:18px]">$62,000</div>
												</div>
											</div>
											<div className="h-3 md:h-4"></div>
											<div className="text-[length:5px] font-medium uppercase leading-[8.5px] text-gray-400 md:text-[12px] md:leading-[24px]">Invoice List</div>
											<div className="h-[2.8px] md:h-2"></div>
											<div className="flex rounded border border-gray-100 md:rounded-lg">
												<div className="w-1/2 border-r border-gray-100">
													<div className="border-b border-gray-50 py-[4.2px] md:py-3 mx-[5.7px] border-transparent md:mx-4">
														<div className="flex justify-between text-[length:5px] font-bold leading-[8.5px] md:text-[length:14px] md:leading-6">
															<div>Santa Monica</div>
															<div>$10,800</div>
														</div>
														<div className="flex justify-between text-[length:4.2px] font-medium leading-[6px] text-gray-400 md:text-[length:12px] md:leading-4">
															<div>1995</div>
															<div className="uppercase text-red-400">Overdue</div>
														</div>
													</div>
													<div className="border-b border-gray-50 py-[4.2px] md:py-3 bg-gray-50 px-[5.7px] md:px-4">
														<div className="flex justify-between text-[length:5px] font-bold leading-[8.5px] md:text-[length:14px] md:leading-6">
															<div>Stankonia</div>
															<div>$8,000</div>
														</div>
														<div className="flex justify-between text-[length:4.2px] font-medium leading-[6px] text-gray-400 md:text-[length:12px] md:leading-4">
															<div>2000</div>
															<div className="uppercase ">Due Today</div>
														</div>
													</div>
													<div className="border-b border-gray-50 py-[4.2px] md:py-3 mx-[5.7px] border-transparent md:mx-4">
														<div className="flex justify-between text-[length:5px] font-bold leading-[8.5px] md:text-[length:14px] md:leading-6">
															<div>Ocean Avenue</div>
															<div>$9,500</div>
														</div>
														<div className="flex justify-between text-[length:4.2px] font-medium leading-[6px] text-gray-400 md:text-[length:12px] md:leading-4">
															<div>2003</div>
															<div className="uppercase text-green-400">Paid</div>
														</div>
													</div>
													<div className="border-b border-gray-50 py-[4.2px] md:py-3 mx-[5.7px] border-transparent md:mx-4">
														<div className="flex justify-between text-[length:5px] font-bold leading-[8.5px] md:text-[length:14px] md:leading-6">
															<div>Tubthumper</div>
															<div>$14,000</div>
														</div>
														<div className="flex justify-between text-[length:4.2px] font-medium leading-[6px] text-gray-400 md:text-[length:12px] md:leading-4">
															<div>1997</div>
															<div className="uppercase ">Due in 10 Days</div>
														</div>
													</div>
													<div className="border-b border-gray-50 py-[4.2px] md:py-3 mx-[5.7px] border-transparent md:mx-4">
														<div className="flex justify-between text-[length:5px] font-bold leading-[8.5px] md:text-[length:14px] md:leading-6">
															<div>Wide Open Sp...</div>
															<div>$4,600</div>
														</div>
														<div className="flex justify-between text-[length:4.2px] font-medium leading-[6px] text-gray-400 md:text-[length:12px] md:leading-4">
															<div>1998</div>
															<div className="uppercase ">Due in 8 Days</div>
														</div>
													</div>
												</div>
												<div className="w-1/2">
													<div className="relative p-3 md:p-10">
														<div className="text-[length:5px] font-bold leading-[8.5px] md:text-[length:14px] md:leading-6">Stankonia</div>
														<div className="text-[length:11px] font-bold leading-[14px] md:text-[length:32px] md:leading-[40px]">$8,000</div>
														<div className="text-[length:5px] font-medium uppercase leading-[8.5px] text-gray-400 md:text-[12px] md:leading-[24px]">Due Today • Invoiced
															10/31/2000
														</div>
														<div className="h-[5.7px] md:h-4"></div>
														<div className="flex justify-between border-t border-gray-100 py-[5.7px] text-[5px] leading-[9px] md:py-4 md:text-[14px] md:leading-[24px] ">
															<div>Pro Plan</div>
															<div>$6,000</div>
														</div>
														<div className="flex justify-between border-t border-gray-100 py-[5.7px] text-[5px] leading-[9px] md:py-4 md:text-[14px] md:leading-[24px] ">
															<div>Custom</div>
															<div>$2,000</div>
														</div>
														<div
															className="flex justify-between border-t border-gray-100 py-[5.7px] text-[5px] leading-[9px] md:py-4 md:text-[14px] md:leading-[24px] font-bold">
															<div>Net Total</div>
															<div>$8,000</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="h-4"></div>
						<div className="relative border-2 border-green-400 bg-green-400 bg-opacity-[15%] rounded-lg p-2 mx-2">
							<div className="absolute top-0 right-0 left-16 flex justify-around sm:left-28">
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-[6px] w-[1px] bg-gray-50"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-[6px] w-[1px] bg-gray-50"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-[6px] w-[1px] bg-gray-50"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-[6px] w-[1px] bg-gray-50"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-1 w-[1px] bg-gray-300"></div>
								<div className="h-[6px] w-[1px] bg-gray-50"></div>
							</div>
							<div className="h-4"></div>
							<div>
								<div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
									<div className="w-16 sm:w-28 text-xs sm:text-sm ">document</div>
									<div className="relative flex-1">
										<div className="h-1 sm:h-2 bg-green-400" style={{ width: "10%", marginLeft: "0%" }}></div>
									</div>
								</div>
								<div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
									<div className="w-16 text-xs sm:w-28 sm:text-sm ">root.js</div>
									<div className="relative flex-1">
										<div className="h-1 sm:h-2 bg-green-400" style={{ width: "25%", marginLeft: "10%" }}></div>
									</div>
								</div>
								<div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
									<div className="w-16 text-xs sm:w-28 sm:text-sm ">user.json</div>
									<div className="relative flex-1">
										<div className="h-1 sm:h-2 bg-green-400" style={{ width: "10%", marginLeft: "35%" }}></div>
									</div>
								</div>
								<div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
									<div className="w-16 text-xs sm:w-28 sm:text-sm ">sales.js</div>
									<div className="relative flex-1">
										<div className="h-1 sm:h-2 bg-green-400" style={{ width: "21%", marginLeft: "35%" }}></div>
									</div>
								</div>
								<div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
									<div className="w-16 text-xs sm:w-28 sm:text-sm ">sales/nav.json</div>
									<div className="relative flex-1">
										<div className="h-1 sm:h-2 bg-green-400" style={{ width: "8%", marginLeft: "56%" }}></div>
									</div>
								</div>
								<div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
									<div className="w-16 text-xs sm:w-28 sm:text-sm ">invoices.js</div>
									<div className="relative flex-1">
										<div className="h-1 sm:h-2 bg-green-400" style={{ width: "10%", marginLeft: "56%" }}></div>
									</div>
								</div>
								<div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
									<div className="w-16 text-xs sm:w-28 sm:text-sm ">invoice.js</div>
									<div className="relative flex-1">
										<div className="h-1 sm:h-2 bg-green-400" style={{ width: "22%", marginLeft: "66%" }}></div>
									</div>
								</div>
								<div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
									<div className="w-16 text-xs sm:w-28 sm:text-sm ">invoice/[id].json</div>
									<div className="relative flex-1">
										<div className="h-1 sm:h-2 bg-green-400" style={{ width: "10%", marginLeft: "88%" }}></div>
									</div>
								</div>
							</div>
							<div className="absolute top-0 right-0 left-16 h-full sm:left-28">
								<div className="absolute top-0 h-full" style={{ left: "98.318713%" }}>
									<svg className="-ml-1 w-2 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 7 14">
										<path fill="currentColor" d="M0 0h7v9.249a2 2 0 01-.495 1.316L3.5 14 .495 10.566A2 2 0 010 9.248V0z"></path>
									</svg>
									<div className="relative top-[-1px] h-full w-[1px] bg-blue-400"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-sm sm:text-base md:text-lg text-center mt-4 lg:mb-4 lg:mt-0 px-8">
				The green highlighted area at the bottom is an example of a similar network waterfall where each part of the page is staggered behind the last.
			</div>
		</>
	)
}
