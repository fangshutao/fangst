/**
 * Created by fangst on 2020/4/27.
 * 大屏组件类基类
 */
import _ from 'lodash';
import mergeUtil from '@/common/store/mergeUtil';

class DisplayFeature {
  constructor(props) {
    this.redux = {};
    this.props = props;
    this.initOperations();
  }

  get nameSpace() {
    return this.redux.nameSpace;
  }

  get reducers() {
    return this.redux.reducers;
  }

  get effects() {
    return this.redux.effects;
  }

  get components() {
    return this.redux.components;
  }

  getAction(action) {
    return this.reducers[action] || this.effects[action];
  }

  /**
   * 注册监听
   */
  observeStore(store, select, onChange) {
    let currentState;
    function handleChange() {
      const nextState = select(store.getState());
      if (nextState !== currentState) {
        const prevState = currentState;
        currentState = nextState;
        onChange(currentState, prevState);
      }
    }
    const unsubscribe = store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
  }

  /**
   * 初始化互操作
   */
  initOperations() {
    const { store, operations } = this.props;
    _.each(operations, op => {
      const { select, mapStateToActions } = op;
      this.observeStore(
        store,
        state => {
          return select(state, this.redux.nameSpace);
        },
        (curState, prevState) => {
          const actions = mapStateToActions(curState, prevState);
          _.each(actions, item => {
            const { target, action, params } = item;
            const instance = mergeUtil.getInstance(target);
            if (!instance) {
              return;
            }
            const actionFn = instance.getAction(action);
            if (actionFn) {
              store.dispatch({
                type: `${instance.redux.nameSpace}/${action}`,
                payload: { ...params }
              });
              // actionFn(...params));
            }
          });
        }
      );
    });
  }
}

export default DisplayFeature;
