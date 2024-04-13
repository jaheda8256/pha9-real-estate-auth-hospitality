import { useLoaderData } from "react-router-dom";
import Card from "../Shared/Card/Card";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Slider from "../Shared/Slider/Slider";
import Footer from "../Shared/Footer/Footer";
import Hotel from "../Shared/Hotel/Hotel";
import Resort from "../Shared/Resort/Resort";
import { Helmet } from "react-helmet-async";
import BreakingNews from "./BreakingNews";
import Leaflet from "../../components/Leaflet/Leaflet";


const Home = () => {
    const cards = useLoaderData();
    console.log(cards);
    return (
        <div>
            <Helmet>
                <title>Real Estate | Home</title>
            </Helmet>
            <Header></Header>
            <Navbar></Navbar>
           <Slider></Slider>
           <BreakingNews></BreakingNews>
            <h2 className="text-center text-4xl font-bold mt-16"> Visit <span className="text-primary">Resorts</span></h2>
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
            <Footer></Footer>
        </div>
         
        
        
    );
};

export default Home;