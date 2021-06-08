export default {
  /* 小写字母 */
  validateLowerCase (str) {
    const reg = /^[a-z]+$/
    return reg.test(str)
  },

  /* 大写字母 */
  validateUpperCase (str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
  },

  /* 大小写字母 */
  validatAlphabets (str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
  },
  /* 手机号码 */
  validatePhone (str) {
    const reg = /^1[3-9]\d{9}$/
    return reg.test(str)
  },
  /* 15/18位数身份证号 */
  validateIDCard (str) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return reg.test(str)
  }
}
