import React from 'react';

const Slogan = () => {
  return (
    <div
      className="bg-cover bg-center h-[15rem] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://tomap-elementor.travelerwp.com/wp-content/uploads/2014/11/new-york-city-skyline-at-dusk-zo-cf1a9c35.jpg')`,
      }}
    >
      <div className="p-8 h-full flex bg-opacity-75 bg-black">
        <div className="w-[70%]">
          <h1 className="text-4xl font-bold mb-4">Your Title</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vehicula ipsum vitae dolor ultrices, vel feugiat lacus tincidunt.
            Integer eget tellus id lacus vehicula aliquam. Sed nec vestibulum
            lorem, vel suscipit velit.
          </p>
        </div>
        <div className="w-[30%] flex items-center justify-center">
          <div>
            <button className="btn-primary px-[5rem] py-[1rem] font-bold text-lg">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;