<template>
  <div class="autoTM">
    <title-bar title="付款人信息"></title-bar>
    <el-form :inline="true" :model="formData" label-width="120px">
      <el-form-item label="划拨类型:">
        <el-select v-model="formData.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="划拨方式:">
        <el-select v-model="formData.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="计划状态:">
        <el-select v-model="formData.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="tac mt16 mb56">
      <el-button size="mini" type="primary">查询</el-button>
    </div>
    <el-table :data="tableData" stripe>
      <el-table-column prop="id" label="序号"> </el-table-column>
      <el-table-column prop="name" label="提交时间" width="120">
      </el-table-column>
      <el-table-column
        prop="code"
        label="付款账户"
        width="210"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="收款账户"
        width="210"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column prop="name" label="划拨类型" width="170">
      </el-table-column>
      <el-table-column prop="name" label="划拨方式" width="120">
      </el-table-column>
      <el-table-column prop="name" label="计划周期" width="170">
      </el-table-column>
      <el-table-column prop="name" label="下一执行日" width="140">
      </el-table-column>
      <el-table-column prop="name" label="计划状态" width="170">
      </el-table-column>
      <el-table-column prop="name" label="操作" width="82" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="goInfo(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
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
    <!-- <div class="tac mtb56">
      <el-button size="mini" type="primary">下一步</el-button>
    </div> -->
  </div>
</template>
<script>
export default {
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
      formData: {},
      currentPage: 1,
      total: null,
      pageSize: 10,
      tableData: [{}],
    };
  },

  methods: {
    goInfo(row) {
      window.sessionStorage.setItem("autoTMInfoId", row.id);
      this.$router.push({
        path:
          "/groupBusiness/automaticTransfer/automaticTransferMaintenance/autoTMInfo",
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="scss">
.autoTM {
}
</style>