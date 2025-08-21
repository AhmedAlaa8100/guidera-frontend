import * as zod from "zod"
export const loginSchema = zod.object({
    email: zod.string()
        .nonempty("Email is required")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email (e.g. user@example.com)"),
    password: zod.string()
        .nonempty("Password is required")
        .regex(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character"
  ),
})
