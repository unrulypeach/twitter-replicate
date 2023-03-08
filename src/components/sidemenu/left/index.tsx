import ProfileMini from "../../user/profileMini";
import MenuItem from "./menuitem";

import {
  home,
  explore,
  notification,
  messages,
  bookmarks,
  twitterBirdBlue,
  twitterblue,
  profile,
  more,
} from "../../../styles/assets/icons/iconData";

export default function SideMenu(): JSX.Element {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col basis-auto items-start">
        <div className="flex w-[47px] h-[47px]">
          <div className="text-blue flex justify-center items-center grow">
            {twitterBirdBlue}
          </div>
        </div>
        <div className="flex flex-col">
          <MenuItem title="Home" iconData={home} />
          <MenuItem title="Explore" iconData={explore} />
          <MenuItem title="Notifications" iconData={notification} />
          <MenuItem title="Messages" iconData={messages} />
          <MenuItem title="Bookmarks" iconData={bookmarks} />
          <MenuItem title="Twitter Blue" iconData={twitterblue} />
          <MenuItem title="Profile" iconData={profile} />
          <MenuItem title="More" iconData={more} />
        </div>
        <button className="btn-primary-big my-[15px]"> Tweet </button>
      </div>

      <div>
        <ProfileMini />
      </div>
    </div>
  );
}
