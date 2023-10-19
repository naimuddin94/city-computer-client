import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, photo, brand, category, price, description, rating } =
    product;
  return (
    <div className="card basis-[30rem] bg-base-100 dark:bg-slate-400 shadow-xl">
      <figure className="flex-1">
        <img src={photo} alt={name} className="h-full w-full" />
      </figure>
      <div className="card-body py-5 flex-1">
        <h2 className="card-title flex justify-between items-center py-3">
          {name}
          <div className="">
            <StarRatings
              svgIconPath="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
              rating={rating}
              starRatedColor="#f1c40f"
              starHoverColor="#c0392b"
              starDimension="20px"
              starSpacing="0"
              numberOfStars={5}
              name="rating"
            />
          </div>
        </h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{brand}</div>
          <div className="badge badge-outline">{category}</div>
        </div>
        <div>
          <p>
            {description.length > 200
              ? `${description.slice(0, 200)} ....`
              : description}
          </p>
          <h2 className="text-xl font-bold py-2 px-4 mt-2 rounded-md flex items-center bg-rose-300 w-fit">
            {price}
            <FaBangladeshiTakaSign />
          </h2>
        </div>
        <div className="flex gap-5 justify-end">
          <Link to={`/products/${_id}`}>
            <button className="btn btn-active bg-yellow-400">Details</button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-active bg-[#D83F31]">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
