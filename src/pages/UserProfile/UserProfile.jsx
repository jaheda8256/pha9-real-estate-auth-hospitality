
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Shared/Navbar/Navbar";


const UserProfile = () => {

    const {user} = useAuth();
   
    return (
        <div>
            <Helmet>
                <title>Real Estate | UserProfile</title>
            </Helmet>
            <Navbar></Navbar>
             <div className="lg:w-[450px] h-[480px] p-4 lg:p-8 border-2 my-24  bg-gradient-to-r from-purple-700 to-teal-600 shadow-2xl rounded-xl mx-auto">
         {user &&
                <div className="space-y-4">
                    <h3 className="font-bold border-2 p-4 rounded-xl text-white">User: {user.displayName}</h3>
                    <p className="font-bold border-2 p-4 rounded-xl text-white">User Email:{user.email}</p>
                    <div className="w-[200px] h-[150px] font-bold">
                        <p className="font-bold rounded-t-lg p-4 rounded-xl text-white">PhotoURL: <img className="rounded-lg pt-2 w-96" src={user.photoURL} alt="" /></p>
                    </div>
                </div>
            }
         </div>
      
        </div>
    );
};

export default UserProfile;