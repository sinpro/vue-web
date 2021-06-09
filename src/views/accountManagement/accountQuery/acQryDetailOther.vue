<template>
  <div class="acQryDetailOther">
    <el-tabs v-model="activeName2">
      <el-tab-pane label="他行账户明细查询" name="first">
        <div class="formClassdiv">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="auto"
            hide-required-asterisk>
            <el-form-item label="企业名称:">
              <el-input v-model="ruleForm.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="账号:">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="交易日期:" class="dealdate">
              <el-date-picker v-model="ruleForm.value1" type="daterange" range-separator="—" start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="近7天"></el-radio>
                <el-radio label="近1月"></el-radio>
                <el-radio label="近3月"></el-radio>
              </el-radio-group>
            </el-form-item>
            <!-- <el-form-item label="对方账户:">
              <el-input v-model="ruleForm.account" placeholder="支持账号/户名模糊查询" maxlength="30"></el-input>
            </el-form-item> -->
          </el-form>
        </div>
        <div class="tac btnClass">
          <el-button type="primary" size="mini" @click="submitForm('ruleForm')">查询</el-button>
        </div>
        <!-- ************明细查询列表*********** -->
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column prop="date" label="交易时间" width="200">
          </el-table-column>
          <el-table-column prop="province" label="交易金额（元）" width="163">
          </el-table-column>
          <el-table-column prop="city" label="余额（元）" width="172">
          </el-table-column>
          <el-table-column prop="address" width="190" label="对方账号" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="zip" label="对方户名" width="160" show-overflow-tooltip>
          </el-table-column>
          <!-- <el-table-column label="操作" width="100" >
            <template slot-scope="scope">
              <el-button @click="dialogTableVisible = true" type="text">详情</el-button>
            </template>
          </el-table-column> -->
        </el-table>
        <!-- ************分页器*********** -->
        <div class="pageClass">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>

        <div class="tac mb50">
          <el-button type="primary">返回</el-button>
        </div>

        <!-- ************详情弹框*********** -->
        <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
          <el-table :data="gridData">
            <el-table-column property="date" label="日期" width="150"></el-table-column>
            <el-table-column property="name" label="姓名" width="200"></el-table-column>
            <el-table-column property="address" label="地址"></el-table-column>
          </el-table>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import mathTools from 'utils/mathTools.js'
  export default {
    data() {
      return {
        activeName2: "first",
        ruleForm: {
          name: '北京易诚互动网络技术股份有限公司',
          region: '1253453453|别名',
          resource: '近1月',
          value1: '',
          type: '行外转账-收入',
          // account: '',
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
          value1: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
        },
        tableData: [{
          date1: '1',
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date1: '2',
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date1: '3',
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date1: '4',
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
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
        dialogTableVisible: false,
      }
    },
    watch: {

    },
    computed: {},
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      resetForm() {
        this.ruleForm.moneyArea1 = '';
        this.ruleForm.moneyArea2 = '';
        this.ruleForm.resource = '近1月';
        // this.ruleForm.account = '';
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
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
    },
    mounted() {
      //   console.log(this.$route.params.content,'2222')
    }
  }

</script>
<style lang="scss">
  .acQryDetailOther {
    ::-webkit-scrollbar {
      //表格滚动条
      height: 10px;
      display: block;
    }

    .formClassdiv {
      margin-left: 45px;
    }


    .el-range-separator {
      //日期控件中间的——样式
      font-size: 21px;
      margin-left: -5px;
      margin-right: 5px;
      color: #999999;
    }

    .btnClass {
      margin-top: 35px;
      margin-bottom: 55px;
    }

    .pageClass {
      margin-top: 23px;
      margin-bottom: 55px;
    }
  }

</style>
