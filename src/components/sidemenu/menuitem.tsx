import type IconProps from "../../types/iconProps";

export default function MenuItem({ title, iconData }: IconProps): JSX.Element {
  return (
    <div className=" ">
      <div className="flex p-[11px] hover:bg-blue rounded-full">
        <div className="h-[24.5px] w-[24.5px]">{iconData}</div>
        <a className="text-[16px] leading-[19px] pl-[19px] pr-[15px]">
          <span>{title}</span>
        </a>
      </div>
    </div>
  );
}
