/**
 * Created by fangst on 2020/08/13.
 * 通用图片组件类
 */
import { connect } from 'react-redux';
import DisplayFeature from '../basic/DisplayFeature';
import initRedux from './CommonPictureRedux';
import Component from './CommonPictureComponent';

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
    const { className = '', imageUrl } = this.props;
    return {
      main: connect(() => {
        return {
          className,
          imageUrl
        };
      })(Component)
    };
  }
}

export default Index;
