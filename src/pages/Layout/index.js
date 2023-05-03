import React from "react";
import styles from "./index.module.scss";
import { Breadcrumb, Layout, Menu } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  LoginOutlined,
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
} from "@ant-design/icons";
const { Header, Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const LayoutCompontent = () => {
  return (
    <div className={styles.layout}>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <div className="profile">
            <span>用户名</span>
            <span>
              <LoginOutlined /> 退出
            </span>
          </div>
        </Header>
        <Layout>
          <Sider
            width={200}
            style={
              {
                // background: colorBgContainer,
              }
            }
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              theme="dark"
            >
              <Menu.Item key="1" icon={<HomeOutlined></HomeOutlined>}>
                数据概览
              </Menu.Item>
              <Menu.Item key="2" icon={<DiffOutlined />}>
                内容管理
              </Menu.Item>
              <Menu.Item key="3" icon={<EditOutlined />}>
                发布文章
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            style={{
              padding: "24px",
            }}
          >
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                // background: colorBgContainer,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutCompontent;
