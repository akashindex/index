import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import { HomeOutlined, AppstoreOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';
import './Layout.scss';
import Home from '../../Pages/Home/Home';
import Projects from '../../Pages/Projects/Projects';
import Bio from '../../Pages/Bio/Bio';
import Sider from 'antd/es/layout/Sider';
import Blogs from '../../Pages/Blogs/Blogs';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Router>
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
          <Menu theme="dark" mode="verticle" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
              <Link to="/projects">Projects</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/bio">Bio</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BookOutlined />}>
              <Link to="/blogs">Blogs</Link>
            </Menu.Item>
          </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: 'white',
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Yuxuan Liu
        </Footer>
      </Layout>
    </Layout>
      {/* <Layout className="layout">
        
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
      </Layout> */}
    </Router>
  );
};

export default MainLayout;

