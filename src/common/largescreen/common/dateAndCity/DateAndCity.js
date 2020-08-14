/**
 * Created by fangst on 2020/08/13.
 * 绿色家园时间和行政区选择组件类
 */
import { connect } from 'react-redux';
import { DisplayFeature } from '@/common/largescreen/basic';
import initRedux from './DateAndCityRedux';
import Component from './DateAndCityComponent';

class Index extends DisplayFeature {
  constructor(props) {
    super(props);
    this.redux = initRedux({
      key: props.id,
      initialState: { params: props.params || {} }
    });
    this.props = props;
  }

  get components() {
    const { nameSpace } = this.redux;
    const { className = '', service, showTime = true } = this.props;
    return {
      main: connect(
        state => {
          return {
            homeLandData: state[nameSpace].homeLandData || [],
            showTime,
            className,
            service,
            params: state[nameSpace].params
          };
        },
        dispatch => {
          return {
            getData: instance => {
              dispatch({
                type: `${nameSpace}/getData`,
                payload: instance
              });
            },
            changeOrg: instance => {
              dispatch({
                type: `${nameSpace}/changeOrg`,
                payload: instance
              });
            }
          };
        }
      )(Component)
    };
  }
}

export default Index;
