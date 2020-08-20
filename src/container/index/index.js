'use strict';
/**
 * Created by weiChow on 2020/06/30.
 * 首页
 */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import './index.less';
import { getOrgInfoByOrgCode, getApiMock } from '@/services/global';
const Index = () => {
  let [mockHttp] = ['1'];
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    mockHttp = getOrgInfoByOrgCode();
    mockHttp.promise.then(result => {
      console.log(result);
      setTimeout(() => {
        dispatch({
          type: 'global/setSystemReady'
        });
        dispatch({
          type: 'demoModel/setCount'
        });
      }, 2000);
    });
    const apiMock = getApiMock();
    apiMock.promise.then(data => {
      console.log(data);
    });
    return () => {
      mockHttp.cancel();
      console.log('组件卸载');
    };
  }, []);
  const onHEvent = () => {
    history.push('/handle');
  };
  return (
    <main className="index">
      <div className="universe animate__animated animate__fadeIn" />
      <h1 className="animate__animated animate__fadeIn" onClick={() => onHEvent()}>
        欢迎来到方正前端组，你的一言一行都在影响着他人
      </h1>
    </main>
  );
};
export default Index;
