import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import SignupPage from "../pages/Signup/SignupPage";

export interface RouteType {
  path: string;
  element: any;
}
const RouteLists: RouteType[] = [
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "/",
    // element: <ProtectedRoute children={<HomePage />} />,
    element: <HomePage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
];
export default RouteLists;
