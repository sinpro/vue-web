<template>
  <div class="negotiablityPayee">
    <el-table :data="tableData" stripe @selection-change="selectionChange">
      <el-table-column type="selection" width="80"> </el-table-column>
      <el-table-column
        prop="id"
        label="收款户名"
        width="210"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column prop="id" label="收款账号" width="210"></el-table-column>
      <el-table-column
        prop="id"
        label="收款银行"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column prop="id" label="联行号" width="140"></el-table-column>
      <el-table-column label="操作" width="82">
        <template slot-scope="scope">
          <el-button type="text" @click="goUpdate(scope.row)">修改</el-button>
        </template>
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
      <el-button type="primary" @click="">删除</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{}],
      selectTableData: [],
      currentPage: 0,
      pageSize: 10,
      total: 10,
    };
  },
  mounted() {},
  watch: {
    "$route.query.val"() {
      console.log(this.$route.query);
    },
  },
  methods: {
    selectionChange(table) {
      this.tableData = table;
    },
    goUpdate(data) {
      window.sessionStorage.setItem("negotiablityPayee",data.id)
      this.$router.push({
        path: "/bill/payee/negotiablityPayee/updatePayee",
      });
    },
    handleSizeChange() {},
    handleCurrentChange() {},
  },
};
</script>
<style lang="scss">
.negotiablityPayee {
}
</style>