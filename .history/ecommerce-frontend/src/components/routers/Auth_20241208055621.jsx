import { auth } from "../Services/fireBaseConfig";

export const Auth = () => {

return (
  <>
    <div>
      <input type="email" placeholder="Email..." />
      <input type="password" placeholder="password..." />
      <button className="signIn">SignIn</button>
    </div>
  </>
);

}