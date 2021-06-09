<template>
  <div class="onTheDial">
    <steps :stepsList="stepsList" :activeIndex="activeIndex"></steps>

    <div class="infoFill" v-if="steps == 'infoFill'">
      <el-form
        ref="formData"
        label-width="312px"
        :rules="rules"
        :model="formData"
      >
        <title-bar title="付款人信息"></title-bar>
        <el-form-item label="付款账号:">
          <el-input v-model="formData.kay"></el-input>
          <el-button type="text" class="ml10" @click="accountFlag = true"
            >账户查询</el-button
          >
        </el-form-item>

        <title-bar title="收款人信息"></title-bar>
        <el-form-item label="收款账户:" prop="transOutAcct">
          <el-input v-model="formData.kay"></el-input>
          <el-button type="text" class="ml10" @click="accountFlag = true"
            >账户查询</el-button
          >
        </el-form-item>
        <el-form-item label="上划金额:" prop="money">
          <el-input v-model="formData.money" @input.native="moneyInput">
          </el-input>
        </el-form-item>
        <el-form-item label="用途:" prop="useFor">
          <descSelect v-model="formData.useFor"></descSelect>
        </el-form-item>
        <el-form-item label="备注:" prop="useFor">
          <el-input
            type="text"
            v-model="formData.desc"
            maxlength="10"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="tac mtb56">
        <el-button @click="" type="primary">下一步</el-button>
      </div>
      <div class="wPro">
        <p>温馨提示</p>
        <p>
          1.通过本功能总公司可主动发内部划拨指令，将某个已委托的分公司账户资金划至另一分公司账户；
        </p>
        <p>2.收、付款账户均为分公司账户。</p>
      </div>
    </div>
    <div class="infoConfirm" v-if="steps == 'infoConfirm'">
      <title-bar title="资金上划确认"></title-bar>
      <div class="content">
        <div class="card">
          <div class="card-left">
            <span class="card-title bgg">付款账户</span>
            <div class="card-code">
              <p class="f18 fold lh34">{{ formData.transOutAcct }}</p>
              <p class="f16 gray3">{{ formData.transOutAlise }}</p>
            </div>
            <div class="card-name bordert f16">
              {{ formData.bankName }}
            </div>
          </div>
          <div class="card-right p20 borderbox">
            <p class="f20 fold cg lh20">付款户名</p>
            <p class="mt10 gray2">{{ formData.transOutName }}</p>
          </div>
        </div>
        <div class="card-cen flex alc">
          <img class="ml20" src="" alt="" />
          <div class="ml10">
            <p>
              <span class="moneybold f20">{{
                formData.payMoney | formatMoney
              }}</span
              ><span class="ml8"
                >(大写：{{ formData.payMoney | formatChinese }} )</span
              >
            </p>
            <p class="mt10">
              手续费：{{ formData.payMoneyCharge | formatMoney }}元
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-left">
            <span class="card-title bgy">收款账户</span>
            <div class="card-code">
              <p class="f18 fold lh34">{{ formData.transOutAcct }}</p>
              <p class="f16 gray3">{{ formData.transOutAlise }}</p>
            </div>
            <div class="card-name bordert f16">
              {{ formData.bankName }}
            </div>
          </div>
          <div class="card-right p20 borderbox">
            <p class="f20 fold cg lh20">收款户名与网点</p>
            <p class="mt10 gray2 h50">{{ formData.transOutName }}</p>
            <p class="lh40 gray2 bordert f16">{{ formData.transOutName }}</p>
          </div>
        </div>
      </div>
      <div class="cen-form flex alc wrap">
        <div class="item">
          <span class="label cp2">用途</span>
          <span class="value">最多八个最多八个</span>
        </div>
        <div class="item">
          <span class="label cp2">备注</span>
          <span class="value">最多十个最多十个最多</span>
        </div>
      </div>
      <el-row class="tc mtb56">
        <el-button @click="confirmBack" size="medium">上一步</el-button>
        <el-button type="primary" @click="transSubmit" size="medium"
          >提交</el-button
        >
      </el-row>
    </div>
    <div class="success" v-if="steps == 'success'">
      <span>上划金额： </span>
      <span class="moneybold f20">10000000元</span>
      <span class="gray2">(大写：壹贰叁肆)</span>
      <auditProcess :list="list"></auditProcess>
    </div>

    <stepErrer
      class="mt40"
      v-if="steps == 'errer'"
      desc="提交结果页用于反馈一系列操作任务都处理结果，本文字区域可以展示简单的补充说明。"
    >
    </stepErrer>
    <account-list
      v-model="accountFlag"
      @accoutConfirm="accoutConfirm"
    ></account-list>
  </div>
</template>
<script>
import AccountList from "../components/accountList"; //账户查询
import stepErrer from "src/components/stepErrer";
import mathTools from "utils/mathTools.js";
import auditProcess from "src/components/auditProcess/index.vue";
import descSelect from "../../paymentSettlement/components/descSelect";
export default {
  components: {
    stepErrer,
    auditProcess,
    AccountList,
    descSelect,
  },
  data() {
    return {
      accountFlag: false,
      activeName: "fdDraw",
      formData: {},
      mounyBig: "",
      list: [
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
      ],
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
      rules: {
        bankName: [
          { required: true, message: "请选择银行名称", trigger: "change" },
        ],
        region: [{ required: true, message: "请选择地区", trigger: "change" }],
      },
    };
  },
  computed: {
    activeIndex() {
      return this.steps == "infoFill" ? 0 : this.steps == "infoConfirm" ? 1 : 2;
    },
  },
  methods: {
    accoutConfirm(acctObj) {
      this.formData.transOutName = acctObj.acctName;
      this.formData.transOutAlise = acctObj.acctAlise;
      this.formData.transOutAcct = acctObj.acctNo;
      this.formData.transOutBalance = acctObj.balance;
    },
    moneyInput(e) {
      let value = mathTools.formattingMoney(e.target.value);
      e.target.value = mathTools.addDecollator(value);
      this.mounyBig = mathTools.formatChinese(e.target.value);
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
<style lang="scss">
.onTheDial {
  .out-acct {
    min-height: 90px;
    height: auto !important;
  }
  .infoConfirm {
    .cen-form {
      align-items: flex-start;
      margin-top: 34px;
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
    .content {
      width: 830px;
      margin: 0 auto;
      .card {
        display: flex;
        align-items: center;
        .card-left {
          height: 170px;
          width: 320px;
          box-shadow: 0px 2px 9px 0px #0000001a;
          border-radius: 10px;
          .card-title {
            border-top-left-radius: 10px;
            border-bottom-right-radius: 10px;
            line-height: 35px;
            width: 105px;
            text-align: center;
            color: #ffffff;
            display: block;
          }
          .card-code {
            padding: 24px 26px 20px;
          }
          .card-name {
            width: 288px;
            box-sizing: border-box;
            padding-left: 10px;
            margin: 0 auto;
            line-height: 40px;
          }
        }
        .card-right {
          background: #f7f7f7;
          height: 140px;
          width: 510px;
          .h55 {
            height: 55px;
          }
        }
      }
      .card-cen {
        height: 130px;
      }
    }
  }
}
</style>