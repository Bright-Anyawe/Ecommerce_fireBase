import { useState } from "react";
import { auth } from "../Services/fireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
     const [email, setEmail] = useState();
     const [password, setEmail] = useState();



function signIn() {

}

return (
  <>
    <div>
      <input type="email" placeholder="Email..." />
      <input type="password" placeholder="password..." />
      <button className="signIn">Sign In</button>
    </div>
  </>
);

}