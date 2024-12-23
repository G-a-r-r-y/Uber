import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_BASE_URL}/users/register`;
    console.log(url);
    const response = await axios.post(url, {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
    });
    console.log(response);
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/9271327/pexels-photo-9271327.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Taxi Image"
            className="w-full max-h-screen h-full object-cover"
          />
        </div>
        <div className="min-h-screen w-1/2 bg-black text-white p-4">
          <div
            className="text-4xl font-bold cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Uber
          </div>
          <div className="w-full space-y-8 px-4">
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="font-bold text-xl mb-2">What's your name</div>
                <div className="flex w-full gap-5">
                  <div className="w-full">
                    <label htmlFor="firstName" className="sr-only">
                      first Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="firstName"
                      required
                      className="appearance-none rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="lastName" className="sr-only">
                      last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="lastName"
                      required
                      className="appearance-none rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div className="font-bold text-xl !mb-2">What's your email</div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />
                <div className="font-bold text-xl !mb-2">Enter Password</div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Create account
                </button>
              </div>

              <div className="w-full text-center">
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => {
                    navigate("/user-login");
                  }}
                >
                  login here
                </span>
              </div>
            </form>
            <div className="text-xs absolute bottom-3">
              This site is protected by reCAPTCHA and the{" "}
              <span className="underline">Google Privacy Policy </span>and
              <span className="underline">Terms of Service apply.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
