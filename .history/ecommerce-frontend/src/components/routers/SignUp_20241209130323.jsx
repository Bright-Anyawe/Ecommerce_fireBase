import { useContext, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
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
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const { app } = useContext(AuthContext);
  const auth = getAuth(app);

 const [errorMessage, setErrorMessage] = useState("");
 const [openSnackbar, setOpenSnackbar] = useState(false);

 const handleCloseSnackbar = () => {
   setOpenSnackbar(false);
 };


  const signUp = async (e) => {
    e.preventDefault();
    
    try {
 if (!email || !password) {
   setErrorMessage("Email and Password are required!");
   setOpenSnackbar(true);
   return;
 }


      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", userCredential.user);
      navigate("/homepage");
    } catch (error) {
       const firebaseErrorMessage = error.code === "auth/invalid-email"
        ? "Invalid email format."
        : error.code === "auth/weak-password"
        ? "Password should be at least 6 characters."
        : "Failed to sign up. Please try again.";
      setErrorMessage(firebaseErrorMessage);
      setOpenSnackbar(true);
      console.error("Error signing Up:", error);
       const firebaseErrorMessage = error.code === "auth/invalid-email"
        ? "Invalid email format."
        : error.code === "auth/weak-password"
        ? "Password should be at least 6 characters."
        : "Failed to sign up. Please try again.";
      setErrorMessage(firebaseErrorMessage);
      setOpenSnackbar(true);
      console.error("Error signing Up:", error);
       const firebaseErrorMessage = error.code === "auth/invalid-email"
        ? "Invalid email format."
        : error.code === "auth/weak-password"
        ? "Password should be at least 6 characters."
        : "Failed to sign up. Please try again.";
      setErrorMessage(firebaseErrorMessage);
      setOpenSnackbar(true);
      console.error("Error signing Up:", error);
      }
      console.error("Error signing Up:", error);
      return;
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
        <Typography variant="h5">Register</Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={signUp} style={{ width: "100%", marginTop: "1rem" }}>
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
            {/* <NavLink to="homepage">Sign up</NavLink> */}
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
