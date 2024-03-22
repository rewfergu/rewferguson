function buildSrc(path: string, size: number) {
  const pathArray = path.split(".");
  const extension = pathArray.pop();

  return `${pathArray.join(".")}-${size}.${extension}`;
}

function buildSrcSet(path: string, sizes: number[]) {
  const sizeArray = sizes.map((size) => {
    return `${buildSrc(path, size)} ${size}w`;
  });

  return sizeArray.join(",");
}

export const Img = (props: {
  src: string;
  alt: string;
  className?: string;
}) => {
  if (props.src.slice(-3) === "svg") {
    return <img src={props.src} alt={props.alt} />;
  }

  return (
    <img
      src={buildSrc(props.src, 800)}
      srcSet={buildSrcSet(props.src, [400, 800, 1200, 2000])}
      alt={props.alt}
      className={props.className}
    />
  );
};
