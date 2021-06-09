<template>
  <div class="companyManage">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick"
      v-if="activeName=='notStart'||activeName=='end'">
      <el-tab-pane label="未审批" name="notStart"> </el-tab-pane>
      <el-tab-pane label="已结束" name="end"> </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: "end",
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
        if (this.activeName == "notStart") {
          this.$router.push({
            path: "/more/trade/approval/waitForMe/notStart",
          });
        } else if (this.activeName == "end") {
          this.$router.push({
            path: "/more/trade/approval/waitForMe/end",
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
