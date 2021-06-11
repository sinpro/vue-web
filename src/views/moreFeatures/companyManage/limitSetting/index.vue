<template>
  <div class="limitSetting">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick"
      v-if="activeName=='operatorLimit'||activeName=='accountLimit'||activeName=='specialLimit'">
      <el-tab-pane label="操作员限额设置" name="operatorLimit"> </el-tab-pane>
      <el-tab-pane label="企业账户限额设置" name="accountLimit"> </el-tab-pane>
      <el-tab-pane label="特殊限额" name="specialLimit"> </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: "accountLimit",
      };
    },
    mounted() {
      this.activeName = this.$route.name;
    },
    watch: {
      $route() {
        this.activeName = this.$route.name;
      },
    },
    methods: {
      handleClick() {
        if (this.activeName == "operatorLimit") {
          this.$router.push({
            path: "/more/companyManage/limitSetting/operatorLimit",
          });
        } else if (this.activeName == "accountLimit") {
          this.$router.push({
            path: "/more/companyManage/limitSetting/accountLimit",
          });
        } else if (this.activeName == "specialLimit") {
          this.$router.push({
            path: "/more/companyManage/limitSetting/specialLimit",
          });
        }
      },
    },
  };

</script>
<style lang="scss">
    .limitSetting{
        margin-top: 15px;
    }
</style>
