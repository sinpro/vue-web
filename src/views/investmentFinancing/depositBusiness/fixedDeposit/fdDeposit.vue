<template>
  <div class="fdDeposit">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="定期存款存入" name="fdDraw"></el-tab-pane>
      <el-tab-pane label="定期存款支取" name="fdDeposit"></el-tab-pane>
    </el-tabs>


    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="312px" class="flex"
      hide-required-asterisk>
      <el-form-item label="金额区间:" hide-required-asterisk prop="moneyArea1">
        <el-input v-model="ruleForm.moneyArea1" class="moneyArea" @input="changeMoney" placeholder="请输入" maxlength="22">
        </el-input>
        <span class="bolang cp3">～</span>
        <el-input v-model="ruleForm.moneyArea2" class="moneyArea" @input="changeMoney" placeholder="请输入" maxlength="22">
        </el-input>
      </el-form-item>
      <el-form-item label="交易日期:" prop="value1">
        <el-date-picker v-model="ruleForm.value1" type="daterange" :picker-options="pickerOptions" unlink-panels
          range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item class="marginL24">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="近7天"></el-radio>
          <el-radio label="近1月"></el-radio>
          <el-radio label="近3月"></el-radio>
        </el-radio-group>
      </el-form-item>

    </el-form>
    <div class="tac mt15 mb56">
      <el-button type="primary" size="mini">查询</el-button>
    </div>


    <el-table :data="tableData" border stripe>
      <el-table-column prop="address" label="定期账号" width="200">
      </el-table-column>
      <el-table-column prop="zip" label="户名" width="220" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="city" label="定期存款本金(元)" width="183">
      </el-table-column>
      <el-table-column prop="date" label="起息日" width="165">
      </el-table-column>
      <el-table-column prop="date" width="165" label="到期日">
      </el-table-column>
      <el-table-column prop="province" label="年利率" width="160">
      </el-table-column>
      <el-table-column label="操作" width="83" fixed="right">
        <template slot-scope="scope">
          <el-button @click.native="goDraw(scope.row)" type="text" size="small">支取</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- ************分页器*********** -->
        <div class="pageClass">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>




  </div>
</template>

<script>
  import mathTools from 'utils/mathTools.js'

  export default {

    data() {
      // *************去除三分符、el-input自定义校验**************
      var validatePass = (rule, value, callback) => {
        if (Number(this.ruleForm.moneyArea1.replace(/,/g, "")) > Number(this.ruleForm.moneyArea2.replace(/,/g, ""))) {
          callback(new Error('“起始金额”不能大于“终止金额”'));
        } else {
          this.$refs.ruleForm.validateField('checkPass');
          callback();
        }
      };

      return {
        activeName: "fdDeposit",
        rules: {
          moneyArea1: [{
            validator: validatePass,
            trigger: 'blur'
          }],
        },
        ruleForm: {
          name: '北京易诚互动网络技术股份有限公司',
          region: '1253453453|别名',
          resource: '近1月',
          value1: '',
          moneyArea1: '',
          moneyArea2: '',
          type: '行外转账-收入',
          type2: '全部',
          account: '',
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 94608000000 || time.getTime() > Date.now();
          }
        },
        tableData: [{
          date1: '1',
          date: '2020-10-29',
          name: '行外转账-支出',
          province: '2.11%',
          city: '99,999,999.00',
          address: '999090 **** 0901',
          zip: '北京易诚互动网络技术股份有限公司'
        }, {
          date1: '1',
          date: '2020-10-29',
          name: '行外转账-支出',
          province: '2.11%',
          city: '99,999,999.00',
          address: '999090 **** 0901',
          zip: '北京易诚互动网络技术股份有限公司'
        }, {
          date1: '1',
          date: '2020-10-29',
          name: '行外转账-支出',
          province: '2.11%',
          city: '99,999,999.00',
          address: '999090 **** 0901',
          zip: '北京易诚互动网络技术股份有限公司'
        }, {
          date1: '1',
          date: '2020-10-29',
          name: '行外转账-支出',
          province: '2.11%',
          city: '99,999,999.00',
          address: '999090 **** 0901',
          zip: '北京易诚互动网络技术股份有限公司'
        }, ],
        currentPage4: 4,
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      };
    },
    methods: {
      handleSizeChange(){},
      handleCurrentChange(){},
      goDraw(row) {
        this.$confirm('提前支取将按活期计息', '确定要支取吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true,
          showClose: false,
        }).then(() => {
          this.$router.push("/investmentFinancing/DepositBusiness/fixedDeposit/fdDeposit/fdDepositDraw")
        })
      },
      changeMoney() {
        this.ruleForm.moneyArea1 = mathTools.moneyCheck(this.ruleForm.moneyArea1)
        this.ruleForm.moneyArea2 = mathTools.moneyCheck(this.ruleForm.moneyArea2)
      },
      handleClick() {
        if (this.activeName == "fdDraw") {
          this.$router.push({
            path: "/investmentFinancing/DepositBusiness/fixedDeposit/fdDraw",
          });
        }
      },

      /* 获取过去时间，并传值给现在时间 */
      getPassYearFormatDate() {
        var nowDate = new Date()
        var date = new Date(nowDate)
        date.setDate(date.getDate() - 365)
        var seperator1 = '-'
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        if (month >= 1 && month <= 9) {
          month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = '0' + strDate
        }
        var formatDate = year + seperator1 + month
        this.getNowFormatDate(formatDate)
      },
      /* 获取现在时间，并接受过去时间的值 */
      getNowFormatDate(formatDate) {
        var date = new Date()
        var seperator1 = '-'
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        if (month >= 1 && month <= 9) {
          month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = '0' + strDate
        }
        var nowData = year + seperator1 + month
        this.dafalttimeData = {
          'formatDate': formatDate,
          'nowData': nowData
        } // 默认赋值一年时间
      },
    },
    mounted() {
      this.getPassYearFormatDate()
    },
  };

</script>
<style lang="scss">
  .fdDeposit {
    .moneyArea {
      width: 143px;
    }
  }

</style>
