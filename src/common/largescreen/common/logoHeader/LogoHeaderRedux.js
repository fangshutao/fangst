'use strict';

const nameSpace = 'logoHeader';

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
          headerText: res.data
        }
      });
    }
  };
};

const generateReducers = () => {
  return {
    setData(state, action) {
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
