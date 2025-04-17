export default function RemixLogo({ width }: { width: number }) {
  return (
    <svg
      aria-label="Remix Logo"
      className="text-black dark:text-white inline -mt-1"
      width={width}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.048 13.7913C15.2075 15.8407 15.2075 16.8013 15.2075 17.85H10.4659C10.4659 17.6216 10.4699 17.4126 10.4741 17.2008C10.4869 16.5421 10.5003 15.8552 10.3936 14.4682C10.2525 12.4375 9.37805 11.9863 7.77016 11.9863H0.3125V8.29158H7.99584C10.0268 8.29158 11.0424 7.67372 11.0424 6.0379C11.0424 4.59951 10.0268 3.72786 7.99584 3.72786H0.3125V0.112488H8.8421C13.4401 0.112488 15.725 2.28419 15.725 5.75324C15.725 8.34798 14.1171 10.0402 11.945 10.3222C13.7786 10.6889 14.8505 11.7324 15.048 13.7913Z"
        fill="currentColor"
      />
      <path
        d="M0.3125 17.85V15.0957H5.32614C6.16359 15.0957 6.34543 15.7168 6.34543 16.0873V17.85H0.3125Z"
        fill="currentColor"
      />
    </svg>
  );
}
