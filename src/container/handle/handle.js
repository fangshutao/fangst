'use strict';
/**
 * Created by weiChow on 2020/06/30.
 * 首页
 */

import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Layout, Menu } from 'antd';
import './handle.less';
import { MenuList, MenuFootList } from './menuList';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { renderRoutes } from 'react-router-config';
import universe from '@/static/images/universe.png';

const Handle = props => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const backIndex = () => {
    history.push('/');
  };
  const onMenuClick = item => {
    history.push(item.route);
  };
  return (
    <Layout className="layout">
      <Layout.Header className="layoutHeader">
        {/* 头部的logo */}
        <div className="logo">
          <img src={universe} onClick={() => backIndex()} />
          <span className="logoName">测试页面</span>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle
          })}
        </div>
        {/* 头部的按钮和用户 */}
      </Layout.Header>
      {/* 左侧菜单 */}
      <Layout.Sider collapsed={collapsed} collapsedWidth={60}>
        <Menu theme="dark" mode="inline">
          {MenuList.map((item, index) => {
            return (
              <Menu.Item key={index} onClick={() => onMenuClick(item)}>
                {item.icon}
                <span>{item.name}</span>
              </Menu.Item>
            );
          })}
        </Menu>
        <Menu theme="dark" mode="inline" className="menu-foot">
          {MenuFootList.map((item, index) => {
            return (
              <Menu.Item key={index}>
                {item.icon}
                <span>{item.name}</span>
              </Menu.Item>
            );
          })}
        </Menu>
      </Layout.Sider>
      {/* 内容 */}
      <Layout.Content>{renderRoutes(props.route.children)}</Layout.Content>
    </Layout>
  );
};

export default Handle;
