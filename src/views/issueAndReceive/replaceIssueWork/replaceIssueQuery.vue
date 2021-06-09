<template>
  <div class="queryOnTheDial">
    <title-bar title="交易查询"></title-bar>
    <el-form
      ref="formData"
      label-width="120px"
      :rules="rules"
      :inline="true"
      :model="formData"
    >
      <el-form-item label="付款帐户:">
        <el-select v-model="formData.select"> </el-select>
      </el-form-item>
      <el-form-item label="交易状态:">
        <el-select v-model="formData.select"> </el-select>
      </el-form-item>
      <el-form-item label="交易日期:" class="dealdate">
        <el-date-picker
          v-model="formData.value1"
          type="daterange"
          range-separator="—"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="formData.resource">
          <el-radio label="近3月"></el-radio>
          <el-radio label="近6月"></el-radio>
          <el-radio label="近一年"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="金额区间:" prop="moneyArea1">
        <el-input
          v-model="formData.minNum"
          placeholder="请输入"
          style="width: 141px"
          @input.native="NumInput"
        ></el-input>
        <span class="mlr10">~</span>
        <el-input
          v-model="formData.maxNum"
          placeholder="请输入"
          style="width: 141px"
          @input.native="NumInput"
        ></el-input>
      </el-form-item>

      <div class="tac mt16 mb56">
        <el-button size="mini" type="primary"> 查询 </el-button>
      </div>
    </el-form>
    <el-table stripe :data="tableData">
      <el-table-column prop="drawer" label="提交时间" width="215">
      </el-table-column>

      <el-table-column
        prop="draftNumber"
        label="付款账号"
        width="187"
      ></el-table-column>
      <el-table-column
        prop="draftNumber"
        label="收款户名"
        width="219"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column prop="code" label="总金额(元)" width="156">
      </el-table-column>
      <el-table-column prop="code" label="总笔数(笔)" width="111">
      </el-table-column>
      <el-table-column prop="code" label="资金用途" width="189">
      </el-table-column>
      <el-table-column prop="name" label="操作" width="82" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="goInfo(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="total / pageSize > 1"
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
      rules: {
        num: [
          {
            required: true,
            trigger: "change",
            validator: validatePass,
          },
        ],
      },
      formData: {},
      tableData: [],
      currentPage: 1,
      total: 100,
      pageSize: 10,
    };
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    NumInput(e) {
      e.target.value = mathTools.formattingMoney(e.target.value);
      e.target.value = mathTools.addDecollator(e.target.value);
      this.formData.num = this.formData.num + 1;
    },
    goInfo(row) {
      window.sessionStorage.setItem("queryOnTheDialInfo", row.id);
      this.$router.push({
        path:
          "/groupBusiness/informationQuery/transferTransactions/queryOnTheDial/queryOnTheDialInfo",
      });
    },
  },
};
</script>
<style lang="scss">
.queryOnTheDial {
}
</style>