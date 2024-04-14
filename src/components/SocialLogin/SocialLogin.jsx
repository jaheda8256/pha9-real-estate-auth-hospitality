import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const {googleLogin, githubLogin} = useAuth()
    return (
        <div>
               <div className="p-4">
        <button onClick={() => googleLogin()} className="btn btn-outline w-full mb-4">
          <FaGoogle />
          Login with Google
        </button>
        <button onClick={() => githubLogin()} className="btn btn-outline w-full">
          <FaGithub />
          Login with Github
        </button>
        </div>
        </div>
    );
};

export default SocialLogin;