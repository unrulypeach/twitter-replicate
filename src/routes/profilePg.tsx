import Header from "../components/header";
import RightSideMenu from "../components/sidemenu/right";
import Tabbar from "../components/tabbar";
import Profile from "../components/user/profile";

export default function ProfilePage(): JSX.Element {
  return (
    <div className="flex flex-row">
      <div className="max-w-[600px] w-full shrink-0">
        <div>
          <Header path="" />
        </div>

        <div>
          <Profile />
        </div>

        <div>
          <Tabbar path="" />
        </div>
      </div>

      <div>
        <RightSideMenu path="" />
      </div>
    </div>
  );
}
