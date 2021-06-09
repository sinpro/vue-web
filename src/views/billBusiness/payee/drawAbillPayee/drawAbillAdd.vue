<template>
  <div class="drawAbillAdd">
    <title-bar title="添加收款人"></title-bar>
    <el-form
      ref="formData"
      label-width="312px"
      :rules="rules"
      :model="formData"
    >
      <el-form-item label="收款人类型:" prop="region">
        <el-select v-model="formData.region" placeholder="--请选择--">
          <el-option
            v-for="(region, index) in accountList"
            :key="index"
            :label="region.label"
            :value="region.val"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收款账号:" prop="region">
        <el-input v-model="formData.keyWord"></el-input>
      </el-form-item>
      <el-form-item label="收款银行:" prop="region">
        <el-input v-model="formData.keyWord"></el-input>
        <el-button type="text" class="ml10" @click="bankNameCodeFlag = true"
          >行名行号查询</el-button
        >
      </el-form-item>
    </el-form>
    <el-row class="tc mtb56">
      <el-button @click="" size="medium">返回</el-button>
      <el-button type="primary" @click="" size="medium">提交</el-button>
    </el-row>

    <bankNameCode v-model="bankNameCodeFlag"></bankNameCode>
  </div>
</template>

<script>
import bankNameCode from "../../components/bankNameCode";

export default {
  components: {
    bankNameCode,
  },
  data() {
    return {
      formData: {},
      rules: [],
      bankNameCodeFlag: false,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.drawAbillAdd {
}
</style>

