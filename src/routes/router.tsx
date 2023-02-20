import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error";
import Root from "./root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
