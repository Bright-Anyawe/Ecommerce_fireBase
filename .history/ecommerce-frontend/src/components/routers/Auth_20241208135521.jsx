import { useState } from "react";
// import { auth } from "../Services/fireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import fireBaseConfig from "../Services/fireBaseConfig";


export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {auth, db} = 

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
