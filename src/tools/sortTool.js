// 整合级联菜单 by Han
export default function(data) {
    let sort = {};
    // 以相同父菜单为组整合
    data.forEach(item => {
        if (!sort[item.menuParentId]) {
            sort[item.menuParentId] = []          
        }
        sort[item.menuParentId].push(item)
    })  
    // 组内按次序排列
    for (let idx in sort) {
        sort[idx].sort((a, b) => a.menuOrder - b.menuOrder)
    }
    // 整合父子菜单关系
    for (let idx in sort) {
        sort[idx].forEach(item => {
            if (sort[item.menuId]) {
                item.children = sort[item.menuId]
            }
        })
    }      
    return sort[""]
}