import Header from "../components/header";
import Tabbar from "../components/tabbar";
import { pathWoBackslash } from "../scripts/utils";

export default function NotificationsPage(): JSX.Element {
  return (
    <div>
      <div>
        <div>
          <Header path={pathWoBackslash()} />
        </div>

        <div>
          <Tabbar path="" />
        </div>

        <div></div>
      </div>

      <div>{/* <Outlet /> */}</div>
    </div>
  );
}
