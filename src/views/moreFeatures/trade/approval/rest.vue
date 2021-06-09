<template>
  <div class="companyManage">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick"
      v-if="activeName=='notApproval'||activeName=='finish'">
      <el-tab-pane label="未审批" name="notApproval"> </el-tab-pane>
      <el-tab-pane label="已结束" name="finish"> </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: "finish",
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
        if (this.activeName == "notApproval") {
          this.$router.push({
            path: "/more/trade/approval/rest/not",
          });
        } else if (this.activeName == "finish") {
          this.$router.push({
            path: "/more/trade/approval/rest/finish",
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
