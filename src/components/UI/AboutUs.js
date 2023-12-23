import React, { useState } from "react";

const AboutUs = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageClick = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); 
  };

  return (
    <>
      <h1 className="text-center py-8 text-black">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-5">
        {/* Left Side (Image) */}
        <div>
          <img
            src="https://i.ibb.co/3sKzQVm/team.jpg"
            className={`w-full h-auto cursor-pointer ${
              isAnimating ? "animate-bounce" : ""
            }`}
            onClick={handleImageClick}
          />
        </div>

        {/* Right Side (Content) */}
        <div className="">
          <div className="">
            <div className=" p-6 rounded shadow">
              <h2 className="lg:text-2xl  font-semibold text-black ">Our mission</h2>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                dolores! Facilis expedita possimus voluptatum, alias,
                voluptatibus enim minima autem iste quas velit officia voluptas
                dolor id aliquam, amet ratione tempora?
              </p>

              <h2 className="lg:text-2xl font-semibold mb-4 text-black pt-5">Our Story</h2>
              <p className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                dolores! Facilis expedita possimus voluptatum, alias,
                voluptatibus enim minima autem iste quas velit officia voluptas
                dolor id aliquam, amet ratione tempora?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
