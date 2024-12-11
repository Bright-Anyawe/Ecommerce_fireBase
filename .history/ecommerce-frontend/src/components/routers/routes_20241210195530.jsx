import App from "../Services/App";
import { HomePage } from "./HomePage";
import { Cart } from "./Cart";
import { ProductList } from "./ProductList";
import Login from "./Login";
import SignUp from "./SignUp";
import { Auth } from "./Auth";
import ErrorPage from "../ErrorPage";
import { AuthContext } from "../Context/ContextProvider";
import { useContext } from "react";


const routes = [
  {
    path: "/",
    element: <App />,
    errorPage: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AuthWrapper />,
      },
      {
        path: "homePage",
        element: <HomePage />,
      },

      { path: "productList", element: <ProductList /> },
      { path: "login", element: <Login /> },
      { path: "signUp", element: <SignUp /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;

function AuthWrapper() {
  const { isAuthenticated } = useContext(AuthContext);

  // If authenticated, do not show Auth component again
  if (isAuthenticated) {
    return <HomePage />; // Or any other page you want to redirect to
  }

  return <Auth />;
}