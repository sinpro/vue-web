<template>
  <div class="oneStopInfoConfirm mt50">
    <div class="content">
      <div class="card">
        <div class="card-left">
          <span class="card-title bgg">付款账户</span>
          <div class="card-code">
            <p class="f18 fold lh34">{{ formData.transOutAcct }}</p>
            <p class="f16 gray3">{{ formData.transOutAlise }}</p>
          </div>
          <div class="card-name bordert f16">
            {{ formData.bankName }}
          </div>
        </div>
        <div class="card-right p20 borderbox">
          <p class="f20 fold cg lh20">付款户名</p>
          <p class="mt10 gray2">{{ formData.transOutName }}</p>
        </div>
      </div>
      <div class="card-cen flex alc">
        <img class="ml20" src="" alt="" />
        <div class="ml10">
          <p>
            <span class="moneybold f20">{{
              formData.payMoney | formatMoney
            }}</span
            ><span class="ml8"
              >(大写：{{ formData.payMoney | formatChinese }} )</span
            >
          </p>
          <p class="mt10">
            手续费：{{ formData.payMoneyCharge | formatMoney }}元
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <span class="card-title bgy">收款账户</span>
          <div class="card-code">
            <p class="f18 fold lh34">{{ formData.transOutAcct }}</p>
            <p class="f16 gray3">{{ formData.transOutAlise }}</p>
          </div>
          <div class="card-name bordert f16">
            {{ formData.bankName }}
          </div>
        </div>
        <div class="card-right p20 borderbox">
          <p class="f20 fold cg lh20">收款户名与网点</p>
          <p class="mt10 gray2 h50">{{ formData.transOutName }}</p>
          <p class="lh40 gray2 bordert f16">{{ formData.transOutName }}</p>
        </div>
      </div>
    </div>
    <div class="cen-form flex alc wrap">
      <div class="item">
        <span class="label cp2">转账方式</span>
        <span class="value"><i class="tab">普通</i></span>
      </div>
      <div class="item">
        <span class="label cp2">用途</span>
        <span class="value">最多八个最多八个</span>
      </div>
      <div class="item">
        <span class="label cp2">转出日期</span>
        <span class="value"><i class="tab">2020-03-01</i></span>
      </div>
      <div class="item">
        <span class="label cp2">备注</span>
        <span class="value">最多十个最多十个最多</span>
      </div>
    </div>
    <el-row class="tc mtb56">
      <el-button @click="confirmBack" size="medium">上一步</el-button>
      <el-button type="primary" @click="transSubmit" size="medium"
        >提交</el-button
      >
    </el-row>
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
  methods: {
    //上一步
    confirmBack() {
      this.$emit("input", "infoFill");
    },
    //确认
    transSubmit() {
      this.$emit("transSubmit");
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
.oneStopInfoConfirm {
  .cen-form {
    align-items: flex-start;
    margin-top: 34px;
    .item {
      width: 50%;
      margin-bottom: 24px;
      .el-button {
        padding: 0;
      }
      .label {
        display: inline-block;
        width: 140px;
        text-align: right;
        margin-right: 24px;
      }
      .value {
        .tab {
          display: inline-block;
          min-width: 54px;
          padding: 0 8px;
          height: 22px;
          line-height: 22px;
          font-size: 14px;
          text-align: center;
          color: #fff;
          border-radius: 20px;
          background: #c6a34f;
        }
      }
    }
  }
  .content {
    width: 830px;
    margin: 0 auto;
    .card {
      display: flex;
      align-items: center;
      .card-left {
        height: 170px;
        width: 320px;
        box-shadow: 0px 2px 9px 0px #0000001a;
        border-radius: 10px;
        .card-title {
          border-top-left-radius: 10px;
          border-bottom-right-radius: 10px;
          line-height: 35px;
          width: 105px;
          text-align: center;
          color: #ffffff;
          display: block;
        }
        .card-code {
          padding: 24px 26px 20px;
        }
        .card-name {
          width: 288px;
          box-sizing: border-box;
          padding-left: 10px;
          margin: 0 auto;
          line-height: 40px;
        }
      }
      .card-right {
        background: #f7f7f7;
        height: 140px;
        width: 510px;
        .h55 {
          height: 55px;
        }
      }
    }
    .card-cen {
      height: 130px;
    }
  }
}
</style>