export type Currency = "$" | "€" | "£";
export interface SignupInputs {
  fullName: string;
  email: string;
  mobileNumber: string;
  country: string;
  currency: Currency;
  occupation?: string;
  password: string;
  confirmPassword: string;
}