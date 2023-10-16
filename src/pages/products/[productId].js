import RootLayout from "@/components/Layouts/RootLayout";

import React, { useState } from "react";
import { Card } from "antd";
import MultiProducts from "@/components/UI/MultiProducts";
const { Meta } = Card;

const ProductDetailPage = ({ product }) => {
  const moreProducts = product.features;
  console.log(moreProducts);

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    alert("Add Booking List ??");
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="m-2 card glass">
          <h1 className="text-center text-black text-2xl my-4">
            Package Details
          </h1>
          <figure>
            <img className="w-full" src={product?.image_url} alt="travel!" />
          </figure>
        </div>
        <div className="m-2 card glass text-black">
          <div className="card-body">
            <h2 className="text-xl font-semibold mb-2">{product?.title}</h2>
            <h3>{product?.description}</h3>
            <h3 className="mb-1">Price:$ {product?.price}</h3>
            <h3 className="mb-1">Status: {product?.status}</h3>
            <h3 className="mb-1">Status: {product?.location}</h3>
            <h3 className="mb-1">Rating: {product?.rating}</h3>
            <h3 className="mb-1">Rating: {product?.review}</h3>
            <div>
              <button className="btn btn-sm">Share</button>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="text-base font-bold">Booking</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-info bg-info"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <MultiProducts moreProducts={moreProducts} />
    </div>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://travel-gide-server-nazmu957.vercel.app/products"
  );
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://travel-gide-server-nazmu957.vercel.app/products/${params.productId}`
  );
  const data = await res.json();
  //  console.log(data.features)
  return {
    props: {
      product: data,
    },
  };
};
