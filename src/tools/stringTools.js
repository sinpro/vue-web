export default {
  /**
   * 去掉空格
   * @param {any} str 需要格式化的字符串
   * @param {boolean} [isGlobal=true] 是否全部格式化，默认是
   * @returns 字符串
   */
  trim(str, isGlobal = true) {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (isGlobal) {
      result = result.replace(/\s/g, "");
    }
    return result;
  },

  /**
   * 去掉特殊字符
   * @param {any} str 
   * @returns 字符串
   */
  delString(str) {
    var result = str;
    result = result.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');
    // 去掉特殊字符
    result = result.replace(/[\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]]/);
    return result;
  }
};
