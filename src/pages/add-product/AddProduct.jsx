import Input from "../../components/utility/Input";

const brandOptions = ["ASUS", "HP", "INTEL", "GIGABYTE", "MSI", "LENEVO"];

const categoryOptions = [
  "CPU",
  "MONITOR",
  "MOTHERBOARD",
  "RAM",
  "HDD",
  "SSD",
  "CACHING",
  "POWERSUPLY",
];

const AddProduct = () => {
  const handleProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const product = { name, photo, brand, category, price, description };
    console.log(product);
  };
  return (
    <div className="relative overflow-hidden dark:bg-gray-800">
      <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
        <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">
          {/* <!-- Title --> */}
          <h1 className="text-center text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200 mb-8">
            Add Products
          </h1>
          {/* <!-- End Title --> */}

          {/* <!-- Form --> */}
          <form onSubmit={handleProduct}>
            <Input name="name">Name</Input>
            <Input name="photo">Photo URL</Input>
            <label className="block text-sm mb-2 dark:text-white">
              Brand Name
            </label>
            <select
              name="brand"
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
              className="select select-primary w-full dark:bg-gray-800 dark:border-slate-600 dark:text-slate-200"
            >
              {categoryOptions?.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <Input name="price">Price</Input>
            <textarea
              name="description"
              placeholder="Product description"
              className="textarea textarea-bordered textarea-lg w-full dark:bg-gray-800 dark:border-slate-600 dark:text-slate-200 mt-2 text-sm min-h-[8rem]"
            ></textarea>
            <button type="submit" className="my-btn w-full mt-5">
              Add
            </button>
          </form>
          {/* <!-- End Form --> */}
        </div>
      </div>

      <div className="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935')] bg-no-repeat bg-center bg-cover"></div>
      {/* <!-- End Col --> */}
    </div>
  );
};

export default AddProduct;
