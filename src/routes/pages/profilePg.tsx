import Header from "../../features/header";
import SignedInRSideMenu from "../../components/sidemenu/right/signedInRSideMenu";
import Tabbar from "../../features/tabbar";
import Profile from "../../components/user/profile";

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
        <SignedInRSideMenu path="" />
      </div>
    </div>
  );
}
