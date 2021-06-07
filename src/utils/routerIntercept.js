import vue from 'vue';
import store from '../store';
import router from '../router';
// 设置菜单
export const setSideMenu = (to, from, router, next) => {
  console.log(store.state.app.sliderMenus,to,from,router,111)
  next()
  initMenu()

}

// 初始化
const initMenu=()=>{
  const breadcrumbList=getFirstActiveArr([store.state.app.sliderMenus]);
  const keys = breadcrumbList.map(item => item.id);
  // this.setSliderMenusAct(keys[keys.length - 1])
  store.commit('setSliderMenusAct', keys[keys.length - 1]);
  // this.defaultActive=keys[keys.length - 1];
  // this.defaultOpeneds=keys;

}

//获取首次进来的数据列表
const getFirstActiveArr=(arr,concatArr=[])=> {
  for (let i = 0; i < arr.length; i++) {
    let currentArr = concatArr.concat();
    currentArr.push(arr[i]);
    if (arr[i].children && arr[i].children.length > 0) {
      let resultArr = getFirstActiveArr(
        arr[i].children,
        currentArr
      );
      if (resultArr) {
        return resultArr;
      }
    }else{
      return currentArr;
    }
  }
}