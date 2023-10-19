import { GoArrowRight } from "react-icons/go";

const ClientReview = () => {
  return (
    <div className="max-w-[85rem] px-8 py-5  md:px-12 mx-auto">
      <h1 className="text-4xl font-black text-center text-gradient dark:text-slate-500 pb-12">
        Reviews
      </h1>
      {/* <!-- Grid --> */}
      <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        {/* <!-- Card --> */}
        <a className="group rounded-xl overflow-hidden">
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src="https://i.ibb.co/VwwD7hP/c147f642abc5e02fae135c249bcbaa6e.webp"
                alt="Image Description"
              />
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                John M.
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                I&rsquo;m impressed! My new computer arrived in perfect
                condition. The 24/7 support is a game-changer. Kudos to city
                computers
              </p>
              <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                Read more
                <GoArrowRight />
              </p>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <a className="group rounded-xl overflow-hidden">
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src="https://i.ibb.co/0y35mzB/ac7ccd589c14a2a319af8fafacdde773.webp"
                alt="Image Description"
              />
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                Michael R.
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                I can&rsquo;t recommend [Your Computer Shop] enough. The 24/7
                support has been a lifesaver. A+ service all around. Thank you!
              </p>
              <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                Read more
                <GoArrowRight />
              </p>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <a className="group rounded-xl overflow-hidden">
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src="https://i.ibb.co/jJ7yFNN/6b51421641eb4be453a98c2cce254eb3.webp"
                alt="Image Description"
              />
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                Eric Emily G.
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Great experience! The free shipping was a nice touch. I'm
                thrilled with my purchase. City computers is top-notch
              </p>
              <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                Read more
                <GoArrowRight />
              </p>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <a className="group rounded-xl overflow-hidden">
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src="https://i.ibb.co/B4yRzVg/43a006469255d72ba808e71383dddda6.webp"
                alt="Image Description"
              />
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                Sarah T.
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Exceptional service! The team at [Your Computer Shop] went above
                and beyond to help me find the perfect computer. Fast delivery,
                too
              </p>
              <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                Read more
                <GoArrowRight />
              </p>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
};

export default ClientReview;
