import { useState } from "react";
// import { auth } from "../Services/fireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Services/fireBaseConfig";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    setEmail()
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
