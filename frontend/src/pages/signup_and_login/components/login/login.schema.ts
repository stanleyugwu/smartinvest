import { boolean, object, string } from "yup";

const LoginSchema = object().shape({
    email:string().email("Supply valid email address").required("Supply your email address"),
    password:string().max(100).required("Supply your password"),
    rememberMe:boolean()
});

export default LoginSchema