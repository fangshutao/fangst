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
    component: asyncComponent(() => import('@/container/handle/handle')),
    children: [
      {
        name: 'demo1',
        path: '/handle/demo1',
        component: asyncComponent(() => import('@/container/handle/demo1/demo1'))
      },
      {
        name: 'demo2',
        path: '/handle/demo2',
        component: asyncComponent(() => import('@/container/handle/demo2/demo2'))
      }
    ]
  }
]

export default Router
