import { auth } from "../Services/fireBaseConfig";
import {createUser}

export const Auth = () => {

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