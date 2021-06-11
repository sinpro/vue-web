<template>
  <div class="companyManage">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick"
      v-if="activeName=='basicInfoQuery'||activeName=='accountPowerManage'||activeName=='authorizationQuery'||activeName=='openedFunctionQuery'">
      <el-tab-pane label="企业基本信息查询" name="basicInfoQuery"> </el-tab-pane>
      <el-tab-pane label="企业账户权限管理" name="accountPowerManage"> </el-tab-pane>
      <el-tab-pane label="授权模式查询" name="authorizationQuery"> </el-tab-pane>
      <el-tab-pane label="开通业务查询" name="openedFunctionQuery"> </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: "openedFunctionQuery",
      };
    },
    mounted() {
      this.activeName = this.$route.name;
      console.log('111',this.activeName)
    },
    watch: {
      $route() {
        this.activeName = this.$route.name;
      },
    },
    methods: {
      handleClick() {
        if (this.activeName == "basicInfoQuery") {
          this.$router.push({
            path: "/more/companyManage/companyInfoManage/basicInfoQuery",
          });
        } else if (this.activeName == "accountPowerManage") {
          this.$router.push({
            path: "/more/companyManage/companyInfoManage/accountPowerManage",
          });
        } else if (this.activeName == "authorizationQuery") {
          this.$router.push({
            path: "/more/companyManage/companyInfoManage/authorizationQuery",
          });
        } else if (this.activeName == "openedFunctionQuery") {
          this.$router.push({
            path: "/more/companyManage/companyInfoManage/openedFunctionQuery",
          });
        }
      },
    },
  };

</script>
<style lang="scss">
    .companyManage{
        margin-top: 15px;
    }
</style>
