<template>
  <div class="noticeDepositOut">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="通知存款存入" name="noticeDepositIn"></el-tab-pane>
      <el-tab-pane label="通知存款支取" name="noticeDepositOut"></el-tab-pane>
    </el-tabs>


    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="312px" class="flex mt36"
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
          range-separator="" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item class="marginL24">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="近3月"></el-radio>
          <el-radio label="近6月"></el-radio>
          <el-radio label="近1年"></el-radio>
        </el-radio-group>
      </el-form-item>

    </el-form>
    <div class="tac mt15 mb56">
      <el-button type="primary" size="mini">查询</el-button>
    </div>


    <el-table :data="tableData" border stripe>
      <el-table-column prop="address" label="通知存款账号" width="210">
      </el-table-column>
      <el-table-column prop="zip" label="户名" width="220" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="city" label="通知存款本金(元)" width="183">
      </el-table-column>
      <el-table-column prop="date" label="起息日" width="165">
      </el-table-column>
      <el-table-column prop="date" width="165" label="到期日">
      </el-table-column>
      <el-table-column prop="province" label="年利率" width="160">
      </el-table-column>
      <el-table-column label="操作" width="230" fixed="right">
        <template slot-scope="scope">
          <el-button @click.native="goDetail(scope.row)" type="text" size="small">详情</el-button>
          <el-button @click.native="goWithdrawNotice(scope.row)" type="text" size="small" v-if="scope.row.status==1">
            撤销通知
          </el-button>
          <el-button @click.native="goBuildNotice(scope.row)" type="text" size="small">建立通知</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- ************分页器*********** -->
    <div class="pageClass">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>


    <el-dialog title="支取" :visible.sync="centerDialogVisible" width="640px" center :show-close="false"
      class="diaDivClass1">
      <div>
        <el-table :data="tableData2" border stripe>
          <el-table-column prop="date" label="发起日期" width="150">
          </el-table-column>
          <el-table-column prop="date2" label="通知支取日期" width="150">
          </el-table-column>
          <el-table-column prop="city" label="通知支取金额(元)" width="180">
          </el-table-column>
          <el-table-column label="操作" width="90" fixed="right">
            <template slot-scope="scope">
              <el-button @click.native="goOutDraw('带入金额',scope.row)" type="text" size="small">支取</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="diaClass1 tac mb24">
        <el-button @click="centerDialogVisible = false" size="medium">关闭</el-button>
        <el-button type="primary" @click.native="goOutDraw('不带入金额')" size="medium">未通知支取</el-button>
      </div>
    </el-dialog>

    <el-dialog title="撤销通知" :visible.sync="centerDialogVisible2" width="640px" center :show-close="false"
      class="diaDivClass1">
      <div>
        <el-table :data="tableData2" border stripe>
          <el-table-column prop="date" label="发起日期" width="150">
          </el-table-column>
          <el-table-column prop="date2" label="通知支取日期" width="150">
          </el-table-column>
          <el-table-column prop="city" label="通知支取金额(元)" width="180">
          </el-table-column>
          <el-table-column label="操作" width="90" fixed="right">
            <template slot-scope="scope">
              <el-button @click.native="goWithdraw(scope.row)" type="text" size="small">撤销</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="diaClass1 tac mb24">
        <el-button @click="centerDialogVisible2 = false" size="medium">关闭</el-button>
      </div>
    </el-dialog>

    <el-dialog title="建立通知" :visible.sync="centerDialogVisible3" width="470px" center :show-close="false"
      class="diaDivClass1">
      <div>
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="auto" class="dia3Class">
          <el-form-item label="通知支取金额:" prop="NoticeMoney">
            <el-input v-model="ruleForm2.NoticeMoney" @input="changeMoney" placeholder="请输入" maxlength="22">
            </el-input>
          </el-form-item>
          <el-form-item label="通知支取日期:" prop="NoticeDate">
            <el-date-picker v-model="ruleForm2.NoticeDate" type="date" :clearable="false">
            </el-date-picker>
          </el-form-item>

        </el-form>
      </div>
      <div class="diaClass1 tac mb24">
        <el-button @click="centerDialogVisible3 = false" size="medium">取消</el-button>
        <el-button @click="goSubmit()" size="medium" type="primary">提交</el-button>
      </div>
    </el-dialog>




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
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (Number(this.ruleForm2.NoticeMoney.replace(/,/g, "")) < 50000) {
          callback(new Error('不能小于5万'));
        } else {
          callback();
        }
      };

      return {
        activeName: "noticeDepositOut",
        centerDialogVisible: false,
        centerDialogVisible2: false,
        centerDialogVisible3: false,
        rules: {
          moneyArea1: [{
            validator: validatePass,
            trigger: 'blur',
            required: true,
          }],
        },
        rules2: {
          NoticeMoney: [{
            validator: validatePass2,
            trigger: 'blur',
            required: true,

          }],
          NoticeDate: [{
            required: true,
            message: "请选择日期",
            trigger: "blur"
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
        ruleForm2: {
          NoticeMoney: '',
          NoticeDate: '',
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
          zip: '北京易诚互动网络技术股份有限公司',
          status: 0,
        }, {
          date1: '1',
          date: '2020-10-29',
          name: '行外转账-支出',
          province: '2.11%',
          city: '99,999,999.00',
          address: '999090 **** 0901',
          zip: '北京易诚互动网络技术股份有限公司',
          status: 1,
        }, {
          date1: '1',
          date: '2020-10-29',
          name: '行外转账-支出',
          province: '2.11%',
          city: '99,999,999.00',
          address: '999090 **** 0901',
          zip: '北京易诚互动网络技术股份有限公司',
          status: 0,
        }, {
          date1: '1',
          date: '2020-10-29',
          name: '行外转账-支出',
          province: '2.11%',
          city: '99,999,999.00',
          address: '999090 **** 0901',
          zip: '北京易诚互动网络技术股份有限公司',
          status: 1,
        }, ],
        tableData2: [{
          date: '2020-10-29',
          date2: '2020-10-29',
          city: '99,999,999.00',
        }, {
          date: '2020-10-29',
          date2: '2020-10-29',
          city: '99,999,999.00',
        }, {
          date: '2020-10-29',
          date2: '2020-10-29',
          city: '99,999,999.00',
        }, {
          date: '2020-10-29',
          date2: '2020-10-29',
          city: '99,999,999.00',
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
      goSubmit() {
        this.$refs["ruleForm2"].validate((valid) => {
          if (valid) {
            this.centerDialogVisible3 = false;
          } else {
            return false;
          }
        })
      },
      goBuildNotice(row) {
        this.centerDialogVisible3 = true;
      },
      goWithdrawNotice(row) {
        this.centerDialogVisible2 = true;
      },
      goWithdraw(row) {
        this.centerDialogVisible2 = false;
      },
      goDetail(row) {
        this.centerDialogVisible = true;
      },
      goOutDraw(isMoney, row) {
        this.$router.push('/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositOut/noticeDepositOutDraw')
      },
      handleSizeChange() {},
      handleCurrentChange() {},
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
        if (this.activeName == "noticeDepositIn") {
          this.$router.push({
            path: "/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositIn",
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
  .noticeDepositOut {
    .moneyArea {
      width: 143px;
    }

    .el-button.el-button--text.el-button--small {
      margin-left: 0;
    }

    .dia3Class {

      .el-date-editor,
      .el-input {
        width: 280px;
      }
    }
  }

</style>
