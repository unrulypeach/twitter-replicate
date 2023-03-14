import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignedOutLSideMenu from "./components/sidemenu/left";
import SignInFooter from "./components/signInFooter";
import BookmarksPage from "./routes/pages/bookmarksPg";
import ExplorePage from "./routes/pages/explorePg";
import MessagesPage from "./routes/pages/messagesPg";
import NotificationsPage from "./routes/pages/notificationsPg";
import ProfilePage from "./routes/pages/profilePg";
import SignedOutHome from "./routes/signedOut";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="flex flex-row justify-center">
        <div className="border-r-[1px] border-searchbar h-screen">
          <SignedOutLSideMenu />
        </div>

        <Routes>
          <Route path="/" element={<SignedOutHome />} />
          <Route path="/home" element={<SignedOutHome />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          {/* <Route path="/userHandle" element={<ProfilePage />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
      <SignInFooter />
    </BrowserRouter>
  );
}

export default App;
