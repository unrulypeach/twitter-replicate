import type HeaderProps from "../../types/headerProps";

export default function Header({ path }: HeaderProps): JSX.Element {
  return (
    <div className="h-[50px] px-[15px]">
      <div className="h-full text-[19px] leading-[23px] font-bold flex items-center">
        <span>{path}</span>
      </div>
    </div>
  );
}
