import React from "react";
import styles from "./index.module.scss";
import { Layout, Menu } from "antd";
import { Route, Link, Routes } from "react-router-dom";
import {
  LoginOutlined,
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Home from "pages/Home";
import ArticleList from "pages/ArticleList";
import ArticlePublish from "pages/ArticlePublish";
const { Header, Content, Sider } = Layout;

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
                <Link to="/home">数据概览</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DiffOutlined />}>
                <Link to="/home/list">内容管理</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<EditOutlined />}>
                <Link to="/home/pubish"> 发布文章 </Link>
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
              {/* <BrowserRouter> */}
              <Routes>
                <Route path="/home/*" element={<Home />} />
              </Routes>
              <Routes>
                <Route path="/home/list" element={<ArticleList />}></Route>
              </Routes>
              <Routes>
                <Route path="/home/pubish" element={<ArticlePublish />}></Route>
              </Routes>
              {/* </BrowserRouter> */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutCompontent;
