<template>
  <div class="">
    <steps :stepsList="stepsList" :activeIndex="activeIndex"></steps>
    <one-stop-info-fill
      class="mt10"
      v-if="steps == 'infoFill'"
      :formData="formData"
      @transConfirm="transConfirm"
      @transReset="transReset"
    ></one-stop-info-fill>

    <one-stop-info-confirm
      v-if="steps == 'infoConfirm'"
      :formData="formData"
      v-model="steps"
      @transSubmit="transSubmit"
    ></one-stop-info-confirm>

    <one-stop-success
      v-if="steps == 'success'"
      :formData="formData"
      @transClose="transClose"
      class="mt25"
    >
    </one-stop-success>

    <stepErrer
      class="mt40"
      v-if="steps == 'errer'"
      desc="提交结果页用于反馈一系列操作任务都处理结果，本文字区域可以展示简单的补充说明。"
    >
    </stepErrer>

    <u-dialog @toSubmit="ukSubmit" v-model="showFlag"></u-dialog>
  </div>
</template>

<script>
import OneStopInfoFill from "./oneStopInfoFill";
import OneStopInfoConfirm from "./oneStopInfoConfirm";
import OneStopSuccess from "./oneStopSuccess";
import stepErrer from "src/components/stepErrer";
import UDialog from "src/components/common/ukDialog/ukDialog";
export default {
  components: {
    OneStopInfoFill,
    OneStopInfoConfirm,
    OneStopSuccess,
    UDialog,
    stepErrer,
  },
  data() {
    return {
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
      steps: "infoFill",
      showFlag: false,
      formData: {},
    };
  },
  computed: {
    activeIndex() {
      return this.steps == "infoFill" ? 0 : this.steps == "infoConfirm" ? 1 : 2;
    },
  },
  methods: {
    transConfirm() {
      this.steps = "infoConfirm";
    },
    transReset() {
      this.formData = {
        transOutAcct: "",
        transOutBranch: "",
        transInAcct: "",
        transInName: "",
        transInBranch: "",
        transType: "0",
        payeeAcctType: "0",
        transWay: "0",
        savePayee: "",
        transMoney: "",
        transMoneyUpper: "",
        notifyPayee: "0",
        apppointmentProcess: "0",
        processDate: "",
        processTime: "",
        processPhone: "",
        transPhone: "",
        transPurpose: "",
        transPostscript: "",
        transRemark: "",
        accName: "",
        bankName: "",
        nickName: "",
      };
    },
    //信息确认提交
    transSubmit() {
      this.showFlag = true;
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

    transClose() {
      this.steps = "infoFill";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>