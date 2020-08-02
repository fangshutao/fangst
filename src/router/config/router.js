/** @format */

'use strict'
/**
 * Created by weiChow on 2020/06/30.
 * @author weiChow
 * 入口路由
 * export default Router;
 */

import asyncComponent from '@/common/tool/asyncComponent' // 异步加载
const Router = [
  {
    name: 'handle',
    path: '/handle',
    component: asyncComponent(() => import('@/container/handle'))
  }
]

export default Router
