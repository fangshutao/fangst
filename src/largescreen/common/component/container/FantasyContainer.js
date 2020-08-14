/**
 * Created by fangst on 2020/08/13.
 * 通用容器组件类
 */
import { connect } from 'react-redux';
import DisplayFeature from '@/largescreen/common/component/basic/DisplayFeature';
import initRedux from './FantasyContainerRedux';
import Component from './FantasyContainerComponent';

class Index extends DisplayFeature {
  constructor(props) {
    super(props);
    this.redux = initRedux({
      key: props.id,
      initialState: {}
    });
    this.props = props;
  }

  get components() {
    const { className = '', containerType = 'SuspensionContainer', top, bottom, left, right } = this.props;
    return {
      main: connect(state => {
        return {
          className,
          containerType,
          top,
          bottom,
          left,
          right
        };
      })(Component)
    };
  }
}

export default Index;
