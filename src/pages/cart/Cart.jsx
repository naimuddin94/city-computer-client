import CartCard from "../../components/cart/CartCard";
import useAuthInfo from "../../hooks/useAuthInfo";

const Cart = () => {
  const { cart } = useAuthInfo();
  return (
    <div className="flex justify-center flex-wrap gap-5 py-10">
      {cart?.length ? (
        cart.map((product) => <CartCard key={product._id} product={product} />)
      ) : (
        <div>
          <h2>No product found</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
