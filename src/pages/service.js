import RootLayout from "@/components/Layouts/RootLayout";
import AllProducts from "@/components/UI/AllProducts";
import BreadcrumbComponent from "@/components/UI/BreadcrumbComponent";
import ServiceCard from "@/components/UI/ServiceCard";
import SortingService from "@/components/UI/SortingService";
import { useGetProductsQuery } from "@/redux/api/api";
import Head from "next/head";
import { useState } from "react";


const ServicePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useGetProductsQuery();
  const services = data?.data;
  const filteredServices = services?.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const breadcrumbPaths = [{ label: "Home", link: "/" }, { label: "Services" }];

  return (
    <>
      <BreadcrumbComponent paths={breadcrumbPaths} />
      <div className="flex justify-center p-5">
        <input
          className="p-3"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-primary p-3">Search</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 mb-5 ">
        {/* Sidebar */}
        <div className="lg:col-span-3 xl:col-span-4">
          <Head>
            <title>Service</title>
          </Head>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-3 gap-4">
            {filteredServices?.map((service) => (
              <ServiceCard key={service.id} service={service}></ServiceCard>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-1 bg-gray-200 p-4 ">
          <SortingService services={services} />
        </div>
      </div>
    </>
  );
};

export default ServicePage;

ServicePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
