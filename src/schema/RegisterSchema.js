import * as zod from "zod";

export const registerSchema = zod
  .object({
    user_type: zod.enum(["candidate", "company"], {
      required_error: "Please select your account type",
    }),
    full_name: zod.string().optional(),
    company_name: zod.string().optional(),
    email: zod
      .string()
      .nonempty("Email is required")
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email (e.g. user@example.com)"
      ),
    password: zod
      .string()
      .nonempty("Password is required")
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character"
      ),
    confirmPassword: zod.string().nonempty("Confirm password is required"),
    is_disabled_friendly: zod.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => {
      if (data.user_type === "candidate") {
        return data.full_name && data.full_name.trim() !== "";
      }
      return true;
    },
    {
      message: "Full name is required for candidate accounts",
      path: ["full_name"],
    }
  )
  .refine(
    (data) => {
      if (data.user_type === "company") {
        return data.company_name && data.company_name.trim() !== "";
      }
      return true;
    },
    {
      message: "Company name is required for company accounts",
      path: ["company_name"],
    }
  );
