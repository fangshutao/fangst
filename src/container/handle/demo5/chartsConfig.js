/**
 * Created by fangst on 2020/07/17.
 * Demo图表配置数据
 */

const chartsConfig = {
  'demo-map-echarts': {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'map3D',
        name: 'map3D',
        map: 'echartsmap',
        top: '2%',
        regionHeight: window.innerHeight * 0.01,
        label: {
          show: true,
          textStyle: {
            color: '#01233B',
            fontSize: window.innerHeight * 0.018,
            fontFamily: 'myFont',
            opacity: 1,
            backgroundColor: 'rgba(0,123,11,0)'
          },
          formatter(text) {
            return `${text.name}`;
          }
        },
        itemStyle: {
          color: 'rgba(0,255,255,1)',
          opacity: 1,
          borderWidth: window.innerHeight * 0.0015,
          borderColor: '#fff'
        },
        shading: 'realistic',
        realisticMaterial: {
          detailTexture: `${publicPath}/static/images/map_bg.png`,
          textureTiling: 128
        },
        emphasis: {
          itemStyle: {
            color: 'rgba(2,251,150,1)'
          }
        },
        light: {
          main: {
            color: '#fff',
            intensity: 1,
            shadow: false,
            alpha: 50,
            beta: 10
          },
          ambient: {
            color: '#fff',
            intensity: 0.15
          }
        },
        viewControl: {
          projection: 'perspective',
          rotateSensitivity: 1,
          zoomSensitivity: 1,
          distance: 150,
          minDistance: 100,
          maxDistance: 150,
          alpha: 45,
          beta: 10,
          minAlpha: -360,
          maxAlpha: 360,
          minBeta: -360,
          maxBeta: 360,
          center: [0, 0, 0],
          animation: true,
          animationDurationUpdate: 1000,
          animationEasingUpdate: 'cubicInOut'
        },
        data: []
      }
    ]
  },
  'demo-highcharts': {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 30,
        beta: 0,
        viewDistance: 20
      },
      backgroundColor: 'transparent',
      spacingBottom: 0,
      marginLeft: window.innerHeight * 0.05
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },
    xAxis: {
      field: 'name',
      categories: [],
      gridLineColor: 'rgba(14, 156, 255, 0.15)',
      labels: {
        rotation: 45,
        style: {
          color: 'rgba(7, 139, 185, 1)',
          fontSize: window.innerHeight * 0.015
        }
      }
    },
    yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
        align: 'high',
        text: '单位/人',
        rotation: '0',
        x: window.innerHeight * 0.05,
        y: -window.innerHeight * 0.035,
        style: {
          color: 'rgba(7, 139, 185, 1)',
          fontSize: window.innerHeight * 0.015
        }
      },
      gridLineColor: 'rgba(14, 156, 255, 0.15)',
      labels: {
        formatter() {
          return this.value;
        },
        style: {
          color: 'rgba(7, 139, 185, 1)',
          fontSize: window.innerHeight * 0.015
        }
      }
    },
    tooltip: {
      style: {
        fontSize: window.innerHeight * 0.015
      },
      headerFormat: `<span style="font-size: ${window.innerHeight * 0.015}px">{point.key}</span><br/>`,
      formatter() {
        if (this.point.series.name === '补齐') {
          return `<span>${this.point.category}：${this.point.total - this.point.y}人</span>`;
        } else {
          return `<span>${this.point.category}：${this.point.y}人</span>`;
        }
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        depth: window.innerHeight * 0.03,
        pointWidth: window.innerHeight * 0.03
      }
    },
    series: []
  }
};

export default chartsConfig;
