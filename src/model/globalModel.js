'use strict'
/**
 * Created by weiChow on 2020/07/13
 * global model
 */

export default {
  nameSpace: 'global',

  state: {
    systemReady: false, // 系统初始化完毕
    systemReady1: 1
  },

  effects: {
    *setSystemReady({ put, call }) {
      yield call(
        () =>
          new Promise(resolve => {
            window.setTimeout(() => {
              resolve('1234')
            }, 3000)
          })
      )
      yield put({
        type: 'global/save',
        payload: {
          systemReady: true
        }
      })
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    },
    save1(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
