import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
const Root = () => {
    
  
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