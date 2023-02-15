import TabitemProfile from "./tabitemProfile";
import TabitemHome from "./tabitemHome";
import styleWrapper from "./styleWrapper";

export default function Tabbar(): JSX.Element {
  return (
    <>
      {styleWrapper(TabitemHome)}
      {styleWrapper(TabitemProfile)}
    </>
  );
}
