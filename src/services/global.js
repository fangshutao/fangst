'use strict';
/**
 * Created by weiChow on 2020/06/30
 * global service
 */

import { http } from '@/common/http/http';
import { proServerName } from '@/config/systemConfig';
/**
 * 通过组织机构代码获取组织机构信息
 * @returns {Promise}
 */
export function getOrgInfoByOrgCode(data) {
  return http('http://171.220.244.49:8883/metaData/getOrgInfoByOrgCode', {
    method: 'get',
    data
  });
}

export const getApiMock = () => {
  return http('/api/global', {
    method: 'get'
  });
};

export const getCurrentUser = () => {
  return http(`${httpUrl}${proServerName}/v0.1/user/user`, {
    method: 'get',
    data: { id: 1 }
  });
};

export const getTest = () => {
  return http(`${httpUrl}${proServerName}/v0.1/user/test`, {
    method: 'get',
    data: { id: 123 }
  });
};
