import Avatar from "./avatar";
import { moreNoBorder } from "../../styles/assets/icons/iconData";
import type ProfileProps from "../../types/profileProps";

export default function ProfileMini({
  userName,
  userHandle,
  profilePic,
}: ProfileProps): JSX.Element {
  return (
    <div className="flex justify-between items-center w-[255px] h-[69px]">
      <Avatar profilePic={profilePic} />
      <div className="grow pl-3">
        <h1 className="font-bold text-[14px] leading-[19px]">
          {userName ?? "Default Default"}
        </h1>
        <h2 className="text-dark-500 text-[14px] leading-[19px]">
          {"@" + (userHandle ?? "default")}
        </h2>
      </div>
      <div className="">{moreNoBorder}</div>
    </div>
  );
}
