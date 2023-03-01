import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error";
import Root from "./root";
import ExplorePage from "./explorePg";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: ,
    children: [
      {
        path: "explore",
        element: <ExplorePage />,
      },
      // {
      //   path: "notifications",
      //   element: <NotificationsPage />
      // },
      // {
      //   path:"messages",
      //   element: <MessagesPage />
      // },
      // {
      //   path: "bookmarks",
      //   element: <Bookmarks />
      // },
      // {
      //   path: "profile",
      //   element: </>
      // },
    ],
  },
]);
