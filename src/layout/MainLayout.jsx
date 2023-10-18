import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Navbar from "../components/shared/Navbar";
import useAuthInfo from "../hooks/useAuthInfo";

const MainLayout = () => {
  const { darkMode } = useAuthInfo();
  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
