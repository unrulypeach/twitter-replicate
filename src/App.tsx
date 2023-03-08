import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideMenu from "./components/sidemenu/left";
import BookmarksPage from "./routes/bookmarksPg";
import ExplorePage from "./routes/explorePg";
import MessagesPage from "./routes/messagesPg";
import NotificationsPage from "./routes/notificationsPg";
import ProfilePage from "./routes/profilePg";
import Root from "./routes/root";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="flex flex-row justify-center">
        <div className="border-r-[1px] border-searchbar h-screen">
          <SideMenu />
        </div>

        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/home" element={<Root />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          {/* <Route path="/userHandle" element={<ProfilePage />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
