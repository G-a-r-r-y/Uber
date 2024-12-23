import React from "react";
import { CarTaxiFront } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/random/1920x1080?city,night')",
        }}
      />

      <div className="relative z-10 text-center space-y-8 px-4">
        <div className="flex items-center justify-center">
          <h1 className="text-6xl font-bold leading-tight ">UBER </h1>
          <div>
            <CarTaxiFront className="w-10 h-10 ml-2" />
          </div>
        </div>

        <h3 className="text-4xl font-bold leading-tight">
          Your Ride, Your Way
        </h3>
        <p className="text-xl  max-w-2xl mx-auto">
          Experience the future of transportation with our on-demand ride
          service.
        </p>
        <button
          className="bg-white text-black font-semibold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          onClick={() => navigate("/user-login")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
