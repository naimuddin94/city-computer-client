import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/shared/Header";
import Navbar from "../components/shared/Navbar";
import useAuthInfo from "../hooks/useAuthInfo";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  const { darkMode } = useAuthInfo();
  const navigation = useNavigation();
  return (
    <div className={darkMode ? "dark bg-gray-800" : "bg-gray-200"}>
      <Header />
      <Navbar />
      {navigation.state === "loading" ? (
        <div className="flex items-center justify-center h-[60vh]">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
