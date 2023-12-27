import React, { useState } from "react";
import PastData from "./PastData";

const Table = () => {
  const [data, setData] = useState([
    { id: 1, name: "Africa", price: "$410", date: "20/8/23" },
    { id: 2, name: "America", price: "$215", date: "23/2/23" },
    { id: 3, name: "London", price: "$220", date: "25/4/23" },
    { id: 4, name: "Zordan", price: "$025", date: "24/9/23" },
    { id: 5, name: "Dubai", price: "$390", date: "20/1/23" },
  ]);

  const [editableItem, setEditableItem] = useState(null);

  const handleEditClick = (item) => {
    setEditableItem({ ...item });
  };

  const handleSaveClick = (id, updatedData) => {
    const updatedItems = data.map((item) =>
      item.id === id ? { ...item, ...updatedData } : item
    );
    setData(updatedItems);
    setEditableItem(null);
  };

  const handleDeleteClick = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    setEditableItem(null);
  };

  return (
    <div className="w-full p-4 mx-auto bg-white">
      <h2 className="text-2xl font-semibold mb-4">Your Booking History</h2>
      <h3 className="py-3">Your Current Booking Status</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.map((item) => (
          <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow">
            <div>ID: {item.id}</div>
            <div className="mt-2">
              {editableItem && editableItem.id === item.id ? (
                <input
                  type="text"
                  className="border rounded py-1 px-2 w-full"
                  value={editableItem.name}
                  onChange={(e) =>
                    setEditableItem({ ...editableItem, name: e.target.value })
                  }
                />
              ) : (
                <div>Location: {item.name}</div>
              )}
            </div>
            <div className="mt-2">
              {editableItem && editableItem.id === item.id ? (
                <input
                  type="text"
                  className="border rounded py-1 px-2 w-full"
                  value={editableItem.price}
                  onChange={(e) =>
                    setEditableItem({ ...editableItem, price: e.target.value })
                  }
                />
              ) : (
                <div>Price: {item.price}</div>
              )}
            </div>
            <div className="mt-2">Date: {item.date}</div>
            <div className="mt-2 flex justify-end">
              {editableItem && editableItem.id === item.id ? (
                <button
                  className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded mr-2"
                  onClick={() => handleSaveClick(item.id, editableItem)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2"
                  onClick={() => handleEditClick(item)}
                >
                  Edit
                </button>
              )}
              <button
                className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                onClick={() => handleDeleteClick(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <PastData />
    </div>
  );
};

export default Table;
