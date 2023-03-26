import React from 'react';
import { Menu } from 'antd';
import "./SideBar.scss"
import Sider from 'antd/es/layout/Sider';

const Sidebar = () => {
  return (

    <Sider className='sidebar'>
      <Menu className='sider-menu' mode="vertical" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <a href="#home">Home</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="#projects">Projects</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="#bio">Bio</a>
        </Menu.Item>
        </Menu>
      </Sider>

  );
};

export default Sidebar;