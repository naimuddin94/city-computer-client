import { useLoaderData, useParams } from "react-router-dom";
import Sliders from "../../components/shared/Slider";
import { useEffect } from "react";

const BrandDetails = () => {
  const companies = useLoaderData();
  const { name } = useParams();
  const findBrand = companies.find((company) => company.name === name);
  console.log(findBrand.advertisement);

  useEffect(() => {
    fetch(`http://localhost:5000/brand/${name}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [name]);
  return (
    <div>
      <Sliders data={findBrand.advertisement} />
    </div>
  );
};

export default BrandDetails;
