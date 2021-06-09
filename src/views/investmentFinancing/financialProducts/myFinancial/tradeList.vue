<template>
  <div class="trade">
    <el-tabs
      v-model="activeName"
      type="card"
      @tab-click="handleClick(activeName)"
    >
      <el-tab-pane label="已持有" name="first"> </el-tab-pane>
      <el-tab-pane label="交易中" name="second">
        <el-form :model="formData">
          <el-form-item label="交易账户:" prop="dealAccount">
            <el-input
              v-model="formData.dealAccount"
              maxlength="36"
              @input="accValidat"
            ></el-input>
            <el-button type="primary" size="mini" class="ml30">查询</el-button>
          </el-form-item>
        </el-form>
        <!--列表-->
        <!-- 列表 -->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            fixed
            prop="name"
            label="产品名称"
            width="200"
            show-overflow-tooltip=""
          >
          </el-table-column>
          <el-table-column prop="yeji" label="业绩比较基准（%）" width="200">
          </el-table-column>
          <el-table-column prop="mymoney" label="持有金额（元）" width="160">
          </el-table-column>
          <el-table-column prop="mymuch" label="持有份额" width="120">
          </el-table-column>
          <el-table-column prop="dealAcc" label="交易账号" width="180">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="140" fixed="right">
          </el-table-column>

          <el-table-column label="操作" fixed="right" width="140">
            <template slot-scope="scope">
              <el-button @click="toDetail(scope.row)" type="text" size="small"
                >详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页器 -->
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {},
      currentPage: 0,
      activeName: 'second',
      tableData: [
        { name: '理财产品', yeji: '2.0', mymoney: 50000, mymuch: '1', dealAcc: 'scrcu(888999222)', address: 'beijing', status: '赎回中' },
        { name: '理财产品', yeji: '2.0', mymoney: 50000, mymuch: '1', dealAcc: 'scrcu(888999222)', address: 'beijing', status: '已预约' },
        { name: '理财产品', yeji: '2.0', mymoney: 50000, mymuch: '1', dealAcc: 'scrcu(888999222)', address: 'beijing', status: '交易中' },
      ],
    }
  },
  methods: {
    accValidat() {

    },
    handleClick(v) {
      if (v === 'first') {
        this.$router.push('/investmentFinancing/financial-products/ownList')
      }

    },
    toDetail() {
      this.$router.push('/investmentFinancing/financial-products/tradeList/ownDetail')
    },
    handleSizeChange() { },
    handleCurrentChange() { },
  }
}
</script>