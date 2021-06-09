<template>
  <div class="ABBCinfo">
    <title-bar title="交易明细"></title-bar>
    <el-form
      ref="formData"
      label-width="120px"
      :rules="rules"
      :inline="true"
      :model="formData"
    >
      <el-form-item label="付款账号:">
        <el-date-picker
          v-model="formData.value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="formData.radio">
          <el-radio :label="3">当天</el-radio>
          <el-radio :label="9">近7天</el-radio>
          <el-radio :label="6">近3月</el-radio>
          <el-radio :label="6">近6月</el-radio>
          <el-radio :label="6">近一年</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="tac mt16 mb30">
      <el-button size="mini" type="primary">查询</el-button>
    </div>
    <div class="mtb20 tar">
      <span>总笔数：100笔 </span>
      <span class="ml16">收入合计：876,548.98元</span>
      <span class="ml16">支出合计：76,554.65元 </span>
    </div>
    <el-table :data="tableData" stripe>
      <el-table-column prop="id" label="序号" width="80"> </el-table-column>
      <el-table-column
        prop="name"
        label="分公司客户名称"
        width="210"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="code"
        label="分公司委托账号"
        width="220"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column prop="code" label="委托权限" show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="code"
        label="余额(元)"
        width="170"
        show-overflow-tooltip
      >
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
    <div class="tac mtb56">
      <el-button size="medium"> 返回 </el-button>
      <el-button size="medium" type="primary"> 下载Excel </el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: { name: "", value: "", select: "" },
      tableData: [{}],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      rules: [],
    };
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="scss">
.ABBCinfo {
}
</style>