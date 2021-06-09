<template>
  <div class="oneStopInfoConfirm">
    <title-bar title="票据信息"></title-bar>
    <div class="cen-form flex alc wrap">
      <div class="item">
        <span class="label cp2">企业名称</span>
        <span class="value"></span>
      </div>
      <div class="item">
        <span class="label cp2">收款人名称</span>
        <span class="value">145645645646546546</span>
      </div>
      <div class="item">
        <span class="label cp2">账号</span>
        <span class="value">1000000元</span>
      </div>
      <div class="item">
        <span class="label cp2">收款人账号</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">票据类型</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">收款人开户行名称</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">出票日期</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">收款人开户行行号</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">到期日期</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">承兑人类型</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">金额</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">标题名称</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">大写金额</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">能否转让</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">交易合同号</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">出票备注</span>
        <span class="value">12笔</span>
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
    .item {
      width: 50%;
      margin-bottom: 24px;
      .label {
        display: inline-block;
        width: 160px;
        text-align: right;
        margin-right: 24px;
      }
    }
  }
}
</style>