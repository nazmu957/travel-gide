import React from 'react';

const ServiceCard = ( { service }) => {
    console.log(service)
    const { id,title,description,price,rating,status} = service;
    return (
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{price}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{rating}</div>
            <div className="badge badge-outline">{status}</div>
          </div>
          <button>Link</button>
        </div>
      </div>
    );
};

export default ServiceCard;