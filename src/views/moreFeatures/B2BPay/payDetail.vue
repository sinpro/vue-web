<template>
  <div class="payDetail">
    <el-form :model="ruleForm" label-width="135px" :inline="true">
      <el-form-item label="账号:" prop="account">
        <el-select v-model="ruleForm.value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="交易日期:" label-width="115px">
        <el-date-picker v-model="ruleForm.value1" type="date" placeholder="选择日期" :clearable="false">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="订单状态:">
        <el-select v-model="ruleForm.value2" placeholder="请选择">
          <el-option label="全部" value="beijin"></el-option>
          <el-option label="等待授权" value="beijing1"></el-option>
          <el-option label="成功" value="beijing2"></el-option>
          <el-option label="失败" value="beijing3"></el-option>
          <el-option label="处理中" value="beijing4"></el-option>
          <el-option label="关闭" value="beijing5"></el-option>
          <el-option label="已退款" value="beijing6"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="流水号:" label-width="115px">
        <el-input v-model="ruleForm.account" maxlength="50" onkeyup="this.value=this.value.replace(/[^\d]/g,'')">
        </el-input>
      </el-form-item>
    </el-form>
    <div class="tac mb35 mt15">
      <el-button type="primary" size="mini">查询</el-button>
    </div>
    <el-table :data="tableData" stripe empty-text="暂无对账信息">
      <el-table-column prop="time" label="流水号" width="185" show-overflow-tooltip></el-table-column>
      <el-table-column prop="type" label="订单号" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="money" label="订单日期" width="110"></el-table-column>
      <el-table-column prop="account" label="订单金额(元)" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="account2" label="支付金额(元)" width="140" show-overflow-tooltip></el-table-column>
      <el-table-column prop="accName" label="订单状态" width="118">
        <template slot-scope="scope">
          <span v-if="scope.row.loading" class="el-icon-loading"></span>
          <span>{{scope.row.accName}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button v-if="scope.row.accName=='处理中'" type="text" @click.native="checkProve(scope)">查证</el-button>
          <span v-if="scope.row.accName=='处理中'" class="spanBarClass">|</span>
          <el-button type="text" @click.native="popDial(scope)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="订单详情" :visible.sync="dialogVisibleb" size="medium" text>
      <div>
        <div class="detailDiaClass">
            <ul class="ul1 cp3 f16 lh16 tar">
                <li>流水号</li>
                <li>操作员编号</li>
                <li>交易时间</li>
                <li>付款账号</li>
                <li>交易类型</li>
                <li>订单金额</li>
                <li>商户备注</li>
            </ul>
            <ul class="ul2 cp1 f16 lh16">
                <li>CP2020234235323</li>
                <li>001</li>
                <li>2020-12-09  20:00:21</li>
                <li>8888 0009 9900 2122</li>
                <li>统一支付网关网上支付</li>
                <li>23,000.00元</li>
                <li>代收社保</li>
            </ul>
            <ul class="ul3 cp3 f16 lh16 tar">
                <li>订单号</li>
                <li>操作员姓名</li>
                <li>订单状态</li>
                <li>收款账号</li>
                <li>商户名称</li>
                <li>支付金额</li>
            </ul>
            <ul class="ul4 cp1 f16 lh16">
                <li>3202303455445431</li>
                <li>张三</li>
                <li>成功</li>
                <li>8888 0009 9900 2122</li>
                <li>成都博瑞有限公司</li>
                <li>23,000.00元</li>
            </ul>
        </div>
        <p class="leftBar f18">审批流程</p>
        <div>

        </div>
      </div>
    </el-dialog>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisibleb: false,
        ruleForm: {
          account: '',
          value1: '2015-10-02',
          value: '',
          value2: '全部',
        },
        options: [{
          value: '选项1',
          label: '8888000999002122 | 别名1'
        }, {
          value: '选项2',
          label: '8888000999002122 | 别名1'
        }, {
          value: '选项3',
          label: '8888000999002122 | 别名1'
        }, ],
        tableData: [{
            date: '1',
            time: 'CP202043343223',
            type: '20204343236',
            money: '2020-12-02',
            account: '+500,000,000.00',
            account2: '+500,000,000.00',
            accName: '处理中',
          },
          {
            date: '1',
            time: 'CP202043343223',
            type: '20204343236',
            money: '2020-12-02',
            account: '+500,000,000.00',
            accName: '成功',
          },
          {
            date: '1',
            time: 'CP202043343223',
            type: '20204343236',
            money: '2020-12-02',
            account: '+500,000,000.00',
            accName: '已退款',
          },
          {
            date: '1',
            time: 'CP202043343223',
            type: '20204343236',
            money: '2020-12-02',
            account: '+500,000,000.00',
            accName: '关闭',
          },
          {
            date: '1',
            time: 'CP202043343223',
            type: '20204343236',
            money: '2020-12-02',
            account: '+500,000,000.00',
            accName: '失败',
          },
        ]
      }
    },
    methods: {
      checkProve(val) {
        val.row.loading = true,
          setTimeout(() => {
            val.row.loading = false,
              this.$MessageWarn({
                type: "success",
                title: "提醒",
                message: "已查证，订单状态为处理中！",
              });
          }, 500);
      },
      tableDataAddLoading() {
        this.tableData.forEach((item, index) => {
          //增加控制loading的属性
          this.$set(item, 'loading', false)
        })
      },
      popDial(vale) {
        this.dialogVisibleb = true
      }
    },
    mounted() {
      this.tableDataAddLoading();

    }
  }

</script>
<style lang="scss">
  .payDetail {

    .el-table .cell,
    .el-table th>.cell {
      padding-right: 0;
    }

    .el-table__row>td+td>.cell {
      padding-left: 0;
    }

    .el-table tr>th+th>.cell {
      padding-left: 0;
    }

    .spanBarClass {
      color: #f0f0f0;
      margin: 0 3px 0 5px;
    }

    .f18 {
      font-size: 18px;
    }

    .leftBar::before {
      height: 18px !important;
      font-size: 18px;
    }
    .detailDiaClass{
        display: flex;
        margin-bottom: 38px;
        >ul>li{
            list-style: none;
        }
        ul>li+li{
                margin-top: 24px;
        }
        .ul1{
            margin-left: 70px;
        }
        .ul2,.ul4{
            margin-left: 20px;
        }
        .ul2{
            width: 266px;
        }
        .ul3{
            margin-left: 100px;
        }
    }
  }

</style>
