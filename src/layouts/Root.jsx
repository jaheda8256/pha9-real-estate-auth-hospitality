import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
    
  
    return (
        <div>
        
          <div className="max-w-6xl mx-auto font-poppins">
          <Outlet></Outlet>
          </div>
          <div>
            <Footer></Footer>
          </div>
          <ToastContainer></ToastContainer>
        </div>
        
    );
};

export default Root;