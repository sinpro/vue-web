import dateTools from './dateTools';

export default {
// 计算当月天数
  GetMonthLastDay() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var d = new Date(year, month, 0);
    if (date == d) {
      let day = dateTools.date2Str(nextDate, 'YYYY-MM-DD');
      return day;
    } else {
      var lastmonth = date.getMonth();
      var lastd = new Date(year, lastmonth, 0);
      var lastday = dateTools.date2Str(lastd, 'YYYY-MM-DD');
      return lastday;
    }
  },
  // 计算上个月月末日期
  GetDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var d = new Date(year, month, 0);
    return d.getDate();
  },
  // 获取横轴日期  times天数（周7天；月28,29,30,31） begin开始日期
  // getDateList(begin, times){
  getDateList(times) {
    let nowtime = new Date();
    let nowStr = nowtime.getTime();
    let Arr = [];
    for (let i = 0; i < times; i++) {
      let nextStr = nowStr - (24 * 3600 * 1000) * i;
      let nextDate = new Date(nextStr);
      let res = dateTools.date2Str(nextDate, 'YYYY-MM-DD');
      Arr.push(res);
    }
    return Arr;
    // ['2017-01-01','2017-01-02','2017-01-03']
  },
  // 获取横轴日期  times天数（周7天；月28,29,30,31） begin开始日期
  DateList(times) {
    let nowtime = new Date();
    let nowStr = nowtime.getTime();
    let Arr = [];
    for (let i = 0; i < times; i++) {
      let nextStr = nowStr - (24 * 3600 * 1000) * i;
      let nextDate = new Date(nextStr);
      let res = dateTools.date2Str(nextDate, 'YYYYMMDD');
      Arr.push(res);
    }
    return Arr;
    // ['20170101','20170102','20170103']
  },
  // [1,2,3,4,5,6]
  // res结果集 ， 某个日期 2017-01-01， 标签字段名schedule,targetTag要获取的字段名
  getResVal(res, tag, tagName, targetTag) {
    for (let key in res) {
      let element = res[key];
      // {xx: '2017-01-01'.yy: 123}
      if (element[tagName] == tag) {
        return element[targetTag];
      }
    }
  },
  // 获取不同日期，不同策略名，对应的交易量数据 参考上方方法
  getPolicyNumber(res, tag1, tag2, tagName1, tagName2, targetTag) {
    for (let key in res) {
      let element = res[key];
      if ((element[tagName1] == tag1) && (element[tagName2] == tag2)) {
        return element[targetTag];
      }
    }
  },
  // 对象数组排序算法 A[{name:'XX',value:xx}]冒泡排序
  sortObjextArr(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
        if (arr[j].value < arr[j + 1].value) {        // 相邻元素两两对比
          var temp = arr[j + 1];        // 元素交换
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  },
  // 策略名 格式 数组去重
  unique(array) {
    var r = [];
    for (var i = 0, l = array.length; i < l; i++) {
      for (var j = i + 1; j < l; j++) {
        if (array[i].policyName == array[j].policyName)          { j = ++i; }
      }
      if (array[i].policyName != undefined) {
        r.push(array[i].policyName);
      }
    }
    return r;
  },
  // 更新地图省份对应的的总数值 name基础表省份名；data求得带重复省份名的数据表
  getVolofArea(name, data) {
    let value = 0;
    for (const item of data) {
      if (item.areaName == name) {
        value += item.num;
      }
    }
    return value;
  },
  // 地图 省-值 类型 去重,array需要去重的数组，根据object元素去重
  areaUnique(array, areaName, num) {
    var r = [];
    /* for(var i = 0, l = array.length; i < l; i++) {
     let value = array[i][num]
     for(var j = i + 1; j < l; j++) {
     if (array[i][object] == array[j][object]) {
     j = ++i;
     value = value + array[j][num]
     array[i][num] = value
     }

     }
     if(array[i][object]!=undefined){
     r.push(array[i]);
     }
     } */

    for (var i = 0; i < array.length; i++) {
      let value = array[i][num];
      let key = array[i][areaName];
      for (var j = i + 1; j < array.length; j++) {
        if (array[i][areaName] == array[j][areaName]) {
          value = value + array[j][num];
        }
      }
      // 新增统计好的地区交易量
      if (array[i][areaName] != undefined) {
        var isExist = false;// 是否已经存在队列，true：已经存在；false：不存在
        if (r.length > 0) {
          for (var n = 0; n < r.length; n++) {
            if (r[n][areaName] == key) {
              isExist = true;
              break;
            }
          }
        }
        // 如果队列已经统计过了，就不再统计
        if (!isExist) {
          let node = {areaName: array[i][areaName], num: value};
          r.push(node);
        }
      }
    }

    return r;
  },
  // 比较获取到 对象数组的最大值
  maxValue(arraya, value) {
    let max = 0;
    for (let i = 0, l = arraya.length; i < l; i++) {
      if (arraya[i][value][2] > max) {
        max = arraya[i][value][2];
      }
    }
    return max;
  }
};
