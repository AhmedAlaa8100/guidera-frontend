// src/pages/RegisterPage.jsx
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Divider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schema/RegisterSchema";
import { useState, useContext } from "react";
import { registerApi } from "../services/AuthService";
import { authContext } from "../contexts/authContext";
import { useNavigate, Link } from "react-router-dom";
import GlassCard from "../components/GlassCard";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const { setIsLoggedIn } = useContext(authContext);
  const navigate = useNavigate();

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
      navigate("/login");
    } else {
      setErrMsg(data);
    }
  }

  return (
    <GlassCard>
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

          {/* Full Name */}
          <TextField
            label="Full Name"
            fullWidth
            {...register("name")}
            error={Boolean(errors.name?.message)}
            helperText={errors.name?.message}
          />

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

          {/* Confirm Password */}
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            {...register("confirmPassword")}
            error={Boolean(errors.confirmPassword?.message)}
            helperText={errors.confirmPassword?.message}
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
              "Register"
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

          {/* Login Link */}
          <Typography variant="body2" align="center">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-blue-600">
              Login here
            </Link>
          </Typography>
        </div>
      </form>
    </GlassCard>
  );
}
