<template>
  <div class="one-stop-transfer">
    <el-form
      ref="formData"
      :model="formData"
      :rules="formRules"
      label-width="312px"
    >
      <title-bar title="付款人信息"></title-bar>
      <el-form-item label="付款账号:" prop="payAcctNo">
        <div>
          <div class="el-input__inner out-acct w320">
            <p class="lh20 mt10" v-if="formData.drweAcctNm">
              {{ formData.drweAcctNm }}|{{ formData.drweAcctOtherNm }}
            </p>
            <p>
              {{ formData.payAcctNo | acctFormat(formData.payAcctNo) }}
            </p>
          </div>
          <span class="ml10 vat inline-block w100">
            <el-checkbox
              v-if="!account.dfitAcctCd"
              v-model="formData.setDefault"
              >设置为默认账户</el-checkbox
            >
            <el-button type="text" @click="accountFlag = true"
              >账户查询</el-button
            >
          </span>
        </div>
        <p class="lh16 mt12 ml16" v-if="formData.payAcctNoMoney">
          余额
          <span class="money">{{
            formData.payAcctNoMoney | formatMoney(formData.payAcctNoMoney)
          }}</span>
          元
        </p>
      </el-form-item>
      <title-bar title="收款人信息"></title-bar>
      <el-form-item class="mt10" label="收款户名:" prop="rcvActNm">
        <el-autocomplete
          class="inline-input"
          v-model="formData.rcvActNm"
          :fetch-suggestions="querySearch"
          :trigger-on-focus="false"
          placeholder="请输入收款户名"
          @select="handleSelect"
        ></el-autocomplete>
        <el-button type="text" class="ml10" @click="searchPayee"
          >常用收款人</el-button
        >
      </el-form-item>
      <el-form-item label="收款账号:" prop="rcvmnyAcctNo">
        <el-input
          v-model="formData.rcvmnyAcctNo"
          placeholder="请输入收款账号"
          v-support
          @input.native="rcvmnyAcctNoInput"
        ></el-input>
      </el-form-item>
      <el-form-item label="收款银行:" prop="rcvmnyRwBnkName">
        <el-input
          v-model="formData.rcvmnyRwBnkName"
          placeholder="请选择收款银行"
          v-support
        ></el-input>
        <el-button type="text" class="ml10" @click="BankListSwitch = true"
          >银行查询</el-button
        >
      </el-form-item>
      <el-form-item label="收款账户类型:" prop="payOrgTransferType" v-if="">
        <el-select
          v-model="formData.payOrgTransferType"
          v-support
          placeholder="请选择收款账户类型"
        >
          <el-option value="0" label="个人支付账户"></el-option>
          <el-option value="1" label="单位支付账户"></el-option>
          <el-option value="2" label="备付金账号"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="转账金额:" prop="txAmt">
        <MoneyInput v-model="formData.txAmt" @input="handleInput"></MoneyInput>
      </el-form-item>
      <el-form-item
        label="转账方式:"
        prop="tsfacctManrCd"
        v-if="formData.txAmt"
      >
        <el-radio-group
          v-model="formData.tsfacctManrCd"
          :class="!isInnerBank ? 'ptb12' : 'ptb12 free'"
        >
          <el-radio value="1">实时</el-radio>
          <el-radio v-if="!isInnerBank" value="3">普通</el-radio>
          <el-radio value="4">次日</el-radio>
          <el-radio value="2">预约</el-radio>
        </el-radio-group>
        <div class="f14 mt12">
          <p>{{ formData.tsfacctManrCd | timeOfTransMeth }}</p>
          <p>
            手续费：
            <span class="money"
              >{{
              <!-- formatMoney -->
              1111 }}元</span
            >
            <el-button type="text" class="ml10" @click="settleFlag = true"
              >手续费标准</el-button
            >
          </p>
        </div>
      </el-form-item>
      <el-form-item
        label="转出日期:"
        v-if="formData.tsfacctManrCd == '2'"
        prop="transOutDate"
      >
        <el-date-picker
          v-model="formData.transOutDate"
          type="date"
          placeholder="选择转出日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item
        label="网点:"
        prop="rcvmnyRwBrchName"
        v-if="formData.tsfacctManrCd == '2'"
      >
        <el-input
          v-model="formData.rcvmnyRwBrchName"
          placeholder="请选择网点"
        ></el-input>
        <el-button type="text" class="ml10" @click="outletsFlag = true"
          >模糊查询</el-button
        >
      </el-form-item>
      <el-form-item label="用途:" prop="usg">
        <descSelect v-model="formData.usg"></descSelect>
      </el-form-item>
      <el-form-item label="备注:">
        <el-input
          type="textarea"
          placeholder="请输入备注"
          v-model="formData.remrk"
          show-word-limit
          resize="none"
          v-support
          :autosize="{ minRows: 2, maxRows: 6 }"
        >
        </el-input>
      </el-form-item>
    </el-form>
    <el-row class="tc mt56 mb15">
      <el-button type="primary" @click="transConfirm">下一步</el-button>
    </el-row>
    <div class="wPro">
      <p>温馨提示：</p>
      <p>
        1.本功能支持向行内、行外的个人账户、企业账转账，向支付机构账户转账，向国点编号缴费；
      </p>
      <p>2.可选择已下挂的母子账户或已委托的分公司账户对外转账汇款；</p>
      <p>3.单位账户转个人账户超过15万以上，需在用途或备注栏注明事由；</p>
      <p>
        4.电信网络违法犯罪侵害广大金融消费者的合法权益，为保障您的资金安全，请不要向陌生人转账汇款。
      </p>
    </div>

    <!-- 账户查询 -->
    <account-list
      v-model="accountFlag"
      @accoutConfirm="accoutConfirm"
    ></account-list>
    <!-- 常用收款人 -->
    <payee-list
      v-if="payeeFlag"
      :payeeFlag="payeeFlag"
      @handleClose="payeeFlag = false"
      @payeeConfirm="payeeConfirm"
    ></payee-list>
    <!-- 银行查询 -->
    <bank-list v-model="BankListSwitch" @bankSelect="bankSelect"></bank-list>
    <!-- 网点查询   -->
    <outlets-list v-model="outletsFlag"></outlets-list>
    <settle-standard v-model="settleFlag"></settle-standard>
  </div>
</template>

<script>
import mathTools from "utils/mathTools.js";
import AccountList from "../components/AccountList"; //账户查询
import PayeeList from "../components/payeeList"; //收款人列表
import SettleStandard from "../components/settleStandard"; //结算标准
import BankList from "../components/bankList"; //银行查询
import OutletsList from "../components/outletsList"; //网点查询
import descSelect from "../components/descSelect";
export default {
  components: {
    AccountList,
    PayeeList,
    SettleStandard,
    BankList,
    OutletsList,
    descSelect,
  },
  props: {
    formData: {
      Type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      first: "first",
      visible: false,
      isInnerBank: true,
      outletsFlag: false,
      account: {},

      accountFlag: false, //账户查询
      payeeFlag: false, //收款人列表
      settleFlag: false, //结算标准
      BankListSwitch: false, //查询银行列表
      form: {
        type: "",
        ofen: "",
      },
      formRules: {
        payAcctNo: [
          {
            required: true,
            message: "请选择付款账号",
            trigger: "change",
          },
        ],
        transOutDate: [
          {
            required: true,
            message: "请选择转出日期",
            trigger: "change",
          },
        ],
        rcvmnyRwBnkName: [
          {
            required: true,
            message: "请选择收款银行",
            trigger: "change",
          },
        ],
        payOrgTransferType: [
          {
            required: true,
            message: "请选择收款账户类型",
            trigger: "change",
          },
        ],
        rcvmnyRwBrchName: [
          {
            required: true,
            message: "请选择网点",
            trigger: "change",
          },
        ],
        area: [
          {
            required: true,
            message: "请选择地区",
            trigger: "change",
          },
        ],
        city: [
          {
            required: true,
            message: "请选择地区",
            trigger: "change",
          },
        ],
        rcvmnyAcctNo: [
          {
            required: true,
            message: "请选择收款账号",
            trigger: "change",
          },
        ],
        txAmt: [
          {
            required: true,
            message: "请选择收款账号",
            trigger: "change",
          },
        ],
        usg: [
          {
            required: true,
            message: "请选择用途",
            trigger: "change",
          },
        ],
        rcvActNm: [
          {
            required: true,
            message: "请输入收款账户户名",
            trigger: "blur",
          },
        ],
        transInBranch: [
          {
            required: true,
            message: "请输入收款账户开户行",
            trigger: "blur",
          },
        ],
        payeeAcctType: [
          {
            required: true,
            message: "请选择收款方账户类型",
            trigger: "change",
          },
        ],
        transMoney: [
          {
            required: true,
            message: "请输入转账金额",
            trigger: "blur",
          },
        ],
        transType: [
          {
            required: true,
            message: "请选择转账类型",
            trigger: "change",
          },
        ],
        transWay: [
          {
            required: true,
            message: "请选择转账方式",
            trigger: "change",
          },
        ],
      },
    };
  },
  created() {
    this.getAccount();
  },
  methods: {
    //查默认账户
    getAccount() {
      this.$http
        .request(this, "POST", "TC010517.do")
        .then((res) => {
          this.account = res.body.data.acctInfo;
          this.formData.drweAcctNm = this.account.acctNm;
          this.formData.drweAcctOtherNm = this.account.accAlias;
          this.formData.payAcctNo = this.account.acctNo;
          this.formData.payAcctNoMoney = this.account.acctUsablBal;
        })
        .catch(function (error) {});
    },

    //查询收款人
    searchPayee() {
      this.payeeFlag = true;
    },
    //收款人输入框查询
    querySearch(queryString, cb) {
      this.$http
        .request(this, "POST", "UC040001.do", { searchKey: queryString })
        .then((res) => {
          cb(res.body);
        })
        .catch(function (error) {});
    },
    handleSelect(data) {
      this.formData.rcvmnyAcctNo;
      this.formData.rcvmnyRwBnkName;
    },
    //账户查询弹窗选择回调
    accoutConfirm(acctObj) {
      this.formData.acctNm = acctObj.acctNm;
      this.formData.accAlias = acctObj.accAlias;
      this.formData.acctNo = acctObj.acctNo;
      this.formData.acctUsablBal = acctObj.acctUsablBal;
    },
    rcvmnyAcctNoInput(e) {
      e.target.value = mathTools.formatBankNo(e.target.value) || "";
    },

    //常用收款人弹窗选择回调
    payeeConfirm(acctObj) {
      this.payeeFlag = false;
      this.formData.rcvActNm = acctObj.rcvActNm;
      this.formData.rcvmnyAcctNo = acctObj.rcvmnyAcctNo;
      this.formData.rcvmnyRwBnkNo = acctObj.banNo;
      this.formData.rcvmnyRwBnkName = acctObj.rcvmnyRwBnkName;
    },
    //银行查询弹窗选择回调
    bankSelect(bankItem) {
      this.$set(this.formData, "rcvmnyRwBnkName", bankItem.rcvmnyRwBnkName);
    },
    //收款行选择确认
    bankConfirm(bankItem) {
      // console.log('bankItem:', bankItem)
      this.formData.transInBranch = bankItem.rcvmnyRwBnkName;
    },
    //切换转账类型、清空页面校验信息
    transTypeChange() {
      this.$refs["formData"].clearValidate();
    },
    //金额输入框只能输入数字及小数点后两位
    handleInput(e) {},
    handleFocus(e) {
      this.visible = e.target.value ? true : false;
    },
    handleBlur(e) {
      this.visible = false;
    },
    //提交
    transConfirm() {
      this.$refs["formData"].validate((valid) => {
        if (valid) {
          this.$emit("transConfirm");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  filters: {
    timeOfTransMeth(val) {
      // console.log(val)
      switch (val) {
        case "实时":
          return "预计5分钟内到账";
          break;
        case "次日":
          return "预计次日到账，实际到账时间以对方行入账为准。";
          break;
        case "预约":
          return "根据预约时间发起转账";
          break;
        case "普通":
          return "预计2小时内到账，实际到账时间以对方行入账为准。";
          break;
      }
    },
    //账号格式化
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
.one-stop-transfer {
  .out-acct {
    min-height: 90px;
    height: auto !important;
  }
  .free {
    .el-radio {
      margin-right: 53px;
    }
  }
}
</style>