import PropTypes from "prop-types";
import BrandCard from "./BrandCard";

const Companies = ({ companies }) => {
  return (
    <div className="px-8 md:p-12 dark:text-slate-400">
      <h1 className="text-4xl font-black text-center pb-8 text-gradient dark:text-slate-400">
        Our Brand
      </h1>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {companies?.map((company) => (
          <BrandCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

Companies.propTypes = {
  companies: PropTypes.array.isRequired,
};

export default Companies;
