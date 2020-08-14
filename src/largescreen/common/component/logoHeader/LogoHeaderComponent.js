import React, { useEffect, useRef } from 'react';
import './index.less';

const Index = props => {
  const {
    className,
    imageUrl,
    imageTextUrl,
    type = 'full',
    service,
    staticParams,
    params,
    headerText,
    autoLoad
  } = props;

  const firstUpdate = useRef(true);

  useEffect(() => {
    let flag = true;
    if (firstUpdate.current && autoLoad) {
      firstUpdate.current = false;
    } else if (firstUpdate.current) {
      firstUpdate.current = false;
      flag = false;
    }
    if (!flag) return;
    if (service) {
      props.getData({
        service,
        params: { ...staticParams, ...params }
      });
    }
  }, [params]);

  return (
    <div
      className={`largeScreen_HeaderLogo_Container ${
        type === 'full' ? '' : 'largeScreen_HeaderLogo_Container_Center'
      } ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}>
      {imageTextUrl ? (
        <div
          className="largeScreen_HeaderLogo_Text"
          style={{
            backgroundImage: `url(${imageTextUrl})`
          }}></div>
      ) : (
        ''
      )}
      {headerText ? <div className="largeScreen_HeaderLogo_HeaderText">{headerText}</div> : ''}
    </div>
  );
};

export default Index;
