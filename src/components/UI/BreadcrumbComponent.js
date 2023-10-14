import React from "react";
import Link from "next/link";
import { Breadcrumb } from "antd";

const BreadcrumbComponent = ({ paths }) => {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {paths.map((path, index) => (
        <Breadcrumb.Item key={index}>
          {path.link ? (
            <Link href={path.link}>{path.label}</Link>
          ) : (
            <span>{path.label}</span>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
