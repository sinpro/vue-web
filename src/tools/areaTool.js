import { pca, pcaa } from 'area-data';

export default {

  /**
   * 通过县级代码获取省市县
   * @param {any} CountryCode 县代码
   * @returns ["省", "市", "县"]
   */
  queryNameByLv3(CountryCode) {
    let resArr = [];
    try {
      let province = CountryCode.substring(0, 2) + "0000";
      let city = CountryCode.substring(0, 4) + "00";
      resArr.push(pca['86'][province]);
      resArr.push(pcaa[province][city]);
      resArr.push(pcaa[city][CountryCode]);

    } catch (error) {
    }
    return resArr.join('');
  }
};
