import WhoToFollow from "../components/followrec";
import Header from "../components/header";
import Post from "../components/post";
import Searchbar from "../components/searchbar";
import SideMenu from "../components/sidemenu";
import TabitemHome from "../components/tabbar/tabitemHome";
import News from "../components/news";

export default function Root(): JSX.Element {
  return (
    <div className="flex flex-row">
      <div>
        <SideMenu />
      </div>

      <div>
        <div>
          <Header />
        </div>

        <div>
          <TabitemHome />
        </div>

        <div>
          <Post />
        </div>
      </div>

      <div>
        <div>
          <Searchbar />
        </div>

        <div>
          <News />
        </div>

        <div>
          <WhoToFollow />
        </div>
      </div>
    </div>
  );
}
