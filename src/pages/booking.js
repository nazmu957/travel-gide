import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
const { TextArea } = Input;


const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isChecked, setIsChecked] = useState(true);
  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., sending data to API)
    // Assuming the form submission is successful
    alert('done')
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-semibold mb-4">Booking Form</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Date and Time:
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            dateFormat="Pp"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price: </span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option>$541</option>
            <option>$541</option>
            <option>$541</option>
            <option>$541</option>
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Payment Option </span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option>Bikash</option>
            <option>Nogod</option>
          </select>
        </div>

        <div className="form-control">
          <label
            className="cursor-pointer label"
            onClick={handleCheckboxChange}
          >
            <span className="label-text">Confirm Booking</span>
            <input
              type="checkbox"
              checked={isChecked}
              className="checkbox checkbox-info bg-red-400"
              onChange={() => {}}
            />
          </label>
        </div>

        <div>
          <span>Phone Number:</span>
          <Input placeholder="default size" prefix={<UserOutlined />} />
        </div>

        <div>
          <span>Your Details: </span>
          <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
        </div>

        <div className="flex flex-col">
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Slot Available</span>
              <input
                type="checkbox"
                className="toggle toggle-primary border-4"
                checked
              />
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Reserve Package
        </button>
      </div>
    </form>
  );
};

export default BookingPage;
