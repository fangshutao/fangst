/**
 * Created by FanWeiHua on 2020/2/26.
 * 操作模块的菜单
 */
import React from 'react';
import {
  PieChartOutlined,
  AppstoreAddOutlined,
  DatabaseOutlined,
  FilterOutlined,
  ReconciliationOutlined,
  WifiOutlined,
  HomeOutlined,
  UsergroupDeleteOutlined,
  QrcodeOutlined
} from '@ant-design/icons';

export const MenuList = [
  {
    name: '功能1',
    id: 'menu-1',
    icon: <PieChartOutlined />,
    route: '/handle/demo1'
  },
  {
    name: '功能2',
    id: 'menu-2',
    icon: <AppstoreAddOutlined />,
    route: '/handle/demo2'
  },
  {
    name: '功能3',
    id: 'menu-3',
    icon: <DatabaseOutlined />,
    route: '/handle/demo3'
  },
  {
    name: '功能4',
    id: 'menu-4',
    icon: <FilterOutlined />,
    route: '/handle/demo4'
  },
  {
    name: '功能5',
    id: 'menu-5',
    icon: <ReconciliationOutlined />
  },
  {
    name: '功能6',
    id: 'menu-6',
    icon: <WifiOutlined />
  }
];
export const MenuFootList = [
  {
    name: '功能7',
    id: 'menu-7',
    icon: <HomeOutlined />,
    closable: false
  },
  {
    name: '功能8',
    id: 'menu-9',
    icon: <UsergroupDeleteOutlined />
  },
  {
    name: '功能9',
    id: 'menu-8',
    icon: <QrcodeOutlined />
  }
];
