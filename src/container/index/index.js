'use strict'
/**
 * Created by weiChow on 2020/06/30.
 * @author weiChow
 * 首页
 * export default Index;
 */

import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect, useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import './index.less'
import { getOrgInfoByOrgCode, getApiMock } from '@/services/global'

function Index(props) {
  const { systemReady } = useSelector(state => state.global)
  const { count } = useSelector(state => state.demoModel)
  useEffect(() => {
    getOrgInfoByOrgCode('510100000000').then(result => {
      setTimeout(() => {
        props.dispatch({
          type: 'global/setSystemReady'
        })
        props.dispatch({
          type: 'demoModel/setCount'
        })
      }, 2000)
    })
    getApiMock().then(data => {})
  }, [])
  const onHEvent = () => {
    props.history.push('/handle')
  }
  return (
    <main className="main">
      <div className="universe animate__animated animate__fadeIn" />
      <h1 className="animate__animated animate__fadeIn" onClick={() => onHEvent()}>
        欢迎来到方正前端组，你的一言一行都在影响着他人
      </h1>
      <p>{`${systemReady}`}</p>
      <ChildCom />
      <p>{count}</p>
    </main>
  )
}

const ChildCom = () => {
  const { systemReady1 } = useSelector(state => state.global)
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'global/save1',
        payload: {
          systemReady1: 2
        }
      })
    }, 2000)
  }, [])
  return <p>{systemReady1}</p>
}
Index.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func
}
export default compose(connect(), withRouter)(Index)
