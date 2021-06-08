module.exports = {
    state: params => {
        switch(params) {
            case '-1': {
                return '已删除';
            }
            case '1': {
                return '已上架';
            }
            case '3': {
                return '已下架';
            }
        }
    },
    health: params => {
        switch(params) {
            case '0':
            return '离线';
            case '1': 
            return '在线';
        }
    }
}