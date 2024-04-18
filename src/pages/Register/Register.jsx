import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { updateProfile } from "firebase/auth";


const Register = () => {
  const { createUser, user, setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    const { fullName, email, password, photoURL} = data;

    createUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("Registration successfully");

        const profileUpdates = {
          displayName: fullName,
          photoURL: photoURL
        };
        updateProfile(result.user, profileUpdates)
        .then(() => {
          console.log("Profile updated successfully");
          setUser({...user, 
            displayName: fullName,
            photoURL: photoURL
          })
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
      navigate(from);
    })

      .catch((error) => {
        console.error(error);
        toast.error("Registration failed. Please try again.");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Real Estate | Register</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200 my-14 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card lg:m-12 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-4xl text-center font-bold p-4 pt-8">
              Please Register
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="full Name"
                  placeholder="Full Name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder=" your Email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
              
        <input
       type="text"
        name="photoURL"
        placeholder="Photo URL"
        className="input input-bordered"
      {...register("photoURL")} 
        />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered relative"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, // Corrected pattern
                  })}
                />
                <span
                  className="absolute lg:ml-72 ml-52 mt-14 hover:cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
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
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-purple-700 to-teal-600 text-white"
                >
                  Register
                </button>
              </div>
            </form>

            <p className="text-center mb-6">
              Already have an account?
              <Link to="/login">
                {" "}
                <span className="text-blue-600 underline font-bold">
                  Login now
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
