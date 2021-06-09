<template>
  <div class="osq">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" v-if="activeName=='oneStopList'||activeName=='batcherList'">
      <el-tab-pane label="单笔转账" name="oneStopList"> </el-tab-pane>
      <el-tab-pane label="批量转账" name="batcherList"> </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "oneStopList",
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
      if (this.activeName == "oneStopList") {
        this.$router.push({
          path: "/paymentSettlement/transferQuery/oneStopList",
        });
      } else {
        this.$router.push({
          path: "/paymentSettlement/transferQuery/batcherList",
        });
      }
    },
  },
};
</script>