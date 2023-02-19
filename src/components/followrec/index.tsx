import type WhoToFollowProps from "../../types/followrecProps";
import ProfileMini from "../user/profileMini";
import uniqid from "uniqid";

export default function WhoToFollow({
  suggestions,
}: WhoToFollowProps): JSX.Element {
  return (
    <div className="flex flex-col rounded-full">
      <div>
        <span>Who to follow</span>
      </div>
      {suggestions?.map((x) => (
        <ProfileMini
          key={uniqid()}
          userName={x.userName}
          userHandle={x.userHandle}
          profilePic={x.profilePic}
        />
      ))}
      <div>
        <span>Show more</span>
      </div>
    </div>
  );
}
