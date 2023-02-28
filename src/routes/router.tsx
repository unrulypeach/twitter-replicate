import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error";
import Root from "./root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: ,
    // children: [
    //   {
    //     path: "explore",
    //     element: <Explore />,
    //   },
    //   {
    //     path: "notifications",
    //     element: <Notifications />
    //   },
    //   {
    //     path:"messages",
    //     element: <Messages />
    //   },
    //   {
    //     path: "bookmarks",
    //     element: <Bookmarks />
    //   },
    //   {
    //     path: "profile",
    //     element: </>
    //   },
    // ],
  },
]);
