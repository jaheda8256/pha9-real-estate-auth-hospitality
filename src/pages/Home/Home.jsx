import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Slider from "../Shared/Slider/Slider";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins font-bold">This is home</h2>
            <div>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;