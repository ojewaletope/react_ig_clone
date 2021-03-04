import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const Login = () => {
  const [emailAddress, setEmailAddres] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="Iphone with Instagram"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          <form method="POST">
            <input
              type="text"
              aria-label="Enter your email address"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              placeholder="Email Address"
              onChange={({ target }) => setEmailAddres(target.value)}
            />
            <input
              type="password"
              aria-label="Enter your password"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={isInvalid}
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
          <p className="tex-sm">
            Don't have an account?
            <Link to={ROUTES.SIGN_UP} className="font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
