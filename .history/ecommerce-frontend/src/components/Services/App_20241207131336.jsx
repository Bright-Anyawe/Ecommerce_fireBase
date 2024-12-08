import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Header } from '../Header'
import { QuantityContext } from '../Context/ContextProvider';
import { GeneralContext } from '../Context/ContextProvider';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    const [cartProductCount, setCartProductCount] = useState(0);
    const [storageProduct, setStorageProduct] = useState()
    const [fetchedData, setFetchedData] = useState();
    const [loginData, setLoginData] = useState();
    const [registerUser, setRegisterUser] = useState();
      const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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
            username,
            setUsername,
            email,
            setEmail,
            password,
            setPassword,
            error,
            setError,
          }}
        >
          <QuantityContext.Provider
            value={{ cartProductCount, setCartProductCount }}
          >
            <Header />
            <main>
              <Outlet />
            </main>
          </QuantityContext.Provider>
        </GeneralContext.Provider>
      </div>
    </>
  );
}

export default App
