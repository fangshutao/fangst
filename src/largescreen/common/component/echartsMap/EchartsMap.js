/**
 * Created by fangst on 2020/08/13.
 * Echarts地图组件类
 */
import { connect } from 'react-redux';
import DisplayFeature from '../basic/DisplayFeature';
import initRedux from './EchartsMapRedux';
import Component from './EchartsMapComponent';

class Index extends DisplayFeature {
  constructor(props) {
    super(props);
    this.redux = initRedux({
      key: props.id,
      initialState: {
        options: props.options,
        params: props.params || {}
      }
    });
    this.props = props;
  }

  get components() {
    const { nameSpace } = this.redux;
    const {
      service,
      staticParams = {},
      mapGeojson = null,
      autoLoad = true,
      shouldChangeJson = false,
      onClick = null
    } = this.props;
    return {
      main: connect(
        state => {
          return {
            echartsData: state[nameSpace].echartsData || null,
            service,
            options: state[nameSpace].options,
            mapGeojson,
            staticParams,
            params: state[nameSpace].params,
            shouldChangeJson,
            autoLoad,
            onClick
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
