import { auth } from "../Services/fireBaseConfig";
import {crea}

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