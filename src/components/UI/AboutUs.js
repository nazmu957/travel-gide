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
      <div className="lg:mx-[4rem]">
        <h1 className="text-center py-8 text-black">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-5 ">
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
                <h2 className="lg:text-2xl  font-semibold text-black ">
                  Our mission
                </h2>
                <p className="text-gray-700 lg:text-base py-3">
                  At our Company our mission is to empower individuals and
                  businesses by providing innovative solutions that enhance
                  their potential and drive meaningful progress. We are
                  committed to delivering cutting-edge products and services
                  that seamlessly integrate into the fabric of our lives,
                  fostering efficiency, connectivity, and overall well-being.
                  Through a relentless pursuit of excellence, we aim to be at
                  the forefront of technological advancements, anticipating and
                  addressing the evolving needs of our diverse community. With a
                  focus on integrity, creativity, and customer-centricity, we
                  aspire to be more than just a company; we strive to be a
                  catalyst for positive change.
                </p>

                <h2 className="lg:text-2xl font-semibold mb-4 text-black pt-5">
                  Our Story
                </h2>
                <p className="text-gray-700 lg:text-base ">
                  Our story is to empower individuals and businesses by
                  providing innovative solutions that enhance their potential
                  and drive meaningful progress. We are committed to delivering
                  cutting-edge products and services that seamlessly integrate
                  into the fabric of our lives, fostering efficiency,
                  connectivity, and overall well-being. Through a relentless
                  pursuit of excellence, we aim to be at the forefront of
                  technological advancements, anticipating and addressing the
                  evolving needs of our diverse community. With a focus on
                  integrity, creativity, and customer-centricity, we aspire to
                  be more than just a company; we strive to be a catalyst for
                  positive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
