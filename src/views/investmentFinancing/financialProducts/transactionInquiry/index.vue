<template>
  <div class="deal-check">
    <div class="bottom">
      <title-bar title="交易记录"></title-bar>
      <el-form v-model="formData">
        <el-row>
          <el-col :span="12">
            <el-form-item
              label="金额区间:"
              hide-required-asterisk
              prop="moneyArea1"
              class="mini_input"
            >
              <el-input
                v-model="formData.moneyArea1"
                class="moneyArea"
                @input="changeMoney"
                placeholder="请输入"
                maxlength="22"
              >
              </el-input>
              <span class="bolang cp3">～</span>
              <el-input
                v-model="formData.moneyArea2"
                class="moneyArea"
                @input="changeMoney"
                placeholder="请输入"
                maxlength="22"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="交易类型:">
              <el-select v-model="formData.type" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11">
            <el-form-item label="交易日期:" prop="value1">
              <el-date-picker
                v-model="formData.value1"
                type="daterange"
                :picker-options="pickerOptions"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item class="marginL24">
              <el-radio-group v-model="formData.resource">
                <el-radio label="近7天"></el-radio>
                <el-radio label="近1月"></el-radio>
                <el-radio label="近3月"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="tc pt10 pb30">
        <el-button type="primary" size="mini">查询</el-button>
      </div>
      <el-table :data="tableData" stripe style="margin: 20px 0">
        <el-table-column
          prop="id"
          label="产品名称"
          width="200"
          show-overflow-tooltip=""
        >
        </el-table-column>
        <el-table-column prop="name" label="金额（元）"> </el-table-column>
        <el-table-column prop="code" label="交易账号"> </el-table-column>
        <el-table-column prop="code" label="交易类型"> </el-table-column>
        <el-table-column prop="code" label="交易时间"> </el-table-column>
      </el-table>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      currentPage: 0,

      tableData: []
    }
  },
  methods: {
    handleSizeChange() { },
    handleCurrentChange() { },
    pickerOptions() { },
    changeMoney() { },


  }
}
</script>

<style lang="scss">
.mini_input {
  .el-input {
    width: 147px;
  }
}
</style>