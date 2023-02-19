import type HeaderProps from "../../types/headerProps";

export default function Header({ path }: HeaderProps): JSX.Element {
  return (
    <div>
      <div className="text-[19px] leading-[23px]"> {path}</div>
    </div>
  );
}
