<template>
  <div class="descSelect">
    <el-select
      v-model="selectvalue"
      placeholder="请选择用途"
      @change="changeSelect"
    >
      <el-option
        v-for="(account, index) in useForList"
        :key="index"
        :value="account"
      >
        <div class="optionItem flex jst alc">
          <span>{{ account }}</span>
          <i class="el-icon-error" @click="index"></i>
        </div>
      </el-option>
      <div
        class="pointer bordert"
        style="padding: 12px"
        @click="visible = true"
      >
        <i class="el-icon-circle-plus-outline cg bold mr10"></i>新增用途
      </div>
    </el-select>
    <el-dialog
      title="新增用途"
      :visible.sync="visible"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :show-close="false"
      :before-close="handleClose"
      center
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
      >
        <el-form-item label="用途">
          <el-input
            v-model="ruleForm.item"
            placeholder="请选择用途"
            maxlength="8"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose" size="small">取消</el-button>
        <el-button type="primary" @click="toSubmit" size="small"
          >确定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      visible: false,
      ruleForm: {},
      rules: {
        item: [
          { required: true, message: "请输入用途", trigger: "blur" },
          //   { min: 1, max: 8, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
      selectvalue: this.value,
      useForList: ["转账", "转账2"],
    };
  },
  methods: {
    changeSelect() {
      this.$emit("input", this.selectvalue);
    },
    handleClose() {
      this.visible = false;
      this.ruleForm = {};
    },
    toSubmit() {
      this.visible = false;
    },
  },

  mounted() {},
};
</script>
<style lang="scss">
.descSelect {
  .el-dialog .el-input {
    width: 320px !important;
    input {
      width: 320px !important;
    }
  }
}
.optionItem {
  i{
    color: #d9d9d9;
  }
  i:hover {
    color: #eb3d3d;
  }
}
</style>