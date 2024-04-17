import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn bg-gradient-to-r from-purple-700 to-teal-600 text-white">Update News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12">
          {" "}
          The wellness area at the accommodation is comprised of a hot tub and a
          sauna....
        </Link>
        <Link className="mr-12">
          The wellness area at the accommodation is comprised of a hot tub and a
          sauna.....
        </Link>
        <Link className="mr-12">
          The wellness area at the accommodation is comprised of a hot tub and a
          sauna.....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
