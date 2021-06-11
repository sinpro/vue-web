<template>
  <div class="bank-header">
    <div class="bank-header-search">
      <div class="div-log flex jst alc">
        <img class="img-logo" src="../../images/logo/index_logo.png" alt="" />
        <div class="flex alc">
          <el-input
            v-model="searchKey"
            class="logo-search"
            suffix-icon="el-icon-search"
            placeholder="搜索关键词查找"
          ></el-input>
          <div class="but mlr20 gray2" @click="gotoManagement">
            <img src="../../images/home/icon-aq.png" /><span>安全中心</span>
          </div>
          <div class="but gray2" @click="doLogout">
            <img src="../../images/home/icon-out.png" /><span
              >安全退出</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'searchLogut',
  data(){
    return {
      searchKey:''
    }
  },
  computed: {
    
  },
  mounted(){
    
  },
  methods:{
    gotoManagement(){
       this.$router.push('/securityCenter/index');
    },
    doLogout(){
      let me = this;
      let params = {};
      // this.$http.request(me, "POST", "/IM01004.do", params).then(function (response) {
      storageTools.del("eCIFID");
      storageTools.del("iCIFID");
      storageTools.del("login_status");
      storageTools.del("cstName");
      me.$router.replace({ path: "/login" });
      // }).catch(function (error) {
      //     me.loading = false;
      // });
    }
   
  }
}
</script>
<style lang="scss" scoped>
.bank-header{
  //height: 120px;
  &-search{
    // height: 74px;
    .div-log {
      height: 104px;
      .but {
        padding: 8px 0;
        img {
          height: 20px;
          width: 16px;
          margin-right: 8px;
        }
        span {
          float: right;
          margin-top: 2px;
        }
      }
      .img-logo {
        width: 295px;
        height: 49px;
      }
      .logo-search {
        width: 300px;
        .el-input__inner {
          width: 300px;
        }
      }
      .el-submenu__icon-arrow {
        right: 5px;
        margin-top: -4px;
      }
    }
  }    
}
</style>
