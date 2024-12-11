
import { AuthContext } from "../Context/ContextProvider";
import { useContext } from "react";



export function AuthWrapper() {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <HomePage />;
  }

  return <Auth />;
}
