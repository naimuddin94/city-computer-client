import PropTypes from "prop-types";
import Sliders from "../shared/Slider";

const Banner = ({ bannerDataList }) => {
  return (
    <div>
      <Sliders data={bannerDataList} />
    </div>
  );
};

Banner.propTypes = {
  bannerDataList: PropTypes.array.isRequired,
};

export default Banner;
