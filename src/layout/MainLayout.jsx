import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar/>
      <Outlet />
    </>
  );
};

export default MainLayout;
