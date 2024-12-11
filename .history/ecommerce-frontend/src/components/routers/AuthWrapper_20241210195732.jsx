
import { AuthContext } from "../Context/ContextProvider";
import { useContext } from "react";
import { HomePage } from "./HomePage";


export function AuthWrapper() {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <HomePage />;
  }

  return <Auth />;
}
