import React from "react";
import styles from "./index.module.scss";
import { Layout, Menu, Popconfirm, message } from "antd";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import AuthRoute from "../../components/AuthRoute";
import {
  LoginOutlined,
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Home from "pages/Home";
import ArticleList from "pages/ArticleList";
import ArticlePublish from "pages/ArticlePublish";
import { useNavigate } from "react-router-dom";
import { removeToken } from "utils/storage";

const { Header, Content, Sider } = Layout;

const LayoutCompontent = () => {
  const navigate = useNavigate();

  //确定事件
  const onConfirm = () => {
    // localStorage.removeItem("token");
    removeToken();
    navigate("/login");
    message.success("退出成功");
  };
  return (
    <div className={styles.layout}>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <div className="profile">
            <span>用户名</span>
            <span>
              <Popconfirm
                description="你确定退出吗?"
                okText="确定"
                cancelText="退出"
                onConfirm={onConfirm}
              >
                <LoginOutlined /> 退出
              </Popconfirm>
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
                <Link to="/">数据概览</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DiffOutlined></DiffOutlined>}>
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
                <Route exact path="/*" element={<Home />} />
                <Route path="/home/list" element={<ArticleList />} />
                <Route path="/home/pubish" element={<ArticlePublish />} />
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
