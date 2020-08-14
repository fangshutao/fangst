'use strict';

import _ from 'lodash';
// import produce from 'immer';

const nameSpace = 'echartsMap';

const cityToCode = {
  513401: '西昌',
  513422: '木里',
  513423: '盐源',
  513424: '德昌',
  513425: '会理',
  513426: '会东',
  513427: '宁南',
  513428: '普格',
  513429: '布拖',
  513430: '金阳',
  513431: '昭觉',
  513432: '喜德',
  513433: '冕宁',
  513434: '越西',
  513435: '甘洛',
  513436: '美姑',
  513437: '雷波'
};

const colorArray = ['rgba(0,255,255,1)', 'rgba(233,255,112,1)', 'rgba(255,151,112,1)'];

const formartEchartsMapData = (data, options) => {
  const newOptions = _.cloneDeep(options);
  _.each(data, ({ zbmc, zbsj1, zbsj2 }) => {
    let colorIndex = 0;
    const zb = Number(zbsj2.replace('%', ''));
    if (zb < 30) {
      colorIndex = 0;
    } else if (zb >= 30 && zb <= 60) {
      colorIndex = 1;
    } else if (zb > 60 && zb <= 100) {
      colorIndex = 2;
    }
    newOptions.series[0].data.push({
      name: cityToCode[zbmc],
      value: zbsj2,
      itemStyle: {
        color: colorArray[colorIndex]
      },
      label: {
        formatter: () => `${cityToCode[zbmc]}\n${zbsj1}人`
      }
    });
  });
  newOptions.tooltip.formatter = params => {
    return `${params.name}<br/>就业率：${params.value || '-'}`;
  };
  return newOptions;
};

const generateInitialState = options => {
  return options.initialState || {};
};

const generateEffects = args => {
  return {
    *getData(action, { put, call }) {
      const { service, params, options } = action.payload;
      const res = yield call(service, params);
      yield put({
        type: `${nameSpace}/${args.key}/setData`,
        payload: {
          echartsData: formartEchartsMapData(res.data, options)
        }
      });
    }
  };
};

const generateReducers = () => {
  return {
    setData(state, action) {
      return { ...state, ...action.payload };
    },
    refresh: (state, action) => {
      return { ...state, ...action.payload };
    }
  };
};

export default options => {
  return {
    nameSpace: `${nameSpace}/${options.key}`,
    state: generateInitialState(options),
    effects: generateEffects(options),
    reducers: generateReducers()
  };
};
