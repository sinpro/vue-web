<template>
  <div class="myfinancial-detail">
    <div class="top">
      <div id="card" class="BoxShadow">
        <div class="left">
          <div class="title">
            <span>建成财汇盈·升金第67期 非保本浮动收益类（14532）</span>
          </div>
          <div class="content after">
            <div>
              <span class="amount">1001230</span>
              <span class="cbg">持仓金额(元)</span>
            </div>
            <div>
              <span class="amount cerror">+80.00</span>
              <span class="cbg">昨日收益(元)</span>
            </div>
            <div>
              <span class="amount">50,000.00</span>
              <span class="cbg">累计收益(元)</span>
            </div>
            <!-- <div class="last"></div> -->
          </div>
          <div class="content mt20">
            <div>
              <span class="amount">3.23%</span>
              <span class="cbg">业绩比较基准</span>
            </div>
            <div>
              <span class="amount">100天</span>
              <span class="cbg">产品期限</span>
            </div>
            <div>
              <span class="amount">100.00</span>
              <span class="cbg">持仓份额(份)</span>
            </div>
            <div>
              <span class="amount">1.021</span>
              <span class="cbg">单位净值</span>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="tr mr25 mb20">
            <el-button @click.self="redemption">赎回</el-button>
            <el-button type="primary" @click.self="buyAgain"
              >追加购买</el-button
            >
          </div>
        </div>
      </div>
      <div class="top-right"></div>
    </div>
    <div class="cg bold mt40 flex bt ml20">
      <p>单位净值</p>
      <div class="radio">
        <el-radio-group v-model="qixian">
          <el-radio label="2">30天以下</el-radio>
          <el-radio label="3">31-90天</el-radio>
          <el-radio label="4">91-180天</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div>
      <my-chart />
    </div>
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
import myChart from './components/myechart'

export default {
  components: {
    myChart
  },
  data() {
    return {
      activeName: 'first',
      currentPage: 0,
      qixian: '3',
      formData: {
        dealTime: '',
        dealMoney: {
          min: '',
          max: ''
        },
        checkbox: ''
      },
      options: [],
      tableData: [],
    }
  },
  methods: {
    handleSizeChange() { },
    pickerOptions() { },
    changeMoney() { },
    handleCurrentChange() { },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    // 赎回
    redemption() {
      this.$router.push('/investmentFinancing/financial-products/redemptionFill')
    },
    // 追加购买
    buyAgain() {
      this.$router.push('/investmentFinancing/financial-products/buyAgainFill')

    }
  }
};
</script>

<style lang="scss">
.myfinancial-detail {
  #card {
    display: flex;
    padding: 10px 0px;
  }
  .left {
    width: 100%;
    margin-top: 15px;
    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 23px;
      padding-left: 24px;
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-left: 24px;
      padding-right: 24px;
      .cbg {
        font-size: 16px;
        color: #999999;
        display: block;
      }
      .amount {
        font-size: 24px;
      }
      div {
        width: auto;
      }
    }
    .after:after {
      content: "";
      min-width: 55px;
    }
  }
  .radio {
    .el-radio__input.is-checked + .el-radio__label {
      color: #059c5d !important;
    }
    /*推荐头像去掉radio的小圆点*/
    .el-radio__input {
      display: none;
    }
    .el-radio {
      height: 20px;
      padding-top: 5px;
      text-align: center;
      color: #999999;
      .el-radio__label {
        padding-right: 8px;
      }
    }
    .is-checked {
      border: solid 1px #059c5d;
      color: #059c5d;
    }
    .bt {
      justify-content: space-between;
    }
  }
  .mini_input {
    .el-input {
      width: 147px;
    }
  }
}
</style>