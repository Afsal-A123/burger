import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
  Snackbar,
  Alert,
  Modal,
  Box,
} from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Logo from '../../asserts/Logo.png';
import '../header/Login.css';



function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate a login API call
    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        setSuccess(true);
        setTimeout(() => {
          navigate("/Home"); // Redirect to home page after successful login
          onClose(); // Close the modal
        }, 1000);
      } else {
        setError("Invalid email or password. Please try again.");
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setError("");

    // Simulate Google Sign-In
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => {
        navigate("/Home"); // Redirect to home page after successful Google Sign-In
        onClose(); // Close the modal
      }, 1000);
      setIsLoading(false);
    }, 1500);
  };

  const handleCloseSnackbar = () => {
    setError("");
    setSuccess(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <Card className="w-96 p-6 shadow-lg rounded-2xl bg-white transform transition-transform hover:scale-105">
        <CardHeader>
          <Typography variant="h5" align="center" className="font-bold">
            Welcome Back!
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary">
            Sign in to continue
          </Typography>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              error={!!error}
              helperText={error && "Please enter a valid email."}
            />
            <TextField
              type={showPassword ? "text" : "password"}
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              error={!!error}
              helperText={error && "Please enter a valid password."}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isLoading}
              className="h-12"
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="text-center my-4 text-gray-500">or</div>
          <Button
            onClick={handleGoogleSignIn}
            variant="outlined"
            fullWidth
            startIcon={<FcGoogle />}
            disabled={isLoading}
            className="h-12"
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign in with Google"
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={!!error || success}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {success ? "Login successful! Redirecting..." : error}
        </Alert>
      </Snackbar>
    </div>
  );
}
export default Login;