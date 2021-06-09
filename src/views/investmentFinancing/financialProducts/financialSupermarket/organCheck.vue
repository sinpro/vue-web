<template>
  <div class="organ-check">
    <title-bar title="机构查询"></title-bar>

    <div>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="机构查询：">
          <el-input v-model="form.organ"></el-input>
          <el-button type="primary" @click="search" size="mini" class="ml30"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="机构名称" width="320">
        </el-table-column>
        <el-table-column prop="name" label="地址" width="320">
        </el-table-column>
        <el-table-column prop="province" label="电话" width="300">
        </el-table-column>
      </el-table>
      <!-- <el-pagination
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
      </el-pagination> -->
      <!-- <div class="notice">
        <h4>温馨提示</h4>
        <p>根据监管要求，首次风险评估请至四川农信指定营业机构线下办理。</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      form: {
        orgin: ''
      },
      tableData: [],
      currentPage: 1,
      total: 100,
      total10: 1000,
      pageSize: 10,
    }
  },
  methods: {
    search() {

    }
  }
}
</script>

<style>
</style>