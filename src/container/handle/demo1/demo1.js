import React, { useEffect } from 'react';
import { getApiMock } from '@/services/global';
let mockHttp = '';
const Demo1 = () => {
  useEffect(() => {
    mockHttp = getApiMock().then(data => {
      console.log(data);
    });
    return () => {
      console.log('组件卸载');
      mockHttp.cancel();
    };
  }, []);
  return <section>demo1</section>;
};
export default Demo1;
