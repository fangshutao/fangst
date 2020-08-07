'use strict';
/**
 * Created by weiChow on 2020/06/30
 * 公共配置
 */
const globalVariable = {
  publicPath: JSON.stringify('/'), // 配置多级目录访问地址
  jwtToken: '', // 开发模块下的token传递，模拟登录用到的变量
  simulationUserId: 'wenzhang_cd',
  simulationPwd: '123456',
  simulationHttpUrl: 'http://192.168.1.38:8000/founder-identifywz/v0.1/user/login/dev' // 模拟登录的服务请求地址
};
module.exports = globalVariable;
