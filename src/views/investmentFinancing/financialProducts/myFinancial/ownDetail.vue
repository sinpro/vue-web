<template>
  <div>
    <div v-if="this.step === 1">
      <title-bar title="交易详情"></title-bar>
      <Ytable :tableData="tableData" />
      <div class="tc mtb30">
        <el-button @click="submitForm2()" size="medium" type="primary"
          >撤单</el-button
        >
        <el-button size="medium">返回</el-button>
        <el-button @click="goBuy()" size="medium" type="primary" v-if="flag"
          >追加购买</el-button
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
        <div class="tc ptb50">
          <el-button @click="goback" size="medium">返回</el-button>
          <el-button v-if="status" size="medium">查看详情</el-button>
        </div>
      </div>
      <!-- 交易失败 -->
      <div v-else class="tc">
        <p class="bold">购买失败</p>
        <p class="f14 gray3 mt5">失败原因:</p>
      </div>
      <div class="tc ptb50">
        <el-button @click="goback" size="medium">返回</el-button>
        <el-button v-if="status" size="medium">查看详情</el-button>
        <el-button @click="rebuy" v-else size="medium">重新撤单</el-button>
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
      step: 1,
      flag: true,
      status: true,
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

    goBuy() {
      this.$router.push('/investmentFinancing/financial-products/buyAgainFill')
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