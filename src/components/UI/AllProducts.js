import { Card, Col, Image, Row } from "antd";
import Link from "next/link";
import styles from "@/styles/AllProducts.module.css";


const AllProducts = ({ allProducts }) => {
  const products = allProducts.data;
console.log(products)


  const { Meta } = Card;
  return (
    <>
      <h1 className="text-2xl text-center mt-5 lg:py-8 md:pt-5 ">Our Services</h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {products?.map((product) => (
          <Col
            key={product.id}
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={6}
          >
            <Card
              hoverable
              className={styles.card}
              cover={
                <Image
                  src={product?.image_url}
                  layout="responsive"
                  height={300}
                  alt="news image"
                />
              }
            >
              <h3 className="text-base"> {product?.title}</h3>

              <h3>
                <span className="text-red-600">Price:$</span> {product?.price}
              </h3>

              <h3>Rating: {product?.rating}</h3>

              <Link href={`/products/${product?.id}`}>
                <button className="btn btn-info w-full  mt-5">Detail</button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
      
    </>
  );
};

export default AllProducts;
