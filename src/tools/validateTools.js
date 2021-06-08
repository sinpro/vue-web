import DateTools from "./dateTools";

/**
 * 判断是否为数字且为4个数字
 * 案例: { validator: ValidateTools.isNum, message: "手机号码必须为纯数字", trigger: "blur" }
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isNumTwo = (rule, value, callback) => {
  if (value != '') {
    let reg = /^[0-9]{4}/;
    if (!reg.test(value)) {
      let errorMsg = rule.message == undefined ? '必须填写数字且为4个' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};

/**
 * 判断是否为数字且为2个数字
 * 案例: { validator: ValidateTools.isNum, message: "手机号码必须为纯数字", trigger: "blur" }
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isNumFour = (rule, value, callback) => {
  if (value != '') {
    let reg = /^[0-9]{2}/;
    if (!reg.test(value)) {
      let errorMsg = rule.message == undefined ? '必须填写数字且为2个' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};

// 判断appId是否为15位

const isNumFiveteen = (rule, value, callback) => {
  if (value != '') {
    let reg = /^\d{15}$/;
    if (!reg.test(value)) {
      let errorMsg = rule.message == undefined ? '必须填写数字且为15个' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};

// 判断第三方Id是否为12位

const  isNumTwelve = (rule, value, callback) => {
  if (value != '') {
    let reg = /^\d{12}$/;
    if (!reg.test(value)) {
      let errorMsg = rule.message == undefined ? '必须填写数字且为12个' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};


/**
 * 判断是否为数字
 * 案例: { validator: ValidateTools.isNum, message: "手机号码必须为纯数字", trigger: "blur" }
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isNum = (rule, value, callback) => {
  if (value != '') {
    let reg = /^[0-9]\d*$/;
    if (!reg.test(value)) {
      let errorMsg = rule.message == undefined ? '必须填写数字' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};

/**
 * 判断是否为Mac地址
 * 案例: { validator: ValidateTools.isMac, message: "Mac必须为纯数字", trigger: "blur" }
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isMac = (rule, value, callback) => {
  if (value != '') {
    let reg = /^[A-F0-9]{2}(-[A-F0-9]{2}){5}$|^[A-F0-9]{2}(:[A-F0-9]{2}){5}$|^[A-F0-9]{12}$|^[A-F0-9]{4}(\.[A-F0-9]{4}){2}$/;
    if (!reg.test(value)) {
      let errorMsg = rule.message == undefined ? 'Mac地址不符合规范' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};

/**
 * 判断是否为数字+字母（不能为纯数字）
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isNumAndLetter = (rule, value, callback) => {
  if (value != '') {
    let reg = /^(?![^A-Za-z]+$)[0-9a-zA-Z—_-]+$/;
    if (!reg.test(value)) {
      let errorMsg = rule.message == undefined ? '只能输入字母、数字、符号‘-’和‘_’，且不能为纯数字和纯字符' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};

/**
 * 判断是否为数字+字母（不能为纯数字）
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isNumAndLetters = (rule, value, callback) => {
  if (value != '') {
    let reg = /^[0-9a-zA-Z]+$/;
    if (!reg.test(value)) {
      let errorMsg = rule.message == undefined ? '只能输入字母、数字' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};

/**
 * 判断身份证
 * 案例: { validator: ValidateTools.isIdCard, message: "身份证无效", trigger: "blur" }
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isIdCard = (rule, value, callback) => {
  if (value != '') {
    // 普通验证
    let reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    let errorMsg = rule.message == undefined ? '身份证号码无效' : rule.message;
    if (!reg.test(value)) {
      callback(new Error(errorMsg));
    }

    // 验证身份证有效性
    let arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子
    let arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2]; // 校验码
    let sum = 0;
    for (var i = 0; i < value.length - 1; i++) {
      // 对前17位数字与权值乘积求和
      sum += parseInt(value.substr(i, 1), 10) * arrExp[i];
    }
    if (arrValid[sum % 11] != value.substr(17, 1).toUpperCase()) {
      callback(new Error(errorMsg));
    }

    // 验证出生时间有效性
    let vYear = value.substr(6, 4) * 1;
    let vMonth = value.substr(10, 2) * 1;
    let vDay = value.substr(12, 2) * 1;
    let maxDays = 0;
    if ("|1|3|5|7|8|10|12|".indexOf("|" + vMonth + "|") > -1) {
      maxDays = 31;
    } else if (vMonth == 2) {
      if (((vYear % 4) == 0 && (vYear % 100) != 0) || (vYear % 400) == 0) {
        maxDays = 29;
      } else {
        maxDays = 28;
      }
    } else {
      maxDays = 30;
    }

    let nowStr = DateTools.date2Str(new Date(), "YYYYMMDD") * 1;
    if (
      (value.substr(6, 8) * 1) <= nowStr &&
      vDay <= maxDays
    ) {
      callback();
    } else {
      callback(new Error(errorMsg));
    }
  }
  callback();
};

/**
 * 必传字段
 * @param {*} label 表单名
 * @param {*} required 是否必填
 * @param {*} trigger 触发方法
 */
const requiredRule = function (label = "", required = true, trigger = "blur") {
  return (
    required ? [{ required: true, message: label + "必须填写", trigger: trigger }] : []
  );
};

/**
 * 判断是否为1开头，用于手机号判断
 * 案例: { validator: ValidateTools.isNum, message: "手机号码必须为纯数字", trigger: "blur" }
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isOneBegin = (rule, value, callback) => {
  if (value != '' && value.substring(0, 1) != '1') {
    let errorMsg = rule.message == undefined ? '必须以1开头' : rule.message;
    callback(new Error(errorMsg));
  }
  callback();
};

/**
 * 用于邮箱判断
 * 案例: { validator: ValidateTools.isEmail, message: "请输入正确邮箱", trigger: "blur" }
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isEmail = (rule, value, callback) => {
  if (value != '') {
    let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!reg.test(value)) {
      let errorMsg = rule.message == undefined ? '请输入正确的邮箱格式' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};

/**
 * 判断是否为手机号
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isPhone = (rule, value, callback) => {
  if (value != '') {
    let reg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
    if (!reg.test(value)) {
      let errorMsg = rule.message == undefined ? '手机号不符合规范' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};

/**
 * 判断是否安全密码
 * 案例: { validator: ValidateTools.isSafePassword, message: "长度为8-16位，包含数字、字母、符号中任意两种", trigger: "blur" }
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isSafePassword = (rule, value, callback) => {
  if (value != '') {
    if (value.length < 8 || value.length > 16) {
      let lenErrorMsg = rule.message == undefined ? '长度为8-16位' : rule.message;
      callback(new Error(lenErrorMsg));
    } else {
      let grade = 0;
      let numTest = /[0-9]/;
      if (numTest.test(value)) {
        grade++;
      }
      let enTest = /[A-Za-z]/;
      if (enTest.test(value)) {
        grade++;
      }
      let signTest = /[^\w]|_/;
      if (signTest.test(value)) {
        grade++;
      }
      if (grade < 2) {
        let errorMsg = rule.message == undefined ? '包含数字、字母、符号中任意两种' : rule.message;
        callback(new Error(errorMsg));
      }
    }
  }
  callback();
};
/**
 * 组织机构代码
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isOrganization = (rule, value, callback) => {
  if (value != '') {
    let reg = /[A-z0-9]{18}/;
    if (!reg.test(value)) {
      let errorMsg = rule.message == undefined ? '统一社会信用代码不符合规范' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};
/**
 * IP验证（域名）
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isIPaddress = (rule, value, callback) => {
  if (value != '') {
    let ipReg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    let hostReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
    if (!ipReg.test(value) && !hostReg.test(value)) {
      let errorMsg = rule.message == undefined ? 'IP地址不符合规范' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};
/**
* IP验证
 * IP验证
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isIP = (rule, value, callback) => {
  if (value != '') {
    let ipReg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    if (!ipReg.test(value)) {
      let errorMsg = rule.message == undefined ? 'IP地址不符合规范' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};

/**
 * IP验证
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isPort = (rule, value, callback) => {
  if (value != '') {
    let portReg = /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
    if (!portReg.test(value)) {
      let errorMsg = rule.message == undefined ? '端口不符合规范' : rule.message;
      callback(new Error(errorMsg));
    }
  }
  callback();
};
/**
 * 手机号码验证组合
 * @param {*} label 表单名
 * @param {*} required 是否必填
 * @param {*} trigger 触发方法
 */
const mobileRules = function (label = "手机号码", required = true, trigger = "blur") {
  return [
    ...requiredRule(label, required, trigger),
    { len: 11, message: label + "长度必须为11位", trigger: trigger },
    { validator: isPhone, message: label + "不符合规范", trigger: trigger }
/*    { validator: isNum, message: label + "必须为纯数字", trigger: trigger },
    { validator: isOneBegin, message: label + "不符合规范", trigger: trigger }*/
  ];
};

/**
 * 电子邮件验证组合
 * @param {*} label 表单名
 * @param {*} required 是否必填
 */
const eMailRules = function (label = "电子邮箱", required = true, trigger = "blur") {
  return [
    ...requiredRule(label, required, trigger),
    { validator: isEmail, message: label + "不符合电子邮件地址规范", trigger: trigger }
  ];
};

/**
 * 身份证验证组合
 * @param {*} label 表单名
 * @param {*} required 是否必填
 */
const idCardRules = function (label = "身份证号码", required = true, trigger = "blur") {
  return [
    ...requiredRule(label, required, trigger),
    { validator: isIdCard, message: label + "不符合规范", trigger: trigger }
  ];
};

/**
 * 密码验证组合
 * @param {*} label 表单名
 * @param {*} required 是否必填
 */
const passwordRules = function (label = "密码", required = true, trigger = "blur") {
  return [
    ...requiredRule(label, required, trigger),
    { validator: isSafePassword, message: label + "长度为8-16位，包含数字、字母、符号中任意两种", trigger: trigger }
  ];
};


const validateNameZh = (rule, value, callback) => {
    if (value === '') {
        return callback(new Error('请输入名称'))
    } else if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value)) {
        return callback(new Error('不能输入特殊字符'))
    } else {
        callback()
    }
}

/**
 * 协议地址IP端口组合验证
 * @param {*} rule 规则
 * @param {*} value 值
 * @param {*} callback 回调
 */
const isNewAddress = (rule, value, callback) => {
  if (value != '') {
      let pattIp=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\:([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/;
      let d1 = value.split('/')[0].replace(':','')
      let d2 = value.split('/')[2]
      if(d1 == 'rpc' || d1 == 'http' || d1 == 'tcp' || d1 == 'https'){
        if(pattIp.test(d2)==false){
          return callback(new Error('不符合规范'))
        }else {
        callback()}
      }else {
        return callback(new Error('不符合规范'))}
  }
  callback();
}

export default {
  
  // 单项校验器
  isNumTwo,
  isNumFour,
  isNum,
  isIdCard,
  isOneBegin,
  isPhone,
  isSafePassword,
  isOrganization,
  isIPaddress,
  isIP,
  isPort,
  isEmail,
  // 验证规则组合
  mobileRules,
  eMailRules,
  idCardRules,
  passwordRules,
  validateNameZh,
  isNumAndLetter,
  isNumAndLetters,
  //验证通信协议地址
  isNewAddress,
  
  //验证Mac地址
  isMac,

  //验证appId
  isNumTwelve,

  //验证第三方Id
  isNumFiveteen
};
