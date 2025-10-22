import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
    const {signInUser, signInWithGoogle} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    //default direct after login
    const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) =>{
    e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      //console.log(email, password);
      signInUser(email, password)
      .then(result =>{
        console.log(result);
        navigate(from, {replace:true})
        
      })
      .catch(err => {
        console.log(err.message);
        
      })
      
  }
   const handleGoogleSignIn = () =>{
         signInWithGoogle()
         .then(result => {
            console.log(result.user);
            navigate(from, {replace:true})
            
         })
         .catch(err => {
            console.log(err);
            
         })
    }
    return (
       <div className="hero  min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-red-900">Login now!</h1>
      <p className="py-6">
       Welcome back! Log in to keep your pets warm, safe, and stylish this winter.
      </p>
    </div>
    <div className="card bg-gradient-to-r from-[#f1dcaa] to-[#FFB347] w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>

        <fieldset className="fieldset">
          <label  className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        {/* google */}
        <button type='button' onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
<p>Don't have an account? please <Link className='text-blue-400' to='/register'>Register</Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;