import React, { ReactElement, ReactNode } from "react";
// import Image from "next/image";
import Link from "next/link";

export const ProjectLink = ({
  url,
  Image,
}: {
  url: string;
  Image?: ReactElement;
}) => {
  return (
    <Link href={url} className="flex text-primary mb-4">
      {Image &&
        React.cloneElement(Image, { className: "fill-primary block mr-2" })}
      {url}
    </Link>
  );
};

/*
src={"/github.svg"}
        alt="github logo"
        className="fill-primary block mr-2"
        width="24"
        height="24"
*/
