import React from "react";
import PropTypes from "prop-types"; // PropTypes 가져오기
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Layout, Typography } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const AppLayout = ({
  children,
  hasHeader = true,
  hasFooter = false,
  title,
}) => (
  <Layout style={{ minHeight: "100vh", maxWidth: "480px", margin: "0 auto" }}>
    {hasHeader && (
      <Header
        style={{
          zIndex: 1,
          width: "100%",
          paddingInline: 16,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link href="/" passHref>
          <ArrowLeftOutlined
            style={{ fontSize: 18, marginRight: 16, cursor: "pointer" }}
          />
        </Link>
        <Typography.Title level={3} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
      </Header>
    )}
    <Content style={{ padding: "20px" }}>{children}</Content>
    {hasFooter && (
      <Footer style={{ textAlign: "center" }}>
        My App ©2025 Created with Ant Design
      </Footer>
    )}
  </Layout>
);

export const Center = ({ children }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
    }}
  >
    {children}
  </div>
);

// PropTypes 설정
AppLayout.propTypes = {
  children: PropTypes.node.isRequired, // JSX 요소를 자식으로 받을 때
  hasHeader: PropTypes.bool, // Boolean 타입
  hasFooter: PropTypes.bool, // Boolean 타입
  title: PropTypes.string, // 문자열 타입
};

// 기본값 설정
AppLayout.defaultProps = {
  hasHeader: true,
  hasFooter: false,
  title: "",
};

export default AppLayout;
