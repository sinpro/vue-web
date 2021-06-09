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
        <el-form-item label="单位净值：" prop="code">
          <el-input v-model="formData.code" disabled></el-input>
        </el-form-item>
      </el-form>
      <title-bar title="赎回信息"></title-bar>

      <el-form
        :model="formData"
        :rules="rules"
        ref="formData"
        label-width="300px"
        class="pt10"
      >
        <el-form-item label="可赎回份额(份):" prop="code">
          <el-input v-model="formData.code" disabled></el-input>
        </el-form-item>
        <el-form-item label="赎回份额（份）:" prop="moneyArea1">
          <el-input
            v-model="formData.moneyArea1"
            class="moneyArea"
            @input.native="moneyInput"
            placeholder="请输入"
            maxlength="24"
          >
          </el-input>
          <el-button class="ml15" type="text">全部金额</el-button>
          <p class="tipsClass lh14 cp1">
            最多可赎回（份）：<span>100.00</span>
          </p>
        </el-form-item>
        <el-form-item label="预计到账日期：" prop="value2" class="no_icon">
          <el-date-picker
            v-model="formData.value2"
            type="daterange"
            disabled
            range-separator=""
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="赎回到账账号：" prop="acc">
          <el-input v-model="formData.acc" disabled></el-input>
        </el-form-item>
      </el-form>
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
        <el-button @click="goback" size="medium">返回</el-button>
        <el-button v-if="status" size="medium">查看详情</el-button>
        <el-button @click="rebuy" v-else size="medium">重新购买</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Ytable from "../../components/YC-table"
import mathTools from "utils/mathTools.js";
import auditProcess from "src/components/auditProcess/index.vue";//进度条

export default {
  components: {
    Ytable,
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
      formData: {},
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
      window.history.back(-1)
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
.tipsClass {
  margin-left: 17px;
  margin-top: 11px;
}
.no_icon {
  .el-date-editor .el-range__close-icon::before {
    content: "";
  }
}
</style>