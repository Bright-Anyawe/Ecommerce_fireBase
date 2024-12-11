import { initializeApp } from "firebase/app";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { QuantityContext } from "../Context/ContextProvider";
import { GeneralContext } from "../Context/ContextProvider";
import { AuthContext } from "../Context/ContextProvider";
import { getFirestore } from "firebase/firestore";

function App() {
  const [storageProduct, setStorageProduct] = useState();
  const [fetchedData, setFetchedData] = useState();
  const [loginData, setLoginData] = useState();
  const [registerUser, setRegisterUser] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [inputQuantity, setInputQuantity] = useState({});
   const [qtySummery, setQtySummery] = useState([]);
   const [qtySummeryObject, setQuantitySummeryObject] = useState({
     productUrl: "",
     productTitle: "",
     productPrice: "",
     QtySelected: "",
     qtySubTotal: "",
   });
     const [isAuthenticated, setIsAuthenticated] = useState(false);



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

   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       setIsAuthenticated(!!user); // Set true if a user is logged in, false otherwise
     });

     return unsubscribe; // Cleanup on unmount
   }, [auth]);


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
            db,

            items,
            setItems,
          }}
        >
          <QuantityContext.Provider
            value={{
              cartCount,
              setCartCount,
              inputQuantity,
              setInputQuantity,
              qtySummery,
              setQtySummery,
              qtySummeryObject,
              setQuantitySummeryObject,
            }}
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
                isAuthenticated,
                setIsAuthenticated,
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
