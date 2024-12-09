import  { useState } from "react";
import { useContext } from "react";
import { GeneralContext } from "../Context/ContextProvider";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../Context/ContextProvider";

function Login() {
    const {
      email,
      password,
      setEmail,
      setPassword,
      error,
      setError,
    } = useContext(Auth);
  const navigate = useNavigate();

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await loginUser(email, password);
  //     localStorage.setItem("token", response.data.token);
  //     alert("Login successful");
  //     navigate("/dashboard");
  //   } catch (err) {
  //     setError("Invalid email or password", er);
  //   }
  // };

  
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
    setEmail("");
    setPassword("");
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
        <Typography variant="h5">Login</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", marginTop: "1rem" }}
        >
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
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>

      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </Container>
  );
}

export default Login;
