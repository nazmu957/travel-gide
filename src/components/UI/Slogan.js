import React from "react";

const Slogan = () => {
  return (
    <div
      className="bg-cover bg-center h-[15rem] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://i.ibb.co/y8VkJSz/banner1.jpg')`,
      }}
    >
      <div className="p-8 h-full flex flex-col md:flex-row bg-opacity-75 bg-black w-full">
        <div className="w-full md:w-2/3 mb-4 md:mb-0 md:mr-4">
          <h1 className="lg:text-4xl font-bold mb-4">Our mission</h1>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vehicula ipsum vitae dolor ultrices, vel feugiat lacus tincidunt.
            Integer eget tellus id lacus vehicula aliquam. Sed nec vestibulum
            lorem, vel suscipit velit.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <div>
            <button className="btn-primary px-8 py-4 font-bold lg:text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;



