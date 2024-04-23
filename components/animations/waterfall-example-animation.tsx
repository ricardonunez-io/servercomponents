// million-ignore
"use client";

import { useAnimate } from "framer-motion";
import { useState } from "react";

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
				className="text-gray-700 dark:text-gray-300 group-hover:text-sky-700 dark:group-hover:text-sky-500 transition-all"
			/>
		</svg>
	);
}

export default function WaterfallExampleAnimation({ caption }: { caption: string; }) {
	const [reqScope, reqAnimate] = useAnimate();
	const [query1Scope, query1Animate] = useAnimate();
	const [query2Scope, query2Animate] = useAnimate();
	const [query3Scope, query3Animate] = useAnimate();
	const [resScope, resAnimate] = useAnimate();
	const [isPlaying, setIsPlaying] = useState(false);

	async function reqAnimation() {
		await reqAnimate(
			reqScope.current,
			{ opacity: 1, translateY: "50%" },
		);
		await reqAnimate(
			reqScope.current,
			{ translateX: "-110%" },
			{ duration: 3 }
		);
	}

	async function query1Animation() {
		await query1Animate(
			query1Scope.current,
			{ opacity: 1 },
			{ duration: 0.3 }
		);
	}

	async function query2Animation() {
		await query2Animate(
			query2Scope.current,
			{ opacity: 1 },
			{ duration: 0.3 }
		);
	}

	async function query3Animation() {
		await query3Animate(
			query3Scope.current,
			{ opacity: 1 },
			{ duration: 0.3 }
		);
	}

	async function queryResetAnimation() {
		await query1Animate(
			query1Scope.current,
			{ opacity: 0 },
			{ duration: 0 }
		);
		await query2Animate(
			query2Scope.current,
			{ opacity: 0 },
			{ duration: 0 }
		);
		await query3Animate(
			query3Scope.current,
			{ opacity: 0 },
			{ duration: 0 }
		);
	}

	async function resAnimation() {
		await resAnimate(
			resScope.current,
			{ translateY: "-50%" }
		);
		await resAnimate(
			resScope.current,
			{ opacity: 1 },
			{ duration: 0.5, delay: 1 }
		);
		await resAnimate(
			resScope.current,
			{ translateX: "110%" },
			{ duration: 3 }
		);
	}

	async function resetAnimation() {
		await reqAnimate(
			reqScope.current,
			{ opacity: 0, translateX: "0%", translateY: "0%" },
			{ duration: 0, delay: 2 }
		);
		await query1Animate(
			query1Scope.current,
			{ opacity: 0 },
			{ duration: 0 }
		);
		await query2Animate(
			query2Scope.current,
			{ opacity: 0 },
			{ duration: 0 }
		);
		await query3Animate(
			query3Scope.current,
			{ opacity: 0 },
			{ duration: 0 }
		);
		await resAnimate(
			resScope.current,
			{ opacity: 0, translateX: "0%", translateY: "0%" },
			{ duration: 0 }
		);
	}

	async function playAnimation() {
		await queryResetAnimation();
		await reqAnimation();
		await query1Animation();
		await query3Animation();
		await query2Animation();
		await resAnimation();
		await resetAnimation();
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
		<div className="my-4" aria-hidden={"true"}>
			<div className="grid grid-cols-8 md:grid-cols-11 gap-x-2 text-center mb-4">
				<div className="col-span-3 md:col-span-4">
					<div>Server/Service Endpoints</div>
					<div className="hidden md:flex md:justify-center">(close proximity to each other)</div>
				</div>
				<div className="col-span-2 md:col-span-3">
					<div>Network Chasm</div>
					<div className="hidden md:flex md:justify-center">(longest point of latency)</div>
				</div>
				<div className="col-span-3 md:col-span-4">
					<div>Client</div>
					<div className="hidden md:flex md:justify-center">(waiting on this entire <br />process before loading UI)</div>
				</div>
			</div>
			<div className="grid grid-cols-8 md:grid-cols-11 gap-x-2">
				<div className="flex flex-col justify-center col-span-3 md:col-span-4">
					<div className="dark:bg-stone-950 bg-gray-50 border-2 border-yellow-400 dark:border-yellow-600 h-full w-full rounded-xl grid place-items-center relative z-40">
						<svg width="90%" height="80%" className="text-gray-500 dark:text-gray-300 relative" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd"
								d="M5.59091 0.939489C5.59107 0.939507 5.59024 0.941132 5.58795 0.94431C5.58961 0.94106 5.59075 0.939471 5.59091 0.939489ZM5.49057 1.03226C5.38828 0.958083 5.22749 0.875656 5.00358 0.798612C4.50875 0.628347 3.80024 0.516129 3 0.516129C2.19976 0.516129 1.49125 0.628347 0.996417 0.798612C0.772506 0.875657 0.611722 0.958081 0.509428 1.03226C0.611722 1.10643 0.772506 1.18886 0.996417 1.2659C1.49125 1.43617 2.19976 1.54839 3 1.54839C3.80024 1.54839 4.50875 1.43617 5.00358 1.2659C5.22749 1.18886 5.38828 1.10644 5.49057 1.03226ZM0.40909 0.939489C0.409245 0.939471 0.410387 0.94106 0.412046 0.94431C0.409763 0.941132 0.408934 0.939507 0.40909 0.939489ZM0.40909 1.12503C0.408934 1.12501 0.409763 1.12338 0.412046 1.12021C0.410387 1.12346 0.409245 1.12505 0.40909 1.12503ZM5.58795 1.12021C5.59024 1.12338 5.59107 1.12501 5.59091 1.12503C5.59075 1.12505 5.58961 1.12346 5.58795 1.12021ZM3 2.06452C4.65685 2.06452 6 1.60236 6 1.03226C6 0.462158 4.65685 0 3 0C1.34315 0 0 0.462158 0 1.03226C0 1.60236 1.34315 2.06452 3 2.06452Z"
								fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M1.05057 3.06456C1.51235 3.24085 2.18534 3.35484 3 3.35484C3.81466 3.35484 4.48765 3.24085 4.94943 3.06456C5.18145 2.97598 5.34787 2.87627 5.4518 2.77882C5.55718 2.68002 5.57143 2.6111 5.57143 2.58065H6C6 2.83524 5.87314 3.03788 5.71508 3.18608C5.55558 3.33562 5.33623 3.45834 5.07893 3.55656C4.56206 3.75388 3.84219 3.87097 3 3.87097C2.15781 3.87097 1.43794 3.75388 0.921071 3.55656C0.663773 3.45834 0.44442 3.33562 0.284921 3.18608C0.126861 3.03788 0 2.83524 0 2.58065H0.428571C0.428571 2.6111 0.442818 2.68002 0.548196 2.77882C0.652135 2.87627 0.818551 2.97598 1.05057 3.06456Z"
								fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M1.05057 5.12908C1.51235 5.30536 2.18534 5.41935 3 5.41935C3.81466 5.41935 4.48765 5.30536 4.94943 5.12908C5.18145 5.0405 5.34787 4.94078 5.4518 4.84333C5.55718 4.74453 5.57143 4.67561 5.57143 4.64516H6C6 4.89976 5.87314 5.1024 5.71508 5.25059C5.55558 5.40014 5.33623 5.52285 5.07893 5.62108C4.56206 5.8184 3.84219 5.93548 3 5.93548C2.15781 5.93548 1.43794 5.8184 0.921071 5.62108C0.663773 5.52285 0.44442 5.40014 0.284921 5.25059C0.126861 5.1024 0 4.89976 0 4.64516H0.428571C0.428571 4.67561 0.442818 4.74453 0.548196 4.84333C0.652135 4.94078 0.818551 5.0405 1.05057 5.12908Z"
								fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M1.05057 7.19359C1.51235 7.36988 2.18534 7.48387 3 7.48387C3.81466 7.48387 4.48765 7.36988 4.94943 7.19359C5.18145 7.10502 5.34787 7.0053 5.4518 6.90785C5.55718 6.80905 5.57143 6.74013 5.57143 6.70968H6C6 6.96427 5.87314 7.16691 5.71508 7.31511C5.55558 7.46465 5.33623 7.58737 5.07893 7.68559C4.56206 7.88291 3.84219 8 3 8C2.15781 8 1.43794 7.88291 0.921071 7.68559C0.663773 7.58737 0.44442 7.46465 0.284921 7.31511C0.126861 7.16691 0 6.96427 0 6.70968H0.428571C0.428571 6.74013 0.442818 6.80905 0.548196 6.90785C0.652135 7.0053 0.818551 7.10502 1.05057 7.19359Z"
								fill="currentColor" />
							<path d="M0 1.03226H0.428571V6.70968H0V1.03226Z" fill="currentColor" />
							<path d="M5.57143 1.03226H6V6.70968H5.57143V1.03226Z" fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M5.59091 10.9395C5.59107 10.9395 5.59024 10.9411 5.58795 10.9443C5.58961 10.9411 5.59075 10.9395 5.59091 10.9395ZM5.49057 11.0323C5.38828 10.9581 5.22749 10.8757 5.00358 10.7986C4.50875 10.6283 3.80024 10.5161 3 10.5161C2.19976 10.5161 1.49125 10.6283 0.996417 10.7986C0.772506 10.8757 0.611722 10.9581 0.509428 11.0323C0.611722 11.1064 0.772506 11.1889 0.996417 11.2659C1.49125 11.4362 2.19976 11.5484 3 11.5484C3.80024 11.5484 4.50875 11.4362 5.00358 11.2659C5.22749 11.1889 5.38828 11.1064 5.49057 11.0323ZM0.40909 10.9395C0.409245 10.9395 0.410387 10.9411 0.412046 10.9443C0.409763 10.9411 0.408934 10.9395 0.40909 10.9395ZM0.40909 11.125C0.408934 11.125 0.409763 11.1234 0.412046 11.1202C0.410387 11.1235 0.409245 11.125 0.40909 11.125ZM5.58795 11.1202C5.59024 11.1234 5.59107 11.125 5.59091 11.125C5.59075 11.125 5.58961 11.1235 5.58795 11.1202ZM3 12.0645C4.65685 12.0645 6 11.6024 6 11.0323C6 10.4622 4.65685 10 3 10C1.34315 10 0 10.4622 0 11.0323C0 11.6024 1.34315 12.0645 3 12.0645Z"
								fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M1.05057 13.0646C1.51235 13.2408 2.18534 13.3548 3 13.3548C3.81466 13.3548 4.48765 13.2408 4.94943 13.0646C5.18145 12.976 5.34787 12.8763 5.4518 12.7788C5.55718 12.68 5.57143 12.6111 5.57143 12.5806H6C6 12.8352 5.87314 13.0379 5.71508 13.1861C5.55558 13.3356 5.33623 13.4583 5.07893 13.5566C4.56206 13.7539 3.84219 13.871 3 13.871C2.15781 13.871 1.43794 13.7539 0.921071 13.5566C0.663773 13.4583 0.44442 13.3356 0.284921 13.1861C0.126861 13.0379 0 12.8352 0 12.5806H0.428571C0.428571 12.6111 0.442818 12.68 0.548196 12.7788C0.652135 12.8763 0.818551 12.976 1.05057 13.0646Z"
								fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M1.05057 15.1291C1.51235 15.3054 2.18534 15.4194 3 15.4194C3.81466 15.4194 4.48765 15.3054 4.94943 15.1291C5.18145 15.0405 5.34787 14.9408 5.4518 14.8433C5.55718 14.7445 5.57143 14.6756 5.57143 14.6452H6C6 14.8998 5.87314 15.1024 5.71508 15.2506C5.55558 15.4001 5.33623 15.5229 5.07893 15.6211C4.56206 15.8184 3.84219 15.9355 3 15.9355C2.15781 15.9355 1.43794 15.8184 0.921071 15.6211C0.663773 15.5229 0.44442 15.4001 0.284921 15.2506C0.126861 15.1024 0 14.8998 0 14.6452H0.428571C0.428571 14.6756 0.442818 14.7445 0.548196 14.8433C0.652135 14.9408 0.818551 15.0405 1.05057 15.1291Z"
								fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M1.05057 17.1936C1.51235 17.3699 2.18534 17.4839 3 17.4839C3.81466 17.4839 4.48765 17.3699 4.94943 17.1936C5.18145 17.105 5.34787 17.0053 5.4518 16.9078C5.55718 16.809 5.57143 16.7401 5.57143 16.7097H6C6 16.9643 5.87314 17.1669 5.71508 17.3151C5.55558 17.4647 5.33623 17.5874 5.07893 17.6856C4.56206 17.8829 3.84219 18 3 18C2.15781 18 1.43794 17.8829 0.921071 17.6856C0.663773 17.5874 0.44442 17.4647 0.284921 17.3151C0.126861 17.1669 0 16.9643 0 16.7097H0.428571C0.428571 16.7401 0.442818 16.809 0.548196 16.9078C0.652135 17.0053 0.818551 17.105 1.05057 17.1936Z"
								fill="currentColor" />
							<path d="M0 11.0323H0.428571V16.7097H0V11.0323Z" fill="currentColor" />
							<path d="M5.57143 11.0323H6V16.7097H5.57143V11.0323Z" fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M5.59091 20.9395C5.59107 20.9395 5.59024 20.9411 5.58795 20.9443C5.58961 20.9411 5.59075 20.9395 5.59091 20.9395ZM5.49057 21.0323C5.38828 20.9581 5.22749 20.8757 5.00358 20.7986C4.50875 20.6283 3.80024 20.5161 3 20.5161C2.19976 20.5161 1.49125 20.6283 0.996417 20.7986C0.772506 20.8757 0.611722 20.9581 0.509428 21.0323C0.611722 21.1064 0.772506 21.1889 0.996417 21.2659C1.49125 21.4362 2.19976 21.5484 3 21.5484C3.80024 21.5484 4.50875 21.4362 5.00358 21.2659C5.22749 21.1889 5.38828 21.1064 5.49057 21.0323ZM0.40909 20.9395C0.409245 20.9395 0.410387 20.9411 0.412046 20.9443C0.409763 20.9411 0.408934 20.9395 0.40909 20.9395ZM0.40909 21.125C0.408934 21.125 0.409763 21.1234 0.412046 21.1202C0.410387 21.1235 0.409245 21.125 0.40909 21.125ZM5.58795 21.1202C5.59024 21.1234 5.59107 21.125 5.59091 21.125C5.59075 21.125 5.58961 21.1235 5.58795 21.1202ZM3 22.0645C4.65685 22.0645 6 21.6024 6 21.0323C6 20.4622 4.65685 20 3 20C1.34315 20 0 20.4622 0 21.0323C0 21.6024 1.34315 22.0645 3 22.0645Z"
								fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M1.05057 23.0646C1.51235 23.2408 2.18534 23.3548 3 23.3548C3.81466 23.3548 4.48765 23.2408 4.94943 23.0646C5.18145 22.976 5.34787 22.8763 5.4518 22.7788C5.55718 22.68 5.57143 22.6111 5.57143 22.5806H6C6 22.8352 5.87314 23.0379 5.71508 23.1861C5.55558 23.3356 5.33623 23.4583 5.07893 23.5566C4.56206 23.7539 3.84219 23.871 3 23.871C2.15781 23.871 1.43794 23.7539 0.921071 23.5566C0.663773 23.4583 0.44442 23.3356 0.284921 23.1861C0.126861 23.0379 0 22.8352 0 22.5806H0.428571C0.428571 22.6111 0.442818 22.68 0.548196 22.7788C0.652135 22.8763 0.818551 22.976 1.05057 23.0646Z"
								fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M1.05057 25.1291C1.51235 25.3054 2.18534 25.4194 3 25.4194C3.81466 25.4194 4.48765 25.3054 4.94943 25.1291C5.18145 25.0405 5.34787 24.9408 5.4518 24.8433C5.55718 24.7445 5.57143 24.6756 5.57143 24.6452H6C6 24.8998 5.87314 25.1024 5.71508 25.2506C5.55558 25.4001 5.33623 25.5229 5.07893 25.6211C4.56206 25.8184 3.84219 25.9355 3 25.9355C2.15781 25.9355 1.43794 25.8184 0.921071 25.6211C0.663773 25.5229 0.44442 25.4001 0.284921 25.2506C0.126861 25.1024 0 24.8998 0 24.6452H0.428571C0.428571 24.6756 0.442818 24.7445 0.548196 24.8433C0.652135 24.9408 0.818551 25.0405 1.05057 25.1291Z"
								fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M1.05057 27.1936C1.51235 27.3699 2.18534 27.4839 3 27.4839C3.81466 27.4839 4.48765 27.3699 4.94943 27.1936C5.18145 27.105 5.34787 27.0053 5.4518 26.9078C5.55718 26.809 5.57143 26.7401 5.57143 26.7097H6C6 26.9643 5.87314 27.1669 5.71508 27.3151C5.55558 27.4647 5.33623 27.5874 5.07893 27.6856C4.56206 27.8829 3.84219 28 3 28C2.15781 28 1.43794 27.8829 0.921071 27.6856C0.663773 27.5874 0.44442 27.4647 0.284921 27.3151C0.126861 27.1669 0 26.9643 0 26.7097H0.428571C0.428571 26.7401 0.442818 26.809 0.548196 26.9078C0.652135 27.0053 0.818551 27.105 1.05057 27.1936Z"
								fill="currentColor" />
							<path ref={query1Scope}
								d="M12 9.25C12.1381 9.25 12.25 9.13807 12.25 9V6.75C12.25 6.61193 12.1381 6.5 12 6.5C11.8619 6.5 11.75 6.61193 11.75 6.75V8.75H9.75C9.61193 8.75 9.5 8.86193 9.5 9C9.5 9.13807 9.61193 9.25 9.75 9.25H12ZM8 4.75C7.86193 4.75 7.75 4.86193 7.75 5V7.25C7.75 7.38807 7.86193 7.5 8 7.5C8.13807 7.5 8.25 7.38807 8.25 7.25V5.25H10.25C10.3881 5.25 10.5 5.13807 10.5 5C10.5 4.86193 10.3881 4.75 10.25 4.75H8ZM12.1768 8.82322L8.17678 4.82322L7.82322 5.17678L11.8232 9.17678L12.1768 8.82322Z"
								fill="currentColor" className="text-yellow-400 dark:text-yellow-600" />
							<path ref={query2Scope}
								d="M12 19.75C12.1381 19.75 12.25 19.8619 12.25 20V22.25C12.25 22.3881 12.1381 22.5 12 22.5C11.8619 22.5 11.75 22.3881 11.75 22.25V20.25H9.75C9.61193 20.25 9.5 20.1381 9.5 20C9.5 19.8619 9.61193 19.75 9.75 19.75H12ZM8 24.25C7.86193 24.25 7.75 24.1381 7.75 24V21.75C7.75 21.6119 7.86193 21.5 8 21.5C8.13807 21.5 8.25 21.6119 8.25 21.75V23.75H10.25C10.3881 23.75 10.5 23.8619 10.5 24C10.5 24.1381 10.3881 24.25 10.25 24.25H8ZM12.1768 20.1768L8.17678 24.1768L7.82322 23.8232L11.8232 19.8232L12.1768 20.1768Z"
								fill="currentColor" className="text-yellow-400 dark:text-yellow-600" />
							<path ref={query3Scope}
								d="M7.82322 13.8232C7.72559 13.9209 7.72559 14.0791 7.82322 14.1768L9.41421 15.7678C9.51184 15.8654 9.67014 15.8654 9.76777 15.7678C9.8654 15.6701 9.8654 15.5118 9.76777 15.4142L8.35355 14L9.76777 12.5858C9.8654 12.4882 9.8654 12.3299 9.76777 12.2322C9.67014 12.1346 9.51184 12.1346 9.41421 12.2322L7.82322 13.8232ZM12.4194 14.1768C12.517 14.0791 12.517 13.9209 12.4194 13.8232L10.8284 12.2322C10.7308 12.1346 10.5725 12.1346 10.4749 12.2322C10.3772 12.3299 10.3772 12.4882 10.4749 12.5858L11.8891 14L10.4749 15.4142C10.3772 15.5118 10.3772 15.6701 10.4749 15.7678C10.5725 15.8654 10.7308 15.8654 10.8284 15.7678L12.4194 14.1768ZM8 14.25H12.2426V13.75H8V14.25Z"
								fill="currentColor" className="text-yellow-400 dark:text-yellow-600" />
							<path d="M0 21.0323H0.428571V26.7097H0V21.0323Z" fill="currentColor" />
							<path d="M5.57143 21.0323H6V26.7097H5.57143V21.0323Z" fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M15.5 9H26.5C27.3284 9 28 9.67157 28 10.5V18.5C28 19.3284 27.3284 20 26.5 20H15.5C14.6716 20 14 19.3284 14 18.5V10.5C14 9.67157 14.6716 9 15.5 9ZM15.5 9.5C14.9477 9.5 14.5 9.94772 14.5 10.5V18.5C14.5 19.0523 14.9477 19.5 15.5 19.5H26.5C27.0523 19.5 27.5 19.0523 27.5 18.5V10.5C27.5 9.94772 27.0523 9.5 26.5 9.5H15.5Z"
								fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd" d="M14 12.5H28V16.5H14V12.5ZM14.5 13V16H27.5V13H14.5Z" fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M16.25 11C16.25 10.8619 16.3619 10.75 16.5 10.75H19.5C19.6381 10.75 19.75 10.8619 19.75 11C19.75 11.1381 19.6381 11.25 19.5 11.25H16.5C16.3619 11.25 16.25 11.1381 16.25 11Z"
								fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M16.25 14.5C16.25 14.3619 16.3619 14.25 16.5 14.25H19.5C19.6381 14.25 19.75 14.3619 19.75 14.5C19.75 14.6381 19.6381 14.75 19.5 14.75H16.5C16.3619 14.75 16.25 14.6381 16.25 14.5Z"
								fill="currentColor" />
							<path fillRule="evenodd" clipRule="evenodd"
								d="M16.25 18C16.25 17.8619 16.3619 17.75 16.5 17.75H19.5C19.6381 17.75 19.75 17.8619 19.75 18C19.75 18.1381 19.6381 18.25 19.5 18.25H16.5C16.3619 18.25 16.25 18.1381 16.25 18Z"
								fill="currentColor" />
							<path d="M25.5 11C25.5 11.2761 25.2761 11.5 25 11.5C24.7239 11.5 24.5 11.2761 24.5 11C24.5 10.7239 24.7239 10.5 25 10.5C25.2761 10.5 25.5 10.7239 25.5 11Z"
								fill="currentColor" />
							<path d="M25.5 14.5C25.5 14.7761 25.2761 15 25 15C24.7239 15 24.5 14.7761 24.5 14.5C24.5 14.2239 24.7239 14 25 14C25.2761 14 25.5 14.2239 25.5 14.5Z" fill="currentColor" />
							<path d="M25.5 18C25.5 18.2761 25.2761 18.5 25 18.5C24.7239 18.5 24.5 18.2761 24.5 18C24.5 17.7239 24.7239 17.5 25 17.5C25.2761 17.5 25.5 17.7239 25.5 18Z"
								fill="currentColor" />
						</svg>
					</div>
				</div>
				<div className="flex flex-col justify-center col-span-2 md:col-span-3 text-gray-500 dark:text-gray-300 relative z-0">
					<svg className="relative" width="100%" height="100%" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0.823223 1.82322C0.725592 1.92085 0.725592 2.07915 0.823223 2.17678L2.41421 3.76777C2.51184 3.8654 2.67014 3.8654 2.76777 3.76777C2.8654 3.67014 2.8654 3.51184 2.76777 3.41421L1.35355 2L2.76777 0.585786C2.8654 0.488155 2.8654 0.329864 2.76777 0.232233C2.67014 0.134602 2.51184 0.134602 2.41421 0.232233L0.823223 1.82322ZM29.1768 10.1768C29.2744 10.0791 29.2744 9.92085 29.1768 9.82322L27.5858 8.23223C27.4882 8.1346 27.3299 8.1346 27.2322 8.23223C27.1346 8.32986 27.1346 8.48816 27.2322 8.58579L28.6464 10L27.2322 11.4142C27.1346 11.5118 27.1346 11.6701 27.2322 11.7678C27.3299 11.8654 27.4882 11.8654 27.5858 11.7678L29.1768 10.1768ZM29 1.75H1V2.25H29V1.75ZM1 10.25H29V9.75H1V10.25Z"
							fill="currentColor" />
					</svg>
					<div className="absolute">
						<div ref={reqScope} className="opacity-0 translate-y-[50%]">
							<svg width="100%" height="100%" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="27" cy="2" r="2" fill="currentColor" className="text-green-500 stroke-[0.3] stroke-green-700" />
							</svg>
						</div>
						<div ref={resScope} className="opacity-0 -translate-y-[50%] -translate-x-[10%]">
							<svg width="100%" height="100%" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="3" cy="10" r="2" fill="currentColor" className="text-green-500 stroke-[0.3] stroke-green-700" />
							</svg>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center text-gray-300 dark:text-gray-600 col-span-3 md:col-span-4">
					<div className="dark:bg-stone-950 bg-gray-50 border-2 border-gray-300 dark:border-gray-600 h-full w-full rounded-xl p-3 px-0 relative">
						<div className="flex w-full rounded-t-xl justify-between border-b-2 border-gray-300 dark:border-gray-600 relative">
							<div className="flex my-auto min-w-fit w-full pt-2 pb-4 px-3 md:px-4 max-[475px]:pt-0.5 max-[475px]:pb-3">
								<div className="h-2 md:h-3.5 w-2 md:w-3.5 rounded-full bg-red-500 inline-block mr-1 md:mr-2" />
								<div className="h-2 md:h-3.5 w-2 md:w-3.5 rounded-full bg-yellow-500 inline-block mr-1 md:mr-2" />
								<div className="h-2 md:h-3.5 w-2 md:w-3.5 rounded-full bg-green-500 inline-block mr-1 md:mr-2" />
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
					{caption}
				</div>
			</div>
		</div>
	);
}
