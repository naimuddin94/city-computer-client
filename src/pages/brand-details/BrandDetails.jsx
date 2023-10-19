import { useLoaderData, useParams } from "react-router-dom";
import Sliders from "../../components/shared/Slider";
import { useEffect, useState } from "react";
import ProductCard from "../../components/brand-details/ProductCard";

const BrandDetails = () => {
  const [products, setProducts] = useState([]);

  const companies = useLoaderData();
  const { name } = useParams();
  const findBrand = companies.find((company) => company.name === name);

  useEffect(() => {
    fetch(`http://localhost:5000/brands/${name}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [name]);

  return (
    <div>
      <Sliders data={findBrand.advertisement} />
      <h1 className="text-4xl text-center font-black dark:text-slate-400 py-5">
        Our Products
      </h1>
      {products.length === 0 ? (
        <div className="flex justify-center items-center h-[50vh]">
          <h2 className="text-xl font-semibold text-center dark:text-slate-400">No product found</h2>
        </div>
      ) : (
        <div className="flex flex-wrap gap-5 items-stretch justify-center py-8">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandDetails;
