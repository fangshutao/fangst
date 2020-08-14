import React from 'react';
import _ from 'lodash';
import './index.less';

const Index = props => {
  const { className, containerType, children = '', top, bottom, left, right } = props;

  const innerStyle = {
    top,
    bottom,
    left,
    right
  };

  return (
    <div
      className={`largeScreen_FantasyContainer_${containerType} ${className}`}
      style={_.omitBy(innerStyle, !_.isEmpty)}>
      {children}
    </div>
  );
};

export default Index;
