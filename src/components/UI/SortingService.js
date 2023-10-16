import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import SortingCard from "./SortingCard";

const SortingService = ({ services }) => {
 
   const [priceFilter, setPriceFilter] = useState(25);
   const [sortedServices, setSortedServices] = useState([]);

   const handlePriceChange = (event) => {
     const newPriceFilter = parseInt(event.target.value, 10);
     setPriceFilter(newPriceFilter);

     // Sort the services based on the price filter value
     const sorted = services.filter(
       (service) => service.price <= newPriceFilter
     );
     setSortedServices(sorted);
   };
  return (
    <div >
      <input
        type="range"
        min={0}
        max="600"
        value={priceFilter}
        className="range mb-5"
        step="25"
        onChange={handlePriceChange}
      />
      <h3>Sort with price</h3>
      {sortedServices.map((service) => (
        <SortingCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default SortingService;
