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
      },
      {
        name: 'demo4',
        path: '/handle/demo4',
        component: asyncComponent(() => import('@/container/handle/demo4/demo4'))
      }
    ]
  },
  {
    name: 'demo5',
    path: '/demo5',
    component: asyncComponent(() => import('@/container/handle/demo5/demo5'))
  },
  {
    name: 'demo6',
    path: '/demo6',
    component: asyncComponent(() => import('@/container/handle/demo6/demo6'))
  }
];

export default Router;
