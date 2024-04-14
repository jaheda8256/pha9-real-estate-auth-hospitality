import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";


const Login = () => {
  const {signInUser} = useContext(AuthContext)
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data =>{
   const {email, password} = data;
   signInUser(email, password)
   .then(result => {
    console.log(result.user);
   })
   .catch(error =>{
    console.error(error);
   })
  };

    return (
        <div>
          <Helmet>
            <title>Real Estate | Login</title>
          </Helmet>
            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200 my-16 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h2 className="text-3xl text-center font-bold p-4 pt-8">Login your account</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" 
           {...register('email', { required: true })}
          />
           {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered"  {...register('password', { required: true })}/>
          {errors.password && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

     <p className="text-center mb-6">Do not have an account? <Link className="text-blue-800 font-bold underline" to='/register'>Register</Link></p>
        <div className="p-4">
        <button className="btn btn-outline w-full mb-4">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login with Github
        </button>
        </div>
    
    </div>

   
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Login;