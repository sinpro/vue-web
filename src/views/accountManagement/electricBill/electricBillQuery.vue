<template>
  <div class="electricBillQuery">
    <el-tabs v-model="activeName">
      <el-tab-pane label="电子回单查询/打印" name="first">
        <div class="formClassdiv">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="135px" class="flex">
            <el-form-item label="企业名称:">
              <el-input v-model="ruleForm.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="账号:" class="marginLeftAuto" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="金额区间:" hide-required-asterisk prop="moneyArea1">
              <el-input v-model="ruleForm.moneyArea1" class="moneyArea" @input="changeMoney" placeholder="请输入"
                maxlength="22">
              </el-input>
              <span class="bolang cp3">～</span>
              <el-input v-model="ruleForm.moneyArea2" class="moneyArea" @input="changeMoney" placeholder="请输入"
                maxlength="22">
              </el-input>
            </el-form-item>
            <el-form-item label="交易类型:" class="marginLeftAuto" prop="type">
              <el-select v-model="ruleForm.type" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="交易日期:" class="dealdate" prop="value1">
              <el-date-picker v-model="ruleForm.value1" type="daterange" :picker-options="pickerOptions" unlink-panels
                range-separator="—" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-radio-group v-model="ruleForm.resource" class="marginL24">
                <el-radio label="近7天"></el-radio>
                <el-radio label="近1月"></el-radio>
                <el-radio label="近3月"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="对方户名:">
              <el-input v-model="ruleForm.account" placeholder="支持模糊查询" maxlength="30"></el-input>
            </el-form-item>
            <el-form-item label="对方账号:" class="marginLeftAuto">
              <el-input v-model="ruleForm.account" placeholder="支持模糊查询" maxlength="30"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="tac searchBtn mb56">
          <el-button size="mini" @click="resetForm">重置</el-button>
          <el-button size="mini" type="primary" @click="submitForm('ruleForm')">查询</el-button>
        </div>
        <el-table :data="tableData" stripe empty-text="暂无回单信息">
          <el-table-column type="selection" width="105"></el-table-column>
          <el-table-column prop="time" label="交易时间" width="206"></el-table-column>
          <el-table-column prop="type" label="交易类型" width="152"></el-table-column>
          <el-table-column prop="money" label="交易金额(元)" width="148" show-overflow-tooltip></el-table-column>
          <el-table-column prop="account" label="对方账号" width="182"></el-table-column>
          <el-table-column prop="accName" label="对方户名" width="178" show-overflow-tooltip></el-table-column>
          <el-table-column label="操作" fixed="right" width="83">
            <template slot-scope="scope">
              <el-button type="text" @click.native="popDial(scope)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- ************分页器*********** -->
        <div class="pageClass mt10">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
        <div class="tac mtb56">
          <el-button>下载</el-button>
          <el-button type="primary" @click.native="printPreview">打印预览</el-button>
        </div>
        <!-- ************详情dialog*********** -->
        <el-dialog title="回单详情" :visible.sync="dialogVisible" size="medium" text>
          <div>
            <img src="../../../images/accountManage/bill.png">
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false" size="medium">下载</el-button>
            <el-button type="primary" @click="dialogVisible = false" size="medium">打印</el-button>
          </span>
        </el-dialog>
        <!-- ************批量下载预览dialog*********** -->
        <el-dialog title="回单详情" :visible.sync="dialogVisible2" size="medium" text>
          <div>
            <div class="leftArrow pointer"><img src="../../../images/accountManage/iconLeftArrow.png"></div>

            <img src="../../../images/accountManage/bill.png">

            <div class="rightArrow pointer"><img src="../../../images/accountManage/iconRightArrow.png"></div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible2 = false" size="medium">全部下载</el-button>
            <el-button type="primary" @click="dialogVisible2 = false" size="medium">全部打印</el-button>
          </span>
        </el-dialog>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import mathTools from 'utils/mathTools.js'

  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (Number(this.ruleForm.moneyArea1.replace(/,/g, "")) > Number(this.ruleForm.moneyArea2.replace(/,/g, ""))) {
          callback(new Error('“起始金额”不能大于“终止金额”'));
        } else {
          this.$refs.ruleForm.validateField('checkPass');
          callback();
        }
      };
      return {
        dialogVisible: false,
        dialogVisible2: false,
        activeName: 'first',
        ruleForm: {
          name: '北京易诚互动网络技术股份有限公司',
          region: '1253453453|别名',
          resource: '近1月',
          value1: '',
          moneyArea1: '',
          moneyArea2: '',
          type: '行外转账-收入',
          account: '',
        },
        rules: {
          name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          region: [{
            required: true,
            message: '请选择账号',
            trigger: 'change'
          }],
          type: [{
            required: true,
            message: '请选择交易类型',
            trigger: 'change'
          }],
          moneyArea1: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          value1: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 94608000000 || time.getTime() > Date.now();
          }
        },
        tableData: [{
            date: '1',
            time: '2020-06-29 18:00:00',
            type: '行内转账-收入',
            money: '+500,000,000.00',
            account: '633324 **** 8438',
            accName: '北京易诚互动网络技术股份有限公司',
          },
          {
            date: '1',
            time: '2020-06-29 18:00:00',
            type: '行内转账-收入',
            money: '+500,000,000.00',
            account: '633324 **** 8438',
            accName: '北京易诚互动网络技术股份有限公司',
          },
          {
            date: '1',
            time: '2020-06-29 18:00:00',
            type: '行内转账-收入',
            money: '+500,000,000.00',
            account: '633324 **** 8438',
            accName: '北京易诚互动网络技术股份有限公司',
          },
          {
            date: '1',
            time: '2020-06-29 18:00:00',
            type: '行内转账-收入',
            money: '+500,000,000.00',
            account: '633324 **** 8438',
            accName: '北京易诚互动网络技术股份有限公司',
          },
          {
            date: '1',
            time: '2020-06-29 18:00:00',
            type: '行内转账-收入',
            money: '+500,000,000.00',
            account: '633324 **** 8438',
            accName: '北京易诚互动网络技术股份有限公司',
          },
        ]
      }
    },
    methods: {
      printPreview() {
        this.dialogVisible2 = true
      },
      popDial(scope) {
        this.dialogVisible = true
      },
      changeMoney() {
        let val = this.ruleForm.moneyArea1;
        this.ruleForm.moneyArea1 = mathTools.moneyCheck(val)
        let val1 = this.ruleForm.moneyArea2;
        this.ruleForm.moneyArea2 = mathTools.moneyCheck(val1)
      },
      submitForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      resetForm() {
        this.ruleForm.moneyArea1 = '';
        this.ruleForm.moneyArea2 = '';
        this.ruleForm.resource = '近1月';
        this.ruleForm.account = '';
      },
    },
  }

</script>
<style lang="scss">
  .electricBillQuery {
    .flex {
      flex-wrap: wrap;
    }

    .formClassdiv {
      // margin-left: 45px;
      // width: 851px;

      .moneyArea {
        width: 143px;
      }

      .bolang {
        font-size: 26px;
        font-weight: 100;
      }

      // .marginLeftAuto{
      //   margin-left: auto;
      // }
    }

    .searchBtn {
      margin-top: 16px;
    }

    .leftArrow {
      position: absolute;
      left: -102px;
      top: 288px;
    }
    .rightArrow {
      position: absolute;
      right: -102px;
      top: 288px;
    }





  }

</style>
