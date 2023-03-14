import MenuItem from "./menuitem";
import {
  home,
  explore,
  notification,
  messages,
  bookmarks,
  twitterblue,
  profile,
  more,
} from "../../../styles/assets/icons/iconData";

export default function SignedInLSideMenu(): JSX.Element {
  return (
    <>
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
    </>
  );
}
