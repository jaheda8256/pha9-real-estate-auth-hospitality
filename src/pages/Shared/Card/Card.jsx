import { Link } from "react-router-dom";


const Card = ({cards}) => {

 const {estate_title, image, segment_name, price, status, area, location, rooms, id} = cards;
    return (
        <div>
            
 <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{segment_name}</h2>
    <h2 className="card-title">{estate_title}</h2>
   <div className="flex gap-10">
   <p><span className="font-bold">Price:</span> {price}</p>
    <p><span className="font-bold">Status:</span> {status}</p>
   </div>
   <div className="flex gap-16">
   <p><span className="font-bold">Area:</span> {area}</p>
   <p><span className="font-bold">Rooms:</span> {rooms}</p>
    
   </div>
    <div className="card-actions justify-end">
      <Link to={`/details/${id}`} className="btn bg-gradient-to-r from-purple-700 to-teal-600 text-white">View Property</Link>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Card;