import { useState } from "react";
import { auth } from "../Services/fireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');



function signIn() {

}

return (
  <>
    <div>
      <input type="email" placeholder="Email..." onChange={(e) => {e.}} />
      <input type="password" placeholder="password..." />
      <button className="signIn">Sign In</button>
    </div>
  </>
);

}