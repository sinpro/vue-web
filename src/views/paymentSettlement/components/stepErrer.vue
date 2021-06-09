<template>
  <div class="stepErrer">
    <div class="tac"><p class="el-icon-error cerror"></p></div>
    <p class="tac mb10 f22 bold">提交失败</p>
    <p class="tac gray2">{{ desc }}</p>
    <div class="tac mtb56">
      <el-button @click="this.$emit('back')" size="medium">返回</el-button>
      <el-button type="primary" @click="this.$emit('transClose')" size="medium"
        >{{button}}</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    button:{
      Type: String,
      default: "重新转账",
    },
    desc: {
      Type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.stepErrer {
  div.tac {
    p {
      font-size: 50px;
      margin-bottom: 18px;
    }
  }
}
</style>