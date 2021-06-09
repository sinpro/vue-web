<template>
  <div>
    <div class="formW_500 pb50">
      <el-steps :active="step" finish-status="success">
        <el-step title="填写信息"></el-step>
        <el-step title="确认信息"></el-step>
        <el-step
          title="交易结果"
          :status="status ? 'process' : 'error'"
        ></el-step>
      </el-steps>
    </div>

    <div v-if="this.step === 0">
      <title-bar title="产品信息"></title-bar>
      <el-form
        :model="formData"
        :rules="rules"
        ref="ruleForm"
        label-width="300px"
        class="pt10 pb30"
      >
        <el-form-item label="产品名称：" prop="name">
          <el-input v-model="formData.name" disabled></el-input>
        </el-form-item>
        <el-form-item label="理财登记编码：" prop="code">
          <el-input v-model="formData.code" disabled></el-input>
        </el-form-item>
        <el-form-item label="单位净值：" prop="code">
          <el-input v-model="formData.code" disabled></el-input>
        </el-form-item>
      </el-form>
      <title-bar title="购买信息"></title-bar>

      <el-form
        :model="formData"
        :rules="rules"
        ref="formData"
        label-width="300px"
        class="pt10"
      >
        <el-form-item label="交易账户:" prop="transOutAcct">
          <div>
            <div class="el-input__inner out-acct w320">
              <p class="lh20 mt10" v-if="formData.transOutName">
                {{ formData.transOutName }}|{{ formData.transOutAlise }}
              </p>
              <p>
                {{ formData.transOutAcct | acctFormat(formData.transOutAcct) }}
              </p>
            </div>
            <el-button type="text" class="ml10 vat" @click="acctQuaery"
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
        <el-form-item label="购买金额（元）：" prop="code">
          <el-input
            v-model="formData.code"
            placeholder="1000.00元起购"
          ></el-input>
          <p class="lh16 mt12 ml16">递增金额（元）为1000.00</p>
        </el-form-item>
        <el-form-item label="购买份额：" prop="code">
          <el-input v-model="formData.code" disabled></el-input>
        </el-form-item>
        <el-form-item label="推荐人：" prop="code">
          <el-input
            v-model="formData.code"
            placeholder="请输入推荐人工号（选填）"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="aggCheck">
        <el-checkbox v-model="checked" class="pt10">
          我已阅读并同意《风险揭示书》、《客户权益须知》、
          《产品说明书》、《理财产品委托书》、《理财产品协议》</el-checkbox
        >
      </div>
      <div class="formW_200 ptb50">
        <el-button @click="submitForm()" type="primary">下一步</el-button>
      </div>
    </div>
    <div v-if="this.step === 1">
      <title-bar title="确认购买信息"></title-bar>
      <Ytable :tableData="tableData" />
      <div class="tc mtb30">
        <el-button @click.native="step = 0" size="medium">上一步</el-button>
        <el-button @click="submitForm2()" size="medium" type="primary"
          >确认</el-button
        >
      </div>
    </div>
    <div v-if="this.step === 2">
      <!-- 交易成功 -->
      <div v-if="status">
        <div class="flex">
          <div class="flex">
            <p class="bold">购买金额:</p>
            <p class="money">12321</p>
          </div>
          <div class="flex ml36">
            <p>产品名称:</p>
            <p class="bold">购买金额</p>
          </div>
        </div>
        <auditProcess :list="list"></auditProcess>
      </div>
      <!-- 交易失败 -->
      <div v-else class="tc">
        <p class="bold">购买失败</p>
        <p class="f14 gray3 mt5">失败原因:</p>
      </div>
      <div class="tc ptb50">
        <el-button @click.native="goback" size="medium">返回</el-button>
        <el-button @click="checkDetail()" v-if="status" size="medium"
          >查看详情</el-button
        >
        <el-button @click="rebuy" v-else size="medium">重新购买</el-button>
      </div>
    </div>
    <!-- 账户查询 -->
    <account-list
      v-model="accountFlag"
      @accoutConfirm="accoutConfirm"
    ></account-list>
  </div>
</template>

<script>
import Ytable from "../../components/YC-table"
import AccountList from "./components/AccountList"; //账户查询
import mathTools from "utils/mathTools.js";
import auditProcess from "src/components/auditProcess/index.vue";//进度条

export default {
  components: {
    Ytable,
    AccountList,
    auditProcess
  },
  data() {
    return {
      list: [
        {
          type: "finish",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "finish",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "tips",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "success",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "info",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "errer",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
          desc: "错误信息",
        },
      ],
      activeName1: 'first',
      activeName2: 'first',
      step: 0,
      status: true,
      checked: true,
      accountFlag: false,
      formData: {
        transOutAcct: "6228480502285113614",
        transOutName: "四川资阳电商服务有限公司新华分公司",
        transOutAlise: "别名别名别名",
        transOutBalance: "111111.00",
        name: '',
        code: '',
      },
      tableData: [
        { title: 'jack', value: '111' },
        { title: 'fefe', value: '222' },
        { title: 'aaa', value: '333' },
        { title: 'ddd', value: '44' },
        { title: 'ccc', value: '55' },
        { title: 'eee', value: '66' },
      ],
      rules: {}
    }
  },
  methods: {
    //账户查询弹窗选择回调
    accoutConfirm(acctObj) {
      this.formData.transOutName = acctObj.acctName;
      this.formData.transOutAlise = acctObj.acctAlise;
      this.formData.transOutAcct = acctObj.acctNo;
      this.formData.transOutBalance = acctObj.balance;
    },
    acctQuaery() {
      this.accountFlag = true;
    },
    submitForm() {
      this.step = 1;
      // this.$refs[formName].validateField('account', (message) => {
      //     if (!message) {
      //         this.step = 1;
      //         this.active = 1;
      //     }
      // });
    },
    submitForm2() {
      // ukey 确认弹框
      this.step = 2
    },
    goback() {
      // 返回到 上一步还是 列表页面/ 详情
    }
  },
  filters: {
    //余额格式化
    formatMoney(val) {
      if (val) {
        return mathTools.addDecollator(val);
      }
    },
    //账号格式化
    acctFormat(val) {
      if (val) {
        return mathTools.formatBankNo(val);
      }
    },
  }
}
</script>

<style lang='scss'>
.out-acct {
  height: auto !important;
}
.aggCheck {
  width: 480px;
  margin-left: 200px;
  .el-checkbox__label {
    width: 440px;
    white-space: normal;
  }
  .el-checkbox__input {
    margin-top: -36px;
  }
}
</style>