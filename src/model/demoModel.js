'use strict';
/**
 * Created by weiChow on 2020/07/13
 * global model
 */

export default {
  nameSpace: 'demoModel',

  state: {
    count: 0
  },

  effects: {
    *setCount(action, { put, call }) {
      alert(action.payload);
      yield put({
        type: 'demoModel/getCount',
        payload: {
          count: 1
        }
      });
    }
  },

  reducers: {
    getCount(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
