export default {
  getValue(arr, key) {
    try {
      for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element.k == key) {
          return element.v;
        }
      }
      return key;
    } catch (error) {
      return key;
    }
  }
};
