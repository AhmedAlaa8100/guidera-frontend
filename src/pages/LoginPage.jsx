// src/pages/LoginPage.jsx
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema/LoginSchema";
import { useState, useContext } from "react";
import { loginApi } from "../services/AuthService";
import { authContext } from "../contexts/authContext";
import { useNavigate, Link } from "react-router-dom";
import GlassCard from "../components/GlassCard";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const { setIsLoggedIn } = useContext(authContext);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  async function handleLogin(formData) {
    setErrMsg("");
    setIsLoading(true);
    const data = await loginApi(formData);
    setIsLoading(false);

    if (data.message === "success") {
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setErrMsg(data);
    }
  }

  return (
    <GlassCard>
      <form onSubmit={handleSubmit(handleLogin)} noValidate>
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
              Login to Your Account
            </Typography>
          </div>

          <Divider />

          {/* Email */}
          <TextField
            label="Email Address"
            fullWidth
            {...register("email")}
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
          />

          {/* Password */}
          <TextField
            label="Password"
            type="password"
            fullWidth
            {...register("password")}
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
          />

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            disabled={isLoading || !isValid}
            fullWidth
            sx={{
              py: 1.5,
              fontWeight: "bold",
              borderRadius: 3,
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            {isLoading ? (
              <CircularProgress size={26} sx={{ color: "white" }} />
            ) : (
              "Login"
            )}
          </Button>

          {/* Error */}
          {errMsg && (
            <Typography
              variant="body2"
              align="center"
              sx={{
                bgcolor: "error.light",
                color: "error.dark",
                p: 1.5,
                borderRadius: 2,
                fontWeight: 500,
              }}
            >
              {errMsg}
            </Typography>
          )}

          {/* Register Link */}
          <Typography variant="body2" align="center">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="font-semibold text-blue-600">
              Create one
            </Link>
          </Typography>
        </div>
      </form>
    </GlassCard>
  );
}
