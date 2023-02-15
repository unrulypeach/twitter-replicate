import Avatar from "./user/avatar";
import Profile from "./user/profile";
import ProfileMini from "./user/profileMini";
import SideMenu from "./components/sidemenu";
import News from "./components/news";
import Searchbar from "./components/searchbar";
import Tabbar from "./components/tabbar";

function App(): JSX.Element {
  return (
    <div className="App">
      <div>--</div>
      <button className="btn-primary-big"> Tweet </button>
      <div>--</div>
      <button className="btn-primary-med"> Tweet </button>
      <div>--</div>
      <button className="btn-secondary-med"> Tweet </button>
      <div>--</div>
      <Searchbar />
      <Tabbar />
      <button className="btn-secondary-sm"> Tweet </button>
      <div>--</div>
      <Avatar />
      <Avatar size={49} />
      <ProfileMini />
      <Profile />
      <SideMenu />
      <News />
    </div>
  );
}

export default App;
