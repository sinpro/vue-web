const Mock = require('mockjs');
const { createReturnData } = require('../uilts');
module.exports = [
  /**
   * [描述] 【xxx】登录接口
   * */
  {
    url: '/application/loginApi',
    type: 'post',
    response: function (config) {
      return createReturnData(
        Mock.mock({
          token: 'xxxxxxxxx', // token
          userInof: {}
        })
      );
    }
  }
]