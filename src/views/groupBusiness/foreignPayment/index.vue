<template>
  <div class="foreignPayment">
    <title-bar title="对外付款操作步骤"></title-bar>
    <div class="tac">
      <el-button type="primary" @click="go()">立即前往</el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    go() {
      this.$router.push({ path: "/paymentSettlement/oneStopTransfer" });
    },
  },
};
</script>
<style lang="scss">
.foreignPayment {
}
</style>