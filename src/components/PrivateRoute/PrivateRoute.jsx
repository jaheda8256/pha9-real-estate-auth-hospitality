import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({children}) => {
const {user, loading} = useAuth();
const location = useLocation();

 

    if(!user){
        return <Navigate to='/login' state={location?.
            pathname || '/'}></Navigate>
           
            
    } 
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

   

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;