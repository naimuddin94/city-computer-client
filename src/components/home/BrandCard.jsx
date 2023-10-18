import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandCard = ({ company }) => {
  const { name, image } = company;
  return (
    <Link to={`/brand/${name}`}>
      <div className="card bg-base-100 dark:bg-slate-800 shadow-xl cursor-pointer hover:shadow-2xl duration-200 h-full">
        <figure className="px-10 pt-10 h-5/6">
          <img src={image} alt={name} className="rounded-xl h-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl font-black">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

BrandCard.propTypes = {
  company: PropTypes.object.isRequired,
};

export default BrandCard;
