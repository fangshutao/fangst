'use strict';
/**
 * Created by fangst on 2020/08/12.
 * 大屏Demo入口
 */
import React from 'react';
import { Layout } from 'antd';
import { ComponentBuilder } from '@/largescreen/common/component';
import layoutConfig from './layoutConfig';
import projectConfig from './projectConfig';

const Index = () => {
  return (
    <Layout.Content key="demo">
      {/* 组件构建器 */}
      <ComponentBuilder
        // 主布局配置
        layoutConfig={layoutConfig}
        // 业务细分布局配置
        projectConfig={projectConfig}
      />
    </Layout.Content>
  );
};

export default Index;
