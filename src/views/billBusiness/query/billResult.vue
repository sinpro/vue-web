<template>
  <div class="billResult">
    <title-bar title="票据结果查询"></title-bar>
    <el-form
      ref="formData"
      label-width="120px"
      :inline="true"
      :rules="queryrules"
      :model="queryformData"
    >
      <el-form-item label="企业名称:" prop="keyWord">
        <el-input disabled v-model="formData.keyWord"></el-input>
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
      <el-form-item label="票号:" prop="keyWord">
        <el-input
          disabled
          v-model="formData.keyWord"
          placeholder="支持模糊查询"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="tc mt16 mb56">
      <el-button type="primary" @click="search" size="mini">查询</el-button>
    </div>
    <el-table :data="tableData" stripe>
      <el-table-column prop="id" label="票号" width="400"> </el-table-column>
      <el-table-column prop="id" label="票据类型" width="140">
      </el-table-column>
      <el-table-column prop="name" label="出票日期" width="220">
      </el-table-column>
      <el-table-column prop="code" label="到期日期" width="220">
      </el-table-column>
      <el-table-column prop="code" label="票据金额(元)" width="140">
      </el-table-column>
       <el-table-column prop="code" label="业务类型" width="140">
      </el-table-column>
      <el-table-column prop="code" label="交易状态" width="140">
      </el-table-column>
      <el-table-column prop="code1" label="异常信息" width="550">
      </el-table-column>
      <el-table-column prop="code" label="交易时间" width="220">
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
  </div>
</template>
<script>
import mathTools from "utils/mathTools.js";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      let minNum = this.formData.minNum;
      let maxNum = this.formData.maxNum;
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
      queryrules: {
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
      tableData: [{
        code1:"背书日期检查失败! -- 申请报文日期[2019-06-10]不等于当前系统工作日期[2019-06-11] "
      }],
      currentPage: 0,
      pageSize: 10,
      total: 10,
    };
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
.billResult {
  .w145 {
    width: 145px;
  }
}
</style>