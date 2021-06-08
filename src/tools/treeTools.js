export default {
  params: [],
  parent: '',
  target: '',
  catalogNameAll: '',
  findParent(id, parentList) {
    if (parentList[id] != undefined) {
      if (parentList[id].catalogPaerntId != undefined) {
        let pid = parentList[id].catalogPaerntId
        let name = parentList[id].catalogName
        this.catalogNameAll = name + ((this.catalogNameAll) == '' ? '' : ('/' + this.catalogNameAll))
        return this.findParent(pid, parentList)
      }
    } else {
      let finalCatalogName = this.catalogNameAll
      this.catalogNameAll = ''
      return finalCatalogName
    }
  },
  //左侧菜单栏
  getTree(data, parent, target, root = "1") {
    this.params = data;
    this.parent = parent;
    this.target = target;
    let output = {};

    // 第一层数组
    output.children = [];
    // 先按pid==0创建一维数组
    for (var i = 0; i < this.params.length; i++) {
      // if (this.params[i][this.parent] == 'open' || this.params[i][this.parent] == 'schedule' || this.params[i][this.parent] == 'setting' || this.params[i][this.parent] == '' || this.params[i][this.parent] == 'AAAA') {
      if (this.params[i][this.parent].length == 1){
        output.children.push(this.params[i]);
      }
    }
    // //console.log("第一层数组", output);
    // 第二层数组开始递归
    output = this.childNode(output);
    return output.children;
  },
  //机构管理组织机构
  getTree2(data, parent, target, root = "1") {
    this.params = data;
    this.parent = parent;
    this.target = target;
    let output = {};

    // 第一层数组
    output.children = [];
    // 先按pid==0创建一维数组
    for (var i = 0; i < this.params.length; i++) {
      if (this.params[i][this.parent] == 'open' || this.params[i][this.parent] == 'schedule' || this.params[i][this.parent] == 'setting' || this.params[i][this.parent] == '' || this.params[i][this.parent] == 'BBBB') {
        ////console.log(output)
        output.children.push(this.params[i]);
      }
    }
    // //console.log("第一层数组", output);
    // 第二层数组开始递归
    output = this.childNode(output);
    return output.children;
  },
  childNode(list) {
    // //console.log(list)
    if (list.children != undefined) {
      var len = list.children.length;
      // for循环为广度优先，确保所有数组都能遍历以便
      for (var i = 0; i < len; i++) {
        list.children[i] = this.findEqual(list.children[i]);
        // 递归方法为深度优先，确保可以一直探究到最下层的子节点
        this.childNode(list.children[i]);
      }
    }
    return list;
  },
  findEqual(list) {
    for (var i = 0; i < this.params.length; i++) {
      if (this.params[i][this.parent] == list[this.target]) {
        if (list.children == undefined) {
          list.children = [];
        }
        list.children.push(this.params[i]);
      }
    }
    //console.log(list)
    return list;

  }
};
