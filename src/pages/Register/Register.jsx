import { Helmet } from "react-helmet-async";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";


const Register = () => {
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
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder=" your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="photoURL" name="photoURL" placeholder="PhotoURL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

      <p className="text-center mb-6">Already have an account? <Link className="text-blue-800 font-bold underline" to='/login'>Login</Link></p>

    </div>

  </div>
</div>
<Footer></Footer>
</div>
    );
};

export default Register;