
const AboutUs = () => {
  return (
    <>
    <h1 className="text-center">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Left Side (Image) */}
        <div>
          <img
            src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?size=626&ext=jpg&uid=R86301606&ga=GA1.2.1977169195.1673759975&semt=ais"
            alt="Description of the image"
            className="w-full h-auto"
          />
        </div>

        {/* Right Side (Content) */}
        <div className="">
          <div className=" p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Our mission</h2>
            <p className="text-gray-700 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              dolores! Facilis expedita possimus voluptatum, alias, voluptatibus
              enim minima autem iste quas velit officia voluptas dolor id
              aliquam, amet ratione tempora?
            </p>
            {/* Add more content as needed */}
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              dolores! Facilis expedita possimus voluptatum, alias, voluptatibus
              enim minima autem iste quas velit officia voluptas dolor id
              aliquam, amet ratione tempora?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


export default AboutUs;
