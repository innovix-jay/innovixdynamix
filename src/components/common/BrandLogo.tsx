import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export interface BrandLogoProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  // Single path or array of candidate paths (we'll try each until one loads)
  src: string | string[];
  eager?: boolean;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ src, alt = "", className, eager, decoding = "async", ...rest }) => {
  const sources = useMemo(() => (Array.isArray(src) ? src : [src]), [src]);
  const [index, setIndex] = useState(0);
  const [hidden, setHidden] = useState(false);

  if (hidden || !sources.length) return null;

  return (
    <img
      src={sources[index]}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding={decoding}
      className={cn("block", className)}
      onError={() => {
        if (index < sources.length - 1) {
          setIndex((i) => i + 1);
        } else {
          // Hide broken icon and log for troubleshooting
          // eslint-disable-next-line no-console
          console.warn("BrandLogo failed to load", { alt, attempted: sources });
          setHidden(true);
        }
      }}
      {...rest}
    />
  );
};

export default BrandLogo;
