/**
 * Created by fangst on 2020/08/13.
 * Demo配置数据
 */
import { FantasyContainer, Demo } from '@/common/largescreen/common';
import { getHeaderTitleData } from '@/services/demo5/demo5';

const layoutConfig = [
  {
    name: 'Demo-图片组件',
    component: FantasyContainer,
    props: {
      id: 'demo-back-container',
      containerType: 'FullContainer',
      child: [
        {
          component: Demo,
          props: {
            id: 'demo-back1',
            title: '123123123123',
            service: getHeaderTitleData
          }
        }
      ]
    }
  }
];
export default layoutConfig;
