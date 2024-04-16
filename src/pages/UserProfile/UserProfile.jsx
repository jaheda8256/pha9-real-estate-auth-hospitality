
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const UserProfile = () => {

    const {user,loading} = useAuth();
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    } 
    return (
        <div>
            <Navbar></Navbar>
             <div className="w-[400px] h-[300px] p-8 border-2 my-24 bg-purple-400 shadow-2xl rounded-xl mx-auto">
         {user &&
                <div>
                    <h3 className="font-bold">User: {user.displayName}</h3>
                    <p className="font-bold">User Email:{user.email}</p>
                    <div className="w-[200px] h-[150px] font-bold">
                        <p>PhotoURL: <img className="rounded-lg pt-2" src={user.photoURL} alt="" /></p>
                    </div>
                </div>
            }
         </div>
         <Footer></Footer>
        </div>
    );
};

export default UserProfile;