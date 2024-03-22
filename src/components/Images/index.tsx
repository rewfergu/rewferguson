import classNames from "classnames";
import React, { useRef, useState } from "react";
import { Img } from "../Img";
import ReactPlayer from "react-player";

export const Images = ({
  gallery,
  videos,
}: {
  gallery: { src: string; alt: string }[];
  videos: string[];
}) => {
  return (
    <ul className="m-0 p-0 pt-4 pl-4 list-none flex bg-[#efefef] flex-wrap">
      {gallery.map(({ src, alt }) => (
        <ImageWrapper key={`projectImageGallery_${src}`} src={src} alt={alt} />
      ))}

      {videos.map((url) => (
        <li style={{ width: "100%", maxWidth: "100%" }}>
          <ReactPlayer
            key={`projectVideoGallery_${url}`}
            url={url}
            width="100%"
          />
        </li>
      ))}
    </ul>
  );
};

const ImageWrapper = ({ src, alt }: { src: string; alt: string }) => {
  const [active, setActive] = useState<boolean>(false);
  const wrapper = useRef<HTMLLIElement>(null);

  const toggleImage = () => {
    setActive(!active);
  };

  return (
    <li
      ref={wrapper}
      onClick={toggleImage}
      className={classNames(
        "max-w-[calc(33.3%-1rem)] m-0 p-0 transition-max-width duration-250 ease-out will-change-max-width",
        "mr-4 mb-4",
        { "max-w-full": active }
      )}
    >
      <button className="b-none bg-transparent m-0 p-0">
        <Img src={`/images/${src}`} alt={alt} />
      </button>
    </li>
  );
};
