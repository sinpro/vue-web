/**
 * 删除页签
 * @param {String} vm 原vue对象
 * @param {String} curPath 现在的页签
 * @param {String} goPath 跳转的页签
 */
export default (vm, curPath, goPath) => {
    let tags = vm.$store.state.tagsView.visitedViews
    console.log(tags)
    let curIdx
    tags.forEach((item, idx) => {
        if (item.path == curPath) {
            curIdx = idx
        }
    })
    vm.$store.dispatch("delVisitedViews", tags[curIdx]).then(() => {
        vm.$router.push(goPath)
    });
}
