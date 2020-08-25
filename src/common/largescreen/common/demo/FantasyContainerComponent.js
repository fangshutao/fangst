import React, { useEffect } from 'react';
import _ from 'lodash';
import './index.less';

const Index = props => {
  const { className, title, service } = props;

  useEffect(() => {
    if (_.isFunction(service)) {
      props.getData({
        service
      });
    }
  }, []);

  return <div className={`largeScreen_FantasyContainer ${className}`}>{title}</div>;
};

export default Index;
