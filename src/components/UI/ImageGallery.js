import React from "react";

const ImageGallery = () => {
    return (
      <>
        <h1 className="text-center py-8">Gallery</h1>
        <div className="flex flex-wrap  ">
          {/* First Row */}
          <div className="w-2/3 p-2">
            <img
              src="https://i.ibb.co/y8VkJSz/banner1.jpg"
              alt="First Image"
              className="w-full h-full"
            />
          </div>
          <div className="w-1/3 p-2">
            <img
              src="https://i.ibb.co/WDx5mwB/profile1.jpg"
              className="w-full h-auto"
            />
            <img
              src="https://i.ibb.co/DDw3Qt2/banner2.jpg"
              alt="Second Image"
              className="w-full h-auto pt-2"
            />
          </div>
        </div>
      </>
    );
};

export default ImageGallery;



