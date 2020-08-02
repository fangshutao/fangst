'use strict'
/**
 * Created by weiChow on 2020/06/30
 * global service
 */

import { http } from '@/common/http/http'

/**
 * 通过组织机构代码获取组织机构信息
 * @returns {Promise}
 */
export function getOrgInfoByOrgCode(data) {
  return http('http://171.220.244.49:8883/metaData/getOrgInfoByOrgCode', {
    method: 'get',
    data
  })
}

export const getApiMock = () => {
  return http('/api/global', {
    method: 'get'
  })
}
