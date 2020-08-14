/**
 * 数据格式化类
 */
import _ from 'lodash';

// 柱状图demo分布颜色
const gcjyjmsfbColors = [
  'rgba(53, 208, 233, 1)',
  'rgba(12, 63, 253, 1)',
  'rgba(183, 80, 249, 1)',
  'rgba(249, 11, 253, 1)',
  'rgba(30, 209, 131, 1)',
  'rgba(255, 255, 120, 1)'
];
// 柱状图demo补齐颜色
const gcjyjmsfbOtherColors = [
  'rgba(53, 208, 233, 0.15)',
  'rgba(12, 63, 253, 0.15)',
  'rgba(183, 80, 249, 0.15)',
  'rgba(249, 11, 253, 0.15)',
  'rgba(30, 209, 131, 0.15)',
  'rgba(255, 255, 120, 0.15)'
];

const formatDemo1Data = data => {
  return {
    mkmc: 'echarts地图demo',
    mkdm: 'demo1',
    data: [
      {
        yf: `2020-${data.yf}`,
        zbmc: '513401',
        zbsj1: data.lsjydm * 11,
        zbsj2: `${data.lsjydm * 10}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513435',
        zbsj1: data.lsjydm * 12,
        zbsj2: `${data.lsjydm * 11}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513424',
        zbsj1: data.lsjydm * 13,
        zbsj2: `${data.lsjydm * 12}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513425',
        zbsj1: data.lsjydm * 14,
        zbsj2: `${data.lsjydm * 13}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513426',
        zbsj1: data.lsjydm * 15,
        zbsj2: `${data.lsjydm * 14}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513431',
        zbsj1: data.lsjydm * 16,
        zbsj2: `${data.lsjydm * 15}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513434',
        zbsj1: data.lsjydm * 17,
        zbsj2: `${data.lsjydm * 16}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513428',
        zbsj1: data.lsjydm * 18,
        zbsj2: `${data.lsjydm * 17}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513427',
        zbsj1: data.lsjydm * 19,
        zbsj2: `${data.lsjydm * 18}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513436',
        zbsj1: data.lsjydm * 20,
        zbsj2: `${data.lsjydm * 19}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513429',
        zbsj1: data.lsjydm * 21,
        zbsj2: `${data.lsjydm * 20}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513430',
        zbsj1: data.lsjydm * 22,
        zbsj2: `${data.lsjydm * 21}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513432',
        zbsj1: data.lsjydm * 23,
        zbsj2: `${data.lsjydm * 22}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513433',
        zbsj1: data.lsjydm * 24,
        zbsj2: `${data.lsjydm * 23}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513437',
        zbsj1: data.lsjydm * 25,
        zbsj2: `${data.lsjydm * 24}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: `2020-${data.yf}`,
        zbmc: '513423',
        zbsj1: data.lsjydm * 26,
        zbsj2: `${data.lsjydm * 25}%`,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      }
    ]
  };
};

const formatDemo2Data = data => {
  return {
    mkmc: '头部统计',
    mkdm: 'demo4',
    data: [
      {
        yf: '2020-05',
        zbmc: '此标题',
        zbsj1: 10000 * data.lsjydm,
        zbsj2: null,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: '2020-05',
        zbmc: '也是',
        zbsj1: 780 * data.lsjydm,
        zbsj2: null,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: '2020-05',
        zbmc: '通过',
        zbsj1: 560 * data.lsjydm,
        zbsj2: null,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: '2020-05',
        zbmc: '返回',
        zbsj1: 670 * data.lsjydm,
        zbsj2: null,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: '2020-05',
        zbmc: '数据',
        zbsj1: 100 * data.lsjydm,
        zbsj2: null,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      },
      {
        yf: '2020-05',
        zbmc: '自动配置',
        zbsj1: 350 * data.lsjydm,
        zbsj2: null,
        zbsj3: null,
        zbsj4: null,
        zbsj5: null
      }
    ]
  };
};

const formatDemo3Data = data => {
  const res = {
    succ: true,
    code: 200,
    msg: '成功',
    data: [
      {
        mkmc: '图表组件',
        mkdm: 'demo3',
        data: [
          {
            yf: '2020-05',
            zbmc: '第一个',
            zbsj1: 369 * data.lsjydm,
            zbsj2: null,
            zbsj3: null,
            zbsj4: null,
            zbsj5: null
          },
          {
            yf: '2020-05',
            zbmc: '第二个',
            zbsj1: 551 * data.lsjydm,
            zbsj2: null,
            zbsj3: null,
            zbsj4: null,
            zbsj5: null
          },
          {
            yf: '2020-05',
            zbmc: '第三个',
            zbsj1: 2312 * data.lsjydm,
            zbsj2: null,
            zbsj3: null,
            zbsj4: null,
            zbsj5: null
          },
          {
            yf: '2020-05',
            zbmc: '第四个',
            zbsj1: 518 * data.lsjydm,
            zbsj2: null,
            zbsj3: null,
            zbsj4: null,
            zbsj5: null
          },
          {
            yf: '2020-05',
            zbmc: '第五个',
            zbsj1: 1181 * data.lsjydm,
            zbsj2: null,
            zbsj3: null,
            zbsj4: null,
            zbsj5: null
          },
          {
            yf: '2020-05',
            zbmc: '其他',
            zbsj1: 442 * data.lsjydm,
            zbsj2: null,
            zbsj3: null,
            zbsj4: null,
            zbsj5: null
          }
        ]
      }
    ],
    state: '1'
  };
  return formatLineData(res);
};

const formatLineData = res => {
  const data = res.data[0] && res.data[0].data;
  const result = [
    {
      name: '补齐',
      stack: 'sj',
      data: []
    },
    {
      name: '实际',
      stack: 'sj',
      data: []
    }
  ];
  const categories = [];
  let total = 0;
  _.each(data, ({ zbsj1 }) => {
    total += Number(zbsj1);
  });
  _.each(data, ({ zbmc, zbsj1 }, index) => {
    categories.push(zbmc);
    result[1].data.push({
      y: Number(zbsj1),
      color: gcjyjmsfbColors[index]
    });
    result[0].data.push({
      y: total - Number(zbsj1),
      color: gcjyjmsfbOtherColors[index]
    });
  });
  return {
    data: {
      categories,
      data: result
    }
  };
};

export { formatDemo1Data, formatDemo2Data, formatDemo3Data };
