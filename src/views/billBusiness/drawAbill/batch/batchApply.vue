<template>
  <div>
    <steps :stepsList="stepsList" :activeIndex="activeIndex"></steps>
    <batch-info-fill
      class="mt10"
      v-if="steps == 'infoFill'"
      :tableData="tableData"
      @transConfirm="transConfirm"
    ></batch-info-fill>
    <batch-info-confirm
      v-if="steps == 'infoConfirm'"
      :tableData="tableData"
      v-model="steps"
      @transSubmit="transSubmit"
    ></batch-info-confirm>
    <batch-success
      v-if="steps == 'success'"
      :tableData="tableData"
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
import batchInfoFill from "./batchInfoFill";
import batchSuccess from "./batchSuccess";
import batchInfoConfirm from "./batchInfoConfirm";
import stepErrer from "components/stepErrer";

import UDialog from "components/common/ukDialog/ukDialog";
export default {
  components: {
    UDialog,
    batchInfoConfirm,
    batchSuccess,
    batchInfoFill,
    stepErrer,
  },
  data() {
    return {
      steps: "success",
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
      tableData: [{ id: 1 }],
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (from.name == "updateBatchApply") {
        vm.steps = "infoConfirm";
        vm.tableData = JSON.parse(
          window.sessionStorage.getItem("billDrawTableData")
        );
      }
    });
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