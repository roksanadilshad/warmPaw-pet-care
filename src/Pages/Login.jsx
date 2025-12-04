import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { LuEyeClosed } from "react-icons/lu";
import { FaEye, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import Loder from "./Loder";

const Login = () => {
  const { signInUser, signInWithGoogle, loading } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [err, setErr] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErr(null);
    signInUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Logged in successfully! 🎉");
      })
      .catch((err) => {
        toast.error(err.message);
        setErr(err);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Logged in successfully! 🎉");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handlePasswordShow = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    navigate("/forgetPassword", {
      state: { email: email, from: location.state?.from?.pathname || "/" },
    });
  };

  if (loading) return <Loder />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCF5EE] px-4 lg:px-0">
      <div className="w-full max-w-md bg-primary rounded-3xl shadow-2xl p-8 relative">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-700 mb-2">Welcome Back!</h1>
          <p className="text-gray-700">
            Log in to keep your pets warm, safe, and happy this winter.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full bg-secondary mt-1 p-3 text-gray-400 rounded-xl outline-none focus:border-[#8D77AB]"
              required
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-gray-700 font-medium mb-1">Password</label>
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full bg-secondary mt-1 p-3 text-gray-400 rounded-xl outline-none focus:border-[#8D77AB]"
              required
            />
            <button
              type="button"
              onClick={handlePasswordShow}
              className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-500 text-lg"
            >
              {showPass ? <FaEye /> : <LuEyeClosed />}
            </button>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleForgetPassword}
              className="text-sm text-warning hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {err && (
            <p className="text-red-700 text-center">
              Please provide a valid Email or Password!
            </p>
          )}

          <button className="btn btn-success w-full text-white mt-2 hover:bg-secondary hover:text-gray-700 flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-105">Login</button>
        </form>

        <div className="divider">OR</div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn w-full bg-success text-secondary border border-info hover:bg-secondary hover:text-gray-700 flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-105"
        >
          <FaGoogle /> Login with Google
        </button>

        <p className="text-center text-gray-700 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#8D77AB] font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
