import React, { useState } from "react";

const EditModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [editedData, setEditedData] = useState(initialData);

  const handleInputChange = (e) => {
    setEditedData(e.target.value);
  };

  const handleSave = () => {
    onSave(editedData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-container bg-white w-96 mx-auto p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Content</h2>
        <input
          type="text"
          className="w-full border p-2 mb-4"
          value={editedData}
          onChange={handleInputChange}
        />
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
