import Link from 'next/link';
import React from 'react';

const ServiceCard = ( { service }) => {
    console.log(service)
    const { id,title,description,price,rating,status,image_url} = service;
    return (
      <div className="card bg-base-100 shadow-xl sm:w-72 lg:w-80 xl:w-96">
        <figure>
          <img
            src={image_url}
            alt="photo"
            className="w-full h-[18rem] object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold mb-2">
            {title}
            <div className="badge badge-secondary text-xs ml-2">${price}</div>
          </h2>
          <p className="text-sm mb-4">{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Rating: {rating}</div>
            <div className="badge badge-outline">Availability: {status}</div>
          </div>

          <Link href={`/details/${id}`}>
            <button className="btn btn-sm text-xs bg-[#1A2D48] text-white ">Detail</button>
          </Link>
        </div>
      </div>
    );
};

export default ServiceCard;