/**
 * Created by fangst on 2020/04/24.
 * 自动生成合并组件redux工具类
 */
class MergeUtil {
  constructor() {
    this.instanceCache = {};
  }

  /**
   * 添加组件实例化缓存
   */
  addInstanceCache = (ins, id) => {
    this.instanceCache[id] = ins;
  };

  /**
   * 获取实例
   */
  getInstance = id => {
    return this.instanceCache[id];
  };
}

export default new MergeUtil();
