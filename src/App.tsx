import "./App.css";
import Avatar from "./components/user/avatar";
import ProfileMini from "./components/user/profileMini";
import more from "./styles/assets/more_options.svg";

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
    </div>
  );
}

export default App;
