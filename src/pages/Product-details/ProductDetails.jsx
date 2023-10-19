import { useLoaderData, useNavigate } from "react-router-dom";
import BackButton from "../../components/utility/BackButton";
import useAuthInfo from "../../hooks/useAuthInfo";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { user, setCart, cart: oldCart } = useAuthInfo();
  const product = useLoaderData();
  const { name, photo, brand, price, description } = product;
  const navigate = useNavigate();

  const handleCart = (product) => {
    const email = user.email;
    const cart = { email, ...product };

    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setCart([...oldCart, cart]);
          navigate(-1);
          Swal.fire({
            title: "Success!",
            text: "Product added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <BackButton />
      {/* <!-- Grid --> */}
      <div className="grid sm:grid-cols-2 sm:items-center gap-8">
        <div className="sm:order-2">
          <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
            <img
              className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
              src={photo}
              alt={name}
            />
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div className="sm:order-1">
          <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
            {brand}
          </p>

          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-gray-200">
            <a
              className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
              href="#"
            >
              {name}
            </a>
          </h2>

          <div>
            <p className="dark:text-slate-300">{description}</p>
            <div className="">
              <h2 className="text-lg font-bold py-2">Price: {price} Tk.</h2>
            </div>
          </div>
          <button
            onClick={() => handleCart(product)}
            className="btn btn-active btn-warning"
          >
            Add to cart
          </button>
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
};

export default ProductDetails;
