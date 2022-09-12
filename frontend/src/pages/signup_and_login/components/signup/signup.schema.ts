import { object, string } from "yup";

const SignupSchema = object().shape({
  fullName: string().required("Supply full name"),
  email: string()
    .email("Supply valid email address")
    .required("Supply email address"),
  phone: string()
    .min(9, "Supply valid mobile number")
    .required("Supply mobile number"),
  occupation: string().optional(),
  country: string().required("Please select country"),
  currency: string().oneOf(["$", "€", "£"]).required("Select currency"),
  password: string().max(100).required("Supply password"),
  confirmPassword: string()
    .test(
      "equals-password",
      `passwords mismatch`,
      (value, ctx) => value === ctx.parent.password
    )
    .required(),
});

export default SignupSchema;
