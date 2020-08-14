import React, { useEffect, useState, useCallback } from 'react';
import { Select, DatePicker } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import './index.less';

const prefixClass = 'greednHomeLand_DateAndCity';
const dateFormat = 'YYYY-MM';

const DateAndCity = props => {
  const { className, showTime, service, params, homeLandData } = props;

  const [selectMonthValue, setSelectMonthValue] = useState(moment().day(moment().day() - 60));
  const [selectHomeLandValue, setSelectHomeLandValue] = useState('');
  const [selectMonthDisplay, setSelectMonthDisplay] = useState(false);
  const [selectHomeLandDisplay, setSelectHomeLandDisplay] = useState(false);

  useEffect(() => {
    if (service && _.isFunction(service)) {
      props.getData({
        service,
        params
      });
    }
  }, [params]);

  useEffect(() => {
    if (!_.isEmpty(homeLandData)) {
      setSelectHomeLandValue(homeLandData[0].value);
      props.changeOrg({
        lsjydm: homeLandData[0].value,
        yf: selectMonthValue.format(dateFormat)
      });
    }
  }, [homeLandData]);

  const disabledDate = useCallback(current => {
    return current > moment();
  });

  return (
    <div className={`${prefixClass}_Container ${className}`}>
      {showTime ? (
        <DatePicker
          dropdownClassName={`${prefixClass}_DatePicker`}
          picker="month"
          value={selectMonthValue}
          inputReadOnly
          disabledDate={disabledDate}
          open={selectMonthDisplay}
          onChange={date => {
            setSelectMonthValue(date);
            props.changeOrg({
              lsjydm: selectHomeLandValue,
              yf: date.format(dateFormat)
            });
          }}
          onOpenChange={open => {
            if (!open) {
              setSelectMonthDisplay(open);
            }
          }}
          onClick={() => {
            setSelectMonthDisplay(!selectMonthDisplay);
            if (!selectMonthDisplay) {
              setSelectHomeLandDisplay(false);
            }
          }}
        />
      ) : (
        ''
      )}
      <div className={`${prefixClass}_Separator`}></div>
      <Select
        dropdownClassName={`${prefixClass}_Select`}
        listHeight="30vh"
        options={homeLandData}
        value={selectHomeLandValue}
        open={selectHomeLandDisplay}
        onChange={key => {
          setSelectHomeLandValue(key);
          props.changeOrg({
            lsjydm: key,
            yf: selectMonthValue.format(dateFormat)
          });
        }}
        onDropdownVisibleChange={open => {
          setSelectHomeLandDisplay(open);
          if (open) {
            setSelectMonthDisplay(false);
          }
        }}></Select>
    </div>
  );
};

export default DateAndCity;
