import { EnvironmentOutlined, AreaChartOutlined,CheckSquareOutlined } from "@ant-design/icons";

const Numbers = () => {
  return (
    <div className="container mx-auto py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card  text-black ">
          <div className="card-body">
            <div className="flex">
              <div className="text-6xl pr-3">
                <EnvironmentOutlined />
              </div>
              <div>
                <h2 className="p-1 ">5000+ local guides </h2>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  sit velit eaque deserunt repellat
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card  text-black ">
          <div className="card-body">
            <div className="flex">
              <div className="text-6xl pr-3">
                <CheckSquareOutlined />
              </div>
              <div>
                <h2 className="p-1 ">7,000+ local guides </h2>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  sit velit eaque deserunt repellat
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card  text-black ">
          <div className="card-body">
            <div className="flex">
              <div className="text-6xl pr-3">
                <AreaChartOutlined />
              </div>
              <div>
                <h2 className="p-1 ">15,000+ local guides </h2>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  sit velit eaque deserunt repellat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
