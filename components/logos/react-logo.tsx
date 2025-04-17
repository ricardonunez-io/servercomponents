export default function ReactLogo({
  width,
  className,
  ref,
}: {
  width?: number;
  className?: string;
  ref?: any;
}) {
  return (
    <svg
      className={`${className}`}
      width={width}
      ref={ref}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8029 3.02401C9.58272 4.01598 8.24451 5.62486 7.0986 7.62142C5.95269 9.61798 5.23851 11.585 4.9975 13.139C4.87672 13.9178 4.87904 14.5658 4.98619 15.0521C5.0933 15.5381 5.29071 15.8084 5.51801 15.9389C5.74531 16.0693 6.07829 16.1034 6.55199 15.9508C7.02588 15.798 7.58664 15.4731 8.19814 14.976C9.41836 13.984 10.7566 12.3751 11.9025 10.3786C13.0484 8.38202 13.7626 6.41498 14.0036 4.861C14.1244 4.08224 14.122 3.43416 14.0149 2.94793C13.9078 2.46189 13.7104 2.19158 13.4831 2.06112C13.2558 1.93066 12.9228 1.89656 12.4491 2.04924C11.9752 2.20199 11.4144 2.5269 10.8029 3.02401ZM12.1423 1.09746C12.7753 0.893425 13.4251 0.874862 13.9809 1.19382C14.5366 1.51277 14.8483 2.0832 14.9915 2.73272C15.1346 3.38204 15.1236 4.16433 14.9918 5.01426C14.7276 6.71764 13.9608 8.80118 12.7698 10.8764C11.5787 12.9515 10.1665 14.6646 8.82893 15.7519C8.16155 16.2945 7.49161 16.6986 6.85877 16.9025C6.22574 17.1066 5.57595 17.1251 5.02023 16.8062C4.4645 16.4872 4.15276 15.9168 4.00962 15.2673C3.86653 14.618 3.8775 13.8357 4.00931 12.9857C4.2735 11.2824 5.04026 9.19882 6.2313 7.12364C7.42233 5.04846 8.83461 3.3354 10.1721 2.24806C10.8395 1.70552 11.5095 1.30144 12.1423 1.09746Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.19813 3.02401C9.41836 4.01598 10.7566 5.62486 11.9025 7.62142C13.0484 9.61798 13.7626 11.585 14.0036 13.139C14.1244 13.9178 14.122 14.5658 14.0149 15.0521C13.9078 15.5381 13.7104 15.8084 13.4831 15.9389C13.2558 16.0693 12.9228 16.1034 12.4491 15.9508C11.9752 15.798 11.4144 15.4731 10.8029 14.976C9.58272 13.984 8.24451 12.3751 7.0986 10.3786C5.95269 8.38202 5.23851 6.41498 4.9975 4.861C4.87672 4.08224 4.87903 3.43416 4.98619 2.94793C5.0933 2.46189 5.29071 2.19158 5.51801 2.06112C5.74531 1.93066 6.07828 1.89656 6.55199 2.04924C7.02588 2.20199 7.58664 2.5269 8.19813 3.02401ZM6.85877 1.09746C6.22574 0.893425 5.57595 0.874862 5.02022 1.19382C4.4645 1.51277 4.15275 2.0832 4.00962 2.73272C3.86652 3.38204 3.8775 4.16433 4.00931 5.01426C4.27349 6.71764 5.04026 8.80118 6.2313 10.8764C7.42233 12.9515 8.83461 14.6646 10.1721 15.7519C10.8395 16.2945 11.5095 16.6986 12.1423 16.9025C12.7753 17.1066 13.4251 17.1251 13.9808 16.8062C14.5366 16.4872 14.8483 15.9168 14.9915 15.2673C15.1345 14.618 15.1236 13.8357 14.9918 12.9857C14.7276 11.2824 13.9608 9.19882 12.7698 7.12364C11.5787 5.04846 10.1665 3.3354 8.82893 2.24806C8.16155 1.70552 7.49161 1.30144 6.85877 1.09746Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3318 10.8452C13.8641 11.4097 11.8026 11.7694 9.50054 11.7694C7.1985 11.7694 5.13698 11.4097 3.66924 10.8452C2.9337 10.5623 2.37277 10.2377 2.0044 9.90269C1.63617 9.56785 1.5 9.26208 1.5 9C1.5 8.73792 1.63617 8.43216 2.0044 8.09731C2.37277 7.76234 2.9337 7.43773 3.66924 7.15483C5.13698 6.59032 7.1985 6.23056 9.50054 6.23056C11.8026 6.23056 13.8641 6.59032 15.3318 7.15483C16.0674 7.43773 16.6283 7.76234 16.9967 8.09731C17.3649 8.43216 17.5011 8.73792 17.5011 9C17.5011 9.26208 17.3649 9.56785 16.9967 9.90269C16.6283 10.2377 16.0674 10.5623 15.3318 10.8452ZM17.6694 10.6425C18.1615 10.1951 18.5011 9.64075 18.5011 9C18.5011 8.35925 18.1615 7.80492 17.6694 7.35746C17.1775 6.91013 16.4936 6.53024 15.6908 6.22149C14.082 5.6027 11.8932 5.23056 9.50054 5.23056C7.10785 5.23056 4.91911 5.6027 3.31026 6.22149C2.5075 6.53024 1.82356 6.91013 1.33163 7.35746C0.839556 7.80492 0.5 8.35925 0.5 9C0.5 9.64075 0.839556 10.1951 1.33163 10.6425C1.82356 11.0899 2.5075 11.4698 3.31026 11.7785C4.91911 12.3973 7.10785 12.7694 9.50054 12.7694C11.8932 12.7694 14.082 12.3973 15.6908 11.7785C16.4936 11.4698 17.1775 11.0899 17.6694 10.6425Z"
        fill="currentColor"
      />
      <path
        d="M11.1172 8.99749C11.1172 9.8931 10.3911 10.6191 9.49551 10.6191C8.5999 10.6191 7.87387 9.8931 7.87387 8.99749C7.87387 8.10188 8.5999 7.37585 9.49551 7.37585C10.3911 7.37585 11.1172 8.10188 11.1172 8.99749Z"
        fill="currentColor"
      />
    </svg>
  );
}
