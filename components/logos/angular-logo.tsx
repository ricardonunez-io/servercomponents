export default function AngularLogo({ width }: { width: number }) {
  return (
    <svg
      aria-label="Angular logo"
      className="-mt-1 inline"
      width={width}
      fill="none"
      viewBox="0 0 16 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0.399994L0.552002 3.05599L1.688 12.904L8 16.4L14.312 12.904L15.448 3.05599L8 0.399994Z"
        fill="#DD0031"
      />
      <path
        d="M8 0.399994L8 2.17599V2.16799L8 16.4L14.312 12.904L15.448 3.05599L8 0.399994Z"
        fill="#C3002F"
      />
      <path
        d="M8 2.16799L3.344 12.608H5.08L6.016 10.272H9.968L10.904 12.608H12.64L8 2.16799ZM9.36 8.83199H6.64L8 5.55999L9.36 8.83199Z"
        fill="white"
      />
    </svg>
  );
}
