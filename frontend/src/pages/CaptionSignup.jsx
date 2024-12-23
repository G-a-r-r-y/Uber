import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CaptainSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_BASE_URL}/captains/register`;
    console.log(url);
    const response = await axios.post(url, {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
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
                <div className="font-bold text-xl mb-2">
                  What's our Captain's name
                </div>
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
                <div className="font-bold text-xl !mb-2">
                  What's our Captain's email
                </div>
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
                <br />
                <div className="font-bold text-xl !mb-2">
                  Vehicle Information
                </div>

                <div>
                  <label htmlFor="vehicleInfo" className="sr-only">
                    vehicleInfo
                  </label>
                  <div className="flex gap-5">
                    <input
                      id="vehicleColor"
                      name="vehicleColor"
                      type="text"
                      required
                      className="appearance-none rounded  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
                      placeholder="Vehicle Color"
                      value={vehicleColor}
                      onChange={(e) => setVehicleColor(e.target.value)}
                    />
                    <input
                      id="vehiclePlate"
                      name="vehiclePlate"
                      type="text"
                      required
                      className="appearance-none rounded  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
                      placeholder="Vehicle Plate"
                      value={vehiclePlate}
                      onChange={(e) => setVehiclePlate(e.target.value)}
                    />
                  </div>
                  <br />
                  <div className="flex gap-5">
                    <div className="w-full">
                      <input
                        id="vehicleCapacity"
                        name="vehicleCapacity"
                        type="text"
                        required
                        className="appearance-none rounded  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
                        placeholder="Vehicle Capacity"
                        value={vehicleCapacity}
                        onChange={(e) => setVehicleCapacity(e.target.value)}
                      />
                    </div>

                    <div className="rounded  block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm">
                      <select
                        name="vehicleType"
                        id="vehicleType"
                        className="w-full h-full px-2 py-2"
                        onClick={(e) => {
                          setVehicleType(e.target.value);
                        }}
                      >
                        <option value="" disabled selected hidden>
                          Select Vehicle Type
                        </option>
                        <option value="car">Car</option>
                        <option value="auto">Auto</option>
                        <option value="moto">Moto</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Create Captain Account
                </button>
              </div>
            </form>
            <div className="w-full text-center">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  navigate("/captain-login");
                }}
              >
                login here
              </span>
            </div>

            <div className="text-xs absolute bottom-3">
              This site is protected by reCAPTCHA and the{" "}
              <span className="underline">Google Privacy Policy </span>and
              <span className="underline">Terms of Service apply.</span>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://media.istockphoto.com/id/184111365/photo/picture-of-oncoming-yellow-taxi-cabs-in-new-york.webp?s=612x612&w=0&k=20&c=4F8N2oL_MW5b9aS_j7905qy-rnNc6wyZyFMPAVtbc10="
            alt="Taxi Image"
            className="w-full max-h-screen h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
