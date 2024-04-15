import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleLogin, githubLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation(); 

    const from = location?.state || '/';

    const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result =>{
           if(result.user){
            
            navigate(from);
            
           }
        })
    }

    return (
        <div>
               <div className="p-4">
        <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline w-full mb-4">
          <FaGoogle />
          Login with Google
        </button>
        <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-outline w-full">
          <FaGithub />
          Login with Github
        </button>
        </div>
        </div>
    );
};

export default SocialLogin;