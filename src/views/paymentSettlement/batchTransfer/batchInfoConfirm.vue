<template>
  <div class="batchInfoConfirm">
    <p class="leftBar">转账信息</p>
    <div class="cen-form flex alc wrap">
      <div class="item">
        <span class="label cp2">付款户名</span>
        <span class="value"><i class="tab">普通</i></span>
      </div>
      <div class="item">
        <span class="label cp2">付款账号</span>
        <span class="value">145645645646546546</span>
      </div>
      <div class="item">
        <span class="label cp2">总金额</span>
        <span class="value">1000000元</span>
      </div>
      <div class="item">
        <span class="label cp2">总笔数</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">总手续费</span>
        <span class="value">12笔</span>
        <el-button type="text" class="ml30" @click="settleFlag = true"
          >手续费标准</el-button
        >
      </div>
      <div class="item">
        <span class="label cp2">转出日期</span>
        <span class="value"><i class="tab">2020-03-01</i></span>
      </div>
    </div>
    <p class="leftBar">收款人列表</p>
    <el-table :data="formData.table" stripe>
      <el-table-column label="序号" type="index" width="80"> </el-table-column>
      <el-table-column
        prop="transOutName"
        label="收款户名"
        width="180"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="transOutAcct"
        label="收款账号"
        width="180"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="bankName"
        label="收款银行"
        show-overflow-tooltip
        width="180"
      >
      </el-table-column>
      <el-table-column prop="payMoney" label="转账金额(元)" width="160">
      </el-table-column>
      <el-table-column
        prop="useFor"
        label="用途"
        show-overflow-tooltip
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="note"
        label="备注(非必填)"
        width="150"
        show-overflow-tooltip
      >
      </el-table-column>
    </el-table>
    <el-row class="tc mtb50">
      <el-button @click="confirmBack" size="medium">上一步</el-button>
      <el-button type="primary" @click="transSubmit" size="medium"
        >提交</el-button
      >
    </el-row>
    <settle-standard v-model="settleFlag"></settle-standard>
  </div>
</template>

<script>
import SettleStandard from "../components/settleStandard"; //结算标准

export default {
  components: {
    SettleStandard,
  },
  props: {
    formData: {
      Type: Object,
      default: {},
    },
  },
  data() {
    return {
      table: this.formData.table,
      settleFlag: false, //结算标准
    };
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
};
</script>

<style lang="scss" scoped>
.batchInfoConfirm {
  .cen-form {
    align-items: flex-start;
    width: 830px;
    margin: 34px auto;
    .item {
      width: 50%;
      line-height: 22px;
      margin-bottom: 20px;
      .el-button {
        padding: 0;
      }
      .label {
        display: inline-block;
        width: 120px;
        text-align: right;
        margin-right: 20px;
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
}
</style>