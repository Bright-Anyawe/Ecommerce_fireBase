import { useState } from "react";
// import { auth } from "../Services/fireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { 
const firebaseConfig = {
  apiKey: "AIzaSyCwKsZHIYpZ7Z-i7akMIATKAF5ISmc5dVk",
  authDomain: "ecommerce-2d416.firebaseapp.com",
  projectId: "ecommerce-2d416",
  storageBucket: "ecommerce-2d416.firebasestorage.app",
  messagingSenderId: "206257658106",
  appId: "1:206257658106:web:bbc140bf448ab826f71143",
  measurementId: "G-B8XHERL3JH",
}

const app = initializeApp(firebaseConfig); } from "../Services/fireBaseConfig";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {auth} = fireBaseConfig()

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    }
     catch (error) {
      console.error("Error signing in:", error);
    }

  };

  return (
    <>
      <div>
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password..."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="signIn" onClick={signIn}>
          Sign In
        </button>
      </div>
    </>
  );
};
