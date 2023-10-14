import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
const { TextArea } = Input;

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isChecked, setIsChecked] = useState(true);
  const [price, setPrice] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [details, setDetails] = useState("");
  const [slotAvailable, setSlotAvailable] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a Date object for the selected date and time
    const formattedDate = selectedDate.toLocaleString();

    // Create an object with form data including date and time
    const formData = {
      dateAndTime: formattedDate,
      price,
      paymentOption,
      phoneNumber,
      details,
      slotAvailable,
    };

    // Log form data to the console
    console.log("Form Data:", formData);

    // Perform form submission logic here (e.g., sending data to API)
    // Assuming the form submission is successful
    alert("done");
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
          <select
            className="select select-bordered"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option disabled selected>
              Pick one
            </option>
            <option>$541</option>
            <option>$541</option>
            <option>$541</option>
            
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Payment Option </span>
          </label>
          <select
            className="select select-bordered"
            value={paymentOption}
            onChange={(e) => setPaymentOption(e.target.value)}
          >
            <option disabled selected>
              Pick one
            </option>
            <option>Bikash</option>
            <option>Nogod</option>
            
          </select>
        </div>

        <div>
          <span>Phone Number:</span>
          <Input
            id="phoneNumber"
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <span>Your Details: </span>
          <TextArea
            id="details"
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Enter details"
            maxLength={6}
          />
        </div>

        <div className="flex flex-col">
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Slot Available</span>
              <input
                id="slotAvailable"
                type="checkbox"
                className="toggle toggle-primary border-4"
                checked={slotAvailable}
                onChange={() => setSlotAvailable(!slotAvailable)}
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
