"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuthStore } from "@/app/store/useAuthStore";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
const {signup}=useAuthStore()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "user name is required";
    }

   

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Signup data:", formData);
     await signup(formData);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-3 h-3 bg-purple-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-400 rounded-full opacity-70 animate-ping"></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-blue-500 rounded-full opacity-50 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto bg-gradient-to-br from-gray-900/90 to-black/90 p-8 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 bg-gradient-to-r rounded-full flex items-center justify-center">
            <h1 className="text-3xl font-bold ">🌊odeIU</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="firstName"
              className="block mb-2 text-cyan-400 font-medium"
            >
              UserName
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            />
            {errors.firstName && (
              <div className="text-red-500 text-sm mt-2">
                {errors.firstName}
              </div>
            )}
          </div>


          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-pink-400 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-2">{errors.email}</div>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-cyan-400 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            />
            {errors.password && (
              <div className="text-red-500 text-sm mt-2">{errors.password}</div>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-purple-400 font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            />
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm mt-2">
                {errors.confirmPassword}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Sign Up
          </button>
        </form>
        <p className=" flex items-center justify-center text-gray-400 p-4 text-xl">or</p>
        <button
          type="button"
          className="w-full mb-6 cursor-pointer bg-white text-black py-2 rounded-lg font-semibold flex items-center justify-center gap-2 shadow hover:bg-gray-100 transition"
        >
          <Image
            src="/google.png"
            alt="Google"
            className="w-8 bg-white h-8"
            width={20}
            height={20}
          />
          Login with Google
        </button>

        <div className="text-center mt-6 text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-cyan-400 hover:text-purple-400 transition-colors"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
