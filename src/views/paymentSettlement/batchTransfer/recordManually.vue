<template>
  <div class="recordManually">
    <el-form
      ref="formData"
      :model="formData"
      :rules="formRules"
      label-width="312px"
    >
      <title-bar title="付款人信息"></title-bar>
      <el-form-item label="付款账号:" prop="transOutAcct">
        <div>
          <div class="el-input__inner out-acct w320">
            <p class="lh20 mt10" v-if="formData.transOutName">
              {{ formData.transOutName }}|{{ formData.transOutAlise }}
            </p>
            <p v-if="formData.transOutName">
              {{ formData.transOutAcct | acctFormat(formData.transOutAcct) }}
            </p>
          </div>
          <el-button type="text" class="ml16 vat" @click="accountFlag = true"
            >账户查询</el-button
          >
        </div>
        <div class="f14 mt12 ml16" v-if="formData.transOutBalance">
          余额
          <span class="money">{{
            formData.transOutBalance | formatMoney(formData.transOutBalance)
          }}</span>
          元
        </div>
      </el-form-item>

      <title-bar title="收款人信息"></title-bar>
      <div class="flex jst mb20">
        <span class="f14 gray2 pointer">
          最多添加20个收款人信息，如需向更多人转账，请使用 <a>文件导入</a></span
        >
        <span class="f14 tar"
          >总笔数：{{ table.length }}笔
          <span class="ml40">总金额：12,333,444,00元</span></span
        >
      </div>
      <el-form ref="tableForm" label-width="0" :model="tableForm">
        <el-table :data="table" stripe style="width: 100%" input>
          <el-table-column
            prop="id"
            label="收款人账户"
            width="138"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <span v-if="!scope.row.update">{{ scope.row.transOutName }}</span>
              <el-form-item
                v-else
                :prop="scope.$index + 'transOutName'"
                :rules="[
                  {
                    required: true,
                    validator: rulesTransOutName,
                    message: '请输入收款户名',
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  v-model="scope.row.transOutName"
                  placeholder="请输入收款户名"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="收款账号"
            width="138"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <span v-if="!scope.row.update">{{ scope.row.transOutAcct }}</span>
              <el-form-item
                v-else
                :prop="scope.$index + 'transOutAcct'"
                :rules="[
                  {
                    required: true,
                    validator: rulesTransOutAcct,
                    message: '请输入收款账号',
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  v-model="scope.row.transOutAcct"
                  placeholder="请输入收款账号"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop="code"
            label="收款银行"
            width="138"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              <span v-if="!scope.row.update">{{ scope.row.bankName }}</span>
              <div v-else>
                <el-form-item
                  :prop="scope.$index + 'bankName'"
                  :rules="[
                    {
                      required: true,
                      validator: rulesBankName,
                      message: '请选择收款银行',
                      trigger: 'blur',
                    },
                  ]"
                >
                  <el-select
                    v-model="scope.row.bankName"
                    @change="getTransType"
                    @click.native="showBankList()"
                    filterable
                    allow-create
                    v-support
                    placeholder="请选择收款银行"
                  >
                  </el-select>
                </el-form-item>
                <el-form-item
                  v-if="scope.row.outletsFlagButton"
                  :prop="scope.$index + 'outlets'"
                  :rules="[
                    {
                      required: true,
                      validator: rulesOutlets,
                      message: '请选择网点',
                      trigger: 'blur',
                    },
                  ]"
                >
                  <el-input
                    v-model="scope.row.outlets"
                    placeholder="请选择网点"
                  ></el-input>
                  <el-button type="text" @click="outletsFlag = true"
                    >选择</el-button
                  >
                </el-form-item>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="code" label="转账金额(元)" width="138">
            <template slot-scope="scope">
              <span v-if="!scope.row.update">{{ scope.row.payMoney }}</span>
              <el-form-item
                v-else
                :prop="scope.$index + 'payMoney'"
                :rules="[
                  {
                    required: true,
                    validator: rulesPayMoney,
                    message: '请输入转账金额',
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  placeholder="请输入转账金额"
                  v-model="scope.row.payMoney"
                  @input.native="payMoneyChange(scope)"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
            prop="code"
            label="用途"
            show-overflow-tooltip
            width="138"
          >
            <template slot-scope="scope">
              <span v-if="!scope.row.update">{{ scope.row.useFor }}</span>
              <el-form-item
                v-else
                :prop="scope.$index + 'useFor'"
                :rules="[
                  {
                    required: true,
                    validator: rulesUseFor,
                    message: '请选择用途',
                    trigger: 'blur',
                  },
                ]"
              >
                <descSelect
                  v-model="scope.row.useFor"
                  placeholder="请选择用途"
                ></descSelect>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column prop="code" label="备注(非必填)" width="138">
            <template slot-scope="scope">
              <span v-if="!scope.row.update">{{ scope.row.note }}</span>
              <el-form-item v-else>
                <el-input
                  v-model="scope.row.note"
                  placeholder="备注(选填)"
                ></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="操作" width="115">
            <template slot-scope="scope">
              <el-button type="text" danger @click="tableDelect(scope)"
                >删除</el-button
              >
              <el-button
                type="text"
                v-if="!scope.row.update"
                @click="tableUpdate(scope)"
                >修改</el-button
              >
              <el-button type="text" v-else @click="tableSave(scope)"
                >保存</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-form>
      <div class="h40 wr100 border borderbox mb20 tac">
        <el-button type="text" icon="el-icon-plus" @click="addpayee"
          >新增收款人</el-button
        >
      </div>
      <p class="tar">
        <el-button type="text" @click="payeeFlag = true">常用收款人</el-button>
      </p>
      <title-bar title="转出方式"></title-bar>
      <el-form-item label="转出方式:" prop="transOutAcct">
        <el-radio-group v-model="formData.resource">
          <el-radio label="立即转出"></el-radio>
          <el-radio label="预约转出"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="转出日期:" prop="time">
        <el-date-picker
          v-model="formData.time"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>
    </el-form>

    <el-row class="tc mtb56">
      <el-button type="primary" @click="transConfirm">下一步</el-button>
    </el-row>
    <div class="wPro">
      <p>温馨提示</p>
      <p>1.一个批次最多可录入20个收款账户；</p>
      <p>2.批量转账手续费参考单笔转账手续费标准累加收取；</p>
      <p>3.批量转账非实时到账，您可以通过【转账交易查询】查询处理结果；</p>
      <p>
        4.电信网络违法犯罪侵害广大金融消费者都合法权益，为保障您的资金安全，请不要向陌生人转账汇款。
      </p>
    </div>

    <payee-list
      v-if="payeeFlag"
      type="checkbox"
      :payeeFlag="payeeFlag"
      @handleClose="payeeFlag = false"
      @payeeConfirm="payeeConfirm"
    ></payee-list>
    <account-list
      v-model="accountFlag"
      @accoutConfirm="accoutConfirm"
    ></account-list>
    <bank-list v-model="BankListSwitch" @bankSelect="bankSelect"></bank-list>
    <outlets-list v-model="outletsFlag"></outlets-list>
  </div>
</template>

<script>
import mathTools from "utils/mathTools.js";
import AccountList from "../components/AccountList"; //账户查询
import descSelect from "../components/descSelect";
import BankList from "../components/bankList"; //银行查询
import OutletsList from "../components/outletsList"; //网点查询
import PayeeList from "../components/payeeList"; //收款人列表
export default {
  components: {
    AccountList,
    OutletsList,
    BankList,
    PayeeList,
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
      tableForm: {},
      formRules: {},
      index: "",
      table: [
        {
          transOutName: "12",
          transOutAcct: "12",
          bankName: "21",
          payMoney: "12",
          useFor: "12",
          note: "12",
        },
      ],
      payeeFlag: false,
      accountFlag: false, //账户查询
      BankListSwitch: false,
      outletsFlag: false,
    };
  },
  created() {},
  methods: {
    rulesTransOutName(rule, value, callback) {
      if (this.table[this.index].transOutName === "") {
        callback(new Error("请输入收款户名"));
      } else {
        callback();
      }
    },
    rulesTransOutAcct(rule, value, callback) {
      if (this.table[this.index].transOutAcct === "") {
        callback(new Error("请输入收款账号"));
      } else {
        callback();
      }
    },
    rulesBankName(rule, value, callback) {
      if (this.table[this.index].bankName === "") {
        callback(new Error("请选择收款银行"));
      } else {
        callback();
      }
    },
    rulesOutlets(rule, value, callback) {
      if (this.outletsFlagButton) {
        if (this.table[this.index].outlets === "") {
          callback(new Error("请选择网点"));
        } else {
          callback();
        }
      } else {
        callback();
      }
    },
    rulesPayMoney(rule, value, callback) {
      if (this.table[this.index].payMoney === "") {
        callback(new Error("请输入转账金额"));
      } else {
        callback();
      }
    },
    rulesUseFor(rule, value, callback) {
      if (this.table[this.index].useFor === "") {
        callback(new Error("请选择用途"));
      } else {
        callback();
      }
    },
    getTransType() {},
    tableUpdate(scope) {
      this.$set(scope.row, "update", true);
      if (scope.row.payMoney) {
        if (Number(mathTools.delDecollator(scope.row.payMoney)) > 1000000) {
          this.$set(scope.row, "outletsFlagButton", true);
        } else {
          this.$set(scope.row, "outletsFlagButton", false);
        }
      } else {
        this.$set(scope.row, "outletsFlagButton", false);
      }
    },
    tableSave(scope) {
      this.index = scope.$index;
      this.$refs["tableForm"].validateField(
        [
          this.index + "transOutName",
          this.index + "transOutAcct",
          this.index + "bankName",
          this.index + "outlets",
          this.index + "payMoney",
          this.index + "useFor",
        ],
        (valid) => {
          console.log(valid);
          if (!valid) {
            this.table[scope.$index].update = false;
          } else {
            console.log("error submit!!");
            return false;
          }
        }
      );
    },
    tableDelect(scope) {
      this.table.splice(scope.$index, 1);
    },
    acctFormat(val) {
      if (val) {
        return mathTools.formatBankNo(val);
      }
    },
    payMoneyChange(scope) {
      let value = mathTools.formattingMoney(scope.row.payMoney);
      if (Number(value) > 1000000) {
        this.table[scope.$index].outletsFlagButton = true;
      } else {
        this.table[scope.$index].outletsFlagButton = false;
      }
      scope.row.payMoney = mathTools.addDecollator(value);
    },
    showBankList() {
      //银行列表
      this.BankListSwitch = true;
    },
    addpayee() {
      this.table.push({
        transOutName: "",
        transOutAcct: "",
        bankName: "",
        payMoney: "",
        useFor: "",
        note: "",
        update: true,
        outletsFlagButton: false,
      });
    },
    //常用收款人弹窗选择回调

    payeeConfirm(payeeList) {
      this.payeeFlag = false;
      this.table = this.table.concat(payeeList);
      console.log(this.table);
    },
    //账户查询弹窗选择回调
    accoutConfirm(acctObj) {
      this.formData.transOutName = acctObj.acctName;
      this.formData.transOutAlise = acctObj.acctAlise;
      this.formData.transOutAcct = acctObj.acctNo;
      this.formData.transOutBalance = acctObj.balance;
    },
    bankSelect(bankItem) {
      this.$set(this.formData, "bankName", bankItem.bankName);
    },
    transConfirm() {
      this.$refs["formData"].validate((valid) => {
        if (valid) {
          this.$set(this.formData, "table", this.table);
          this.$emit("transConfirm");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  filters: {
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
.recordManually {
  .out-acct {
    min-height: 90px;
    height: auto !important;
  }
  .el-table {
    .el-input {
      width: 126px;
      input {
        width: 126px;
      }
    }
  }
}
</style>