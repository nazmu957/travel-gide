import RootLayout from "@/components/Layouts/RootLayout";

import React from "react";
import { Card } from "antd";
import MultiProducts from "@/components/UI/MultiProducts";
const { Meta } = Card;

const ProductDetailPage = ({ product }) => {
  const moreProducts = product.features;
  console.log(moreProducts);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="m-2 card glass">
          <h1 className="text-center text-2xl my-4">Package Details</h1>
          <figure>
            <img className="w-full" src={product?.image_url} alt="travel!" />
          </figure>
        </div>
        <div className="m-2 card glass">
          <div className="card-body">
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <h3 className="mb-1">Category: {product?.category}</h3>
            <h3 className="mb-1">Price: {product?.price}</h3>
            <h3 className="mb-1">Status: {product?.status}</h3>
            <h3 className="mb-1">Rating: {product?.rating}</h3>
          </div>
        </div>
      </div>
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
