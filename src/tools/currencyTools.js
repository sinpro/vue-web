import MathTools from './mathTools';

export default {

  /**
   * 利息计算(金额，周期，年利率)
   * 根据需求，已做四舍五入处理，并保留2位小数
   * @param {number} amount
   * @param {number} period
   * @param {number} annualInterestRate
   * @returns {string}
   */
  interest(amount, period, annualInterestRate) {
    amount = parseFloat(amount);
    period = parseFloat(period);
    annualInterestRate = parseFloat(annualInterestRate);
    let result = amount * period * annualInterestRate / 360 / 100;
    result = MathTools.roundStr(result, 2);
    if (isNaN(result)) {
      return '0.00';
    } else {
      return result;
    }
  },

  /**
   * 添加分隔符（,）
   *
   * @param {number} value
   * @returns {string}
   */
  addDecollator(value) {
    if (isNaN(value)) {
      return "0.00";
    }
    try {
      value = MathTools.repairNum(value);
      let prefix = '';
      // 判断前缀
      if (value.indexOf('+') > -1 || value.indexOf('-') > -1) {
        prefix = value.substring(0, 1);
        value = value.substring(1);
      }
      let integer = '';
      let decimal = '';
      // 判断是否整数
      if (value.indexOf('.') > -1) {
        let temp = value.split('.');
        integer = temp[0];
        decimal = '.' + temp[1];
      } else {
        decimal = '.00';
        integer = value;
      }
      let templength = integer.length;
      if (templength % 3 == 1) {
        integer = '@@' + integer;
      } else if (templength % 3 == 2) {
        integer = '@' + integer;
      } else {
        integer = '' + integer;
      }
      let tempStr = '';
      for (let i = 0; i < integer.length / 3; i++) {
        tempStr += integer.substring(i * 3, i * 3 + 3) + ',';
      }
      tempStr = tempStr.substring(0, tempStr.length - 1);
      tempStr = tempStr.replace(/@src/g, "");

      return prefix + tempStr + decimal;
    } catch (error) {
      return '';
    }
  },

  /**
   * 去掉分隔符（,）
   *
   * @param {string} value
   * @returns {string}
   */
  delDecollator(value) {
    return value.replace(/,/g, "");
  },
  /**
   * 金额大写
   *
   * @param {any} value
   */
  formatChinese(value) {
    if (isNaN(value)) {
      return "--";
    }
    value = MathTools.repairNum(value);
    value = parseFloat(value);
    let fraction = ['角', '分'];
    let digit = [
      '零', '壹', '贰', '叁', '肆',
      '伍', '陆', '柒', '捌', '玖'
    ];
    let unit = [
      ['圆', '万', '亿'],
      ['', '拾', '佰', '仟']
    ];
    let head = value < 0 ? '欠' : '';
    let n = Math.abs(value);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
      s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (let i = 0; i < unit[0].length && n > 0; i++) {
      let p = '';
      for (let j = 0; j < unit[1].length && n > 0; j++) {
        p = digit[n % 10] + unit[1][j] + p;
        n = Math.floor(n / 10);
      }
      s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零圆/, '圆')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零圆整');
  },

  /**
   * 分割数字【主要用于处理UI显示，如整数部分大，小数部分小等样式】
   * value 接受 整数，小数,字符串100,000.00等
   * returnType 参数为枚举 f => 返回整数部分 , e => 返回小数部分 , a =>数组返回整数跟小数['整数','小数']
   * @param {any} value
   * @param {any} returnType
   * @returns {any}
   */
  division(value, returnType) {
    value = value + "";
    let temp = value.split('.');
    if (returnType === 'f') {
      return temp[0];
    }
    temp[1] = temp[1] === undefined ? '00' : temp[1];
    if (returnType === 'e') {
      return temp[1];
    }
    if (returnType === 'a') {
      return temp;
    }
  }
};
