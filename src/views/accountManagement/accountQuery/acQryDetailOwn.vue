<template>
  <div class="acQryDetailOwn">
    <el-tabs v-model="activeName2">
      <el-tab-pane label="本行账户明细查询" name="first">
        <div class="formClassdiv">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="auto" class="flex"
            hide-required-asterisk>
            <el-form-item label="企业名称:" class="compNameClass">
              <el-input v-model="ruleForm.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="账号:" class="marginLeftAuto">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
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



            <el-form-item label="金额区间:" hide-required-asterisk prop="moneyArea1">
              <el-input v-model="ruleForm.moneyArea1" class="moneyArea" @input="changeMoney" placeholder="请输入"
                maxlength="22">
              </el-input>
              <span class="bolang cp3">～</span>
              <el-input v-model="ruleForm.moneyArea2" class="moneyArea" @input="changeMoney" placeholder="请输入"
                maxlength="22">
              </el-input>
            </el-form-item>
            <el-form-item label="交易类型:" class="marginLeftAuto">
              <el-select v-model="ruleForm.type" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>


            <el-form-item label="对方账户:">
              <el-input v-model="ruleForm.account" placeholder="支持账号/户名模糊查询" maxlength="30"></el-input>
            </el-form-item>

            <el-form-item label="收支方向:" class="marginLeftAuto">
              <el-select v-model="ruleForm.type2" placeholder="请选择">
                <el-option label="收入" value="shanghai"></el-option>
                <el-option label="支出" value="beijing"></el-option>
              </el-select>
            </el-form-item>

          </el-form>
        </div>
        <div class="tac btnClass">
          <el-button size="mini" @click="resetForm">重置</el-button>
          <el-button type="primary" size="mini" @click="submitForm('ruleForm')">查询</el-button>
        </div>


        <!-- ************明细查询列表*********** -->
        <div class="totalClass f16 lh16">
          <span>总笔数：</span><span>100笔</span><span>收入合计：</span><span>876,548.98元</span><span>支出合计：</span><span>76,554.65元</span>
        </div>

        <div class="tableClass">
          <el-table :data="tableData" border stripe>
            <el-table-column prop="date" label="交易时间" width="200">
            </el-table-column>
            <el-table-column prop="name" label="交易类型" width="153">
            </el-table-column>
            <el-table-column prop="province" label="交易金额（元）" width="163">
            </el-table-column>
            <el-table-column prop="city" label="余额（元）" width="172">
            </el-table-column>
            <el-table-column prop="address" width="190" label="对方账号" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="zip" label="对方户名" width="160" show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="操作" width="83" fixed="right">
              <template slot-scope="scope">
                <el-button @click="dialogTableVisible = true" type="text" size="small">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="downloadClass">
            <span>下载格式：</span>
            <el-radio-group v-model="downloadType">
              <el-radio label="Excel"></el-radio>
              <el-radio label="Pdf"></el-radio>
            </el-radio-group>
          </div>
        </div>

        <!-- ************分页器*********** -->
        <div class="pageClass">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>

        <div class="tc marginT55">
          <el-button type="primary" @click.native="goBack">下载</el-button>
        </div>
        <!-- ************温馨提示*********** -->
        <div class="wPro mtb20">
          <p>温馨提示：</p>
          <p>1.excel下载后，可进行自主编辑、统计等操作。</p>
          <p>2.pdf下载后，加盖账户开户机构电子公章，不可进行编辑。</p>
        </div>

        <!-- ************详情弹框*********** -->
        <el-dialog class="detailDiaClass" width="980px" :visible.sync="dialogTableVisible" :show-close="false">
          <div class="diaDivClass f16 lh16 cp1">交易明细详情</div>
          <div class="flex diaUlClass">
            <ul class="ul1 f16 lh16 cp3 tar">
              <li>付款人户名</li>
              <li>付款人账户</li>
              <li>付款人开户行</li>
              <li>币种</li>
              <li>交易类型</li>
              <li>用途</li>
              <li>交易渠道</li>
            </ul>
            <ul class="ul2 f16 lh16 cp1">
              <li>北京易诚互动网络技术有限公司</li>
              <li>311099 **** 9999</li>
              <li>简阳农商行营业部</li>
              <li>人民币</li>
              <li>行内转账-收入</li>
              <li>转账</li>
              <li>网银</li>
            </ul>
            <ul class="ul3 f16 lh16 cp3 tar">
              <li>收款人户名</li>
              <li>收款人户名</li>
              <li>收款人开户行</li>
              <li>交易金额</li>
              <li>手续费</li>
              <li>备注</li>
              <li>交易时间</li>
            </ul>
            <ul class="ul4 f16 lh16 cp1">
              <li>南方置业有限公司</li>
              <li>623192 **** 9999</li>
              <li>招商银行</li>
              <li>100,000.00元</li>
              <li>10.00</li>
              <li>--</li>
              <li>2020-09-01 19:00:12</li>
            </ul>
          </div>
          <div class="tac diaBtn">
            <el-button class="f16 lh16" type="primary" @click.native="dialogTableVisible=false">确定</el-button>
          </div>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
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
        downloadType: "Excel",
        activeName2: "first",
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
            message: '请选择活动区域',
            trigger: 'blur'
          }],
          moneyArea1: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          value1: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'blur'
          }],
        },
        tableData: [{
          date1: '1',
          date: '2020-10-29 18:00:00',
          name: '行外转账-支出',
          province: '+100,000.00',
          city: '99,999,999.00',
          address: '999090 **** 0901',
          zip: '北京易诚互动网络技术股份有限公司'
        }, {
          date1: '2',
          date: '2020-10-29 18:00:00',
          name: '行外转账-支出',
          province: '-100,000.00',
          city: '99,999.00',
          address: '999090 **** 0901',
          zip: '北京易诚互动网络技术股份有限公司'
        }, {
          date1: '3',
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: '北京易诚互动网络技术股份有限公司'
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
        // **********日期限制三年范围*********
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 94608000000 || time.getTime() > Date.now();
          }
        },
      }
    },
    watch: {

    },
    computed: {},
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      changeMoney() {
        this.ruleForm.moneyArea1 = mathTools.moneyCheck(this.ruleForm.moneyArea1)
        this.ruleForm.moneyArea2 = mathTools.moneyCheck(this.ruleForm.moneyArea2)
      },
      resetForm() {
        this.ruleForm.moneyArea1 = '';
        this.ruleForm.moneyArea2 = '';
        this.ruleForm.resource = '近1月';
        this.ruleForm.account = '';
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
  .acQryDetailOwn {
    ::-webkit-scrollbar {
      //表格滚动条
      height: 10px;
      display: block;
    }

    .formClassdiv {
      margin-left: 45px;
      width: 852px;
      .marginLeftAuto{
        margin-left: auto;
      }


      .moneyArea {
        width: 143px;
      }

      .bolang {
        font-size: 26px;
        font-weight: 100;
      }


    }

    .btnClass {
      margin-bottom: 56px;
    }

    .totalClass {
      margin-right: 26px;
      margin-bottom: 23px;
      float: right;

      >span:nth-child(2),
      >span:nth-child(4) {
        margin-right: 35px;
      }
    }

    .tableClass {
      position: relative;

      .downloadClass {
        position: absolute;
        bottom: -49px;
      }
    }

    .pageClass {
      padding-top: 11px;
    }

    .marginT55 {
      margin-top: 55px;
    }

    .detailDiaClass {
      .el-dialog__header {
        padding: 0;
      }

      .el-dialog__body {
        overflow-y: hidden; //解决dialog右下角有瑕疵
        padding: 0;
      }

      .el-dialog {
        border-radius: 4px;
        box-sizing: border-box;

      }

      box-sizing: border-box;

      .diaDivClass {
        box-sizing: border-box;
        height: 47px;
        background: #f4eddc4d;
        border-radius: 4px 4px 0px 0px;
        padding: 15px 0 16px 32px;
      }

      .diaUlClass {
        box-sizing: border-box;
        margin-top: 36px;

        ul {
          list-style: none;
          text-overflow: ellipsis;

          li+li {
            margin-top: 24px;
          }
        }

        .ul1 {
          width: 180px;
        }

        .ul2 {
          width: 280px;
          margin-left: 23px;

        }

        .ul3 {
          width: 162px;
        }

        .ul4 {
          margin-left: 22px;
        }
      }

      .diaBtn {
        margin-top: 35px;
        margin-bottom: 36px;
      }
    }

    
  }

</style>
