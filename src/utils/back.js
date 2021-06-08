export default {
    back(vm,  url, reflag){
        if(url){
            vm.$router.replace({path:url, query:{reflag:reflag}})
        }else{
            vm.$router.go(-1);
        }
    }
}
