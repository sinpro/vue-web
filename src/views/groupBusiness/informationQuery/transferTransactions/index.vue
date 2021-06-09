<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="资金上拨" name="queryOnTheDial"></el-tab-pane>
      <el-tab-pane label="资金下拨" name="queryStir"></el-tab-pane>
      <el-tab-pane label="内部划拨" name="queryInternalTransfer"></el-tab-pane>
      <el-tab-pane label="对外付款" name="queryForeignPayment"></el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "queryOnTheDial",
    };
  },
  methods: {
    handleClick() {
      if (this.$route.name !== this.activeName) {
        this.$router.push({
          path:
            "/groupBusiness/informationQuery/transferTransactions/" +
            this.activeName,
        });
      }
    },
  },
};
</script>
<style lang="scss">
</style>