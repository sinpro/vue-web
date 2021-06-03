import ajax from 'src/utils/ajax';
export default {
  // 【xxx】登录接口
  loginApi: data => {
    return ajax({
      url: 'application/loginApi',
      method: 'post',
      data,
      devPreUrl: '',
      prodPreUrl: '',
      noLoading:true
    });
  },
}