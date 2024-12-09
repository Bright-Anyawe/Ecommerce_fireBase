import App from "../Services/App";
import { HomePage } from "./HomePage";
import { Cart } from "./Cart";
import { ProductList } from "./ProductList";
import Login from "./Login";
import SignUp from "./SignUp";
import { Auth } from "./Auth";



const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Auth />,
      },
      {
        path: "home",
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