'use strict'
/**
 * Created by weiChow on 2020/07/28
 * mock
 */
const Mock = require('mockjs')

Mock.setup({
  timeout: 2000
})
const data = Mock.mock({
  'data|3': [
    {
      'id|+1': 0,
      goodsName: '@ctitle(3, 5)',
      'goodsPrice|+1': 100,
      address: '@county(true)',
      tel: /^1(3|5|7|8|9)\d{9}$/,
      goodsImg: "@image('200x100', '#894FC4', '#FFF', 'alley')",
      date: '@date("yyyy-MM-dd M:dd:d")', // 时间
      email: '@email()' // 邮箱
    }
  ]
})
Mock.mock('/api/global', 'get', config => {
  return data
})
