<template>
  <div class="acceptApply">
    <div v-if="step == 1">
      <title-bar title="提示承兑申请"></title-bar>
      <el-form
        ref="formData"
        label-width="120px"
        :inline="true"
        :rules="rules"
        :model="formData"
      >
        <el-form-item label="企业名称:" prop="keyWord">
          <el-input v-model="formData.keyWord"></el-input>
        </el-form-item>
        <el-form-item label="账号:" prop="bankName">
          <el-select v-model="formData.bankName" placeholder="--请选择--">
            <el-option
              v-for="(bankName, index) in accountList"
              :key="index"
              :label="bankName.label"
              :value="bankName.val"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="票据类型:" prop="region">
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
        <el-form-item label="出票日期:" prop="region">
          <el-date-picker
            v-model="formData.value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="票号:" prop="keyWord">
          <el-input
            v-model="formData.keyWord"
            placeholder="支持模糊查询"
          ></el-input>
        </el-form-item>
        <el-form-item label="票据金额:" prop="num">
          <el-input
            v-model="formData.minNum"
            placeholder="请输入"
            class="w145"
            @input.native="NumInput"
          ></el-input>
          <span class="mlr10 f16">~</span>
          <el-input
            v-model="formData.maxNum"
            placeholder="请输入"
            class="w145"
            @input.native="NumInput"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="tc mt16 mb56">
        <el-button @click="search" size="mini">重置</el-button>
        <el-button type="primary" @click="search" size="mini">查询</el-button>
      </div>
      <el-table :data="tableData" stripe>
        <el-table-column type="selection" width="104"> </el-table-column>
        <el-table-column prop="id" label="票号" width="364"> </el-table-column>
        <el-table-column prop="name" label="票据类型" width="144">
        </el-table-column>
        <el-table-column prop="code" label="出票日期" width="220">
        </el-table-column>
        <el-table-column prop="code1" label="到期日期" width="220">
        </el-table-column>
        <el-table-column prop="code2" label="票据金额(元)" width="260">
        </el-table-column>
        <el-table-column prop="code3" label="收款人名称" width="220">
        </el-table-column>
        <el-table-column prop="code4" label="承兑人名称" width="140">
        </el-table-column>
        <el-table-column prop="code5" label="是否转让" width="140">
        </el-table-column>
      </el-table>
      <el-pagination
        class="inline-block tar wr100"
        v-if="total / pageSize > 1"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :layout="
          total / pageSize > 30
            ? 'prev, pager, next, jumper'
            : 'prev, pager, next'
        "
        :total="total"
      >
      </el-pagination>
      <div class="tc mtb56">
        <el-button type="primary" @click="step = 2">下一步</el-button>
      </div>
    </div>
    <div v-if="step == 2">
      <title-bar title="确认信息"></title-bar>
      <el-table :data="selectTableData" stripe>
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
      <div class="tc mtb56">
        <el-button type="primary" @click="step = 3">下一步</el-button>
      </div>
    </div>
    <div v-if="step == 3">
      <auditProcess :list="list"></auditProcess>
      <div class="tc mtb56">
        <el-button type="primary" @click="step = 1">完成</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import mathTools from "utils/mathTools.js";
import auditProcess from "components/auditProcess/index.vue";

export default {
  components: {
    auditProcess,
  },
  data() {
    var validatePass = (rule, value, callback) => {
      let minNum = Number(mathTools.delDecollator(this.formData.minNum + ""));
      let maxNum = Number(mathTools.delDecollator(this.formData.maxNum + ""));
      if (minNum === "" || maxNum === "") {
        callback(new Error("请输入票据金额"));
      } else if (minNum < 0 || maxNum < 0) {
        callback(new Error("最小金额、最大金额必须大于0"));
      } else if (minNum > maxNum) {
        callback(new Error("最小金额不能大于最大金额"));
      } else {
        callback();
      }
    };
    return {
      step: 1,
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
      rules: {
        bankName: [
          { required: true, message: "请选择银行名称", trigger: "change" },
        ],
        region: [{ required: true, message: "请选择地区", trigger: "change" }],
        num: [
          {
            required: true,
            trigger: "change",
            validator: validatePass,
          },
        ],
      },
      accountList: [
        {
          label: "账号1",
          val: 0,
        },
        {
          label: "账号2",
          val: 1,
        },
      ],
      formData: {},
      tableData: [
        {
          id: "123456789009876543211231256884",
          name: "银行承兑汇票",
          code: "2020-02-02 12:00:00",
          code1: "2020-02-02 12:00:00",
          code2: "12121212121212121.00",
          code3: "华为股份有限公司",
          code4: "华为",
          code5: "是",
        },
      ],
      selectTableData: [
        {
          id: "123456789009876543211231256884",
          name: "银行承兑汇票",
          code: "2020-02-02 12:00:00",
          code1: "2020-02-02 12:00:00",
          code2: "12121212121212121.00",
          code3: "华为股份有限公司",
          code4: "华为",
          code5: "是",
        },
      ],
      currentPage: 0,
      pageSize: 10,
      total: 10,
    };
  },
  methods: {
    NumInput(e) {
      e.target.value = mathTools.formattingMoney(e.target.value);
      e.target.value = mathTools.addDecollator(e.target.value);
      this.formData.num = this.formData.num + 1;
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
.acceptApply {
  .w145 {
    width: 145px;
  }
  .cen-form {
    align-items: flex-start;
    margin-top: 35px;
    .item {
      width: 50%;
      margin-bottom: 20px;
      line-height: 24px;
      .el-button {
        padding: 0;
      }
      .label {
        display: inline-block;
        width: 160px;
        text-align: right;
        margin-right: 24px;
      }
      .value {
        vertical-align: top;
        width: 50%;
        display: inline-block;
        word-wrap: break-word;
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