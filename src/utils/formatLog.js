import stringTools from '../tools/stringTools';

export default {
  /**
   * 获取日志结果
   * @param {any} operResult 日志operParam字段
   * @param {string} [field=""] 填写即返回对应字段值（code，desc）
   * @returns
   */
  getResult(operResult, field = "") {
    operResult = operResult.substring(0, operResult.length - 1);
    let temp = operResult.split(",");
    let res = {
      code: temp[0].split("=")[1],
      desc: temp[1].split("=")[1]
    };
    if (field == "code") {
      return res.code;
    } else if (field == "desc") {
      return res.desc;
    } else {
      return res;
    }
  },
  /**
   * 获取日志查询参数
   * @param {any} operParam 日志operParam字段
   * @param {any} field [field=""] 填写即返回对应value
   * @returns
   */
  getParam(operParam, field = "") {
    let res = [];
    operParam = operParam.substring(0, operParam.length - 1);
    let temp = operParam.split("(")[1];
    let tempArr = temp.split(',');
    for (let i = 0; i < tempArr.length; i++) {
      let element = tempArr[i];
      let nodeArr = element.split("=");
      let key = stringTools.trim(nodeArr[0]);
      let value = stringTools.trim(nodeArr[1]);
      if (key == field) {
        return value;
      }
      let node = {
        k: key,
        v: value
      };
      res.push(node);
    }
    if (field != "") {
      return "";
    } else {
      return res;
    }
  }
};
