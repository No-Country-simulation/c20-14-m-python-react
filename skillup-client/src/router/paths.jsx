import SignUp from "../pages/SignUp/SignUp.jsx";

export const SIGN_UP = {
  id: crypto.randomUUID(),
  path: "/sign-up",
  name: "Registro",
  element: <SignUp />,
};