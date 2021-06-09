<template>
  <div class="pledgeStep">
    <steps :stepsList="stepsList" :activeIndex="activeIndex"></steps>

    <div v-if="steps == 'infoFill'">
      <title-bar title="追索信息录入"></title-bar>
      <el-form
        ref="formData"
        label-width="312px"
        :rules="rules"
        :model="formData"
      >
        <el-form-item label="追索金额:" prop="keyWord">
          <el-input
            v-model="formData.keyWord"
            @input.native="NumInput"
          ></el-input>
        </el-form-item>

        <el-form-item label="追索理由:" prop="keyWord">
          <el-select v-model="formData.keyWord"> </el-select>
        </el-form-item>
        <el-form-item label="追索备注:" prop="keyWord">
          <el-input v-model="formData.keyWord" maxlength="10" show-word-limit></el-input>
        </el-form-item>

        <title-bar title="被追索信息录入"></title-bar>
        <el-table :data="tableData" stripe>
          <el-table-column type="selection" width="80">
            <template slot-scope="scope">
              <el-radio v-model="radio" :label="scope.$index"></el-radio>
            </template>
          </el-table-column>
          <el-table-column prop="id" label="被追索人名称"> </el-table-column>
          <el-table-column prop="id" label="被追索人账号"> </el-table-column>
          <el-table-column prop="name" label="被追索人行号"> </el-table-column>
          <el-table-column prop="name" label="被追索人组织机构代码证">
          </el-table-column>
        </el-table>
      </el-form>
      <div class="tac mtb56">
        <el-button @click="" size="medium">返回</el-button>
        <el-button type="primary" @click="" size="medium">下一步</el-button>
      </div>
    </div>
    <div v-if="steps == 'infoConfirm'">
      <title-bar title="票据信息确认"></title-bar>
      <el-table :data="tableData" stripe>
        <el-table-column type="selection" width="80"> </el-table-column>
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
      <title-bar title="追索申请信息录入确认"></title-bar>
      <div class="cen-form flex alc wrap">
        <div class="item">
          <span class="label cp2">追索金额</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">追索理由</span>
          <span class="value">最多八个最多八个</span>
        </div>
        <div class="item">
          <span class="label cp2">被追索人名称</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">被追索人账号</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">被追索人行号</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">被追索人组织机构代码证</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">追索备注</span>
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
import auditProcess from "src/components/auditProcess/index.vue";

export default {
  components: { auditProcess },
  data() {
    return {
      radio: "",
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
      steps: "infoConfirm",

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