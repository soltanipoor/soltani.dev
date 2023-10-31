import NextImage from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

function Image(props: ImageProps) {
  return <NextImage {...props} />;
}

export default Image;
