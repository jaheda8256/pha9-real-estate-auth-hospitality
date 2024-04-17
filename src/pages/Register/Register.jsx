import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Shared/Footer/Footer";




const Register = () => {
  const {createUser, loading} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = (data) =>{ 
    const {email, password} = data;
    createUser(email, password)
    .then(result => {
      console.log(result);
      toast.success("Registration successfully"); 

    })

    .catch(error => {
      console.error(error);
      toast.error("Registration failed. Please try again."); 
    });

  };

  if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
}
  
    return (
        <div>
            <Helmet>
            <title>Real Estate | Register</title>
          </Helmet>
          <Navbar></Navbar> 
            <div className="hero min-h-screen bg-base-200 my-14 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h2 className="text-4xl text-center font-bold p-4 pt-8">Please Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" name="Full Name" placeholder="Full Name" className="input input-bordered"  
          {...register('FullName', { required: true })}
          />
          {errors.FullName && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder=" your Email" className="input input-bordered"
          
          {...register('email', { required: true })}/>
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="photoURL" name="photoURL" placeholder="PhotoURL" className="input input-bordered" 
          {...register('PhotoURL')}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? "text" : "password"}
            name="password"
           placeholder="password" 
           className="input input-bordered relative" 
          {...register("password", {
            required: true,
            minLength: 6,
            pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/  // Corrected pattern
          })}

          />
           <span className="absolute ml-56 mt-14 hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
            {errors.password && (
                  <span className="text-red-500">
                    {" "}
                    Password must be at least 6 characters long and contain at
                    least one uppercase and one lowercase letter
                  </span>
                )}

        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
        <ToastContainer />

      </form>

      <p className="text-center mb-6">Already have an account?
      <Link to="/login">
                {" "}
                <span className="text-blue-600">Login now</span>
              </Link>
      </p>
    </div>

  </div>
</div>
<Footer></Footer>
</div>
    );
};

export default Register;