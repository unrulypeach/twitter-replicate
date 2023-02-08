import ProfileMini from "../../user/profileMini";
import MenuItem from "./item";

export default function SideMnu(): JSX.Element {
  return (
    <div>
      <MenuItem title="Home" />
      <MenuItem title="Explore" />
      <MenuItem title="Notification" />
      <MenuItem title="Bookmarks" />
      <MenuItem title="Twitter Blue" />
      <MenuItem title="Profile" />
      <MenuItem title="More" />

      <ProfileMini />
    </div>
  );
}
