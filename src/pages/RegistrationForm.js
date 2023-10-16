import React, { useContext, useState } from "react";

import { AuthContext } from "../contexts/UserContext";
import Link from "next/link";
import { useRouter } from "next/router"; 



const RegistrationForm = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
const router = useRouter();


  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(email, password, confirm);
    
  
    if (password.length < 6) {
      setError("Password must be 6 characters long");
      return;
    }

    if (password !== confirm) {
      setError("Password did not match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        router.push("/LoginForm");
      })
      .catch((error) => console.error(error));

      
      
      
  };
  return (
    <div className="hero ">
      <div className="hero-content flex-col my-[5rem]">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-center font-bold">SignUp</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
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
                required
              />
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p>
                  Already have an account?
                  <Link
                   href={"/LoginForm"}
                    className="label-text-alt link link-hover text-sm text-blue-500 font-bold"
                  >
                    Please Login
                  </Link>
                </p>
              </label>
              <p className="text-center text-red-400">{error}</p>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignUp" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
