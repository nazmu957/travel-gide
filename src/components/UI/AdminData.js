import React, { useEffect, useRef, useState } from "react";

const AdminData = () => {
  const [userData, setUserData] = useState([
    { id: 1, name: "sakib", payment: "$410", date: "10/8/23" },
    { id: 2, name: "rakib", payment: "$215", date: "28/8/23" },
    { id: 3, name: "zaman", payment: "$220", date: "22/8/23" },
    { id: 4, name: "Noman", payment: "$025", date: "20/8/23" },
    { id: 5, name: "Sabbir", payment: "$390", date: "30/8/23" },
  ]);
  const [editData, setEditData] = useState(null);

  const handleEdit = (id) => {
    const userToEdit = userData.find((user) => user.id === id);
    setEditData(userToEdit);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedData = userData.map((user) =>
      user.id === editData.id ? { ...user, ...editData } : user
    );
    setUserData(updatedData);
    setEditData(null);
  };

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

    const maxPayment = Math.max(
      ...userData.map((user) => parseInt(user.payment.slice(1), 10))
    );

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    userData.forEach((user, index) => {
      const barHeight =
        (parseInt(user.payment.slice(1), 10) / maxPayment) * canvas.height;
      const barWidth = 50;
      const x = index * (barWidth + 20);
      const y = canvas.height - barHeight;

      ctx.fillStyle = "blue";
      ctx.fillRect(x, y, barWidth, barHeight);

      ctx.fillStyle = "black";
      ctx.fillText(user.name, x, canvas.height + 20);

      ctx.fillStyle = "black";
      ctx.fillText(user.payment, x, y - 10);

      ctx.fillStyle = "gray";
      ctx.fillText(user.date, x, y - 25);
    });
  }, [userData]);

  return (
    <div className="w-3/4 p-4 mx-auto bg-white">
      <h2 className="text-2xl py-4 font-semibold mb-4 text-center">
        Manage All Service/User/Booking
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr className="">
              <th className="py-2 px-4 text-left">User ID</th>
              <th className="py-2 px-4 text-left">User Name</th>
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
                    onClick={() => handleEdit(item.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
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
      {editData && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User ID:
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
              value={editData.id}
              onChange={(e) => setEditData({ ...editData, id: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Name:
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Payment:
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none focus:border-blue-500"
              value={editData.payment}
              onChange={(e) =>
                setEditData({ ...editData, payment: e.target.value })
              }
            />
          </div>
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700">
              Payment Date:
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              value={editData.date}
              onChange={(e) =>
                setEditData({ ...editData, date: e.target.value })
              }
            />
          </div>
          <div className="col-span-full text-center">
            <button
              type="submit"
              onClick={handleEditSubmit}
              className="mt-4 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
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
