import WhoToFollow from "../components/followrec";
import Header from "../components/header";
import Post from "../components/post";
import Searchbar from "../components/searchbar";
import SideMenu from "../components/sidemenu";
import News from "../components/news";
import Tabbar from "../components/tabbar";
import Tos from "../components/tos";
import { userA, userB } from "../data/demoUsers";

export default function Root(): JSX.Element {
  return (
    <div className="flex flex-row">
      <div className="border-r-[1px] border-searchbar h-screen">
        <SideMenu />
      </div>

      <div>
        <div>
          <Header path="Home" />
        </div>

        <div>
          <Tabbar path="Home" />
        </div>

        <div>
          <Post />
        </div>
      </div>

      <div className="pl-5 pt-[11px] pb-[61px] flex flex-col border-l-[1px] border-searchbar max-w-[350px] min-h-screen">
        <div>
          <Searchbar />
        </div>

        <div>
          <News />
        </div>

        <div>
          <WhoToFollow suggestions={[userA, userB]} />
        </div>

        <div>
          <Tos />
        </div>
      </div>
    </div>
  );
}
