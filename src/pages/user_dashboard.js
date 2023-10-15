import React from "react";
import { Layout, Row, Col } from "antd";
import CustomSidebar from "@/components/UI/CustomSidebar";


const { Content } = Layout;

const UserDashboard = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>

        <Layout className="site-layout">
          
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* Dashboard content */}
              <Row gutter={16}>
                <Col xs={24} sm={12} md={8} lg={6}>
                  {/* Your component */}
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  {/* Your component */}
                </Col>
                {/* Add more columns as needed */}
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </>
  );
};

export default UserDashboard;
