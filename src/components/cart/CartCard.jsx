import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useAuthInfo from "../../hooks/useAuthInfo";

const CartCard = ({ product }) => {
  const { cart, setCart } = useAuthInfo();
  const { _id, name, photo, price, description, brand } = product;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://city-compters-server-cvbkstvqg-naimuddin94.vercel.app/carts/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingProduct = cart.filter(
                (product) => product._id !== id
              );
              setCart(remainingProduct);
              Swal.fire({
                title: "Success!",
                text: "Delete successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
            }
          });
      }
    });
  };
  return (
    <div className="card card-compact basis-[22rem] bg-base-100 shadow-xl">
      <figure className="basis-64">
        <img src={photo} alt={name} className="w-full h-full" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{name}</h2>
          <h3 className="badge">{ brand}</h3>
        </div>
        <p>{description.slice(0, 150)}</p>
        <h2 className="text-xl font-bold py-2 px-4 mt-2 rounded-md flex items-center bg-rose-300 w-fit">
          {price}
          <FaBangladeshiTakaSign />
        </h2>
        <div className="card-actions justify-end">
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartCard;
