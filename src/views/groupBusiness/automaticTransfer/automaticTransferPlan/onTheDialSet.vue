<template>
  <div class="onTheDialSet">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      type="card"
      v-if="steps == 'infoFill'"
    >
      <el-tab-pane label="资金上划计划设置" name="onTheDialSet"></el-tab-pane>
      <el-tab-pane label="资金下拨计划设置" name="stirSet"></el-tab-pane>
    </el-tabs>
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
          <div class="f14">可用余额：<span class="money"></span></div>
          <el-button type="text" class="ml10" @click="accountFlag = true"
            >账户查询</el-button
          >
        </el-form-item>
        <title-bar title="收款人信息"></title-bar>
        <el-form-item label="收款账户:" prop="transOutAcct">
          <el-input v-model="formData.kay"></el-input>
        </el-form-item>
        <el-form-item label="划拨方式:" prop="money">
          <el-select v-model="formData.value" placeholder="请选择">
            <el-option label="按百分比上划" value="0"> </el-option>
            <el-option label="零头以上整体上划" value="1"> </el-option>
            <el-option label="全额上划" value="2"> </el-option>
            <el-option label="定期留存上划" value="3"> </el-option>
            <el-option label="定额上划" value="4"> </el-option>
          </el-select>
          <div class="money f14">
            <span v-if="formData.value == 0"> 按照设置的百分比上划资金</span>
            <span v-if="formData.value == 2"> 将付款账户资金全部上划</span>
            <span v-if="formData.value == 3">
              付款账户仅保留设置的留存金额，其余资金全部上划</span
            >
          </div>
        </el-form-item>

        <el-form-item label="百分比:" prop="money" v-if="formData.value == 0">
          <el-input
            v-model="formData.money"
            @input.native="InputPercentage"
            placeholder="请输入0-99百分比值"
          >
          </el-input>
          <span>%</span>
        </el-form-item>
        <el-form-item label="留存金额:" prop="money" v-if="formData.value == 3">
          <el-input v-model="formData.money" @input.native="moneyInput">
          </el-input>
        </el-form-item>
        <el-form-item label="上划金额:" prop="money" v-if="formData.value == 4">
          <el-input v-model="formData.money" @input.native="moneyInput">
          </el-input>
        </el-form-item>
        <el-form-item label="零头单位:" prop="money" v-if="formData.value == 1">
          <el-radio-group v-model="formData.zero">
            <el-radio :label="3">百</el-radio>
            <el-radio :label="6">千</el-radio>
            <el-radio :label="9">万</el-radio>
            <el-radio :label="9">十万</el-radio>
            <el-radio :label="9">百万</el-radio>
            <el-radio :label="9">千万</el-radio>
            <el-radio :label="9">亿</el-radio>
          </el-radio-group>
          <div class="money f14" style="width: 460px">
            付款账户仅保留零头单位以下的资金，系统将其余部分全部上划，如零头
            单位选择”百”，超出百元以上的金额全部上划
          </div>
        </el-form-item>

        <el-form-item label="周期类型:" prop="type">
          <el-radio-group v-model="formData.radio">
            <el-radio :label="0">每日</el-radio>
            <el-radio :label="1">每周</el-radio>
            <el-radio :label="2">每月</el-radio>
            <el-radio :label="3">单次</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="计划执行日期:" prop="type">
          <el-date-picker
            v-if="formData.radio == 3"
            v-model="formData.time"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
          <el-radio-group v-model="formData.time" v-if="formData.radio == 2">
            <el-radio :label="i" v-for="i in 30" :key="i"
              >每月{{ i }}日</el-radio
            >
          </el-radio-group>
          <el-radio-group v-model="formData.time" v-if="formData.radio == 2">
            <el-radio :label="0">每周一</el-radio>
            <el-radio :label="1">每周二</el-radio>
            <el-radio :label="2">每周三</el-radio>
            <el-radio :label="3">每周四</el-radio>
            <el-radio :label="3">每周五</el-radio>
            <el-radio :label="3">每周六</el-radio>
            <el-radio :label="3">每周日</el-radio>
          </el-radio-group>
          <el-radio-group v-model="formData.time" v-if="formData.radio == 2">
            <el-radio :label="0">每周一</el-radio>
            <el-radio :label="1">每周二</el-radio>
            <el-radio :label="2">每周三</el-radio>
            <el-radio :label="3">每周四</el-radio>
            <el-radio :label="3">每周五</el-radio>
            <el-radio :label="3">每周六</el-radio>
            <el-radio :label="3">每周日</el-radio>
          </el-radio-group>
          <div class="money f14" v-if="formData.radio !== 3">
            下次计划执行日期：2021年02月02日
          </div>
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
          1.通过本功能总公司可制定资金上划计划，将已委托的分公司账户的资金上划到总公司的某个账户；
        </p>
        <p>2.付款账户为分公司账户，收款账户为总公司账户；</p>
        <p>3. 定额上划：按照设置的划拨金额上划资金；</p>
        <p>4. 定额留存上划：付款账户仅保留设置的留存金额，其余资金全部上划；</p>
        <p>5. 全额上划：将付款账户资金全部上划；</p>
        <p>
          6.
          零头以上整体上划：付款账户仅保留零头单位以下的资金，系统将其余部分全部上划，如您选择”百”，超出百元以上的金额全部上划；
        </p>
        <p>7. 按照百分比上划：按照设置的百分比上划资金。</p>
      </div>
    </div>
    <div class="infoConfirm" v-if="steps == 'infoConfirm'">
      <title-bar title="资金上划计划确认"></title-bar>
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
          <div class="ml10" v-if="formData.value == 0">
            <p>
              上划百分比
              <span class="money">30%</span>
            </p>
            <p class="mt10">按百分比上划</p>
          </div>
          <div class="ml10" v-if="formData.value == 1">
            <p>
              零头单位
              <span class="money">30%</span>
            </p>
            <p class="mt10">零头以上整体上划</p>
          </div>
          <div class="ml10" v-if="formData.value == 2">
            <p>全额上划</p>
          </div>
          <div class="ml10" v-if="formData.value == 3">
            <p>
              留存金额：
              <span class="money">1000000</span>（大写：整）
            </p>
            <p class="mt10">定额留存上划</p>
          </div>
          <div class="ml10" v-if="formData.value == 4">
            <p>
              上划金额：
              <span class="money">1000000</span>（大写：整）
            </p>
            <p class="mt10">定额上划</p>
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
      <span>划拨方式： </span>
      <span class="mr36">下次计划执行日期 ：2020-09-10</span>
      <span class="mr36">计划执行日期 ：2020-09-10</span>
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
import AccountList from "../../components/accountList"; //账户查询
import stepErrer from "src/components/stepErrer";
import mathTools from "utils/mathTools.js";
import auditProcess from "src/components/auditProcess/index.vue";
import descSelect from "../../../paymentSettlement/components/descSelect";
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
      activeName: "onTheDialSet",
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
    handleClick() {
      if (this.activeName == "stirSet") {
        this.$router.push({
          path:
            "/groupBusiness/automaticTransfer/automaticTransferPlan/stirSet",
        });
      }
    },
    accoutConfirm(acctObj) {
      this.formData.transOutName = acctObj.acctName;
      this.formData.transOutAlise = acctObj.acctAlise;
      this.formData.transOutAcct = acctObj.acctNo;
      this.formData.transOutBalance = acctObj.balance;
    },
    InputPercentage(e) {
      e.target.value = e.target.value.match(/[0-9][0-9]?/);
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
.onTheDialSet {
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