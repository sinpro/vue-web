<template>
  <div class="groupManagemen">
    <title-bar title="集团关系查询"></title-bar>
    <el-form
      ref="formData"
      label-width="auto"
      :rules="rules"
      :inline="true"
      :model="formData"
    >
      <el-form-item label="总公司客户名称:">
        <el-select v-model="formData.selecct"></el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="w80">查询</el-button>
      </el-form-item>
    </el-form>
    <title-bar title="集团信息"></title-bar>
    <div class="cen-form flex alc wrap mb10">
      <div class="item">
        <span class="label cp2">集团名称</span>
        <span class="value">最多八个最多八个</span>
      </div>
      <div class="item">
        <span class="label cp2">集团服务开通时间</span>
        <span class="value">最多十个最多十个最多</span>
      </div>
      <div class="item">
        <span class="label cp2">总公司客户号</span>
        <span class="value">最多八个最多八个</span>
      </div>
      <div class="item">
        <span class="label cp2">总公司客户名称</span>
        <span class="value">最多十个最多十个最多</span>
      </div>
      <div class="item">
        <span class="label cp2">总公司证件类型</span>
        <span class="value"></span>
      </div>
      <div class="item">
        <span class="label cp2">总公司证件号码</span>
        <span class="value">最多十个最多十个最多</span>
      </div>
    </div>
    <title-bar title="分公司基本信息"></title-bar>
    <el-table :data="tableData" stripe>
      <el-table-column prop="id" label="序号" width="80"> </el-table-column>
      <el-table-column
        prop="name"
        label="交易时间"
        width="204"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="code"
        label="交易类型"
        width="140"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="code"
        label="交易金额(元)"
        width="140"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="code"
        label="余额(元)"
        width="170"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="code"
        label="对方账号"
        width="210"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {},
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
.groupManagemen {
  .cen-form {
    align-items: flex-start;
    margin-top: 34px;
    .item {
      width: 50%;
      margin-bottom: 24px;
      .label {
        display: inline-block;
        width: 160px;
        text-align: right;
        margin-right: 24px;
      }
    }
  }
}
</style>