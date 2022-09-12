export type Currency = "$" | "€" | "£";
export interface SignupInputs {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  currency: Currency;
  password: string;
  confirmPassword: string;
}