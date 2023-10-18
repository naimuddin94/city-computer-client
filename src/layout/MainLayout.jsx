import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Navbar from "../components/shared/Navbar";
import useAuthInfo from "../hooks/useAuthInfo";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  const { darkMode } = useAuthInfo();
  return (
    <div className={darkMode ? "dark bg-gray-800" : "bg-gray-200"}>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
