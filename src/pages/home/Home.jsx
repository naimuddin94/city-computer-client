import { useLoaderData } from "react-router-dom";
import Banner from "../../components/home/Banner";
import WhyUs from "../../components/home/WhyUs";
import Companies from "../../components/home/Companies";
import ClientReview from "../../components/home/ClientReview";

const Home = () => {
  const { bannerDataList, companies } = useLoaderData();
  return (
    <>
      <Banner bannerDataList={bannerDataList} />
      <Companies companies={companies} />
      <WhyUs />
      <ClientReview />
    </>
  );
};

export default Home;
