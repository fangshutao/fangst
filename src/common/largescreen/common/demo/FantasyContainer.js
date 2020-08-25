/**
 * Created by fangst on 2020/08/13.
 * 通用容器组件类
 */
import { connect } from 'react-redux';
import { DisplayFeature } from '@/common/largescreen/basic';
import initRedux from './FantasyContainerRedux';
import Component from './FantasyContainerComponent';

class Index extends DisplayFeature {
  constructor(props) {
    super(props);
    this.redux = initRedux({
      key: props.id,
      initialState: {}
    });
    this.props = props;
  }

  get components() {
    const { nameSpace } = this.redux;
    const { className = '', title, service } = this.props;
    return {
      main: connect(
        state => {
          return {
            className,
            title: state[nameSpace].title || title,
            service
          };
        },
        dispatch => {
          return {
            getData: instance => {
              dispatch({
                type: `${nameSpace}/getData`,
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
