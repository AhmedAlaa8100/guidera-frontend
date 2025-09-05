// src/pages/RegisterPage.jsx
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schema/RegisterSchema";
import { useState, useContext, useEffect } from "react";
import { registerApi } from "../services/AuthService";
import { useNavigate, Link } from "react-router-dom";
import GlassCard from "../components/GlassCard";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const userType = watch("user_type");

  // Trigger validation when user type changes
  useEffect(() => {
    if (userType) {
      trigger();
    }
  }, [userType, trigger]);

  async function handleRegister(formData) {
    setErrMsg("");
    setIsLoading(true);

    // Transform data to match API expected structure
    const apiData = {
      email: formData.email,
      password: formData.password,
      user_type: formData.user_type,
    };

    // Add profile data based on user type
    if (formData.user_type === "candidate") {
      apiData.candidate_profile = {
        full_name: formData.full_name,
        github_link: "",
        linkedin_link: "",
        cv: null,
        current_position: "",
        desired_position: "",
        skill_summary: null,
        progress_score: null,
        disability: null,
      };
    } else if (formData.user_type === "company") {
      apiData.company_profile = {
        company_name: formData.company_name,
        is_disabled_friendly: formData.is_disabled_friendly || false,
        subscription_status: "free", // Default to free subscription for new companies
      };
    }

    const data = await registerApi(apiData);
    setIsLoading(false);

    if (data && data.message === "User created successfully") {
      navigate("/login");
    } else {
      // Handle different error response formats
      if (typeof data === "string") {
        setErrMsg(data);
      } else if (data && data.error) {
        setErrMsg(data.error);
      } else if (data && data.message) {
        setErrMsg(data.message);
      } else if (data && data.company_profile) {
        // Handle company profile validation errors
        const profile = data.company_profile;
        let errorMessages = [];

        if (profile.company_name) {
          const errorMsg = Array.isArray(profile.company_name)
            ? profile.company_name.join(", ")
            : profile.company_name;
          errorMessages.push(`Company name: ${errorMsg}`);
        }

        if (profile.is_disabled_friendly) {
          const errorMsg = Array.isArray(profile.is_disabled_friendly)
            ? profile.is_disabled_friendly.join(", ")
            : profile.is_disabled_friendly;
          errorMessages.push(`Disabled friendly: ${errorMsg}`);
        }

        if (profile.subscription_status) {
          const errorMsg = Array.isArray(profile.subscription_status)
            ? profile.subscription_status.join(", ")
            : profile.subscription_status;
          errorMessages.push(`Subscription status: ${errorMsg}`);
        }

        setErrMsg(
          errorMessages.join("; ") || "Company profile validation error"
        );
      } else if (data && data.candidate_profile) {
        // Handle candidate profile validation errors
        const profile = data.candidate_profile;
        let errorMessages = [];

        if (profile.full_name) {
          const errorMsg = Array.isArray(profile.full_name)
            ? profile.full_name.join(", ")
            : profile.full_name;
          errorMessages.push(`Full name: ${errorMsg}`);
        }

        setErrMsg(
          errorMessages.join("; ") || "Candidate profile validation error"
        );
      } else if (data && data.email) {
        const errorMsg = Array.isArray(data.email)
          ? data.email.join(", ")
          : data.email;
        setErrMsg(`Email: ${errorMsg}`);
      } else if (data && data.password) {
        const errorMsg = Array.isArray(data.password)
          ? data.password.join(", ")
          : data.password;
        setErrMsg(`Password: ${errorMsg}`);
      } else {
        setErrMsg("Registration failed. Please try again.");
      }
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

          {/* User Type Selection */}
          <FormControl fullWidth error={Boolean(errors.userType?.message)}>
            <InputLabel>Account Type</InputLabel>
            <Select
              {...register("user_type")}
              label="Account Type"
              defaultValue="candidate"
            >
              <MenuItem value="candidate">Candidate</MenuItem>
              <MenuItem value="company">Company</MenuItem>
            </Select>
            {errors.userType?.message && (
              <Typography
                variant="caption"
                color="error"
                sx={{ mt: 0.5, ml: 1.5 }}
              >
                {errors.userType.message}
              </Typography>
            )}
          </FormControl>

          {/* Full Name / Company Name */}
          {userType === "candidate" ? (
            <TextField
              label="Full Name"
              fullWidth
              {...register("full_name")}
              error={Boolean(errors.full_name?.message)}
              helperText={errors.full_name?.message}
            />
          ) : (
            <TextField
              label="Company Name"
              fullWidth
              {...register("company_name")}
              error={Boolean(errors.company_name?.message)}
              helperText={errors.company_name?.message}
            />
          )}

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

          {/* Company Fields - Only show when company is selected */}
          {userType === "company" && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register("is_disabled_friendly")}
                    color="primary"
                  />
                }
                label={
                  <Box>
                    <Typography variant="body2" component="span">
                      We are a disabled-friendly company
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{ color: "text.secondary", mt: 0.5 }}
                    >
                      This indicates our commitment to hiring and supporting
                      disabled persons
                    </Typography>
                  </Box>
                }
                sx={{ alignItems: "flex-start" }}
              />
            </Box>
          )}

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
