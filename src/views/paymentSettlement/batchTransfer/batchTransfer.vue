<template>
  <div>
    <el-tabs v-model="activeName" type="card" v-if="steps == 'infoFill'">
      <el-tab-pane label="手工录入" name="recordManually"> </el-tab-pane>
      <el-tab-pane label="文件导入" name="file"> </el-tab-pane>
    </el-tabs>

    <title-bar
      v-if="steps == 'infoConfirm'"
      :title="activeName == 'recordManually' ? '手工录入确认' : '文件导入确认'"
    ></title-bar>

    <steps :stepsList="stepsList" :activeIndex="activeIndex"></steps>

    <div v-if="steps == 'infoFill'" class="mt10">
      <recordManually
        v-if="activeName == 'recordManually'"
        :formData="formData"
        @transConfirm="transConfirm"
      ></recordManually>
      <file
        v-if="activeName == 'file'"
        :formData="formData"
        @transConfirm="transConfirm"
      ></file>
    </div>

    <batch-info-confirm
      class="mt40"
      v-if="steps == 'infoConfirm'"
      :formData="formData"
      v-model="steps"
      @transSubmit="transSubmit"
    ></batch-info-confirm>

    <batch-success
      class="mt45"
      v-if="steps == 'success'"
      :formData="formData"
      @transClose="transClose"
    >
    </batch-success>

    <stepErrer
      class="mt60"
      v-if="steps == 'errer'"
      desc="提交结果页用于反馈一系列操作任务都处理结果，本文字区域可以展示简单的补充说明。"
    >
    </stepErrer>
    <u-dialog @toSubmit="ukSubmit" v-model="showFlag"></u-dialog>
  </div>
</template>

<script>
import recordManually from "./recordManually";
import batchInfoFill from "./batchInfoFill";
import batchSuccess from "./batchSuccess";
import batchInfoConfirm from "./batchInfoConfirm";
import stepErrer from "src/components/stepErrer";

import file from "./file";
import UDialog from "src/components/common/ukDialog/ukDialog";
export default {
  components: {
    recordManually,
    file,
    UDialog,
    batchInfoConfirm,
    batchSuccess,
    batchInfoFill,
    stepErrer,
  },
  data() {
    return {
      activeName: "recordManually",
      steps: "infoFill",
      stepsList: [
        {
          title: "填写信息",
          description: "",
        },
        {
          title: "确认信息",
          description: "",
        },
        {
          title: "提交结果",
          description: "",
          status: "",
        },
      ],
      showFlag: false,
      formData: {
        transOutAcct: "6228480502285113614",
        transOutName: "四川资阳电商服务有限公司新华分公司",
        transOutAlise: "别名别名别名",
        transOutBalance: "111111.00",
        bankName: "四川农信",
        accName: "",
        accNo: "",
        payMoney: "",
        resource: "",
        transferDate: "", //预约转账转出日期
        payMoneyCharge: "", //手续费
        useFor: "", //用途
        note: "", //备注
        ofen: "", //保存至常用收款人

        accType: "", //收款账户类型
        outlets: "", //请选择网点
      },
    };
  },
  computed: {
    activeIndex() {
      return this.steps == "infoFill" ? 0 : this.steps == "infoConfirm" ? 1 : 3;
    },
  },
  methods: {
    transSubmit() {
      this.steps = "success";
    },
    transConfirm() {
      this.steps = "infoConfirm";
    },
    transClose() {
      this.steps = "infoFill";
    },
    //UK输入提交
    ukSubmit(ukey) {
      console.log(this.formData.accName, "提交数据接口执行");
      // let _this = this;
      // this.$http
      //     .request(_this, "POST", "/CB0303.do", {
      //         cstNo: "12580",
      //         payeeAccName: this.formData.accName,
      //         payeeAccNo: this.formData.accNo,
      //         payeeAccName: this.formData.accName,
      //         payeeOpenBank: this.formData.bankName,
      //         transAmt: this.formData.transAmt,
      //         transWay: this.formData.resource,
      //         purpose: this.formData.useFor,
      //     })
      //     .then((res) => {
      this.steps = "success";
      console.log("提交数据接口执行成功");
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>