
import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/UserContext";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const LoginForm = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState(null); // State variable to hold the error message
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      const user = result.user;
      console.log("User logged in:", user);
      form.reset();
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again."); // Set the error message
    }
  };
  return (
    <div className="hero ">
      <Head>
        <title>Login</title>
      </Head>
      <div className="hero-content flex-col my-[5rem]">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-center font-bold">Login</h1>
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
              {error && <div className="text-red-500">{error}</div>}{" "}
              {/* Display error message */}
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign In"
              />
            </div>
            {/* <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

LoginForm.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
