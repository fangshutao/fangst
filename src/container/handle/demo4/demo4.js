import React from 'react';
import { Button } from 'antd';
import { getTest } from '@/services/global';

const Demo4 = () => {
  /**
   * 模拟登出
   */
  const mockLogout = () => {
    getTest();
  };
  return (
    <Button type="primary" onClick={() => mockLogout()}>
      模拟登出
    </Button>
  );
};
export default Demo4;
