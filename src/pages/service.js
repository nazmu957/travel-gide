
import RootLayout from "@/components/Layouts/RootLayout";
import AllProducts from "@/components/UI/AllProducts";
import ServiceCard from "@/components/UI/ServiceCard";
import { useGetProductsQuery } from "@/redux/api/api";
import Head from "next/head";
import { useState } from "react";

const ServicePage = () => {
const [searchTerm, setSearchTerm] = useState("");

  
    const { data , isLoading, isError, error} = useGetProductsQuery();
    const services = data?.data;
    console.log(services);

     const filteredServices = services?.filter((service) => {
       return service.title.toLowerCase().includes(searchTerm.toLowerCase());
     });

  return (
    <>
      <div className="flex justify-center p-5">
        <input
          className="p-3"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-primary">Search</button>
      </div>
      <div className="flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Head>
            <title>Service</title>
          </Head>

          {filteredServices?.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
        <div>
          <div className="form-control"></div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;

ServicePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
