export default {
  /**
   * 修复数字
   * 因Oracle数据库返回数值缺0问题
   * @param {String} value
   * @returns {String}
   */
  repairNum(value) {
    value = value + "";
    if (value.indexOf('.') == 0) {
      return ('0' + value);
    } else {
      return value;
    }
  },
  /**
   * 四舍五入(转换值, 保留位数[默认2])
   * 注意: 1.00会返回1；1.10返回1.1 如作为前端数据展示，可用roundStr
   * @param {number} value 需转换的值
   * @param {number} [saveLength=2]
   * @returns {number}
   */
  round(value, saveLength = 2) {
    value = parseFloat(value);
    saveLength = parseFloat(saveLength);
    let magnification = Math.pow(10, saveLength);
    let temp = value * magnification;
    temp = Math.round(temp);
    return temp / magnification;
  },

  /**
   * 四舍五入，输出字符串格式(转换值, 保留位数[默认2])
   * 注意: 返回结果为字符串，需要数字可用round
   * @param {number} value
   * @param {number} [saveLength=2]
   * @returns {string}
   */
  roundStr(value, saveLength = 2) {
    return this.round(value, saveLength).toFixed(saveLength);
  }
};
