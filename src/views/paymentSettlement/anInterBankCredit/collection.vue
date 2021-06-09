<template>
  <div class="collection">
    <div v-if="states == 'infoFill'">
      <title-bar title="收款"></title-bar>
      <el-form
        ref="formData"
        :model="formData"
        :rules="formRules"
        label-width="312px"
      >
        <p class="leftBar">收款人信息</p>
        <el-form-item label="付款账号:" prop="transOutAcct" v-if="type">
          <div>
            <div class="el-input__inner out-acct w320">
              <p class="lh20 mt10" v-if="formData.transOutName">
                {{ formData.transOutName }}|{{ formData.transOutAlise }}
              </p>
              <p>
                {{ formData.transOutAcct | acctFormat(formData.transOutAcct) }}
              </p>
            </div>
            <el-button type="text" class="ml10 vat" @click="accountFlag = true"
              >账户查询</el-button
            >
          </div>
          <p class="lh16 mt12 ml16" v-if="formData.transOutBalance">
            余额
            <span class="money">{{
              formData.transOutBalance | formatMoney(formData.transOutBalance)
            }}</span>
            元
          </p>
        </el-form-item>
        <div class="cen-form flex alc wrap mt20">
          <div class="item">
            <span class="label cp2">收款户名</span>
            <span class="value"></span>
          </div>
          <div class="item">
            <span class="label cp2">收款账号</span>
            <span class="value">145645645646546546</span>
          </div>
        </div>
        <p class="leftBar">付款人信息</p>
        <div class="cen-form flex alc wrap mt20">
          <div class="item">
            <span class="label cp2">付款户名</span>
            <span class="value"></span>
          </div>
          <div class="item">
            <span class="label cp2">付款支付协议号</span>
            <span class="value">145645645646546546</span>
            <el-button type="text" class="ml20">协议详情</el-button>
          </div>
          <div class="item">
            <span class="label cp2">付款账号</span>
            <span class="value">1000000元</span>
          </div>
          <div class="item">
            <span class="label cp2">付款银行</span>
            <span class="value">12笔</span>
          </div>
        </div>
        <p class="leftBar">交易信息</p>
        <el-form-item label="收款金额:" prop="accName">
          <MoneyInput
            v-model="formData.payMoney"
            @input="handleInput"
            placeholder="请输入收款金额"
          ></MoneyInput>
        </el-form-item>
        <el-form-item label="附言:" prop="accName">
          <el-input
            v-model="formData.accName"
            placeholder="选填"
            v-support
            maxlength="10"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <el-row class="tc mtb56">
        <el-button size="medium">上一步</el-button>
        <el-button type="primary" size="medium">提交</el-button>
      </el-row>
    </div>

    <stepErrer
      v-if="states == 'errer'"
      class="mt40"
      button="重新收款"
      desc="提交结果页用于反馈一系列操作任务都处理结果，本文字区域可以展示简单的补充说明。"
    >
    </stepErrer>
    <collectionSuccess
      v-if="states == 'success'"
      @transClose="states = 'infoFill'"
    ></collectionSuccess>
    <account-list
      v-model="accountFlag"
      @accoutConfirm="accoutConfirm"
    ></account-list>
  </div>
</template>

<script>
import AccountList from "../components/AccountList"; //账户查询
import collectionSuccess from "./collectionSuccess"; //账户查询
import stepErrer from "../components/stepErrer";

export default {
  components: {
    AccountList,
    collectionSuccess,
    stepErrer,
  },
  data() {
    return {
      states: "success",
      accountFlag: false, //账户查询
      formData: {},
      type: false,
    };
  },
  created() {},
  methods: {
    accoutConfirm(acctObj) {
      this.formData.transOutName = acctObj.acctName;
      this.formData.transOutAlise = acctObj.acctAlise;
      this.formData.transOutAcct = acctObj.acctNo;
      this.formData.transOutBalance = acctObj.balance;
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
    getMoneyUnit(val) {
      if (val) {
        return mathTools.getMoneyUnit(val);
      }
    },
  },
};
</script>

<style lang="scss">
.collection {
  .out-acct {
    min-height: 90px;
    height: auto !important;
  }
  .cen-form {
    align-items: flex-start;
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
}
</style>