<template>
  <div class="pledgeStep">
    <steps :stepsList="stepsList" :activeIndex="activeIndex"></steps>

    <div v-if="steps == 'infoFill'">
      <title-bar title="质押申请"></title-bar>
      <el-form
        ref="formData"
        label-width="312px"
        :rules="rules"
        :model="formData"
      >
        <el-form-item label="质权人类型:" prop="keyWord">
          <el-radio-group v-model="formData.radio">
            <el-radio label="非银行">非银行</el-radio>
            <el-radio label="银行">银行</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="质权人名称:"
          prop="keyWord"
          v-if="formData.radio == '银行'"
        >
          <el-input v-model="formData.keyWord"></el-input>
        </el-form-item>
        <el-form-item
          label="质权人账号:"
          prop="keyWord"
          v-if="formData.radio == '银行'"
        >
          <el-input v-model="formData.keyWord"></el-input>
        </el-form-item>
        <el-form-item label="质权人开户行名称:" prop="keyWord">
          <el-input v-model="formData.keyWord"></el-input>
        </el-form-item>
        <el-form-item label="质权人开户行行号:" prop="keyWord">
          <el-input v-model="formData.keyWord"></el-input>
        </el-form-item>
        <el-form-item label="质押备注:" prop="keyWord">
          <el-input v-model="formData.keyWord"></el-input>
        </el-form-item>
      </el-form>
      <div class="tac mtb56">
        <el-button @click="" size="medium">取消</el-button>
        <el-button type="primary" @click="" size="medium">下一步</el-button>
      </div>
    </div>
    <div v-if="steps == 'infoConfirm'">
      <title-bar title="票据信息确认"></title-bar>
      <el-table :data="tableData" stripe>
        <el-table-column type="selection" width="104"> </el-table-column>
        <el-table-column prop="id" label="票号" width="400"> </el-table-column>
        <el-table-column prop="id" label="票据类型" width="140">
        </el-table-column>
        <el-table-column prop="name" label="出票日期" width="140">
        </el-table-column>
        <el-table-column prop="code" label="到期日期" width="140">
        </el-table-column>
        <el-table-column prop="code" label="票据金额(元)" width="140">
        </el-table-column>
        <el-table-column prop="code" label="收款人名称" width="140">
        </el-table-column>
        <el-table-column prop="code" label="承兑人名称" width="140">
        </el-table-column>
        <el-table-column prop="code" label="是否转让" width="140">
        </el-table-column>
      </el-table>
      <title-bar title="质押信息确认"></title-bar>
      <div class="cen-form flex alc wrap">
        <div class="item">
          <span class="label cp2">质权人类型</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">质权人开户行名称</span>
          <span class="value">最多八个最多八个</span>
        </div>
        <div class="item">
          <span class="label cp2">质权人开户行行号</span>
          <span class="value"></span>
        </div>
      </div>
      <div class="tac mtb56">
        <el-button @click="" size="medium">上一步</el-button>
        <el-button type="primary" @click="" size="medium">提交</el-button>
      </div>
    </div>
    <div v-if="steps == 'success'">
      <auditProcess :list="list"></auditProcess>
    </div>
  </div>
</template>
<script>
import mathTools from "utils/mathTools.js";
import auditProcess from "components/auditProcess/index.vue";

export default {
  components: { auditProcess },
  data() {
    return {
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
      steps: "infoFill",

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
      tableData: [],
      rules: {
        bankName: [
          { required: true, message: "请选择银行名称", trigger: "change" },
        ],
        region: [{ required: true, message: "请选择地区", trigger: "change" }],
      },

      formData: {},
    };
  },
  computed: {
    activeIndex() {
      return this.steps == "infoFill" ? 0 : this.steps == "infoConfirm" ? 1 : 3;
    },
  },
  methods: {
    NumInput(e) {
      e.target.value = mathTools.formattingMoney(e.target.value);
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    search() {
      this.$refs.formData.validate((valid) => {
        if (valid) {
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss">
.pledgeStep {
  .el-radio {
    margin-right: 53px;
  }
  .cen-form {
    align-items: flex-start;
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
}
</style>