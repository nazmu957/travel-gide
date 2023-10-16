import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const PolicyPage = () => {
  

  return (
    <div className="text-center p-[5rem]">
      <Head>
        <title>Privacy</title>
      </Head>
      <h1 className="py-3">Privacy</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
        voluptatibus voluptatem dolorem aperiam, minus veniam autem corporis
        nostrum repellat. Rerum blanditiis reiciendis illo perferendis debitis
        iusto optio. Expedita, fugiat beatae! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Nesciunt recusandae modi nisi voluptatum
        quas expedita cum, fugit eos ipsum voluptate tempore accusantium
        excepturi quaerat nemo sint iste iusto, cupiditate exercitationem.{" "}
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
        voluptatibus voluptatem dolorem aperiam, minus veniam autem corporis
        nostrum repellat. Rerum blanditiis reiciendis illo perferendis debitis
        iusto optio. Expedita, fugiat beatae! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Nesciunt recusandae modi nisi voluptatum
        quas expedita cum, fugit eos ipsum voluptate tempore accusantium
        excepturi quaerat nemo sint iste iusto, cupiditate exercitationem.{" "}
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
        voluptatibus voluptatem dolorem aperiam, minus veniam autem corporis
        nostrum repellat. Rerum blanditiis reiciendis illo perferendis debitis
        iusto optio. Expedita, fugiat beatae! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Nesciunt recusandae modi nisi voluptatum
        quas expedita cum, fugit eos ipsum voluptate tempore accusantium
        excepturi quaerat nemo sint iste iusto, cupiditate exercitationem.{" "}
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
        voluptatibus voluptatem dolorem aperiam, minus veniam autem corporis
        nostrum repellat. Rerum blanditiis reiciendis illo perferendis debitis
        iusto optio. Expedita, fugiat beatae! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Nesciunt recusandae modi nisi voluptatum
        quas expedita cum, fugit eos ipsum voluptate tempore accusantium
        excepturi quaerat nemo sint iste iusto, cupiditate exercitationem.{" "}
      </p>
    </div>
  );
};

export default PolicyPage;

PolicyPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
