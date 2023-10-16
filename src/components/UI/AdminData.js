import React, { useEffect, useRef, useState } from "react";


const AdminData = () => {
  const [userData, setUserData] = useState([
    { id: 1, name: "sakib", payment: "$410", date: "10/8/23" },
    { id: 2, name: "rakib", payment: "$215", date: "28/8/23" },
    { id: 3, name: "zaman", payment: "$220", date: "22/8/23" },
    { id: 4, name: "Noman", payment: "$025", date: "20/8/23" },
    { id: 5, name: "Sabbir", payment: "$390", date: "30/8/23" },
  ]);

  

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      const updatedData = userData.filter((item) => item.id !== id);
      setUserData(updatedData);
    }
  };

 const canvasRef = useRef(null);

 useEffect(() => {
   const canvas = canvasRef.current;
   const ctx = canvas.getContext("2d");

   // Calculate max payment value for scaling
   const maxPayment = Math.max(
     ...userData.map((user) => parseInt(user.payment.slice(1), 10))
   );

   // Clear the canvas before drawing
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   // Draw bars and details based on payment data
   userData.forEach((user, index) => {
     const barHeight =
       (parseInt(user.payment.slice(1), 10) / maxPayment) * canvas.height;
     const barWidth = 50;
     const x = index * (barWidth + 20);
     const y = canvas.height - barHeight;

     // Draw bar
     ctx.fillStyle = "blue";
     ctx.fillRect(x, y, barWidth, barHeight);

     // Draw user name below the bar
     ctx.fillStyle = "black";
     ctx.fillText(user.name, x, canvas.height + 20);

     // Draw payment amount above the bar
     ctx.fillStyle = "white";
     ctx.fillText(user.payment, x, y - 10);

     // Draw other details (e.g., date) above the payment amount
     ctx.fillStyle = "gray";
     ctx.fillText(user.date, x, y - 25);
   });
 }, [userData]);

 

  
  return (
    <div className="w-3/4 p-4 mx-auto">
      <h2 className="text-2xl py-4 font-semibold mb-4 text-center">
        All User Information
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr className="">
              <th className="py-2 px-4 text-left">User ID</th>
              <th className="py-2 px-4 text-left">Travel country</th>
              <th className="py-2 px-4 text-left">Payment</th>
              <th className="py-2 px-4 text-left">Payment Date</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item) => (
              <tr key={item.id} className="bg-gray-100">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.payment}</td>
                <td className="py-2 px-4">{item.date}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl py-4 font-semibold mb-4 text-center">
          Payment Statistics
        </h2>
        <canvas
          ref={canvasRef}
          width={userData.length * 70}
          height={300}
        ></canvas>
      </div>
    </div>
  );
};

export default AdminData;
