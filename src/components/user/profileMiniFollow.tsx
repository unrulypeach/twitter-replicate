import Avatar from "./avatar";
import type ProfileProps from "../../types/profileProps";

export default function ProfileMiniFollow({
  userName,
  userHandle,
  profilePic,
}: ProfileProps): JSX.Element {
  return (
    <div className="flex justify-between items-center h-[69px] px-[15px] py-[11px]">
      <Avatar profilePic={profilePic} />
      <div className="grow pl-3">
        <h1 className="font-bold text-[14px] leading-[19px]">
          {userName ?? "Default Default"}
        </h1>
        <h2 className="text-dark-500 text-[14px] leading-[19px]">
          {"@" + (userHandle ?? "default")}
        </h2>
      </div>
      <button className="bg-black min-w-[30px] min-h-[30px] flex px-[15px] ml-11px rounded-full">
        <div className="btn-follow">
          <span>Follow</span>
        </div>
      </button>
    </div>
  );
}
