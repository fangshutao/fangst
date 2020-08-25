'use strict';
/**
 * Created by fangst on 2020/08/12.
 * 大屏Demo入口
 */
import React from 'react';
import { Layout } from 'antd';
import { ComponentBuilder } from '@/common/largescreen/basic';
import layoutConfig from './layoutConfig';

const Index = () => {
  return (
    <Layout.Content key="demo">
      {/* 组件构建器 */}
      <ComponentBuilder
        // 主布局配置
        layoutConfig={layoutConfig}
      />
    </Layout.Content>
  );
};

export default Index;
