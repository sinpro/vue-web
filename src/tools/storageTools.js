import typeTool from './typeTools';

export default {
  perfix: "Storage-RSK-",

  /**
   * 存储Storage
   * @param {any} key 键
   * @param {any} obj 值
   */
  set(key, obj) {
    if (typeTool.isString(obj) || typeTool.isNumber(obj)) {
      sessionStorage[this.perfix + key] = obj;
    } else {
      sessionStorage[this.perfix + key] = JSON.stringify(obj);
    }
  },
  /**
   * 获取Storage
   * @param {any} key 键
   * @returns {any} 值
   */
  get(key) {
    let value = sessionStorage[this.perfix + key];
    var reg = /(^\{.*\}$)|(^\[.*\]$)/;
    if (reg.test(value)) {
      value = JSON.parse(value);
    }
    return value;
  },
  /**
   * 获取Storage并移除
   * @param {any} key 键
   * @returns {any} 值
   */
  getAndDel(key) {
    let value = this.get(key);
    sessionStorage.removeItem(this.perfix + key);
    return value;
  },
  /**
   * 移除Storage
   * @param {any} key 键
   */
  del(key) {
    sessionStorage.removeItem(this.perfix + key);
  }

};
