import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
