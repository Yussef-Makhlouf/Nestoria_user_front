import React, { useState } from "react";
import {
  FaCheck,
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaArrowsAltH,
  FaExpand,
} from "react-icons/fa";

function ProductDetails() {
  // هنا عشان اخذن اللون يا برووو
  const [selectedColor, setSelectedColor] = useState(null);
  // هنا عشان اخذن الكميه يا برووو
  const [quantity, setQuantity] = useState(1);

  // array بتاع الالوان
  const colors = ["bg-blue-500", "bg-purple-500", "bg-pink-500", "bg-red-500"];

  // الداله الخاصه بتغير اللون يا صحبب
  const handleColorSelect = (index) => {
    setSelectedColor(index);
  };

  //  يستاااااااا  الداله الخاصه بزياده الكميه
  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

   // الداله الخاصه بتقليل الكميه

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // ده بتاع الزراير الى لما ادوس عليها يظهر الجزء الخاص بيها يعنى منابو اخر تانى سيكشن 

  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-[#030303] text-white p-8">
      {/*  section 1111111111111 */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* الصور الجانبية */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:h-full">
          <div className="flex flex-col space-y-4 h-full">
            <img
              src="/table/shop-4-01.jpg"
              alt="Table"
              className="w-full h-[50%] lg:h-[40%] object-cover rounded-lg"
            />
            <img
              src="/table/shop-4-02.jpg"
              alt="Table"
              className="w-full h-[50%] lg:h-[40%] object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-4 h-full">
            <img
              src="/table/shop-4-03.jpg"
              alt="Table"
              className="w-full h-[50%] lg:h-[40%] object-cover rounded-lg"
            />
            <img
              src="/table/shop-4-04.jpg"
              alt="Table"
              className="w-full h-[50%] lg:h-[40%] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* قسم التفاصيل */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Round Wood Table</h2>
          <div className="flex items-center mb-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <span className="ml-2">(1 customer review)</span>
          </div>

          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            autem.
          </p>

          <div className="text-xl font-semibold mb-4">₹ 119.10 - ₹ 123.75</div>
          {/* قسم الالوان */}
          <div className="mb-4">
            <span className="mr-2">Colors:</span>
            <div className="flex space-x-2 my-4">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${color} ${
                    selectedColor === index ? "ring-2 ring-orange-500" : ""
                  }`}
                  onClick={() => handleColorSelect(index)}
                >
                  {selectedColor === index && (
                    <FaCheck className="text-white" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            {/* كمية المنتج */}
            <div className="flex items-center bg-inherit border rounded-md border-orange-500">
              <button
                className="px-3 py-2 rounded-l-lg"
                onClick={handleDecreaseQuantity}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                className="px-3 py-2 rounded-r-lg"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>

            {/* زر إضافة إلى السلة */}
            <button className="bg-inherit rounded-md border  border-orange-500 hover:bg-orange-600 text-white py-3 px-6 flex items-center justify-center flex-grow">
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>

          <button className="w-full bg-yellow-500 rounded-md hover:bg-yellow-600 text-white py-3 ">
            Buy Now
          </button>

          {/* معلومات إضافية */}
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <FaShoppingCart className="mr-2" /> Free Delivery & Free Shipping
            </li>
            <li className="flex items-center">
              <FaShoppingCart className="mr-2" /> Secure Online Payment
            </li>
          </ul>

          <p className="text-sm text-gray-400 mt-4">
            Pick Up Available At Los Angeles, Usually ready in 24 hours
          </p>
        </div>
      </div>

      {/*  END section 1111111111111*/}
      {/*  start section 2222222222*/}
      <div className="p-4">
        <div className="flex space-x-4 items-center">
          <button
            className={`${
              activeTab === "description"
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-black text-white border-black"
            } px-6 py-3 rounded-full border hover:bg-orange-500 hover:border-orange-500 transition-colors duration-300`}
            onClick={() => handleTabClick("description")}
          >
            Description
          </button>
          <button
            className={`${
              activeTab === "additionalInfo"
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-black text-white border-black"
            } px-6 py-3 rounded-full border hover:bg-orange-500 hover:border-orange-500 transition-colors duration-300`}
            onClick={() => handleTabClick("additionalInfo")}
          >
            Additional Information
          </button>
          <button
            className={`${
              activeTab === "reviews"
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-black text-white border-black"
            } px-6 py-3 rounded-full border hover:bg-orange-500 hover:border-orange-500 transition-colors duration-300`}
            onClick={() => handleTabClick("reviews")}
          >
            Reviews (1)
          </button>
        </div>

        {/* Sections 1 */}
        <div className="mt-6">
          {activeTab === "description" && (
            <div className="p-6 rounded-lg text-white">
              <div className="flex flex-col lg:flex-row items-center bg-black text-white p-6">
                <div className="md:w-full w-full">
                  <p className="mb-4 text-sm md:text-base">
                    Aliquam egestas enim tristique urna luctus aliquet. Vivamus
                    justo lacus, ultricies nec tincidunt iaculis, luctus ut
                    neque. Suspendisse nunc nisl, maximus euismod commodo eget,
                    blandit in enim. Vivamus vel lorem at nunc mattis ultricies
                    nec at est. In justo purus, varius et placerat eget,
                    consectetur a sapien. Quisque finibus ipsum eu dui sagittis,
                    eu aliquet nibh efficitur. Phasellus eu efficitur tellus.
                    Donec et leo nisi. Donec consequat porta iaculis. Sed
                    convallis interdum dui sed viverra. Ut hendrerit justo sed
                    est condimentum feugiat. Integer rutrum, leo in aliquet
                    cursus, odio felis porttitor est, sit amet fringilla leo
                    urna ac metus. Phasellus lectus erat, dictum id dolor sit
                    amet, malesuada feugiat nunc. Quisque semper lorem in augue
                    gravida, sit amet vestibulum nibh elementum. Duis massa mi,
                    feugiat sit amet rutrum.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                    <li className="flex items-center">
                      <FaCheck className="mr-2" />
                      Dignissim convallis aenean et tortor at risus viverra.
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="mr-2" />
                      Euisimod in pellentesque massa amnrita placerat.
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="mr-2" />
                      Suspendisse in est ante sitra aretnarin nibh mauris.
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="mr-2" />
                      Tincidunt vitae semper quis lectus nulla at diam.
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="mr-2" />
                      Neque convallis a cras semper auctor neque.
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="mr-2" />
                      Scelerisque felis imperdiet proin fermentum.
                    </li>
                  </ul>
                </div>
                <div className="md:w-full w-full mt-4 md:mt-0">
                  <img
                    src="Product-detail-Image.jpg"
                    alt="Wooden Table"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Sections 2 */}

          {activeTab === "additionalInfo" && (
            <div className=" p-6 rounded-lg text-white">
              <div className="mt-6">
                <table className="w-full text-left border-collapse border border-orange-500">
                  <thead>
                    <tr>
                      <th className="p-4 border border-orange-500 text-white">
                        Colors
                      </th>
                      <th className="p-4 border border-orange-500 text-gray-400">
                        Blue, Orange, Pink, Purple
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          )}
          {/* Sections 3 */}

          {activeTab === "reviews" && (
            <div className=" p-6 rounded-lg text-white">
              <form className="mt-6  p-6 rounded-lg">
                <h2 className="text-white text-xl mb-4">Add a review</h2>

                <div className="mb-4">
                  <label className="block text-white">Your Rating</label>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className="text-gray-500 hover:text-orange-500 cursor-pointer"
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Name *"
                    className="w-full p-2 border border-gray-500 bg-gray-800 text-white rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full p-2 border border-gray-500 bg-gray-800 text-white rounded-lg"
                  />
                </div>

                <textarea
                  placeholder="Your review *"
                  className="w-full p-2 border border-gray-500 bg-gray-800 text-white rounded-lg mb-4"
                  rows="4"
                ></textarea>

                <div className="flex items-center mb-4">
                  <input type="checkbox" id="saveInfo" className="mr-2" />
                  <label htmlFor="saveInfo" className="text-gray-400">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      {/* قسم المنجات */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="relative group">
          <img
            src="/shop/shop-1-04.jpg"
            alt="Product"
            className="w-full h-full object-cover"
          />
          <img
            src="/shop/shop-1-05.jpg"
            alt="Product Hover"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="p-2 bg-transparent rounded-full hover:bg-orange-500 transition-colors">
              <FaHeart className="text-white" />
            </div>
            <div className="p-2 bg-transparent rounded-full hover:bg-orange-500 transition-colors">
              <FaArrowsAltH className="text-white" />
            </div>
            <div className="p-2 bg-transparent rounded-full hover:bg-orange-500 transition-colors">
              <FaExpand className="text-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 text-center p-4 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <a href="#" className="text-white">
              Select Options
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group">
          <img
            src="/shop/shop-2-01.jpg"
            alt="Product"
            className="w-full h-full object-cover"
          />
          <img
            src="/shop/shop-2-02.jpg"
            alt="Product Hover"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="p-2 bg-transparent rounded-full hover:bg-orange-500 transition-colors">
              <FaHeart className="text-white" />
            </div>
            <div className="p-2 bg-transparent rounded-full hover:bg-orange-500 transition-colors">
              <FaArrowsAltH className="text-white" />
            </div>
            <div className="p-2 bg-transparent rounded-full hover:bg-orange-500 transition-colors">
              <FaExpand className="text-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 text-center p-4 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <a href="#" className="text-white">
              Select Options
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group">
          <img
            src="/shop/shop-7-01.jpg"
            alt="Product"
            className="w-full h-full object-cover"
          />
          <img
            src="/shop/shop-7-02.jpg"
            alt="Product Hover"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="p-2 bg-transparent rounded-full hover:bg-orange-500 transition-colors">
              <FaHeart className="text-white" />
            </div>
            <div className="p-2 bg-transparent rounded-full hover:bg-orange-500 transition-colors">
              <FaArrowsAltH className="text-white" />
            </div>
            <div className="p-2 bg-transparent rounded-full hover:bg-orange-500 transition-colors">
              <FaExpand className="text-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 text-center p-4 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <a href="#" className="text-white">
              Select Options
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative group">
          <img
            src="/shop/shop-11-01.jpg"
            alt="Product"
            className="w-full h-full object-cover"
          />
          <img
            src="/shop/shop-11-04-1.jpg"
            alt="Product Hover"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="p-2 bg-transparent rounded-full hover:bg-orange-500 transition-colors">
              <FaHeart className="text-white" />
            </div>
            <div className="p-2 bg-transparent rounded-full hover:bg-orange-500 transition-colors">
              <FaArrowsAltH className="text-white" />
            </div>
            <div className="p-2 bg-transparent rounded-full hover:bg-orange-500 transition-colors">
              <FaExpand className="text-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 text-center p-4 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <a href="#" className="text-white">
              Select Options
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
