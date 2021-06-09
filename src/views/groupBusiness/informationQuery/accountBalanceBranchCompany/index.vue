<template>
  <div class="accountBalanceBranchCompany">
    <title-bar title="分公司账户余额查询"></title-bar>
    <el-form
      ref="formData"
      label-width="120px"
      :rules="rules"
      :inline="true"
      :model="formData"
    >
      <el-form-item label="户名:">
        <el-input v-model="formData.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="账号:">
        <el-input v-model="formData.value" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="账号状态:">
        <el-select v-model="formData.select">
          <!-- <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option> -->
        </el-select>
      </el-form-item>
    </el-form>
    <div class="tac mt16 mb30">
      <el-button size="mini" type="primary">查询</el-button>
    </div>
    <el-table :data="tableData" stripe>
      <el-table-column prop="id" label="序号"> </el-table-column>
      <el-table-column
        prop="name"
        label="分公司户名"
        width="210"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="code"
        label="分公司账号"
        width="260"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="code"
        label="账户类型"
        width="114"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="code"
        label="可用余额(元)"
        width="180"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="code"
        label="账户状态"
        width="114"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column prop="name" label="操作" width="142" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="goInfo(scope.row)">详情</el-button>
          <el-button type="text" @click="goParticulars(scope.row)"
            >明细</el-button
          >
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
    <div class="wPro">
      <p>温馨提示</p>
      <p>1.“可用余额”仅显示分公司委托账户的活期可用余额。</p>
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
    goParticulars(row) {
      this.$router.push({ path: "" });
    },
    goInfo(row) {},
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="scss">
.accountBalanceBranchCompany {
}
</style>