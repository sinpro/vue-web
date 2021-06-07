import Mock from 'mockjs';
import common from './common'; // 公共mock数据
import home from './home'; // 首页
import accountManagement from './accountManagement'; // 账户管理
import paymentSettlement from './paymentSettlement'; // 转账汇款
import issueAndReceive from './issueAndReceive'; // 代发代收
import investmentFinancing from './investmentFinancing'; // 投资理财
import billBusiness from './billBusiness'; // 票据业务
import internationalBusiness from './internationalBusiness'; // 国际业务
import groupBusiness from './groupBusiness'; // 集团业务
import financingLoan from './financingLoan'; // 融资贷款
import characteristicService from './characteristicService'; // 特色服务
import cashManagement from './cashManagement'; // 现金管理
import moreFeatures from './moreFeatures'; // 更多功能
const mocks=[
  ...common,
  ...home, // 首页
  ...accountManagement, // 账户管理
  ...paymentSettlement, //转账汇款
  ...issueAndReceive, // 代发代收
  ...investmentFinancing, //投资理财
  ...billBusiness, // 票据业务
  ...internationalBusiness, //国际业务
  ...groupBusiness, // 集团业务
  ...financingLoan, //融资贷款
  ...characteristicService, // 特色服务
  ...cashManagement, //现金管理
  ...moreFeatures, // 更多功能
]
export function mockXHR(){
    Mock.XHR.prototype.proxy_send=Mock.XHR.prototype.send;
    Mock.XHR.prototype.send=function(){
        if(this.custom.xhr){
            this.custom.xhr.withCredentials=this.withCredentials||false;
            if(this.responseType){
                this.custom.xhr.responseType=this.responseType
            }
        }
        this.proxy_send(...arguments)
    }
    function XHR2ExpressReqWrap(respond){
        return function(options){
            let result=null;
            if(respond instanceof Function){
                const { body, type, url}=options;
                result=respond({
                    method:type,
                    body: typeof body ==='string'?JSON.parse(body):body
                })
            }else{
                result=respond
            }
            return Mock.mock(result)
        }
    }
    for (const i of mocks) {
        Mock.mock(i.url,i.type||'get',XHR2ExpressReqWrap(i.response))
    }
}
  
export default mocks;