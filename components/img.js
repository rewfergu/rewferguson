function buildSrc(path, size) {
  const pathArray = path.split('.');
  const extension = pathArray.pop();

  return `${pathArray.join('.')}-${size}.${extension}`;
}

function buildSrcSet(path, sizes) {
  const sizeArray = sizes.map(size => {
    return `${buildSrc(path, size)} ${size}w`;
  });

  return sizeArray.join(',');
}

const Img = props => {
  if (props.src.slice(-3) === 'svg') {
    return <img src={props.src} alt={props.alt} {...props} />;
  }

  return (
    <img
      src={buildSrc(props.src, 800)}
      srcSet={buildSrcSet(props.src, [400, 800, 1200, 2000])}
      alt={props.alt}
      {...props}
    />
  );
};

export default Img;
