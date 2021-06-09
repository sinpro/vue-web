<template>
  <div class="electricBillCheck">
    <title-bar title="电子回单验证"></title-bar>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="135px" :inline="true">
      <el-form-item label="回单编号:" prop="account">
        <el-input v-model="ruleForm.account" maxlength="36" @input="moneyCheck"></el-input>
      </el-form-item>
      <el-form-item label="交易账号:" prop="billAccount" label-width="115px">
        <el-input v-model="ruleForm.billAccount" maxlength="36" @input="moneyCheck2"></el-input>
      </el-form-item>
      <el-form-item label="选择日期:">
        <el-date-picker v-model="ruleForm.value1" type="date" placeholder="选择日期" :clearable="false">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="交易金额:" prop="money" label-width="115px">
        <el-input v-model="ruleForm.money" class="moneyArea" @input="changeMoney" placeholder="请输入金额">
        </el-input>
      </el-form-item>
    </el-form>
    <div class="tac mt15 mb56">
      <el-button type="primary" size="mini">验证</el-button>
    </div>
    <p class="leftBar">回单信息</p>
  </div>
</template>
<script>
  import mathTools from 'utils/mathTools.js'

  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        // console.log(this.ruleForm.account.replace(/ /g, ""))
        // console.log(1111111, value)
        //调用接口，同步
        //(接口)
        let jiekou = true
        if (!value) {
          callback(new Error('请输入正确的账号'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          account: '',
          billAccount: '',
          accName: '',
          limit: '查询',
          value1: '2015-10-02',
          money: '',
        },
        rules: {
          account: [{
            required: true,
            validator: validatePass,
            trigger: 'blur'
          }],
          accName: [{
            required: true,
            message: "请输入户名",
            trigger: 'blur'
          }],
          limit: [{
            required: true,
            message: "请选择权限",
            trigger: 'blur'
          }],
        },
      }
    },
    methods: {
      changeMoney(val) {
        this.ruleForm.money = mathTools.moneyCheck(val)
      },
      moneyCheck() {
        this.ruleForm.account = this.ruleForm.account.replace(/[^\d.]/g, "")
          .replace(/^0\d+|^\./g, "")
          .replace(/\./g, "")
          .replace(/^(\d+)\.(\d\d).*$/, "$1.$2")
      },
      moneyCheck2() {
        this.ruleForm.billAccount = this.ruleForm.billAccount.replace(/[^\d.]/g, "")
          .replace(/^0\d+|^\./g, "")
          .replace(/\./g, "")
          .replace(/^(\d+)\.(\d\d).*$/, "$1.$2")
      },
    },
  }

</script>
<style lang="scss">
  .electricBillCheck {
    .flex {
      flex-wrap: wrap;
    }

    .leftBar::before {
      height: 18px !important;

    }
  }

</style>
