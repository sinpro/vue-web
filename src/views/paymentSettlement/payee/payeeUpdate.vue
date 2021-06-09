<template>
  <div class="payeeUpdate">
    <title-bar title="修改收款人"></title-bar>
    <el-form
      ref="formData"
      :model="formData"
      :rules="formRules"
      label-width="312px"
    >
      <el-form-item label="收款户名:" prop="accName">
        <el-input v-model="formData.accName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="昵称:" prop="accName">
        <el-input v-model="formData.accName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="收款账号:" prop="accName">
        <el-input v-model="formData.accName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="收款银行:" prop="accName">
        <el-input v-model="formData.accName" placeholder="请输入"></el-input>
        <el-button type="text" class="ml10" @click="showBankList"
          >银行查询</el-button
        >
      </el-form-item>
      <el-form-item label="网点:" prop="outlets">
        <el-input
          v-model="formData.outlets"
          placeholder="请选择网点"
        ></el-input>
        <el-button type="text" class="ml10" @click="outletsFlag = true"
          >模糊查询</el-button
        >
      </el-form-item>
      <el-form-item label="分组:" prop="accName">
        <droupSelect
          v-model="formData.useFor"
          placeholder="请选择分组"
        ></droupSelect>
      </el-form-item>
    </el-form>
    <el-row class="tc mtb56">
      <el-button size="medium">取消</el-button>
      <el-button type="primary" size="medium">确认修改</el-button>
    </el-row>
    <bank-list v-model="BankListSwitch" @bankSelect="bankSelect"></bank-list>
    <outlets-list
      v-model="outletsFlag"
      @bankSelect="outletsSelect"
    ></outlets-list>
  </div>
</template>

<script>
import BankList from "../components/bankList"; //银行查询
import OutletsList from "../components/outletsList"; //网点查询
import droupSelect from "../components/droupSelect"; //分组
export default {
  components: {
    BankList,
    OutletsList,
    droupSelect,
  },
  name: "",
  data() {
    return {
      formData: {},
      formRules: [],
      BankListSwitch: false,
      outletsFlag: false,
    };
  },
  methods: {
    showBankList() {
      //银行列表
      this.BankListSwitch = true;
    },
    bankSelect(bankItem) {
      this.$set(this.formData, "bankName", bankItem.bankName);
    },
    outletsSelect() {},
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.payeeUpdate {
}
</style>

