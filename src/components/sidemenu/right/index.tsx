import type HeaderProps from "../../../types/headerProps";
import Searchbar from "../../searchbar";
import News from "../../news";
import WhoToFollow from "../../followrec";
import Tos from "../../tos";
import { userA, userB } from "../../../data/demoUsers";

export default function RightSideMenu({ path }: HeaderProps): JSX.Element {
  return path === "explore" ? (
    <div>
      <div>
        <WhoToFollow suggestions={[userA, userB]} />
      </div>

      <Tos />
    </div>
  ) : (
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
  );
}
