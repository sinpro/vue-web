import ajax from 'utils/ajax';
export default {
  // 【xxx】登录接口
  loginApi: data => {
    return ajax({
      url: '/application/loginApi',
      method: 'post',
      data,
      devPreUrl: '',
      prodPreUrl: '',
      noLoading:true
    });
  },
  // 【xxx】获取菜单
  getMenus: data => {
    return ajax({
      url: '/application/getMenus',
      method: 'post',
      data,
      devPreUrl: '',
      prodPreUrl: '',
      noLoading:true
    });
  },
  // 【xxx】获取随机因子
  getRandomFactor: data => {
    return ajax({
      url: '/application/getRandomFactor',
      method: 'post',
      data,
      devPreUrl: '',
      prodPreUrl: '',
      noLoading:true
    });
  },
}