import React, { PureComponent } from 'react';
import _ from 'lodash';
import echarts from 'echarts';
import 'echarts-gl';
import './index.less';

class Index extends PureComponent {
  constructor(props) {
    super(props);
    this.mapGeojson = null;
    this.myEchartsRef = null;
    this.myEcharts = null;
  }

  componentDidMount = async () => {
    await this.getMapGeojson();
    this.initEcharts();
  };

  componentDidUpdate = async prevProps => {
    const { echartsData, params, service, options, staticParams, shouldChangeJson } = this.props;
    if (prevProps.params !== params) {
      if (shouldChangeJson) {
        let newJson = null;
        if (params.homeNum !== 1) {
          newJson = {
            ...this.mapGeojson,
            features: _.filter(this.mapGeojson.features, item => {
              return `${item.properties.adcode}` === `${params.homeNum.substring(0, 6)}`;
            })
          };
        } else {
          newJson = this.mapGeojson;
        }
        this.myEcharts.clear();
        echarts.registerMap('echartsmap', newJson);
      }
      this.props.getData({
        service,
        params: { ...staticParams, ...params },
        options
      });
    }
    if (!_.isEmpty(echartsData) && prevProps.echartsData !== echartsData) {
      this.waitInit(() => {
        this.myEcharts.setOption(echartsData);
      });
    }
  };

  waitInit = callBack => {
    setTimeout(() => {
      if (!this.myEcharts) {
        this.waitInit(callBack);
      } else {
        callBack();
      }
    }, 500);
  };

  getMapGeojson = async () => {
    const { mapGeojson } = this.props;
    if (mapGeojson) {
      const res = await fetch(mapGeojson, {
        method: 'get'
      }).then(res => res.json());
      this.mapGeojson = res;
    }
    return '';
  };

  initEcharts = async () => {
    const { service, params, staticParams, options, autoLoad, onClick } = this.props;
    if (this.myEchartsRef) {
      this.myEcharts = await echarts.init(this.myEchartsRef);
      echarts.registerMap('echartsmap', this.mapGeojson);
      this.myEcharts.on('click', args => {
        if (onClick) {
          onClick(args);
        }
      });
      if (autoLoad) {
        if (!service && !_.isFunction(service)) {
          const newOptions = _.cloneDeep(options);
          this.myEcharts.setOption(newOptions);
        } else {
          this.props.getData({
            service,
            params: { ...staticParams, ...params },
            options
          });
        }
      }
    }
  };

  render() {
    return <div ref={ref => (this.myEchartsRef = ref)} className="largeScreen_EchartsMap_Container"></div>;
  }
}

export default Index;
