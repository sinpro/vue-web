<template>
  <div class="one-stop-transfer" id="oneStopTransfer">
    <el-form
      ref="formData"
      :model="formData"
      :rules="formRules"
      label-width="312px"
    >
      <title-bar title="票据信息"></title-bar>
      <el-form-item label="企业名称:">
        <el-input v-model="formData.accName" disabled v-support></el-input>
      </el-form-item>
      <el-form-item label="账户:" prop="accName">
        <el-select v-model="formData.accType" v-support placeholder="请选择">
          <el-option value="0" label="个人支付账户"></el-option>
          <el-option value="1" label="单位支付账户"></el-option>
          <el-option value="2" label="备付金账号"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="票据类型:" prop="accNo">
        <el-select v-model="formData.accType" v-support placeholder="请选择">
          <el-option value="0" label="个人支付账户"></el-option>
          <el-option value="1" label="单位支付账户"></el-option>
          <el-option value="2" label="备付金账号"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出票日期:" prop="bankName">
        <el-input v-model="formData.disabled"  v-support></el-input>
        <div class="ml16 gray2 f14">出票日期默认为当日日期</div>
      </el-form-item>
      <el-form-item label="到期日期:" prop="accType">
        <el-date-picker
          v-model="formData.value1"
          type="date"
          placeholder="请选择"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="金额(元):">
        <el-input
          v-model="formData.disabled"
          v-support
          @input.native="changeInput"
        ></el-input>
      </el-form-item>
      <el-form-item label="转账方式:" prop="resource" v-if="formData.payMoney">
      </el-form-item>
      <el-form-item
        label="转出日期:"
        v-if="formData.resource == '预约'"
        prop="transferDate"
      >
        <el-date-picker
          v-model="formData.transferDate"
          type="date"
          placeholder="选择转出日期"
        >
        </el-date-picker>
      </el-form-item>

      <title-bar title="收款人信息"></title-bar>
      <el-form-item label="收款人名称:" prop="outlets">
        <el-input v-model="formData.outlets" placeholder="请输入"></el-input>
        <el-button type="text" class="ml10" @click="payeeFlag = true"
          >收款人名册</el-button
        >
      </el-form-item>
      <el-form-item label="收款人账号:" prop="outlets">
        <el-input v-model="formData.outlets" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="收款人开户行名称:" prop="outlets">
        <el-input v-model="formData.outlets" placeholder="请输入"></el-input>
        <el-button type="text" class="ml10" @click="bankNameCodeFlag = true"
          >行名行号查询</el-button
        >
      </el-form-item>
      <el-form-item label="收款人开户行行号:" prop="outlets">
        <el-input v-model="formData.outlets" placeholder="请输入"></el-input>
      </el-form-item>
      <title-bar title="其他信息"></title-bar>
      <el-form-item label="能否转账:" prop="useFor">
        <el-radio-group v-model="formData.radio">
          <el-radio :label="3">可转让</el-radio>
          <el-radio :label="6">不可转让</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="交易合同号:" prop="useFor">
        <el-input v-model="formData.outlets" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="备注:">
        <el-input
          placeholder="请输入备注"
          v-model="formData.note"
          maxlength="10"
          show-word-limit
          v-support
        >
        </el-input>
      </el-form-item>
    </el-form>
    <el-row class="tc mtb30">
      <el-button type="primary" @click="addTable" size="mini">添加</el-button>
    </el-row>
    <p class="leftBar">出票信息</p>
    <el-table :data="tableData" stripe>
      <el-table-column prop="id" label="票据类型"> </el-table-column>
      <el-table-column prop="name" label="出票日期"> </el-table-column>
      <el-table-column prop="code" label="到期日期"> </el-table-column>
      <el-table-column prop="code" label="票据金额:"> </el-table-column>
      <el-table-column prop="code" label="收款人名称"> </el-table-column>
      <el-table-column prop="code" label="承兑人名称"> </el-table-column>
      <el-table-column prop="code" label="是否转让"> </el-table-column>
      <el-table-column prop="name" label="操作" width="82" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="openInfo(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="tc mtb56">
      <el-button type="primary" @click="transConfirm">下一步</el-button>
    </el-row>

    <el-dialog title="默认大" :visible.sync="infoFlay" size="medium" text>
      <title-bar title="票据信息"></title-bar>
      <div class="cen-form flex alc wrap">
        <div class="item">
          <span class="label cp2">企业名称</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">收款人名称</span>
          <span class="value">145645645646546546</span>
        </div>
        <div class="item">
          <span class="label cp2">账号</span>
          <span class="value">1000000元</span>
        </div>
        <div class="item">
          <span class="label cp2">收款人账号</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">票据类型</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">收款人开户行名称</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">出票日期</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">收款人开户行行号</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">到期日期</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">承兑人类型</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">金额</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">标题名称</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">大写金额</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">能否转让</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">交易合同号</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">出票备注</span>
          <span class="value">12笔</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="infoFlay = false">确认</el-button>
      </span>
    </el-dialog>
    <bankNameCode v-model="bankNameCodeFlag"></bankNameCode>
    <payee v-model="payeeFlag"></payee>
  </div>
</template>

<script>
import mathTools from "utils/mathTools.js";
import bankNameCode from "../../components/bankNameCode";
import payee from "../../components/payee";

export default {
  components: {
    bankNameCode,
    payee,
  },
  props: {
    tableData: {
      Type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      bankNameCodeFlag: false,
      payeeFlag: false,
      infoFlay: false,
      infoData: {},
      formData: {},
      formRules: {
        transOutAcct: [
          {
            required: true,
            message: "请选择付款账号",
            trigger: "change",
          },
        ],
        transferDate: [
          {
            required: true,
            message: "请选择转出日期",
            trigger: "change",
          },
        ],
        bankName: [
          {
            required: true,
            message: "请选择收款银行",
            trigger: "change",
          },
        ],
        accType: [
          {
            required: true,
            message: "请选择收款账户类型",
            trigger: "change",
          },
        ],
        outlets: [
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
        accNo: [
          {
            required: true,
            message: "请选择收款账号",
            trigger: "change",
          },
        ],
        useFor: [
          {
            required: true,
            message: "请选择用途",
            trigger: "change",
          },
        ],
        accName: [
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
  created() {},
  methods: {
    addTable() {
      // this.$refs["formData"].validate((valid) => {
      //   if (valid) {
      this.tableData.push(this.formData);
      // } else {
      //   console.log("error submit!!");
      //   return false;
      // }
      // });
    },
    openInfo(data) {
      this.infoData = data;
      this.infoFlay = true;
    },
    //提交
    changeInput(e) {
      let value = mathTools.formattingMoney(e.target.value);
      e.target.value = mathTools.addDecollator(value);
    },
    transConfirm() {
      window.sessionStorage.setItem(
        "billDrawTableData",
        JSON.stringify(this.tableData)
      );
      this.$emit("transConfirm");
    },
  },
  filters: {},
};
</script>

<style lang="scss">
.one-stop-transfer {
  .el-radio {
    margin-right: 53px;
  }
  .cen-form {
    align-items: flex-start;
    .item {
      width: 50%;
      margin-bottom: 24px;
      .label {
        display: inline-block;
        width: 160px;
        text-align: right;
        margin-right: 24px;
      }
    }
  }
}
</style>