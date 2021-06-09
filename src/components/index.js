import TitleBar from './common/titleBar/titleBar'  
import UkDialog from './common/ukDialog/ukDialog'
import Steps from './common/steps/steps'
import MoneyInput from './common/moneyInput/index'
import MessageBox from './common/MessageBox'



export default (Vue)=>{
    Vue.component("TitleBar", TitleBar);
    Vue.component("UkDialog", UkDialog);
    Vue.component("Steps", Steps);
    Vue.component("MoneyInput", MoneyInput);
    Vue.component("MessageBox", MessageBox);
}