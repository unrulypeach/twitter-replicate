import ProfileMini from "../user/profileMini";
import MenuItem from "./menuitem";

import {
  home,
  explore,
  notification,
  messages,
  bookmarks,
  twitterBird,
  twitterblue,
  profile,
  more,
  exploreFilled,
} from "../../styles/assets/icons/iconData";

export default function SideMnu(): JSX.Element {
  return (
    <div className="flex flex-col basis-auto items-start">
      <div className="flex w-[47px] h-[47px]">
        <div className="text-blue flex justify-center items-center grow">
          {twitterBird}
        </div>
      </div>
      <div>
        <MenuItem title="Home" iconData={home} />
        <MenuItem title="Explore" iconData={explore} />
        <MenuItem title="ExploreFilled" iconData={exploreFilled} />
        <MenuItem title="Notification" iconData={notification} />
        <MenuItem title="Messages" iconData={messages} />
        <MenuItem title="Bookmarks" iconData={bookmarks} />
        <MenuItem title="Twitter Blue" iconData={twitterblue} />
        <MenuItem title="Profile" iconData={profile} />
        <MenuItem title="More" iconData={more} />
      </div>
      <button className="btn-primary-big my-[15px]"> Tweet </button>
      <ProfileMini />
    </div>
  );
}
