'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID"
const REDIRECT_URI = typeof window !== "undefined" ? window.location.origin + "/login" : ""

function handleGoogleLogin() {
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: "token",
    scope: "email profile openid"
  })
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
}

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Login data:', formData)
      alert('Login successful! (This is just a demo)')
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-3 h-3 bg-purple-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-400 rounded-full opacity-70 animate-ping"></div>
      </div>
      
      <div className="relative z-10 max-w-md mx-auto bg-gradient-to-br from-gray-900/90 to-black/90 p-8 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 bg-gradient-to-r rounded-full flex items-center justify-center">
            <h1 className="text-3xl font-bold ">🌊odeIU</h1>
          </div>
        
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-cyan-400 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="neural@quantum.net"
              className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            />
            {errors.email && <div className="text-red-500 text-sm mt-2">{errors.email}</div>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-purple-400 font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            />
            {errors.password && <div className="text-red-500 text-sm mt-2">{errors.password}</div>}
          </div>

          
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Login
          </button>

          
          <p className=" flex items-center justify-center text-gray-400 p-4 text-xl">or</p>
            <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full mb-6 cursor-pointer bg-white text-black py-2 rounded-lg font-semibold flex items-center justify-center gap-2 shadow  transition"
          >
        <Image src="/google.png" alt="Google" className="w-7 bg-white h-7" width={10} height={10} />
           Login with Google
          </button>
        </form>

        <div className="text-center mt-6 text-gray-400">
          Don't have an account? <Link href="/signup" className=" text-cyan-400 hover:text-purple-400 transition-colors">SignUp</Link>
        </div>
      </div>
    </div>
  )
}