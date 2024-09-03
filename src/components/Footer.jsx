import { faAt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const [focusPlus, setFoucsPlus] = useState(false);

  const handlePlus = (e) => {
    console.log(e.target);
  };

  return (
    <footer className="bg-black px-5 pt-4 m-auto md:px-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-10 lg:gap-8 pb-8 md:pt-20 md:pb-16">
        <div className="w-full lg:w-[80%] mb-6 md:mb-0">
          <Link
            to={"/"}
            className="text-white text-2xl md:text-3xl hover:text-orange-500 duration-500"
          >
            Nestoria
          </Link>
          <p className="text-white text-sm md:text-lg my-4 md:my-5">
            Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa
            justo. Cras eget lorem nunc. Fusce nec urna tempus tempus
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to={""}>
              <FontAwesomeIcon
                className="text-white text-xl hover:text-orange-500 duration-500"
                icon={faAt}
              />
            </Link>
            <Link to={""}>
              <FaInstagram className="text-white text-xl hover:text-orange-500 duration-500" />
            </Link>
            <Link to={""}>
              <FaFacebookF className="text-white text-xl hover:text-orange-500 duration-500" />
            </Link>
            <Link to={""}>
              <FaYoutube className="text-white text-xl hover:text-orange-500 duration-500" />
            </Link>
            <Link to={""}>
              <FaX className="text-white text-xl hover:text-orange-500 duration-500" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-6 md:mb-0">
          <div
            onClick={(e) => handlePlus(e)}
            className="text-white w-full md:w-fit flex flex-col"
          >
            <h4 className="flex justify-between items-center bg-[#1A1A1A] md:bg-transparent py-3 px-5 md:p-0 rounded-3xl md:rounded-none text-xl md:text-xl mb-2 md:mb-4">
              Useful links
              <FontAwesomeIcon
                className="text-white text-2xl md:hidden"
                icon={faPlus}
              />
            </h4>
            <div className="hidden md:flex flex-col">
              <Link
                className="my-1 hover:text-orange-500 duration-500"
                to={"/"}
              >
                History
              </Link>
              <Link
                className="my-1 hover:text-orange-500 duration-500"
                to={"/"}
              >
                Our Team
              </Link>
              <Link className="my-1 hover:text-orange-500 duration-500">
                Privacy Policy
              </Link>
              <Link className="my-1 hover:text-orange-500 duration-500">
                Services Offered
              </Link>
              <Link className="hover:text-orange-500 duration-500">
                Product Catalog
              </Link>
            </div>
          </div>

          <div
            onClick={(e) => handlePlus(e)}
            className="text-white w-full md:w-fit flex flex-col"
          >
            <h4 className="flex justify-between items-center bg-[#1A1A1A] md:bg-transparent py-3 px-5 md:p-0 rounded-3xl md:rounded-none text-xl md:text-xl mb-2 md:mb-4">
              Information
              <FontAwesomeIcon
                className="text-white text-2xl md:hidden"
                icon={faPlus}
              />
            </h4>
            <div className="hidden md:flex flex-col">
              <Link className="my-1 hover:text-orange-500 duration-500">
                FAQ/Return
              </Link>
              <Link className="my-1 hover:text-orange-500 duration-500">
                Privacy/Terms
              </Link>
              <Link className="my-1 hover:text-orange-500 duration-500">
                Affiliate
              </Link>
              <Link className="my-1 hover:text-orange-500 duration-500">
                Sizing Guide
              </Link>
              <Link className="my-1 hover:text-orange-500 duration-500">
                Accessibility
              </Link>
            </div>
          </div>

          <div
            onClick={(e) => handlePlus(e)}
            className="text-white md:ml-[-350px] lg:ml-0 mr-auto w-full md:w-fit flex flex-col"
          >
            <h4 className="flex justify-between items-center bg-[#1A1A1A] md:bg-transparent py-3 px-5 md:p-0 rounded-3xl md:rounded-none text-xl md:text-xl mb-2 md:mb-4">
              Support
              <FontAwesomeIcon
                className="text-white text-2xl md:hidden"
                icon={faPlus}
              />
            </h4>
            <div className="hidden md:flex flex-col">
              <Link className="my-1 hover:text-orange-500 duration-500">
                Your Account
              </Link>
              <Link className="my-1 hover:text-orange-500 duration-500">
                Press Release
              </Link>
              <Link className="my-1 hover:text-orange-500 duration-500">
                Return Centre
              </Link>
              <Link className="my-1 hover:text-orange-500 duration-500">
                App Download
              </Link>
              <Link className="my-1 hover:text-orange-500 duration-500">
                Advertisements
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:mt-[-210px] lg:mt-0 md:ml-[370px] lg:ml-0 lg:w-fit">
          <h4 className="text-3xl md:text-xl text-white">Follow @Instagram</h4>
          <div className="imagesInsta grid grid-cols-3 gap-3 mt-4 md:mt-7">
            {[...Array(6)].map((_, i) => (
              <figure className="w-full md:w-28 relative" key={i}>
                <img
                  className="rounded-lg"
                  src={`/images/home/Instagram-0${i + 1}.jpg`}
                  alt={`Instagram ${i + 1}`}
                />
                <FaInstagram className="absolute hidden text-3xl text-white top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2"></FaInstagram>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <span className="bg-[#2F2F2F] w-full h-[2px] block"></span>

      <div className="my-5 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-xl md:text-base text-center md:text-left mb-4 md:mb-0">
          ©TeaPoy site all rights Reserved
        </div>
        <div className="flex items-center flex-wrap justify-center gap-2">
          {[
            "master-card.png",
            "visa@4x.png",
            "Amex@4x.png",
            "apay@4x.png",
            "skrill@4x.png",
            "Paypal@4x.png",
          ].map((img, i) => (
            <figure
              className="w-16 md:w-14 py-2 px-3 hover:bg-[#2C1703] duration-500 rounded-2xl"
              key={i}
            >
              <img src={`/images/home/${img}`} alt={img.split("@")[0]} />
            </figure>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
