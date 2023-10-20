import { useEffect } from "react";
import CartCard from "../../components/cart/CartCard";
import useAuthInfo from "../../hooks/useAuthInfo";

const Cart = () => {
  const { cart, user, setCart } = useAuthInfo();
  useEffect(() => {
    fetch(
      `https://city-compters-server-cvbkstvqg-naimuddin94.vercel.app/carts/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      });
  }, [setCart, user]);

  return (
    <div className="flex justify-center flex-wrap gap-5 py-10 px-5">
      {cart?.length ? (
        cart.map((product) => <CartCard key={product._id} product={product} />)
      ) : (
        <div>
          <h2 className="dark:text-slate-400">No Cart Available</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
