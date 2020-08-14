/**
 * Created by fangst on 2020/07/17.
 * Demo配置数据
 */
import { FantasyContainer, LogoHeader, CommonPicture, EchartsMap, DateAndCity } from '@/largescreen/common/component';
import { getHeaderTitleData, getBigScreenData, getDateAndCityData } from '@/services/demo5/demo5';
import chartsConfig from './chartsConfig';
import './index.less';

const layoutConfig = [
  {
    name: 'demo-Logo',
    component: LogoHeader,
    props: {
      id: 'demo-logo',
      imageUrl: `${publicPath}/static/images/logo.png`,
      className: 'demo_HeaderLogo_Container',
      service: getHeaderTitleData,
      staticParams: {
        yf: '5',
        lsjydm: '大大大'
      },
      autoLoad: true
    }
  },
  {
    name: 'Demo-图片组件',
    component: FantasyContainer,
    props: {
      id: 'demo-back-container',
      containerType: 'FullContainer',
      child: [
        {
          component: CommonPicture,
          props: {
            id: 'demo-back1',
            imageUrl: `${publicPath}/static/images/demo_bg.jpg`
          }
        }
      ]
    }
  },
  {
    name: 'demo-数据驱动',
    component: FantasyContainer,
    props: {
      id: 'demo-select-container',
      containerType: 'SuspensionContainer',
      top: '0',
      right: '0',
      child: [
        {
          component: DateAndCity,
          props: {
            id: 'demo-dateandcitye',
            service: getDateAndCityData,
            operations: [
              {
                select: (state, key) => {
                  return state[key] ? state[key].searchParams : null;
                },
                mapStateToActions: searchParams => {
                  const actions = [];
                  if (searchParams) {
                    actions.push({
                      target: 'demo-map-echarts',
                      action: 'refresh',
                      params: { params: searchParams }
                    });
                  }
                  return actions;
                }
              }
            ]
          }
        }
      ]
    }
  },
  {
    name: 'demo-Echarts地图',
    component: FantasyContainer,
    props: {
      id: 'demo-echartsmap-container',
      containerType: 'FullContainer',
      child: [
        {
          component: EchartsMap,
          props: {
            id: 'demo-map-echarts',
            options: chartsConfig['demo-map-echarts'],
            mapGeojson: `${publicPath}/static/geojson/513400.json`,
            service: getBigScreenData,
            staticParams: {
              mkdm: 'demo1'
            },
            autoLoad: false
          }
        }
      ]
    }
  }
];
export default layoutConfig;
