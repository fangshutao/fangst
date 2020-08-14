'use strict';

import _ from 'lodash';

const nameSpace = 'dateAndCity';

const formatHomeLandData = data => {
  const res = _.map(data, ({ itemName, itemValue }) => {
    return {
      label: itemName,
      value: itemValue
    };
  });
  return res;
};

const generateInitialState = options => {
  return options.initialState || {};
};

const generateEffects = args => {
  return {
    *getData(action, { put, call }) {
      const { service, params } = action.payload;
      const res = yield call(service, params);
      yield put({
        type: `${nameSpace}/${args.key}/setData`,
        payload: {
          homeLandData: formatHomeLandData(res.data)
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
    changeOrg(state, action) {
      const { lsjydm, yf } = action.payload;
      return {
        ...state,
        searchParams: {
          lsjydm,
          yf
        }
      };
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
