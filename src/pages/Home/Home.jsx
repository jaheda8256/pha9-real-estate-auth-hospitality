import { useLoaderData } from "react-router-dom";
import Card from "../Shared/Card/Card";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Slider from "../Shared/Slider/Slider";

import Hotel from "../Shared/Hotel/Hotel";
import Resort from "../Shared/Resort/Resort";
import { Helmet } from "react-helmet-async";
import BreakingNews from "./BreakingNews";
import Leaflet from "../../components/Leaflet/Leaflet";
import 'animate.css';
import Footer from "../Shared/Footer/Footer";
import useAuth from "../../hooks/useAuth";


const Home = () => {
    const cards = useLoaderData();
    const {loading} = useAuth();
   
    console.log(cards);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <div>
            <Helmet>
                <title>Real Estate | Home</title>
            </Helmet>
            <Header></Header>
            <Navbar></Navbar>
           <Slider></Slider>
           <BreakingNews></BreakingNews>
          <div className="animate__animated animate__fadeInLeft">
          <h2 className="text-center text-purple-600 text-5xl font-bold mt-16 "> Visit <span className=" text-teal-600">Resorts</span></h2>
            <p className="text-center mt-4">Choose From a Wide Range of Properties Which Booking.com Offers. Search Now! Choose from a <br /> wide range of properties which Booking.com offers. Flight + Hotel. Hotels. Villas. Hostels. Motels. Apartments. Great Choice.</p>
          </div>
            <div className="grid gap-12 my-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
                {
                    cards.map(card => <Card 
                        key={card.id}
                        cards={card}
                    >  
                    </Card> )
                }
                
            </div>
            <Hotel></Hotel>
            <Resort></Resort>
            <Leaflet></Leaflet>
           
        </div>
         
        
        
    );
};

export default Home;