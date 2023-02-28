import type IconProps from "../../types/iconProps";

export default function MenuItem({ title, iconData }: IconProps): JSX.Element {
  return (
    <div className="flex cursor-pointer">
      <div className="flex flex-row justify-center p-[11px] hover:bg-blackHov rounded-full">
        <div className="h-[24.5px] w-[24.5px]">{iconData}</div>
        <div className="text-[18px] leading-[23px] ml-[19px] mr-[15px]">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}
