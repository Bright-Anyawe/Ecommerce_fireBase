


export const SignUp = () => {


  return (
    <>
      <form className="signUp-container">
        <h2 className="formTitle">Sign Up</h2>
        <label className="userName-label" htmlFor="userName">
          UserName:
          <input placeholder="userName" type="text" />
        </label>

        <label className="email-label" htmlFor="email">
          Email:
          <input placeholder="email" type="email" />
        </label>

        <label className="email-label" htmlFor="password">
          Email:
          <input placeholder="email" type="email" />
        </label>
      </form>
    </>
  );
}