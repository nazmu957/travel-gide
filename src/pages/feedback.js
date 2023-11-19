import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    comment: "",
    rangeValue: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRangeChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, rangeValue: parseInt(value, 10) });
  };

  const handleSubmit = (e) => {
    
      console.log("Form Data:", formData);
    alert("Thank you for your comment!");
  };

  const handleClear = () => {
    setFormData({
      username: "",
      email: "",
      comment: "",
    });
  };

  return (
    <div className="w-full max-w-md mx-auto pt-5">
      <Head>
        <title>Feedback</title>
      </Head>
      <form className="bg-[#1A2C48] text-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className=" py-3">Give Your Feedback</h1>
        <div className="mb-4">
          <label
            className="block  text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block  text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block  text-sm font-bold mb-2"
            htmlFor="comment"
          >
            Comment
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-5">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="comment"
          >
            Ratting
          </label>
          <input
            type="range"
            min={0}
            max="4"
            value={formData.rangeValue}
            className="range"
            step="1"
            onChange={handleRangeChange}
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-white hover:bg-blue-700  text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default  FeedbackForm;

FeedbackForm.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
