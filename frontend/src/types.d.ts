export type SuccessRes<DataType = any> = {
  message: string;
  data?: DataType;
};
export type ErrorRes = {
  message: string;
  howToFix: string;
};

export type SignUpBody = {
  fullname: string;
  email: string;
  phone: string;
  currency: string;
  country: string;
  password: string;
};
export type SignUpRes = {
  message: string;
  data: {
    id: number;
    country: string;
    currency: string;
    email: string;
    fullname: string;
    phone: string;
    approved: boolean;
    accountManager: string;
    balance: number;
    credit: number;
    deposit: number;
    profit: number;
    tradingPercentage: number;
    withdrawal: number;
    updatedAt: string;
    createdAt: string;
  };
};
export type SignUp = (
  fullname: string,
  email: string,
  phone: string,
  currency: string,
  country: string,
  password: string
) => Promise<SuccessRes>;
