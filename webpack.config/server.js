'use strict';
const path = require('path');
const os = require('os');
const open = require('open');
const express = require('express');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const request = require('request');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const portfinder = require('portfinder');
const globalVariable = require('./env/commonEnv'); // 获取公共配置
const app = express();
/**
 * 执行开发模式服务
 */
const enforceService = () => {
  const config = require('./webpack.dev.js');
  const compiler = webpack(config);
  compiler.apply(new WebpackBar()); // 进度条显示
  const publicPathName = JSON.parse(globalVariable.publicPath);
  /**
   * 获取本机IP
   */
  function getIPAddress() {
    const interfaces = os.networkInterfaces();
    for (const devName in interfaces) {
      const iface = interfaces[devName];
      for (let i = 0; i < iface.length; i++) {
        const alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          return alias.address;
        }
      }
    }
  }

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: publicPathName,
      noInfo: true,
      stats: {
        colors: true,
        chunks: false
      } // 统计信息
    })
  );

  app.use(
    webpackHotMiddleware(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000 // 心跳检测(一般为timeout一半)
    })
  );

  app.get('*', (req, res, next) => {
    const filename = path.join(__dirname, '../dist', 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
  /**
   * 设置有效端口并且监听服务
   */
  const setPortListen = async () => {
    portfinder.basePort = 8000;
    const port = await portfinder
      .getPortPromise()
      .then(port => {
        return port;
      })
      .catch(err => {
        console.log(err);
        return 8081;
      });
    app.listen(port, function () {
      const address = [
        `http://localhost:${port}${publicPathName}`,
        `http://${getIPAddress()}:${port}${publicPathName}`
      ];
      console.log('app listening on the following address:');
      console.log('\x1b[96m', `${address[0]}`);
      console.log('\x1b[95m', `${address[1]}`);
      console.log('\x1b[94m', 'The Web browser will open automatically after 5 seconds . . .');
      console.log('Please wait while building . . .');
      open(address[1], { wait: true });
    });
  };
  setPortListen(); // 设置有效端口并且监听服务
};
/**
 * 模拟登录
 */
const mockLogin = () => {
  request(
    {
      url: `${globalVariable.simulationHttpUrl}?userId=${globalVariable.simulationUserId}&pwd=${globalVariable.simulationPwd}`,
      timeout: 4000
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const bodyData = JSON.parse(body);
        if (bodyData.data && bodyData.data) {
          globalVariable.jwtToken = JSON.stringify(bodyData.data);
        }
      }
      enforceService(); // 执行开发模式服务
    }
  );
};
mockLogin(); // 模拟登录
