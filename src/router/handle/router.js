'use strict';
/**
 * Created by weiChow on 2020/06/30.
 */
import asyncComponent from '@/common/tool/asyncComponent'; // 异步加载
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
      },
      {
        name: 'demo3',
        path: '/handle/demo3',
        component: asyncComponent(() => import('@/container/handle/demo3/demo3'))
      }
    ]
  }
];

export default Router;
