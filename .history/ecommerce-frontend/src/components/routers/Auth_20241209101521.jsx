import { useState } from "react";
// import { auth } from "../Services/fireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import app from "../Services/fireBaseConfig";
import { getAuth } from "firebase/auth";
import { GeneralContext, AuthContext } from "../Context/ContextProvider";
import AuthContext
import { useContext } from "react";


export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {app} = useContext(GeneralContext)
  const auth = getAuth(app)
  
  
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    }
     catch (error) {
      console.error("Error signing in:", error);
    }
    setEmail("");
    setPassword("");

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