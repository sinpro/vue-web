//关闭页签同时刷新页签
/**
 * 删除页签
 * @param {String} vm 原vue对象
 * @param {String} curPath 现在的页签
 * @param {String} goPath 跳转的页签('last'跳转到历史最近页签)
 */
export default (vm, curPath,goPath) => {
    clearTimeout(vm.routeTimer)
    let tags = vm.$store.state.tagsView.visitedViews
    let hTags = vm.$store.state.tagsView.historyViews
    let curIdx
    let goIdx
    let newGoPath
    if(goPath=='last'){
        tags.forEach((item, idx) => {
            if (item.path == curPath) {
                curIdx = idx
                goIdx = idx-1
                newGoPath = tags[goIdx]
            }
        })
        hTags.forEach((item,idx) => {
            if(item.path == curPath){
                goIdx = idx-1
                newGoPath = hTags[goIdx]
            }
        })
    }else {
        tags.forEach((item, idx) => {
            if (item.path == curPath) {
                curIdx = idx
            }
            if (item.path == goPath) {
                goIdx = idx
                newGoPath = goPath
            }else {
                goIdx = idx-1
                newGoPath = tags[goIdx]
            }
        })

    }
    vm.$store.dispatch("delVisitedViews", tags[curIdx]).then(() => {
        vm.$store.dispatch("delVisitedViews", tags[goIdx]).then(() => {
            //添加定时以免不能刷新
            vm.routeTimer = setTimeout(() => {
               vm.$router.push(newGoPath)
            }, 50);
        });
    });
}