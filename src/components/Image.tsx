import { useEffect, useState } from "react";

interface ImageComponentProps {
  src: string;
  width: number;
  height: number;
  className?: string;
}

const ImageComponent = ({
  src,
  width,
  height,
  className = "",
}: ImageComponentProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!src) return;

    const image = new Image();
    image.src = src;
    image.onload = () => setIsLoading(false);

    return () => {
      image.onload = null; // cleanup
    };
  }, [src]);

  return (
    <div>
      <img
        width={width}
        height={height}
        src={src}
        alt="Poster"
        className={`${className} ${
          isLoading ? "blur-md" : "blur-0"
        } transition duration-300`}
      />
    </div>
  );
};

export default ImageComponent;
