import { useNavigate } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
import { AiOutlineArrowLeft } from "react-icons/ai";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      <TbError404 className="text-7xl md:text-9xl" />
      <h1 className="text-2xl font-semibold text-slate-600">
        Oops page not found!
      </h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <button onClick={() => navigate("/")} className="btn btn-outline">
        <AiOutlineArrowLeft className="text-lg" />
        Go back
      </button>
    </div>
  );
};

export default NotFound;
