import Mission from "../components/Home/Mission";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaHornbill,
  FaTwitter,
} from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { HiMail } from "react-icons/hi";

const About = () => {
  const teams = [
    {
      name: "Plan, then Do",
      title: "Staffing & Search",
      role: "Access to the nation largest, Most diverse network of healthcare professionals.",
      image: "bgn-boxes-01.jpeg",
      facebook: "",
      gmail: "",
      twitter: "",
    },
    {
      name: "SMALL TACTICS",
      title: "Calvin Durant",
      role: "Completely synergize resource taxing relationships via premier niche markets.",
      image: `bgn-boxes-01.jpeg`,
    },
    {
      name: "PROOF, NOT PROMISES",
      title: "Talent planning ",
      role: "Strategic consultation to optimize workforce and  to improve patient outcomes",
      image: `bgn-boxes-01.jpeg`,
    },
    {
      name: "PROOF, NOT PROMISES",
      title: "Services Programs",
      role: "One program to handle all talent management need from acquisition to development.",
      image: `bgn-boxes-01.jpeg`,
    },
  ];
  return (
    <div className="mt-10 sm:mt-20 ">
      <div className="grid grid-cols-12 px-5 xl:px-28">
        <div className="space-y-4 col-span-12 lg:col-span-8">
          <div className="flex items-center space-x-3">
            <span className="w-10 sm:w-16 h-0.5 bg-red-500" />
            <span className="uppercase text-sm text-left sm:text-lg">
              Lumens HEALTHCARE
            </span>
          </div>
          <div className=" text-3xl sm:text-6xl font-bold ">
            <p className="text-sky-900 text-left">Strong Partnerships,</p>
            <p className="text-red-600 text-left ">Stronger Outcomes</p>
          </div>
          <div className="text-left sm:text-lg sm:pb-10">
            At AMN Healthcare, we strive to be recognized as the most trusted,
            innovative, and influential force in helping healthcare
            organizations provide quality patient care that continually evolves
            to make healthcare more human, more effective, and more achievable.
          </div>
        </div>
      </div>
      <div className="px-5 xl:px-28">
        <Mission />
      </div>
      <div
        className="text-center py-28 bg-center text-white px-5 xl:px-28"
        style={{
          backgroundImage: `url("bgn-quotes.jpeg")`,
        }}
      >
        <div className="text-white text-5xl font-bold">
          Delivering Quality Care
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-20">
          <div className="flex flex-col items-center space-y-5">
            <IoIosPeople className="w-28 h-28 text-red-500" />
            <h2 className="text-xl font-semibold ">
              Commitment to Diversity and Inclusion
            </h2>
            <p className="text-sm">
              We strive to incorporate these core values into every aspect of
              our operations and company culture. From trainings, policies and
              webinars to community involvement and outreach – AMN Healthcare’s
              Core Values are leading the way in diversity and inclusion.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <MdOutlineConnectWithoutContact className="w-28 h-28 text-red-500" />
            <h2 className="text-xl font-semibold ">
              The Largest Supply of Clinicians and Physiciansn
            </h2>
            <p>
              Our network of trustworthy, qualified and vetted clinicians and
              physicians can’t be found anywhere else. Partnering with AMN
              Healthcare means you are getting access to the nation’s largest
              pool of healthcare professionals.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <FaHornbill className="w-28 h-28 text-red-500" />
            <h2 className="text-xl font-semibold ">
              Cost-effective Workforce Management Solutions
            </h2>
            <p>
              From temporary staffing services to full-service recruitment
              process outsourcing, AMN Healthcare is the leader in
              cost-effective workforce management solutions. Our solutions
              include a wide portfolio including telehealth solutions, MSP,
              supplier management, RPO and more.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <FiUsers className="w-28 h-28 text-red-500" />
            <h2 className="text-xl font-semibold ">
              Consistent Quality Deliveredn
            </h2>
            <p>
              Don’t take our word for it, see what our clients are saying about
              us. We take pride in the trust-based relationships we’ve built
              with each and every client. Check out our testimonials and white
              papers to see our consistent quality in action.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <RiCustomerService2Fill className="w-28 h-28 text-red-500" />
            <h2 className="text-xl font-semibold ">
              Dedicated Customer Service
            </h2>
            <p>
              When you partner with AMN Healthcare you get unparalleled access
              to a dedicated customer support team that is here to meet your
              needs. We go above traditional support and also offer 24x7
              clinical support, a talented team of recruiters and experts in
              licensing, credentialing, housing and more.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <FiUsers className="w-28 h-28 text-red-500" />
            <h2 className="text-xl font-semibold ">
              Unmatched Staffing Expertise
            </h2>
            <p>
              With over 30 years of staffing industry experience we can solve
              any recruitment challenge your organization faces. Optimize and
              ensure you have the right mix of permanent, temporary, travel and
              per diem staff to meet your goals.
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 lg:p-28 lg:space-y-16 py-20 space-y-16">
        <div className="text-center text-5xl text-sky-900 font-bold">
          AMN Healthcare Leadership
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {teams.map((team) => (
            <div className="shadow-lg border border-gray-100 rounded">
              <img
                src="img-people-06.jpeg"
                alt="bgn-boxes-01.jpeg"
                className="w-full"
              />
              <div className="flex flex-col space-y-3 p-5">
                <div className="flex space-x-2 items-center">
                  <span className="w-10 h-0.5 bg-red-500" />
                  <span className="text-lg">{team.title}</span>
                </div>
                <h2 className="text-xl text-sky-900">{team.name}</h2>
                <span className="">{team.role}</span>
                <div className="flex space-x-2 items-center">
                  <a href="">
                    <FaFacebookF className="text-sky-600 w-5 h-5" />
                  </a>
                  <a href="">
                    <FaGooglePlusG className="text-red-600 w-7 h-7" />
                  </a>
                  <a href="">
                    <FaTwitter className="text-blue-600 w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
