import RootLayout from "@/components/Layouts/RootLayout";
import EditModal from "@/components/UI/EditModal";
import React, { useRef, useState } from "react";
import { Input } from "antd";
import Head from "next/head";

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedText, setEditedText] = useState("Spotify New York");
  const [imageUrl, setImageUrl] = useState(
    "https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-looking-confident_1298-291.jpg?size=626&ext=jpg&ga=GA1.2.1977169195.1673759975&semt=ais"
  );

  const fileInputRef = useRef(null);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleSaveText = (newText) => {
    setEditedText(newText);
    closeModal();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Left Part */}
      <Head>
        <title>User</title>
      </Head>
      <div className="col-span-1 md:col-span-1 p-4 md:w-35">
        <div className="flex justify-center">
          <div>
            <img src={imageUrl} alt="Image" className="mb-4 w-[15rem]" />
            <button
              className=" right-0 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
              onClick={openFileInput}
            >
              Edit profile
            </button>
            <button className=" right-0 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">
              Logout
            </button>
          </div>

          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
        </div>
        <div className="p-5 flex">
          <div>
            <h2>{editedText}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              recusandae iste cumque laudantium tempora!{" "}
            </p>
          </div>
          <div>
            <button
              className=" btn btn-xs bg-sky-300 border-0 font-bold "
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
          <div></div>
        </div>
        <div className="p-5 flex">
          <div>
            <h2>New Address</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              recusandae iste cumque laudantium tempora!{" "}
            </p>
          </div>

          <div></div>
        </div>
      </div>

      {/* Right Part */}
      <div className="col-span-1 md:col-span-2 p-4 md:w-65">
        <h2 className="text-2xl font-bold mb-4">Booking History</h2>
        <EditModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={handleSaveText}
          initialData={editedText}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1 sm:col-span-1">
            <div className="card  bg-base-100 shadow-xl mt-5">
              <div className="card-body">
                <h2 className="card-title">Western Blt From San Francisco</h2>
                <p>Price: $595</p>
                <p>Location: New York</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-1">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="text-center p-3">Payment Method</h2>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <button>Pay With Card</button>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <span>Card Number</span>
                    <Input className="my-3" placeholder="1234 1234 1234 1234" />
                  </div>
                  <div className="col-span-1">
                    <span>Expiry Date</span>
                    <Input className="my-3" placeholder="MM/YY" />
                  </div>
                  <div className="col-span-1">
                    <span>CVC</span>
                    <Input className="my-3" placeholder="CVC" />
                  </div>
                  <div className="col-span-1">
                    <span>Phone</span>
                    <Input className="my-3" placeholder="017XXXXXXX" />
                  </div>
                  <div className="col-span-2">
                    <span>Name on Card</span>
                    <Input className="my-3" placeholder="name" />
                  </div>
                  <div className="col-span-2">
                    <span>Email</span>
                    <Input className="my-3" placeholder="abc@gmail.com" />
                  </div>
                </div>
                <button className="bg-primary p-3">Pay $4895.00</button>
              </div>
              <span className="text-center pb-5">
                You will be charged $253, including $48 for VAT in Italy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

UserProfile.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
