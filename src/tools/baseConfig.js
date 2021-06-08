// dev 项目配置
const DEV_PROJECT = {
    PRO_PROJECT:'/open-inmanage'
}
// 生产环境配置
const PRO_PROJECT = {
    PRO_PROJECT:'/open-inmanage'
}
const PRO_WS_URL = 'ws://47.106.163.51:10101'
const DEV_WS_URL = 'ws://192.168.0.60:10101'
export default{
    BASE_PROJECT:process.env.NODE_ENV === 'development' ? DEV_PROJECT : PRO_PROJECT,
    WS_URL:process.env.NODE_ENV=== 'development' ? PRO_WS_URL : PRO_WS_URL
}

