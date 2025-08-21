import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useContext, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../schema/RegisterSchema";
import { authContext } from "../contexts/authContext";
import { registerApi } from "../services/AuthService";

// MUI imports
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Dark mode context + toggle
import { useDarkMode } from "../contexts/DarkModeContext";
import DarkModeToggle from "../components/DarkModeToggle";

export default function RegisterPage() {
  const { darkMode } = useDarkMode(); // ✅ use global dark mode
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(authContext);

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  async function handleRegister(formData) {
    setErrMsg("");
    setIsLoading(true);
    const data = await registerApi(formData);
    setIsLoading(false);

    if (data.message === "success") {
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setErrMsg(data);
    }
  }

  // ✅ Memoized theme to sync with context darkMode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#1976d2" },
        },
        typography: { fontFamily: "Inter, Roboto, sans-serif" },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <div
        className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
            : "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"
        }`}
      >
        {/* Dark mode toggle */}
        <DarkModeToggle />

        <Paper
          elevation={10}
          sx={{
            maxWidth: 460,
            width: "100%",
            p: 5,
            borderRadius: 4,
            backdropFilter: "blur(16px)",
            backgroundColor: darkMode
              ? "rgba(18, 18, 18, 0.85)"
              : "rgba(255, 255, 255, 0.85)",
            boxShadow: darkMode
              ? "0px 12px 32px rgba(0,0,0,0.6)"
              : "0px 12px 32px rgba(0,0,0,0.15)",
          }}
        >
          <form onSubmit={handleSubmit(handleRegister)} noValidate>
            <div className="flex flex-col gap-6">
              {/* Branding */}
              <div className="text-center">
                <Typography variant="h4" fontWeight="bold" color="primary">
                  Guidera
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ mt: 1, fontWeight: 500 }}
                  color="text.primary"
                >
                  Create Your Account
                </Typography>
              </div>

              <Divider />

              {/* Name Field */}
              <TextField
                label="Full Name"
                type="text"
                fullWidth
                size="medium"
                error={Boolean(errors.name?.message)}
                helperText={errors.name?.message}
                {...register("name")}
              />

              {/* Email Field */}
              <TextField
                label="Email Address"
                type="text"
                fullWidth
                size="medium"
                error={Boolean(errors.email?.message)}
                helperText={errors.email?.message}
                {...register("email")}
              />

              {/* Password Field */}
              <TextField
                label="Password"
                type="password"
                fullWidth
                size="medium"
                error={Boolean(errors.password?.message)}
                helperText={errors.password?.message}
                {...register("password")}
              />

              {/* Confirm Password Field */}
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                size="medium"
                error={Boolean(errors.confirmPassword?.message)}
                helperText={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isLoading || !isValid}
                fullWidth
                sx={{
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: 3,
                  textTransform: "none",
                  fontSize: "1rem",
                  boxShadow: "0px 6px 18px rgba(25, 118, 210, 0.5)",
                }}
              >
                {isLoading ? (
                  <CircularProgress size={26} sx={{ color: "white" }} />
                ) : (
                  "Register"
                )}
              </Button>

              {/* Error Message */}
              {errMsg && (
                <Typography
                  variant="body2"
                  align="center"
                  sx={{
                    bgcolor: darkMode ? "error.dark" : "#fdecea",
                    color: darkMode ? "#ffb4ab" : "#b71c1c",
                    p: 1.5,
                    borderRadius: 2,
                    fontWeight: 500,
                    border: darkMode
                      ? "1px solid rgba(255, 180, 171, 0.5)"
                      : "1px solid #f5c2c7",
                  }}
                >
                  {errMsg}
                </Typography>
              )}

              {/* Login Link */}
              <Typography variant="body2" align="center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Login here
                </Link>
              </Typography>
            </div>
          </form>
        </Paper>
      </div>
    </ThemeProvider>
  );
}
