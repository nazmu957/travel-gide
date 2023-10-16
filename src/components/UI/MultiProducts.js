import { Card, Col, Row } from "antd";

const MultiProducts = ({ moreProducts }) => {
  console.log(moreProducts);
  const { Meta } = Card;
  return (
    <>
      <div className="pb-5">
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            margin: "30px 0px",
          }}
        >
          Related service
        </h1>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {moreProducts?.map((product) => (
            <Col
              key={product.id}
              className="gutter-row"
              xs={24}
              sm={12}
              md={8}
              lg={8}
            >
              <Card
                hoverable
                cover={
                  <img
                    src={product?.image_url}
                    style={{ height: "20rem" }}
                    responsive
                    alt="news image"
                  />
                }
              >
                <h3>Product Name: {product?.name}</h3>
                <h3>Category: {product?.description}</h3>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default MultiProducts;
