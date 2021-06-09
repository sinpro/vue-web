<template>
  <div class="queryOnTheDial">
    <title-bar title="发布查询"></title-bar>
    <el-form
      ref="formData"
      label-width="120px"
      :rules="rules"
      :inline="true"
      :model="formData"
    >
      <el-form-item label="发放年月:" class="dealdate">
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
        <el-button size="mini" type="primary"> 查询 </el-button>
      </el-form-item>
    </el-form>
    <el-table stripe :data="tableData">
      <el-table-column prop="drawer" label="提交时间" width="215">
      </el-table-column>

      <el-table-column
        prop="draftNumber"
        label="发放年月"
        width="115"
      ></el-table-column>
      <el-table-column
        prop="draftNumber"
        label="实发工资总额(元)"
        width="175"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column prop="code" label="总笔数(笔)"> </el-table-column>
      <el-table-column prop="code" label="指令状态"> </el-table-column>
      <el-table-column prop="name" label="操作" width="80" fixed="right">
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
    return {
      rules: {},
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