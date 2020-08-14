import React from 'react';
import './index.less';

const Index = props => {
  const { className, imageUrl } = props;

  return (
    <div
      className={`largeScreen_CommonPicture_Container ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}></div>
  );
};

export default Index;
