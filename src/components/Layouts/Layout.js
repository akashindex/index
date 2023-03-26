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
import MainPage from '../../Pages/MainPage/MainPage';
import Sidebar from '../SideBar/SideBar';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Router>
      <Layout hasSider className='layout'>
        <Sidebar/>
      <Layout
        className="site-layout"
      >
        {/* <Header
          style={{
            padding: 0,
            background: 'white',
          }}
        /> */}
        <Content
          style={{
            margin: '24px 16px 0',
            //overflow: 'initial',
          }}
          >
            <MainPage />
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
    </Router>
  );
};

export default MainLayout;

