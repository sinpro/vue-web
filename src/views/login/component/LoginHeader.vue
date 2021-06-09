<!--公共头部组件1 -->
<template>
  <div class="loginHeader">
    <div class="div-log flex jst alc">
        <img class="img-logo" src="../../../images/logo/index_logo.png" alt="" />
        <div class="but">
            <img src="../../../images/firstPage/icon1.png" /><span>四川农信企业网银关于网络诈骗告知书</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
     
    };
  },
  created() {},
  methods: {
  },
  computed: {
    
  },
};
</script>
<style lang="scss">
.loginHeader {
  width: 100%;
  height: 90px;
  background: #fff;
  box-sizing: border-box;
  .div-log {
    margin:0px 120px;
    position: relative;
    padding: 20px 0;
    .but {
      padding: 8px 0;
      font-size: 14px;
      color: #8c8c8c;
      img {
        width: 16px;
	    height: 19px;
        margin-right: 6px;
      }
      span {
        float: right;
        margin-top: 2px;
      }
    }
    .img-logo {
      line-height:90px ;
      width: 301px;
      height: 50px;
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
</style>
