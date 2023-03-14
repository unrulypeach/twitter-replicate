import WhoToFollow from "../../features/followrec";
import Header from "../../features/header";
import Post from "../../features/post";
import Searchbar from "../../features/searchbar";
import News from "../../features/news";
import Tabbar from "../../features/tabbar";
import Tos from "../../features/tos";
import { userA, userB } from "../../data/demoUsers";
import NoHome from "../../components/noContent/noHome";

export default function SignedInHome(): JSX.Element {
  return (
    <div className="flex flex-row">
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

        <div>
          <NoHome />
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
