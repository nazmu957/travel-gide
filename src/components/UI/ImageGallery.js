import React from "react";

const ImageGallery = () => {
    return (
      <>
      <h1 className="text-center">Gallery</h1>
        <div className="flex flex-wrap">
          {/* First Row */}
          <div className="w-2/3 p-2">
            <img
              src="https://tomap-elementor.travelerwp.com/wp-content/uploads/2014/11/new-york-city-skyline-at-dusk-zo-cf1a9c35.jpg"
              alt="First Image"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/3 p-2">
            <img
              src="https://tomap-elementor.travelerwp.com/wp-content/uploads/2014/11/new-york-city-skyline-at-dusk-zo-cf1a9c35.jpg"
              alt="Second Image"
              className="w-full h-auto"
            />
            <img
              src="https://tomap-elementor.travelerwp.com/wp-content/uploads/2014/11/new-york-city-skyline-at-dusk-zo-cf1a9c35.jpg"
              alt="Second Image"
              className="w-full h-auto pt-2"
            />
          </div>
        </div>
      </>
    );
};

export default ImageGallery;
