import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_BASE_URL}/captains/login`;
    console.log(url);
    const response = await axios.post(url, {
      email,
      password,
    });
    console.log(response);
  };

  return (
    <>
      <div className="flex">
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
                <div className="font-bold text-xl mb-2">What's your email</div>
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
                  Sign in
                </button>
              </div>
            </form>
            <div className="w-full text-center">
              Join a fleet?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  navigate("/captain-signup");
                }}
              >
                Register as a Captain
              </span>
            </div>
            <div
              className="w-full"
              onClick={() => {
                navigate("/user-login");
              }}
            >
              <div className="group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white cursor-pointer">
                Sign in as User
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/1705075/pexels-photo-1705075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Taxi Image"
            className="w-full max-h-screen h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
