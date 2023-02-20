import { Routes, Route } from "react-router-dom";
import Root from "./routes/root";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </>
  );
}

export default App;
