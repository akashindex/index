import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import { HomeOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import './Layout.scss';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Bio from '../Bio/Bio';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
              <Link to="/projects">Projects</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/bio">Bio</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/bio" element={<Bio />} />
          </Routes>
        </Content>
        <Footer>Personal Portfolio ©2023 Created by Your Name</Footer>
      </Layout>
    </Router>
  );
};

export default MainLayout;

