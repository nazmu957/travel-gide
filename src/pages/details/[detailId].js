import RootLayout from "@/components/Layouts/RootLayout";

import React, { useState } from "react";
import { Card } from "antd";
import MultiProducts from "@/components/UI/MultiProducts";
import Link from "next/link";

const { Meta } = Card;

const DetailPage = ({ detail }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    alert("Add Booking List ??");
  };

   console.log(detail);

  return (
    <div>
     

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-[50rem]" src={detail?.image_url} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{detail?.name}</h2>
          <span className="text-base">{detail?.description}</span>
          <h3>Price:${detail?.price}</h3>
          <h3>Location: {detail?.location}</h3>
          <h3>Availability: {detail?.availability}</h3>
          <h3>Contact Us: {detail?.contact}</h3>
          <h3>Contact Us:{detail?.Ratting} </h3>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="text-xs btn btn-primary btn-sm font-bold">Add WishList</span>
              <input
                type="checkbox"
                className="checkbox checkbox-info bg-info"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
          <Link href={"/booking"}><button className="btn btn-primary btn-sm my-2">Booking</button></Link>
          <button className="btn text-white bg-primary btn-sm w-[5rem]">Share</button>
        </div>
      </div>
      
    </div>
  );
};

export default DetailPage;

DetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://travel-gide-server-nazmu957.vercel.app/details"
  );
  const details = await res.json();

  const paths = details?.data?.map((detail) => ({
    params: { detailId: detail.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://travel-gide-server-nazmu957.vercel.app/details/${params.detailId}`
  );
  const data = await res.json();
  //  console.log(data.features)
  return {
    props: {
      detail: data,
    },
  };
};
