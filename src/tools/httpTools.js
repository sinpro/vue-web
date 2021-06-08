import axios from 'axios';
import qs from 'qs';
import Cookies from "js-cookie";
import ObjectTools from './objectTools';
import baseConfig from './baseConfig'
import storageTools from "./storageTools";
export default {
  /**
   * 网络请求
   * @param {any} vm this
   * @param {any} method 请求方式 get,post,delete,put,patch
   * @param {any} url 接口地址
   * @param {any} [params={}] 接口参数
   * @param {any} config 其他配置
   * @param {any} target 目标前置，请不要更改此地方，需要开发更改代理目标时，请更改上面baseConfig
   * @param {any} bizConfig 业务配置 DoNotHandleErr【业务抛错，会回调】  DoNotHandleTimeOut【网络请求超时，会回调】
   * @returns Promise
   */
  request(vm, method, url, params = {}, target = baseConfig.BASE_PROJECT.PRO_PROJECT/** 请不要更改此处，要更改内容，更改baseConfig即可 */,name='nu') {  // 默认为服务器的代理接口 target = '/open-inmanage'
  let data
    if (name=='nu') {
      var newParams = {};
    for (let key in params) {
      newParams[key] = params[key];
    }
    data = qs.stringify(newParams);
    } else{
      data = params
    }
    console.warn('***********')
    console.warn(newParams)
    const date = new Date();
    const channelDate = date.getFullYear() + (date.getMonth() + 1) + date.getDate();
    const channelTime = date.getHours() + date.getMinutes() + date.getSeconds();
    const transId = `AT${Date.now()}`;
    const type = newParams.type == undefined ? 'K' : newParams.type;
    const iCIFID = storageTools.get("iCIFID") == '' ? newParams.iCIFID: storageTools.get("iCIFID") ;
    const eCIFID = storageTools.get("eCIFID") == '' ? newParams.eCIFID:  storageTools.get("eCIFID");
    let headers = {
      type: type,
      encry: '0',
      channel: 'AT',
      transId: transId,
      channelFlow: transId,
      transCode: url.replace(/(.*\/)*([^.]+).*/ig, '$2'),
      channelDate: channelDate,
      channelTime: channelTime,
      iCIFID: iCIFID,
      eCIFID: eCIFID,
      'Accept': 'application/json',
      'Content-Type': name=='nu' ? 'application/x-www-form-urlencoded;charset=utf-8' : 'mutipart/form-data;charset=utf-8'
    }
    let axiosConfig = {
      method: method,
      // 开发环境
      url: target + url,
      // 生产环境
      // url: '/open-inmanage' + url,
      data: data,
      headers
    };
    console.log(axiosConfig.url,'url')
    return new Promise(function (resolve, reject) {
      axios.request(axiosConfig).then(function (response) {
        let res = response.data.body;
        console.log(response)
        console.log(typeof(response.data))
        if (response.data.code == "BLEC0001") {
          storageTools.set('login_status', "logout");
          vm.$confirm('1',{
            title: "提醒",
            message: "由于您长时间未操作，已自动退出，请重新登录！",
            type: 'warning'
          }).then(() => {
            vm.$router.push({ path: "/login" });
          }).catch(() => {
          
          });

        } else if (response.data.body.errorCode == 'BLEC0001') {
          storageTools.set('login_status', "logout");
          vm.$confirm('1',{
            title: "提醒",
            message: "尊敬的用户，检测到您的账号长时间无操作，或在其他浏览器上登录，请您重新登录。",
            type: 'warning'
          }).then(() => {
            vm.$router.push({ path: "/login" });
          }).catch(() => {
          
          });
        } else if (response.data.body.errorCode == '0') {
          resolve(response);
        } else {
          resolve(response);
          // vm.$message.error({
          //   message: response.data.body.errorMsg
          // });
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  /**
   * 沙箱测试
   */
  testRequest(vm, method, url, params = {}, config) {
    let axiosConfig = ObjectTools.copy(config);
    axiosConfig.method = method;
    axiosConfig.url = url;
    axiosConfig.data = params;
    axiosConfig.headers.type = 'J';
    return new Promise(function (resolve, reject) {
      axios.request(axiosConfig).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },

  /**
   * 文件上传
   * @param {any} vm this
   * @param {any} url 接口地址
   * @param {any} params formData
   * @param {any} config 其他配置
   * @param {boolean} bizConfig 业务配置 DoNotHandleErr【业务抛错，会回调】  DoNotHandleTimeOut【网络请求超时，会回调】
   * @returns Promise
   */
  upload(vm, url, params, config, bizConfig = { DoNotHandleErr: false, DoNotHandleTimeOut: false }) {
    let axiosConfig = ObjectTools.copy(config);
    if (axiosConfig.headers == null || axiosConfig.headers == undefined) {
      axiosConfig.headers = {};
      axiosConfig.headers.type = "J";
      axiosConfig.headers["Content-Type"] = "application/json;charset=utf-8";
    }
    let date = new Date();
    axiosConfig.headers.channelDate = date.getFullYear() + (date.getMonth() + 1) + date.getDate();
    axiosConfig.headers.channelTime = date.getHours() + date.getMinutes() + date.getSeconds();
    axiosConfig.headers.encry = '0';
    axiosConfig.headers.channel = 'AT';
    axiosConfig.headers.transId = `AT${Date.now()}`;
    axiosConfig.headers.channelFlow = `AT${Date.now()}`;
    axiosConfig.headers.transCode = url.replace(/(.*\/)*([^.]+).*/ig, '$2');
    axiosConfig.headers.iCIFID = storageTools.get("iCIFID") || '';
    axiosConfig.headers.eCIFID = storageTools.get("eCIFID") || '';

    return new Promise(function (resolve, reject) {
      console.log(baseConfig.BASE_PROJECT)
      axios.post(baseConfig.BASE_PROJECT.PRO_PROJECT + url, params, axiosConfig).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
    });
    });
  },
  /**
   *
   * @param {String} filePath 服务器上文件路径
   */
  downImage(filePath){
    console.log(filePath)
    return `${baseConfig.BASE_PROJECT.PRO_PROJECT}/downloadImage.do?type=K&iCIFID=${storageTools.get("iCIFID")||''}&imagePath=${window.btoa(unescape(encodeURIComponent(filePath)))}`
  },
  downImageId(filePath,shopId){
    console.log('111=>' +filePath)
    console.log(shopId,'222')
    console.log('122=>' +`${baseConfig.BASE_PROJECT.PRO_PROJECT}/downloadImage.do?type=K&id=${shopId}&iCIFID=${storageTools.get("iCIFID")||''}&imagePath=${window.btoa(unescape(encodeURIComponent(filePath)))}`)
    return `${baseConfig.BASE_PROJECT.PRO_PROJECT}/downloadImage.do?type=K&id=${shopId}&iCIFID=${storageTools.get("iCIFID")||''}&imagePath=${window.btoa(unescape(encodeURIComponent(filePath)))}`
  }
};

