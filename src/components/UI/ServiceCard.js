import Link from 'next/link';
import React from 'react';

const ServiceCard = ( { service }) => {
    console.log(service)
    const { id,title,description,price,rating,status,image_url} = service;
    return (
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="photo" className="w-full h-[18rem]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{price}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Ratting: {rating}</div>
            <div className="badge badge-outline">Availability: {status}</div>
          </div>

          <Link href={`/details/${id}`}>Detail</Link>
        </div>
      </div>
    );
};

export default ServiceCard;