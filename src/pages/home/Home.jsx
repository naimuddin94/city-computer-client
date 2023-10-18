import { useLoaderData } from "react-router-dom";
import Banner from "../../components/home/Banner";

const Home = () => {
  const { bannerDataList } = useLoaderData();
  console.log(bannerDataList);
  return (
    <>
      <Banner bannerDataList={bannerDataList} />
    </>
  );
};

export default Home;
