import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function Card({
  title,
  description,
  image,
  imageDescription,
  href,
}: {
  title: string;
  description: string;
  image?: StaticImageData;
  imageDescription: string;
  href: string;
}) {
  return (
    <Link id="home-page" href={href} className="no-underline">
      <div
        className={`flex md:h-full flex-col gap-y-2 rounded-lg hover:cursor-pointer border border-neutral-200 dark:border-neutral-800 pt-0 pb-6 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all mb-6 xl:my-0 ${image === undefined ? "justify-center pt-6" : ""}`}
      >
        {image !== undefined && (
          <div className="w-full flex flex-col p-4 mb-2">
            <Image src={image} alt={imageDescription} className="rounded" />
          </div>
        )}
        <div className="font-medium text-lg text-neutral-900 dark:text-neutral-100 px-4 lg:px-6">
          {title}
        </div>
        <p
          className={`${image ? "line-clamp-3" : "whitespace-pre-wrap"} px-4 lg:px-6 text-neutral-600 dark:text-neutral-400 text-sm my-1`}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}
