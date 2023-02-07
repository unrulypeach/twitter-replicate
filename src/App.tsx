import Avatar from "./user/avatar";
import Profile from "./user/profile";
import ProfileMini from "./user/profileMini";
import more from "./styles/assets/more_options.svg";
import SideMenu from "./components/sideMenu";

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
      <button className="btn-secondary-sm"> Tweet </button>
      <div>--</div>
      <Avatar />
      <Avatar size={49} />
      <img src={more} width={"30px"} height={"30px"} />
      <ProfileMini />
      <Profile />
      <SideMenu />
    </div>
  );
}

export default App;
