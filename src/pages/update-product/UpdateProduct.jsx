import StarRatings from "react-star-ratings";
import Input from "../../components/utility/Input";
import { useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import BackButton from "../../components/utility/BackButton";

const brandOptions = ["Asus", "Hp", "Intel", "Gigabyte", "Msi", "Samsung"];

const categoryOptions = [
  "CPU",
  "Monitor",
  "Motherboard",
  "RAM",
  "HDD",
  "SSD",
  "Caching",
  "Laptop",
  "Graphics Card",
  "VR",
  "Others",
];

const UpdateProduct = () => {
  const product = useLoaderData();
  const {
    _id,
    name,
    photo,
    brand: loadBrand,
    category: loadCategory,
    price,
    description,
    rating: loadRating,
  } = product;
  const [rating, setRating] = useState(loadRating);

  const handleProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const product = {
      name,
      photo,
      brand,
      category,
      price,
      description,
      rating,
    };
    console.log(product);

    // fetch("", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       form.reset();
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Product added successfully",
    //         icon: "success",
    //         confirmButtonText: "Ok",
    //       });
    //     }
    //   });
  };
  return (
    <div className="relative overflow-hidden dark:bg-gray-800">
      <div className="px-5 pt-3">
        <BackButton />
      </div>
      <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
        <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">
          {/* <!-- Title --> */}
          <h1 className="text-center text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200 mb-8">
            Update Product
          </h1>
          {/* <!-- End Title --> */}

          {/* <!-- Form --> */}
          <form onSubmit={handleProduct}>
            <Input defaultValue={name} name="name">
              Name
            </Input>
            <Input defaultValue={photo} name="photo">
              Photo URL
            </Input>
            <label className="block text-sm mb-2 dark:text-white">
              Brand Name
            </label>
            <select
              name="brand"
              defaultValue={loadBrand}
              className="select select-primary w-full dark:bg-gray-800 dark:border-slate-600 dark:text-slate-200"
            >
              {brandOptions?.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
            <label className="block text-sm mb-2 dark:text-white">
              Category
            </label>
            <select
              name="category"
              defaultValue={loadCategory}
              className="select select-primary w-full dark:bg-gray-800 dark:border-slate-600 dark:text-slate-200"
            >
              {categoryOptions?.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <Input defaultValue={price} name="price">
              Price
            </Input>
            <textarea
              defaultValue={description}
              name="description"
              placeholder="Product description"
              className="textarea textarea-bordered textarea-lg w-full dark:bg-gray-800 dark:border-slate-600 dark:text-slate-200 mt-2 text-sm min-h-[8rem]"
            ></textarea>
            <label className="block text-sm mb-2 dark:text-white">
              Product Rating
            </label>
            <StarRatings
              svgIconPath="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
              rating={rating}
              starRatedColor="#f1c40f"
              starHoverColor="#c0392b"
              starDimension="30px"
              starSpacing="3px"
              changeRating={(value) => setRating(value)}
              numberOfStars={5}
              name="rating"
            />
            <button type="submit" className="my-btn w-full mt-5">
              Update
            </button>
          </form>
          {/* <!-- End Form --> */}
        </div>
      </div>

      <div
        className="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full  bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      {/* <!-- End Col --> */}
    </div>
  );
};

export default UpdateProduct;
