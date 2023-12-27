import React from "react";

const Slogan = () => {
  return (
    <div
      className="bg-cover bg-center h-[15rem] flex items-center justify-center text-white lg:mx-[4rem]"
      style={{
        backgroundImage: `url('https://i.ibb.co/y8VkJSz/banner1.jpg')`,
      }}
    >
      <div className="p-8 h-full flex flex-col md:flex-row bg-opacity-75 bg-black w-full">
        <div className="w-full md:w-2/3 mb-4 md:mb-0 md:mr-4">
          <h1 className="lg:text-3xl font-bold mb-4">Our mission</h1>
          <p className="lg:text-lg">
            At our Company our mission is to empower individuals and businesses
            by providing innovative solutions that enhance their potential and
            drive meaningful progress. We are committed .
            
          </p>
        </div>
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <div>
            <button className="btn px-8 text-white font-bold lg:text-sm bg-[#1A2D48]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;



