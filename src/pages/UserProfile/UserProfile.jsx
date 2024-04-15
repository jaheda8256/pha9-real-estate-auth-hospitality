
import useAuth from "../../hooks/useAuth";
import Navbar from "../Shared/Navbar/Navbar";


const UserProfile = () => {

    const {user} = useAuth();
    return (
        <div>
            <Navbar></Navbar>
             <div className="w-[400px] h-[300px] p-4 border-2 mt-4 mb-4 bg-sky-200 rounded-xl border-sky-500 mx-auto">
         {user &&
                <div>
                    <h3 className="font-bold">User: {user.displayName}</h3>
                    <p className="font-bold">User Email:{user.email}</p>
                    <div className="w-[200px] h-[150px] font-bold">
                        <p>PhotoURL: <img src={user.photoURL} alt="" /></p>
                    </div>
                </div>
            }
         </div>
        </div>
    );
};

export default UserProfile;