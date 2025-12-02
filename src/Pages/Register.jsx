import React, { use, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FaEye, FaGoogle } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import toast from "react-hot-toast";

const Registration = () => {
  const { createUser, setUser, signInWithGoogle, updateUserProfile } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const terms = e.target.terms.checked;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?`~\-]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 characters, include uppercase, lowercase, and a special character."
      );
      toast.error(
        "Password must be at least 6 characters, include uppercase, lowercase, and a special character."
      );
      return;
    }

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters.");
      return;
    } else {
      setNameError("");
    }

    if (!terms) {
      toast.error("Please accept our terms and conditions.");
      return;
    }

    setError(null);
    setSuccess(false);

    createUser(email, password, terms)
      .then((result) => {
        const user = result.user;
        return updateUserProfile()
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            setSuccess(true);
            setError("");
            e.target.reset();
            toast.success("Sign up successful!");
            navigate(from, { replace: true });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess(false);
      });
  };

  const handlePasswordShow = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Sign up successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-secondary p-4">
      {/* Glassmorphic Registration Card */}
      <div className="relative w-full max-w-lg bg-primary backdrop-blur-md rounded-2xl  shadow-2xl p-10 z-10 ">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-700 mb-2">Create Account</h1>
          <p className="text-gray-500">
            Sign up to keep your pets safe, warm, and happy with WarmPaws.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Name</label>
            <input
              name="name"
              type="text"
              className="w-full bg-secondary mt-1 p-3 text-gray-400 rounded-xl outline-none focus:border-[#8D77AB]"
              placeholder="Enter your name"
              required
            />
            {nameError && <p className="text-xs text-red-600 mt-1">{nameError}</p>}
          </div>

          {/* Photo URL */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Photo URL</label>
            <input
              name="photo"
              type="url"
              className="w-full bg-secondary mt-1 p-3 text-gray-400 rounded-xl outline-none focus:border-[#8D77AB]"
              placeholder="Enter your photo URL"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full bg-secondary mt-1 p-3 text-gray-400 rounded-xl outline-none focus:border-[#8D77AB]"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col relative">
            <label className="text-gray-700 font-medium mb-1">Password</label>
            <input
              name="password"
              type={showPass ? "text" : "password"}
              className="w-full bg-secondary mt-1 p-3 text-gray-400 rounded-xl outline-none focus:border-[#8D77AB]"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={handlePasswordShow}
              className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-600 text-lg"
            >
              {showPass ? <FaEye /> : <LuEyeClosed />}
            </button>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2">
            <input name="terms" type="checkbox" className="checkbox checkbox-success" />
            <span className="text-gray-700 text-sm">I accept the terms and conditions</span>
          </div>

          {success && <p className="text-green-500 text-center">Account created successfully!</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Register Button */}
          <button className="btn w-full text-secondary bg-warning border-warning shadow-lg mt-2">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        {/* Google Sign In */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn w-full bg-info text-secondary border border-info hover:bg-secondary hover:text-gray-700 flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-105"
        >
          <FaGoogle /> Sign up with Google
        </button>

        <p className="text-center text-gray-700 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#8D77AB] font-medium hover:underline hover:text-[#850E35]"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
