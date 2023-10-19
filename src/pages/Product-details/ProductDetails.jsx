import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error voluptas
      quas placeat, officia ullam beatae doloribus similique aut eveniet ratione
      fuga rem consequatur modi nisi magni excepturi, quisquam corporis impedit.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
      aspernatur natus doloremque aut error, consequatur molestias dolores
      accusamus qui iusto possimus veritatis debitis dolorem sed libero, cumque
      vitae quaerat neque.
    </div>
  );
};

export default ProductDetails;
