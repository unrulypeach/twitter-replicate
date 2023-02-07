import ProfileMini from "../user/profileMini";
import twitterBlack from "../styles/assets/twitter-bird-black.svg";
export default function SideMenu(): JSX.Element {
  return (
    <div className="border-[1px]">
      <img src={twitterBlack} height="28px" />
      <div>
        <li> Home </li>
        <li> Explore </li>
        <li> Notifications </li>
        <li> Messages </li>
        <li> Bookmarks </li>
        <li> Twitter Blue </li>
        <li> Profile </li>
        <li> More </li>
      </div>

      <ProfileMini />
    </div>
  );
}
