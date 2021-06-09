<template>
  <div class="oneStopSuccess">
    <span class="moneybold f20">
      {{ formData.payMoney | formatMoney }}
    </span>
    <span class="ml8">(大写：{{ formData.payMoney | formatChinese }} )</span>
    <span class="ml35"
      >手续费：
      <span class="money">{{ formData.payMoneyCharge | formatMoney }}元</span>
    </span>
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
    <div class="h90 wr100 border borderbox ptb20 plr70 flex alc">
      <div>
        <p class="lh20">
          <img class="h20 w20 inline-block" src="" alt="" />
          <span class="ml10">中国工商银行</span>
          <span class="ml8">456465564564564564654</span>
        </p>
        <p class="ml35 gray2 lh24">上海西安北京四川</p>
      </div>
      <div class="ml50">
        <el-checkbox v-model="checked">保存至常用收款人</el-checkbox>
      </div>
    </div>
    <div class="mtb56 tc">
      <el-button @click="back" size="medium">查看详情</el-button>
      <el-button type="primary" @click="this.$emit('transClose')" size="medium"
        >继续转账</el-button
      >
    </div>
  </div>
</template>

<script>
import mathTools from "utils/mathTools.js";
export default {
  props: {
    formData: {
      Type: Object,
      default: {},
    },
  },
  data() {
    return {
      form: {
        ofen: "",
      },
      checked: false,
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
<style lang="scss" scoped>
.oneStopSuccess {
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