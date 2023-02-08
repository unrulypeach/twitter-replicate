import type IconProps from "../../types/iconProps";

export default function MenuItem({ title, iconLink }: IconProps): JSX.Element {
  return (
    <div>
      <img className="invert" src={iconLink} width="28px" />
      <li> {title} </li>
    </div>
  );
}
