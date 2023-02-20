import WhoToFollow from "./followrec";
import Header from "./header";
import Post from "./post";
import Searchbar from "./searchbar";
import SideMenu from "./sidemenu";
import TabitemHome from "./tabbar/tabitemHome";
import News from "./news";

export default function Home(): JSX.Element {
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
