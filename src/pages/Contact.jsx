import { FaFacebookMessenger, FaPeopleCarry } from "react-icons/fa";
import MapContact from "../components/MapContact";

const Contact = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("img-slider-01.jpeg")`,
        }}
        className="w-full bg-blue-50"
      >
        <div className="flex flex-col p-5 lg:p-28 justify-center w-full lg:w-2/4 space-y-5">
          <div className="flex space-x-2 items-center">
            <span className="w-10 h-0.5 bg-red-500" />
            <span className="text-xl">Home</span>
          </div>
          <div className="text-5xl font-bold uppercase">Contact</div>
          <p>
            Are you looking for the next step in your career? Lumens Healthcare
            offers permanent, travel and per diem jobs for nearly every
            profession in healthcare.
          </p>
        </div>
      </div>
      <div className="py-10 lg:py-16 md:py-24 xl:px-28 bottom-px">
        <div className="rounded-sm p-5 grid gri grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-5 bg-white">
          <div className="md:col-span-3">
            <div className="flex items-center space-x-3">
              <span className="w-5 h-0.5 bg-red-500" />
              <span className="uppercase text-sm">CONTACT US WITH EASE</span>
            </div>
            <div className=" text-4xl sm:text-3xl font-bold ">
              <p className="text-red-500 text-left">
                Get in <span className="text-sky-900"> Touch </span>{" "}
              </p>
            </div>
            <p className="text-sm">
              Come and visit our quarters or simply send us an email anytime you
              want. We are open to all suggestions from our clients.
            </p>
          </div>

          <div className="flex lg:col-span-2 space-x-2 items-center text-sm md:text-base">
            <FaFacebookMessenger className="w-10 h-10 md:w-20 md:h-20  text-red-500" />
            <div>
              <h6 className=" text-2xl text-sky-900 font-bold">Address</h6>
              <p>Bloomsbury Square, London WC1B 4EA</p>
            </div>
          </div>
          <div className="flex lg:col-span-2 space-x-2 items-center">
            <FaPeopleCarry className="w-10 h-10 md:w-20 md:h-20  text-red-500" />
            <div>
              <h6 className=" text-2xl text-sky-900 font-bold">Call us</h6>
              <p>9898989989</p>
              <p>98989898989</p>
            </div>
          </div>
          <div className="flex lg:col-span-2 space-x-2 items-center">
            <FaPeopleCarry className="w-10 h-10 md:w-20 md:h-20 text-red-500" />
            <div>
              <h6 className=" text-2xl text-sky-900 font-bold">Address</h6>
              <p>Bloomsbury Square, London WC1B 4EA</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 md:py-16 px-5 md:px-0 ">
        <div
          style={{
            clipPath: "polygon(100% 0, 0 36%, 71% 100%)",
          }}
          className="relative hidden md:block"
        >
          <MapContact />
        </div>

        <div className="lg:pr-28 md:py-10">
          <span className="text-xl">Required fields are marked *</span>
          <form className="w-full space-y-2">
            <div className="text-gray-600">
              <label>
                Name <span className="text-red-600 text-2xl">*</span>
              </label>
              <input
                type="text"
                className="p-3 w-full border-2 border-gray-300 rounded"
                placeholder="Enter Full Name"
              />
            </div>
            <div>
              <label>
                Email <span className="text-red-600 text-2xl">*</span>
              </label>
              <input
                type="email"
                className="p-3 w-full border-2 border-gray-300 rounded"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label>
                Phone <span className="text-red-600 text-2xl">*</span>
              </label>
              <input
                type="number"
                className="p-3 w-full border-2 border-gray-300 rounded"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label>
                Address <span className="text-red-600 text-2xl">*</span>
              </label>
              <input
                type="text"
                className="p-3 w-full border-2 border-gray-300 rounded"
                placeholder="Address"
              />
            </div>

            <div>
              <label>
                Message <span className="text-red-600 text-2xl">*</span>
              </label>
              <textarea
                type="text"
                className="p-3 w-full border-2 border-gray-300 rounded"
                placeholder="Message"
              />
            </div>
            <button className="p-5 bg-red-500 text-white text-xl font-semibold capitalize rounded-md">
              Submit message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
