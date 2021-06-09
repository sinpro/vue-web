<template>
  <div class="myf">
    <div v-if="state == 'index'">
      <el-tabs
        v-model="activeName"
        type="card"
        @tab-click="handleClick(activeName)"
      >
        <el-tab-pane label="已持有" name="first">
          <el-form :model="formData">
            <el-form-item label="交易账户:" prop="dealAccount">
              <el-input
                v-model="formData.dealAccount"
                maxlength="36"
                @input="accValidat"
              ></el-input>
              <el-button type="primary" size="mini" class="ml30"
                >查询</el-button
              >
            </el-form-item>
          </el-form>
          <div class="flex total">
            <p class="bold">理财持有总金额(元)：</p>
            <p class="money">876,548.98元</p>
          </div>

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
            <!-- <el-table-column prop="zip" label="对方户名" width="120">
              <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" placement="top">
                  <div slot="content">{{scope.row.zip}}</div>
                  <span>{{scope.row.zip}}</span>
                </el-tooltip>
              </template>
            </el-table-column> -->
            <el-table-column label="操作">
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
        <!-- 交易中******************* -->
        <el-tab-pane
          label="交易中"
          name="second"
          @tab-click="handleClick('second')"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      state: 'index',
      activeName: 'first',
      formData: {
        dealAccount: ''
      },
      tableData: [
        { name: '理财产品', yeji: '2.0', mymoney: 50000, mymuch: '1', dealAcc: 'scrcu(888999222)', address: 'beijing' },
        { name: '理财产品', yeji: '2.0', mymoney: 50000, mymuch: '1', dealAcc: 'scrcu(888999222)', address: 'beijing' },
      ],
      currentPage: 0,
      detailInfo: {}
    }
  },
  methods: {
    accValidat() {

    },

    handleClick(v) {
      if (v === 'second') {
        this.$router.push('/investmentFinancing/financial-products/tradeList')
      }

    },
    toDetail(params) {
      // 1、判断是否登录
      console.log(params, 999)
      this.detailInfo = params
      //   this.state = 'detailOne'
      this.$router.push('/investmentFinancing/financial-products/ownList/financiaDetail')
    },
    changeState(v) {
      this.state = v
    },

    handleSizeChange() { },
    handleCurrentChange() { },
  }
}
</script>

<style lang="scss">
.myf {
  .total {
    justify-content: flex-end;
    margin-top: 55px;
    margin-bottom: 25px;
  }
}
</style>