import  { useContext, useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../Context/ContextProvider";

export function SignUp() {
  const {
    username,
    email,
    password,
    setUsername,
    setEmail,
    setPassword,
    error,
    setError,
  } = useContext(AuthContext);
  const navigate = useNavigate();


    const { app } = useContext(AuthContext);
    const auth = getAuth(app);

    const signUp = async () => {
      try {
        await createUserWithEmailAndPassword(auth,username,  email, password);
      } catch (error) {
        console.error("Error signing Up:", error);
      }
      setEmail("");
      setPassword("");
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(username, password, email)
      alert("Registration successful");
            navigate("/login");
    } catch (err) {
      setError("Error registering user");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Typography variant="h5">Register</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={signUp} style={{ width: "100%", marginTop: "1rem" }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign up
          </Button>

          <p>
            Account already exit? <NavLink to="login"> Login</NavLink>{" "}
          </p>
        </form>
      </Box>
    </Container>
  );
}

export default SignUp;
