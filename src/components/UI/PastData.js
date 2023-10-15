import React from "react";

const PastData = () => {
  const data = [
    { id: 1, name: "Africa", price: "$410", date: "20/8/23" },
    { id: 2, name: "America", price: "$215", date: "20/8/23" },
    { id: 3, name: "London", price: "$220", date: "20/8/23" },
    { id: 4, name: "Zordan", price: "$025", date: "20/8/23" },
    { id: 5, name: "Dubai", price: "$390", date: "20/8/23" },
  ];

  return (
    <div className="w-3/4 p-4 mx-auto">
      <h2 className="text-2xl py-4 font-semibold mb-4 text-center">Previous Booking History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr className="">
              <th className="py-2 px-4 text-left">User ID</th>
              <th className="py-2 px-4 text-left">Travel country</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="bg-gray-100">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.price}</td>
                <td className="py-2 px-4">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PastData;
