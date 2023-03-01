import type IconProps from "../../types/iconProps";
import { Link } from "react-router-dom";

export default function MenuItem({ title, iconData }: IconProps): JSX.Element {
  const lcTitle = title.toLowerCase();
  return (
    <Link to={lcTitle} className="flex cursor-pointer">
      <div className="flex flex-row justify-center p-[11px] hover:bg-blackHov rounded-full">
        <div className="h-[24.5px] w-[24.5px]">{iconData}</div>
        <div className="text-[18px] leading-[23px] ml-[19px] mr-[15px]">
          <span>{title}</span>
        </div>
      </div>
    </Link>
  );
}
