import { auth } from "../Services/fireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {

console si

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