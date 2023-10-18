import CustomLi from "./CustomLi";

const NavLi = () => {
  return (
    <>
      <CustomLi path="/">Home</CustomLi>
      <CustomLi path="/add-product">Add Product</CustomLi>
      <CustomLi path="/cart">My Cart</CustomLi>
      <CustomLi path="/login">Login</CustomLi>
      <CustomLi path="/register">Register</CustomLi>
    </>
  );
};

export default NavLi;
