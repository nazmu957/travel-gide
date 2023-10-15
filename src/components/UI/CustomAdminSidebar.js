import React, { useState } from "react";

const CustomAdminSidebar = () => {
  const [profileData, setProfileData] = useState({
    name: "Admin Name",
    address: "Admin Location",
    phone: "017XXXXXXX",
    profileImage:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
  });
  const [newProfileImage, setNewProfileImage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProfileImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEditProfile = () => {
    setIsEditing(false);
  };

  return (
    <aside className="bg-gray-800 text-white hidden sm:block w h-screen w-1/5 p-4">
      <div className="flex justify-center">
        <img
          src={newProfileImage || profileData.profileImage}
          alt="profile"
          className="w-[5rem] rounded-full"
        />
        {isEditing && (
          <input
            type="file"
            name="profileImage"
            onChange={handleImageChange}
            accept="image/*"
          />
        )}
      </div>
      <div className="flex justify-center">
        {isEditing ? (
          <button onClick={handleEditProfile} className="mt-4">
            Save Profile
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="mt-4">
            Edit Profile
          </button>
        )}
      </div>
      <div className="pt-5">
        <h3>
          Name:{" "}
          {isEditing ? (
            <input
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
            />
          ) : (
            profileData.name
          )}
        </h3>
        <h4 className="py-5">
          Address:{" "}
          {isEditing ? (
            <input
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
            />
          ) : (
            profileData.address
          )}
        </h4>
        <h5>
          Phone:{" "}
          {isEditing ? (
            <input
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
            />
          ) : (
            profileData.phone
          )}
        </h5>
      </div>
    </aside>
  );
};

export default CustomAdminSidebar;
