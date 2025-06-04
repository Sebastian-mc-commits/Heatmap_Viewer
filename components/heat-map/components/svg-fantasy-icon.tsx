import { IconName, ICON_NAMES_ARRAY, numberToIcon } from "@/lib/utils/mapIcons/fantasyIcons";
import { FC, ImgHTMLAttributes, useEffect, useState } from "react";


export { ICON_NAMES_ARRAY };

type IconByName = {
  name: IconName;
  rank?: never;
  size?: string;
  className?: string;
};

type IconByRank = {
  rank: number;
  name?: never;
  size?: string;
  className?: string;
};

export type SvgIconProps = ImgHTMLAttributes<HTMLImageElement> & (IconByName | IconByRank);

const SvgIconFantasy: FC<SvgIconProps> = ({
  name,
  rank,
  size = '24px',
  className = '',
  alt,
  ...rest
}) => {

  const [iconType, setIconType] = useState<IconName>("skeleton")

  useEffect(() => {

    if (rank) {
      setIconType(numberToIcon(rank))
    }
    else if (name) {
      setIconType(name)
    }
  }, [name, rank])

  const iconPath = `/icons/heatmap/SVG-icons/${iconType}.svg`;

  return (
    <img
      src={iconPath}
      alt={alt ?? `${name ?? rank} icon`}
      style={{ width: size, height: size }}
      className={`svg-icon ${className}`}
      {...rest}
    />
  );
};

export default SvgIconFantasy;