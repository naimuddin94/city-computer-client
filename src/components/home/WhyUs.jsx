import { GoArrowRight } from "react-icons/go"
import { CiDeliveryTruck } from "react-icons/ci"
import {BsPersonWorkspace} from "react-icons/bs"

const WhyUs = () => {
  return (
    <div className="dark:bg-slate-800 py-8">
      <h1 className="text-4xl font-black text-center text-gradient py-1 dark:text-slate-500">
        Why Choose Us
      </h1>
      {/* <!-- Icon Blocks --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
          {/* <!-- Icon Block --> */}
          <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-600">
            <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
              <CiDeliveryTruck className="text-xl text-slate-100" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                FAST DELIVERY
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Get your hands on the latest computers in record time!, right to
                your door!
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                Learn more
                <GoArrowRight />
              </span>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}

          {/* <!-- Icon Block --> */}
          <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-600">
            <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400 uppercase">
                Expertly Packed
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Our team takes extra care to ensure your new computer arrives in
                perfect condition.
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                Learn more
                <GoArrowRight />
              </span>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}

          {/* <!-- Icon Block --> */}
          <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-600">
            <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
              <BsPersonWorkspace className="text-xl text-slate-100" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400 uppercase">
                Hassle-Free Setup
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                we&rsquo;ll have your new computer prepped and ready for action
                when it arrives!
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                Learn more
                <GoArrowRight />
              </span>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}

          {/* <!-- Icon Block --> */}
          <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-600">
            <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                24/7 Support
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                Contact us 24 hours a day, 7 days a week. Our dedicated support
                team is available
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                Learn more
                <GoArrowRight />
              </span>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
        </div>
      </div>
      {/* <!-- End Icon Blocks --> */}
    </div>
  );
};

export default WhyUs;
