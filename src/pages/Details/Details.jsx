import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

import { Helmet } from "react-helmet-async";

const Details = () => {

    const details = useLoaderData();
    const {id} = useParams();
    console.log(id);
    const detail = details.find(detail => detail.id == id);
    console.log(detail);

    return (
<div>
  <Helmet>
    <title>Card Details: {id}</title>
  </Helmet>
  <Navbar></Navbar>
<div className="grid gap-2 grid-cols-1 lg:grid-cols-2 my-20">
   <div>
<img className="rounded-2xl mt-6x mt-6" src={detail.image} alt="" />
   </div>
   <div className="p-4">
   <h2 className="text-4xl mb-4 font-bold">{detail.segment_name}</h2>
   <h2 className="text-3xl mb-4">{detail.estate_title}</h2>
   <p className="mb-4">{detail.description}</p>
   <p><span className="font-bold mb-6">price:</span> {detail.price}</p>
   <p><span className="font-bold mb-6">Status:</span> {detail.status}</p>
   <p><span className="font-bold mb-6">Area:</span> {detail.area}</p>
   <p><span className="font-bold mb4">Location:</span> {detail.location}</p>
   <p><span className="font-bold mb-4">Facilities:</span> {detail.facilities}</p>
   <p><span className="font-bold mb-4">Rooms:</span> {detail.rooms}</p>
   <p><span className="font-bold mb-4">Rating:</span> {detail.rating}</p>
   <Link to='/' className=" btn btn-primary mt-4">Back to Home</Link>

   </div>
</div>
</div>
    );
};

export default Details;