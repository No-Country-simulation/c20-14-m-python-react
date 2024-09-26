import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import "./root.css";
import { router } from "./App/router/router.jsx";

createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
