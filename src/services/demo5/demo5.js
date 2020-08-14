/**
 * Created by fangst on 2020/07/17.
 * 服务调用集合
 * export service;
 */
import { formatDemo1Data, formatDemo2Data, formatDemo3Data } from './dataFormat';

/***
 * Demo标题
 */
const getHeaderTitleData = data => {
  return {
    code: 200,
    data: `${data.lsjydm}${data.yf}月标题`
  };
};

/***
 * Demo演示数据驱动
 */
const getDateAndCityData = data => {
  return {
    succ: true,
    code: 200,
    msg: '成功',
    data: [
      { itemName: '测试数据1', itemValue: '1' },
      { itemName: '测试数据2', itemValue: '2' },
      { itemName: '测试数据3', itemValue: '3' }
    ]
  };
};

/***
 * Demo大屏统计数据
 */
const getBigScreenData = async data => {
  let result = {};
  switch (data.mkdm) {
    case 'demo1':
      result = formatDemo1Data(data);
      break;
    case 'demo2':
      result = formatDemo2Data(data);
      break;
    case 'demo3':
      result = formatDemo3Data(data);
      break;
    default:
      break;
  }
  return result;
};

export { getHeaderTitleData, getBigScreenData, getDateAndCityData };
