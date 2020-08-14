/**
 * Created by fangst on 2020/08/13.
 * 顶部Logo组件类
 */
import { connect } from 'react-redux';
import { DisplayFeature } from '@/common/largescreen/basic';
import initRedux from './LogoHeaderRedux';
import Component from './LogoHeaderComponent';

class Index extends DisplayFeature {
  constructor(props) {
    super(props);
    this.redux = initRedux({
      key: props.id,
      initialState: {
        params: props.params || {}
      }
    });
    this.props = props;
  }

  get components() {
    const { nameSpace, effects } = this.redux;
    const {
      className = '',
      autoLoad = true,
      imageUrl,
      imageTextUrl,
      type,
      service,
      title = '',
      staticParams = {}
    } = this.props;
    return {
      main: connect(
        state => {
          return {
            className,
            autoLoad,
            imageUrl,
            imageTextUrl,
            type,
            service,
            params: state[nameSpace].params,
            staticParams,
            headerText: state[nameSpace].headerText || title
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
            refresh: instance => dispatch(effects.refresh(instance))
          };
        }
      )(Component)
    };
  }
}

export default Index;
