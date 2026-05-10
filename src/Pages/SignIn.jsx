import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

import logo from "../assets/logo/Grihostho_Transparent_Logo.png";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f8f3] px-4">

      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl sm:p-8">

        {/* LOGO */}
        <div className="mb-6 flex justify-center">
          <img src={logo} alt="logo" className="w-40" />
        </div>

        {/* TITLE */}
        <h2 className="text-center text-2xl font-bold text-gray-800">
          {isLogin ? "Sign In" : "Create Account"}
        </h2>

        <p className="mt-2 text-center text-sm text-gray-500">
          {isLogin
            ? "Welcome back! Please login to continue"
            : "Join us and start your journey"}
        </p>

        {/* FORM */}
        <form className="mt-6 space-y-4">

          {/* NAME (SIGN UP ONLY) */}
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border p-3 pl-10 outline-none focus:border-green-500"
              />
            </div>
          )}

          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border p-3 pl-10 outline-none focus:border-green-500"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-xl border p-3 pl-10 pr-10 outline-none focus:border-green-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* REMEMBER + FORGOT */}
          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="text-green-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* TOGGLE */}
        <p className="mt-6 text-center text-sm text-gray-600">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-semibold text-green-600 hover:underline"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>

      </div>
    </div>
  );
}