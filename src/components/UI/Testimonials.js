const Testimonial = () => {
  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-center py-8 text-black">Testimonials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-center">
              <img
                className="w-[5rem] rounded-full"
                src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1703673112~exp=1703673712~hmac=07d73f39feba0959a2abe16888a76f5771133f7668f32cc037e4cea934160104"
                alt=""
              />
            </div>
            <h2 className="p-1 text-center">Jon</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit
              velit eaque deserunt repellat dolores iure autem laudantium
              nesciunt architecto magnam, voluptatem
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl ">
          <div className="card-body">
            <div className="flex justify-center">
              <img
                className="w-[5rem] rounded-full"
                src="https://i.ibb.co/rZkMX3f/person1.jpg"
                alt=""
              />
            </div>
            <h2 className="p-1 text-center">Cruge</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit
              velit eaque deserunt repellat dolores iure autem laudantium
              nesciunt architecto magnam, voluptatem
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-center">
              <img
                className="w-[5rem] rounded-full"
                src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1703673112~exp=1703673712~hmac=07d73f39feba0959a2abe16888a76f5771133f7668f32cc037e4cea934160104"
                alt=""
              />
            </div>
            <h2 className="p-1 text-center">Tom</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit
              velit eaque deserunt repellat dolores iure autem laudantium
              nesciunt architecto magnam, voluptatem
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-center">
              <img
                className="w-[5rem] rounded-full"
                src="https://i.ibb.co/rZkMX3f/person1.jpg"
                alt=""
              />
            </div>
            <h2 className="p-1 text-center">Zaman</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit
              velit eaque deserunt repellat dolores iure autem laudantium
              nesciunt architecto magnam, voluptatem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
