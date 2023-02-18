import Avatar from "./avatar";
import { more } from "../../styles/assets/icons/iconData";
import type ProfileProps from "../../types/profileProps";

export default function ProfileMini({
  userName,
  userHandle,
  profilePic,
}: ProfileProps): JSX.Element {
  return (
    <div className="border-[1px] flex justify-between items-center w-[255px] h-[69px]">
      <Avatar profilePic={profilePic} />
      <div className="grow pl-3">
        <h1 className="font-bold">{userName ?? "Default Default"}</h1>
        <h2 className="text-dark-500">{userHandle ?? "@default"}</h2>
      </div>
      <div className="px-2">{more}</div>
    </div>
  );
}
