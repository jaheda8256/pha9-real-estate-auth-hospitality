import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import useAuth from "../hooks/useAuth";



const Root = () => {
  const {  loading } = useAuth();

  if(loading){
    return <div className="flex justify-center my-40 text-purple-700 mt-44 items-center"><span className="loading loading-spinner loading-lg "></span></div>

}
    return (
        <div>
        
          <div className="max-w-6xl mx-auto font-poppins">
          <Outlet></Outlet>
          </div>
          <div>
            <Footer></Footer>
          </div>
     
        </div>
        
    );
};

export default Root;