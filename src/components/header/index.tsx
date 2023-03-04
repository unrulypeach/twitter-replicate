import type HeaderProps from "../../types/headerProps";
import { setting } from "../../styles/assets/icons/iconData";

export default function Header({ path }: HeaderProps): JSX.Element {
  function withSettings(): JSX.Element {
    return (
      <div className="h-[50px] px-[15px]">
        <div className="h-full text-[19px] leading-[23px] font-bold flex items-center">
          <span>{path}</span>
        </div>
        <div>
          <span>{setting}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="h-[50px] px-[15px]">
      <div className="h-full text-[19px] leading-[23px] font-bold flex items-center">
        <span>{path}</span>
      </div>
    </div>
  );
}
