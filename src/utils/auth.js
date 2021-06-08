// import Cookies from 'js-cookie'
const baseKey = 'corpbank-'
export default {
  getToken () {
    return sessionStorage.getItem('isLogin')
  },
  setToken (token) {
    return sessionStorage.setItem('isLogin', true)
  },
  removeToken () {
    return sessionStorage.removeItem('isLogin')
  },
  getiCIFID () {
    return sessionStorage.getItem(baseKey + 'iCIFID')
  },
  setiCIFID (iCIFID) {
    return sessionStorage.setItem(baseKey + 'iCIFID', iCIFID)
  },
  removeiCIFID () {
    return sessionStorage.removeItem(baseKey + 'iCIFID')
  },
  getItem (e) {
    return sessionStorage.getItem(baseKey + e)
  },
  setItem (e, a) {
    return sessionStorage.setItem(baseKey + e, a)
  },
  removeItem (e) {
    return sessionStorage.removeItem(baseKey + e)
  }
}
