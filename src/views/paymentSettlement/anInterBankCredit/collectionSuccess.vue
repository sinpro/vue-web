<template>
  <div class="collectionSuccess">
    <span>收款金额：</span>
    <span class="moneybold f20">{{ formData.payMoney | formatMoney }}</span>
    <span class="ml8 gray2"
      >(大写：{{ formData.payMoney | formatChinese }} )</span
    >
    <div class="mt20 wr100 h200 bgbrand ptb30 plr70 borderbox flex alc">
      <div>
        <div class="step-success mt10">
          <i class="el-icon-check"></i>
        </div>
        <div class="step-inner"></div>
        <div class="step-errer bgtips">
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="ml20">
        <div>
          <p class="f18 lh34">交易已提交</p>
          <p class="gray2">2021-01-01 13:32:22</p>
        </div>
        <div class="mt30">
          <p class="f22 ctips lh40">待审批</p>
          <p>下一级审批人：王校长</p>
        </div>
      </div>
    </div>
    <div class="mtb56 tc">
      <el-button @click="back" size="medium">返回</el-button>
      <el-button type="primary" @click="this.$emit('transClose')" size="medium"
        >交易详情</el-button
      >
    </div>
  </div>
</template>
<script>
import mathTools from "utils/mathTools.js";
export default {
  props: {},
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    back() {
      this.$emit("transClose");
    },
  },
  filters: {
    acctFormat(val) {
      if (val) {
        return mathTools.formatBankNo(val);
      }
    },
    //余额格式化
    formatMoney(val) {
      if (val) {
        return mathTools.addDecollator(val);
      }
    },
    formatChinese(val) {
      if (val) {
        return mathTools.formatChinese(val);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.collectionSuccess {
  .step-success {
    margin-left: 7px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #99d4b9;
    line-height: 30px;
    text-align: center;
    color: #fff;
    i {
      font-weight: bold;
    }
  }
  .step-errer {
    position: relative;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    line-height: 45px;
    text-align: center;
    & :first-child {
      position: absolute;
      left: 20px;
      top: 6px;
      height: 18px;
      width: 3px;
      background: #fff;
    }
    & :last-child {
      position: absolute;
      right: 6px;
      top: 22px;
      width: 18px;
      height: 3px;
      background: #fff;
    }
  }
  .step-inner {
    height: 50px;
    width: 3px;
    background: #99d4b9;
    margin-left: 20px;
  }
}
</style>