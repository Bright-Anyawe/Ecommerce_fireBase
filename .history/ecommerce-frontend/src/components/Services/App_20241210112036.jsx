import { initializeApp } from "firebase/app";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { QuantityContext } from "../Context/ContextProvider";
import { GeneralContext } from "../Context/ContextProvider";
import { AuthContext } from "../Context/ContextProvider";

function App() {
  const [cartProductCount, setCartProductCount] = useState(0);
  const [storageProduct, setStorageProduct] = useState();
  const [fetchedData, setFetchedData] = useState();
  const [loginData, setLoginData] = useState();
  const [registerUser, setRegisterUser] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
    const [items, setItems] = useState([]);


  const firebaseConfig = {
    apiKey: "AIzaSyCwKsZHIYpZ7Z-i7akMIATKAF5ISmc5dVk",
    authDomain: "ecommerce-2d416.firebaseapp.com",
    projectId: "ecommerce-2d416",
    storageBucket: "ecommerce-2d416.firebasestorage.app",
    messagingSenderId: "206257658106",
    appId: "1:206257658106:web:bbc140bf448ab826f71143",
    measurementId: "G-B8XHERL3JH",
  };
  const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


  return (
    <>
      <div className="rootLayout">
        <GeneralContext.Provider
          value={{
            storageProduct,
            setStorageProduct,
            fetchedData,
            setFetchedData,
            loginData,
            setLoginData,
            registerUser,
            setRegisterUser,
          }}
        >
          <QuantityContext.Provider
            value={{ cartProductCount, setCartProductCount, items, setItems }}
          >
            <AuthContext.Provider
              value={{
                username,
                setUsername,
                email,
                setEmail,
                password,
                setPassword,
                error,
                setError,
                app,
              }}
            >
              <Header />
              <main>
                <Outlet />
              </main>
            </AuthContext.Provider>
          </QuantityContext.Provider>
        </GeneralContext.Provider>
      </div>
    </>
  );
}

export default App;
