export type Currency = "$" | "€" | "£";
export interface SignupInputs {
  fullName: string;
  email: string;
  mobileNumber: string;
  country: string;
  currency: Currency;
  password: string;
  confirmPassword: string;
}