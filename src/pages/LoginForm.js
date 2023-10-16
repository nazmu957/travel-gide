// import { Button } from "antd";
// import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
// import Head from "next/head";
// import styles from "@/styles/Login.module.css";
// import { signIn } from "next-auth/react";
// const LoginPage = () => {
//   return (
//     <div>
//       <Head>
//         <title>Next Login</title>
//       </Head>
//       <div className={styles.form}>
//         <div className={styles.social_icons}>
//           <GoogleOutlined
//             onClick={() =>
//               signIn("google", {
//                 callbackUrl: "https://travel-gide-client-nazmu957.vercel.app/",
//               })
//             }
//           />
//         </div>
//         <h3>LOGIN WITH GOOGLE</h3>
//         <p>Click the icon</p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// LoginForm.js
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
// import {  useLocation, useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

 import { AuthContext } from "../contexts/UserContext";
import Link from "next/link";

const LoginForm = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const { signIn } = useContext(AuthContext);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const router = useRouter();
   

  



  

 const handleLogin = (event) => {
   event.preventDefault();
   const form = event.target;
   const email = form.email.value;
   const password = form.password.value;

   signIn(email, password)
     .then((result) => {
       const user = result.user;
       console.log("User logged in:", user);
       form.reset();
       router.push("/"); // Redirect after successful login
     })
     .catch((error) => {
       console.error("Login error:", error);
       // Handle the error, show a message to the user, etc.
     });
 };
  return (
    <div className="hero ">
      <div className="hero-content flex-col my-[5rem]">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-center font-bold">Please Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <p className="text-sm py-2">
                  New in our site?
                  <Link
                    href={"/RegistrationForm"}
                    className="label-text-alt link link-hover text-sm text-blue-500 font-bold"
                  >
                    Create Account
                  </Link>
                </p>
              </label>
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;