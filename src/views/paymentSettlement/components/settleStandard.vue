<template>
  <div class="settle-standard">
    <el-dialog
      :visible.sync="value"
      title="转账汇款手续费标准"
      center
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :show-close="false"
      size="medium"
    >
      <div class="flex standardDetails">
        <div class="details1">
          <h4>本行同城转账</h4>
          <p class="ctips tac" style="line-height: 320px">免费</p>
        </div>
        <div class="details2">
          <h4>本行异地转账</h4>
          <p>每笔1万元（含）以下 &nbsp; 2元；</p>
          <p>1-10万元（含10万元）&nbsp; 5元；</p>
          <p>10-50万元（含50万元）&nbsp; 8元；</p>
          <p>50-100万元（含100万元）&nbsp; 10元；</p>
          <p>100万元以上按金额的0.02‰收取，最高100元；</p>
          <p>5万元以下的加急业务（暂免）；</p>
        </div>
        <div class="details3">
          <h4>跨行转账</h4>
          <p>每笔1万元（含）以下2元；</p>
          <p>1-10万元（含10万元）5元；</p>
          <p>10-50万元（含50万元）8元；</p>
          <p>50-100万元（含100万元）10元；</p>
          <p>100万元以上按金额的0.02‰收取，最高不超过100元；</p>
          <p>5万元以下的加急业务5.5元/笔；</p>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="toCancle">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {

    };
  },
  methods: {
    toCancle() {
      this.$emit("input", false);
      this.$emit("toCancle");
    },
  },
};
</script>
<style lang="scss">
.settle-standard {
  .standardDetails {
    > div {
      flex: none;
      width: 33%;
      height: 390px;
      h4 {
        line-height: 60px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        background: #c6a34f1c;
      }
      p {
        padding: 0 30px;
        margin-top: 20px;
      }
    }
    .details2 {
      margin: 0 1px;
    }
  }
}
</style>