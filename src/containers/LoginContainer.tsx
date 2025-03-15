import { Box } from "@mui/material";
import AuthBanner from "../components/auth/AuthBanner";
import AuthBgImage from "../components/auth/AuthBgImage";
import LoginForm from "../components/auth/LoginForm";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { toast } from "sonner";

const LoginContainer = () => {
   const navigate = useNavigate();

   const loginMutation = useMutation({
      mutationFn:login,
      onSuccess:(res)=>{
         localStorage.setItem('token', res.data.token)
         localStorage.setItem('coins', res.data.coins)
         localStorage.setItem('role', "Admin")

         toast.success("Admin login successfull")
         setTimeout(() => {
            navigate("/dashboard");
         }, 3000);
      },
      onError:(err:any)=>{
         toast.error(err.error);
      }
   })

   const validationSchema = yup.object({
      email: yup
         .string()
         .email("Enter a valid email")
         .required("Email is required"),
      password: yup
         .string()
         .min(8, "Password should be of minimum 8 characters length")
         .matches(
         /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
         "Password must contain at least one letter, one capital letter, one number, and one special character."
         )
         .required("Password is required"),
   });

   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
         loginMutation.mutate(values)
      },
   });

   return (
      <AuthBgImage>
         <Box
         sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
         }}
         >
         <LoginForm 
            isPending={loginMutation.isPending}
            formik={formik} />
         <AuthBanner />
         </Box>
      </AuthBgImage>
  );
};

export default LoginContainer;
