import { ArrowLeftOutlined } from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children, ...props }) => (
  <Layout style={{ minHeight: "100vh" }}>
    <Header style={{ zIndex: 1, width: "100%", paddingInline: 16 }}>
      <ArrowLeftOutlined />
      <Typography.Title level={3}></Typography.Title>
    </Header>
    <Content style={{ padding: "20px" }}>{children}</Content>
    {props.hasFooter && (
      <Footer style={{ textAlign: "center" }}>
        My App ©2025 Created with Ant Design
      </Footer>
    )}
  </Layout>
);

export default AppLayout;
