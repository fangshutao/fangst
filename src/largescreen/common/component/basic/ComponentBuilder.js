'use strict';
/**
 * Created by fangst on 2020/05/28.
 * 大屏组件构建基础
 */
import React, { Fragment, useCallback } from 'react';
import _ from 'lodash';
import mergeUtil from '@/common/store/mergeUtil';
import { storeRegister } from '@/main';

const store = storeRegister.store;

const ComponentBuilder = props => {
  const { layoutConfig, projectConfig } = props;

  const renderMain = useCallback(() => {
    const component = renderComponents(layoutConfig);
    // 合并新的reducer
    // store.registerDynamicModule();
    storeRegister.registerDynamicModule();
    return component;
  });

  /**
   * 根据配置渲染组件（递归）
   */
  const renderComponents = useCallback(lConfig => {
    const components = _.map(lConfig, item => {
      const { component: ComponentClass, props } = item;
      // 实例化组件类（组件和redux信息）
      const Instance = new ComponentClass({ ...props, store, key: props.id });
      // 获取组件
      const Component = Instance.components.main;
      // 保存实例
      mergeUtil.addInstanceCache(Instance, props.id);
      // 保存reducer信息
      storeRegister.useModel([Instance.redux]);
      const result = (
        <Component key={props.id}>
          {/* 解析子组件 */}
          {_.isString(props.child)
            ? renderComponents(projectConfig[props.child])
            : _.isArray(props.child)
            ? _.every(props.child, c => _.isString(c))
              ? _.map(props.child, c => {
                  return renderComponents(projectConfig[c]);
                })
              : renderComponents(props.child)
            : ''}
        </Component>
      );
      return result;
    });
    return components;
  });

  return <Fragment>{renderMain()}</Fragment>;
};

export default ComponentBuilder;
