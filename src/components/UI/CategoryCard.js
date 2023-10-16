import React from "react";
import Link from "next/link";

const CategoryCard = ({ product }) => {
  console.log(product);

  return (
    <>
      <Link href={`/info/${product?.id}`}>
        <div
          style={{ marginBottom: "2rem", marginTop: "2rem" }}
          className="card lg:card-side bg-base-100 shadow-xl "
        >
          <figure>
            <img
              style={{ width: "50rem", height: "30rem" }}
              src={product.image}
              alt="Products"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Product Name:{product?.name}</h2>
            <p>Category: {product.category}</p>
            <p>price: {product?.price}</p>
            <p>rating: {product?.rating}</p>
            <p>status: {product?.status}</p>
            <div className="card-actions justify-end">
              <Link href={"/pc_builder"}>
                <button className="btn btn-primary">Add To Builder</button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
