<template>
    <div class="pay-confirm">
        <div v-if="steps == '1'">
            <title-bar title="缴款确认"></title-bar>
            <el-form :model="formData" class="mt36"  :rules="rules" ref="formData" label-width="295px" >
                <el-form-item label="缴款通知单号：" prop="orderNo">
                    <el-input v-model="formData.orderNo" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="监管账户：" prop="regAcctNo">
                    <el-input v-model="formData.regAcctNo" placeholder="请输入"></el-input>
                </el-form-item>
                <div class="tc pt20">
                    <el-button type="primary" @click="query">查询</el-button>
                </div>
            </el-form>
        </div>
        <div v-if="steps == '2'">
            <title-bar title="缴款通知单信息"></title-bar>
            <div class="cont flex">
                <ul class="ul1 cp3 f16 lh16 tar">
                    <li>缴款人</li>
                    <li>通知单状态</li>
                    <li>当前应缴金额</li>
                    <li>当前缴纳金额</li>
                </ul>
                <ul class="ul2 cp1 f16 lh16">
                    <li>张三</li>
                    <li>有效</li>
                    <li>10,000.00元</li>
                    <li>0.00元</li>
                </ul>
                <ul class="ul3 cp3 f16 lh16 tar">
                    <li>缴款人开户行</li>
                    <li>监管账户账号</li>
                    <li>监管账户名称</li>
                    <li>备注</li>
                </ul>
                <ul class="ul4 cp1 f16 lh16">
                    <li>锦江区三色路本行</li>
                    <li>4690 8902 0210 1128</li>
                    <li>自贡市国际投资有限公司</li>
                    <li>--</li>
                </ul>
            </div>
            <div>
                <el-button style='width:108px;margin-left:840px;margin-top: 30px;' @click="addpayee">+点击添加</el-button>
                <title-bar style="margin-top: -30px;" title="缴款信息"></title-bar>
                <el-form ref="tableForm" label-width="0" :model="tableForm">
                  <el-table :data="table" stripe style="width: 100%" input>
                    <el-table-column
                      prop="id"
                      label="交易时间"
                      width="229"
                      show-overflow-tooltip
                    >
                      <template slot-scope="scope">
                        <span v-if="!scope.row.update">{{ scope.row.transOutName }}</span>
                        <el-form-item
                          v-else
                          :prop="scope.$index + 'transOutName'"
                          :rules="[
                            {
                              required: true,
                              validator: rulesTransOutName,
                              message: '交易金额(元)',
                              trigger: 'blur',
                            },
                          ]"
                        >
                          <el-input
                            v-model="scope.row.transOutName"
                            placeholder="请输入收款户名"
                          ></el-input>
                        </el-form-item>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="收款账号"
                      width="153"
                      show-overflow-tooltip
                    >
                      <template slot-scope="scope">
                        <span v-if="!scope.row.update">{{ scope.row.transOutAcct }}</span>
                        <el-form-item
                          v-else
                          :prop="scope.$index + 'transOutAcct'"
                          :rules="[
                            {
                              required: true,
                              validator: rulesTransOutAcct,
                              message: '请输入收款账号',
                              trigger: 'blur',
                            },
                          ]"
                        >
                          <el-input
                            v-model="scope.row.transOutAcct"
                            placeholder="请输入收款账号"
                          ></el-input>
                        </el-form-item>
                      </template>
                    </el-table-column>
                    <el-table-column prop="code" label="转账金额(元)" width="200">
                      <template slot-scope="scope">
                        <span v-if="!scope.row.update">{{ scope.row.payMoney }}</span>
                        <el-form-item
                          v-else
                          :prop="scope.$index + 'payMoney'"
                          :rules="[
                            {
                              required: true,
                              validator: rulesPayMoney,
                              message: '请输入转账金额',
                              trigger: 'blur',
                            },
                          ]"
                        >
                          <el-input
                            placeholder="请输入转账金额"
                            v-model="scope.row.payMoney"
                            @input.native="payMoneyChange(scope)"
                          ></el-input>
                        </el-form-item>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="code"
                      label="用途"
                      show-overflow-tooltip
                      width="282"
                    >
                      <template slot-scope="scope">
                        <span v-if="!scope.row.update">{{ scope.row.useFor }}</span>
                        <el-form-item
                          v-else
                          :prop="scope.$index + 'useFor'"
                          :rules="[
                            {
                              required: true,
                              validator: rulesUseFor,
                              message: '请选择用途',
                              trigger: 'blur',
                            },
                          ]"
                        >
                          <descSelect
                            v-model="scope.row.useFor"
                            placeholder="请选择用途"
                          ></descSelect>
                        </el-form-item>
                      </template>
                    </el-table-column>
                    <el-table-column prop="name" label="操作" width="80">
                      <template slot-scope="scope">
                        <el-button type="text" danger @click="tableDelect(scope)"
                          >删除</el-button
                        >
                      </template>
                    </el-table-column>
                  </el-table>
                </el-form>
            </div>
            <div class="mt30">
                <el-form :model="payFormData" class="mt10"  :rules="payeeRules" ref="payFormData" label-width="313px">
                    <el-form-item label="缴纳总金额：">
                        <span>{{payFormData.transAmount | amountFormat}}</span>
                    </el-form-item>
                    <el-form-item label="总比数：">
                        <span>{{payFormData.totalNum}}</span>
                    </el-form-item>
                    <el-form-item label="备注：">
                        <el-input v-model="payFormData.remark" placeholder="请输入备注"></el-input>
                    </el-form-item>
                    <div class="tc pt20">
                        <el-button size="medium" @click="steps='1'">上一步</el-button>
                        <el-button size="medium" type="primary" @click="submit">提交</el-button>
                    </div>
                </el-form>
            </div>
        </div>

        <!-- 缴款记录 -->
        <div v-if="steps == '3'">
            <title-bar title="缴款记录"></title-bar>
            <el-form :model="recordFormData" class="mt10" :rules="recordRules" ref="recordFormData" >
                <el-form-item label="交易日期" prop="transDate">
                    <el-date-picker
                        v-model="recordFormData.transDate"
                        type="daterange"
                        :clearable="false"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                    <el-button class='ml30' style='width:96px;' type='primary'>查询</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="recordData" @selection-change="handleSelectionChange" stripe style="margin: 20px 0">
              <el-table-column type="selection" width="80"></el-table-column>
              <el-table-column label="交易时间" prop="transDate"></el-table-column>
              <el-table-column label="交易金额" prop="transAmount"></el-table-column>
              <el-table-column label="对方账号" prop="transAcctNo">
                  <template slot-scope="scope">
                      <span>{{scope.row.transAcctNo | acctNoFormat}}</span>
                  </template>
              </el-table-column>
              <el-table-column label="对方户名" prop="transAcctName"></el-table-column>
              <el-table-column label="操作">
                  <template slot-scope="scope">
                      <a @click="recordDetail(scope)">详情</a>
                  </template>
              </el-table-column>
            </el-table>
            <div class="tar mt10">
              <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="prev,pager,next, sizes,jumper"
                  :total="400">
              </el-pagination>
            </div>
            <div class="tc mt30 mb56">
                <el-button size="medium" @click="steps='2'">上一步</el-button>
                <el-button size="medium" type="primary" @click="selectConf">确定</el-button>
            </div>
            
            <el-dialog title="缴款详情：" :visible.sync="detailFlag" :show-close='false' size="medium" text>
              <title-bar title="缴款信息"></title-bar>
              <div class="cont1 flex">
                <ul class="ul1 cp3 f16 lh16 tar">
                  <li>收款方名称</li>
                  <li>收款方账号</li>
                  <li>收款方开户行</li>
                  <li>交易摘要</li>
                  <li>银行流水号</li>
                  <li>监管账户名称</li>
                  <li>监管方开户行</li>
                </ul>
                <ul class="ul2 cp1 f16 lh16">
                  <li>北京易诚互动网络技术有限公司</li>
                  <li>5000 2354 2975 5634</li>
                  <li>四川成都建设银行锦江支行</li>
                  <li>缴款</li>
                  <li>abc2020010125456</li>
                  <li>德阳独立建网</li>
                  <li>资阳雁江农村合作银行</li>
                </ul>
                <ul class="ul3 cp3 f16 lh16 tar">
                  <li>付款方名称</li>
                  <li>付款方账号</li>
                  <li>付款方开户行</li>
                  <li>交易金额</li>
                  <li>交易日期</li>
                  <li>监管账号</li>
                  <li>摘要</li>
                </ul>
                <ul class="ul4 cp1 f16 lh16">
                  <li>南方置业有限公司</li>
                  <li>623192 **** 9999</li>
                  <li>重庆市商业银行南川支行</li>
                  <li>100,000.00元</li>
                  <li>2017-10-10</li>
                  <li>878533 **** 7865</li>
                  <li>--</li>
                </ul>
              </div>
              <div slot="footer" class="dialog-footer m12">
                <el-button @click="detailFlag = false" type="primary">确定</el-button>
              </div>
            </el-dialog>
        </div>
        <!-- 提交成功 -->
        <div v-if="steps == '4'">
          <div class='success_icon'>
            <p class='el-icon-success p_icon'></p>
            <p class='p1_icon'>提交成功</p>
            <p class='p2_icon'>缴款确认金额300.00元</p>
            <el-button class='mt56' type="primary">完成</el-button>
          </div>
        </div>
    </div>
</template>

<script>
import mathTools from 'utils/mathTools.js'
export default {
    data () {
        return {
            tableForm:{},
            steps: '1',
            currentPage: 1,
            detailFlag: false,
            recordItem:{},
            formData:{
                orderNo:'',
                regAcctNo:'',
            },
            rules:{
                orderNo:[
                    { required: true, message: '请输入缴费通知单号', trigger: 'blur' }
                ],
                regAcctNo:[
                    { required: true, message: '请选择监管账户', trigger: 'change' }
                ],
            },
            payFormData:{
                recordList:[],
                transAmount:'123123131',
                totalNum:'12',
                remark:'',
            },
            payeeRules:{
                record:[
                    { required: true, message: '请添加缴费记录', trigger: 'change' }
                ],
            },
            recordFormData:{
                transDate:"",
            },
            recordRules:{
                transDate:[
                    { required: true, message: '请选择', trigger: 'change' }
                ]
            },
            recordData:[
                {
                    transDate:'2020-12-09',
                    transAmount:'3000.00',
                    transAcctNo:'6221283719237137112',
                    transAcctName:'张三',
                },
                {
                    transDate:'2020-12-09',
                    transAmount:'3000.00',
                    transAcctNo:'6221283719237137112',
                    transAcctName:'李四',
                },
                {
                    transDate:'2020-12-09',
                    transAmount:'3000.00',
                    transAcctNo:'6221283719237137112',
                    transAcctName:'王麻子',
                }
            ],
            tableForm: {},
            formRules: {},
            index: "",
            table: [
              {
                transOutName: "12",
                transOutAcct: "12",
                bankName: "21",
                payMoney: "12",
                useFor: "12",
                note: "12",
              },
            ],
            payeeFlag: false,
            accountFlag: false, //账户查询
            BankListSwitch: false,
            outletsFlag: false,
        }
    },

    methods: {
        //添加缴费记录
        addpayee() {
          this.table.push({
            transOutName: "",
            transOutAcct: "",
            bankName: "",
            payMoney: "",
            useFor: "",
            note: "",
            update: true,
            outletsFlagButton: false,
          });
        },
        //规则校验
        rulesTransOutName(rule, value, callback) {
          if (this.table[this.index].transOutName === "") {
            callback(new Error("请输入收款户名"));
          } else {
            callback();
          }
        },
        rulesTransOutAcct(rule, value, callback) {
          if (this.table[this.index].transOutAcct === "") {
            callback(new Error("请输入收款账号"));
          } else {
            callback();
          }
        },
        rulesBankName(rule, value, callback) {
          if (this.table[this.index].bankName === "") {
            callback(new Error("请选择收款银行"));
          } else {
            callback();
          }
        },
        rulesOutlets(rule, value, callback) {
          if (this.outletsFlagButton) {
            if (this.table[this.index].outlets === "") {
              callback(new Error("请选择网点"));
            } else {
              callback();
            }
          } else {
            callback();
          }
        },
        rulesPayMoney(rule, value, callback) {
          if (this.table[this.index].payMoney === "") {
            callback(new Error("请输入转账金额"));
          } else {
            callback();
          }
        },
        rulesUseFor(rule, value, callback) {
          if (this.table[this.index].useFor === "") {
            callback(new Error("请选择用途"));
          } else {
            callback();
          }
        },
        getTransType() {},
        tableUpdate(scope) {
          this.$set(scope.row, "update", true);
          if (scope.row.payMoney) {
            if (Number(mathTools.delDecollator(scope.row.payMoney)) > 1000000) {
              this.$set(scope.row, "outletsFlagButton", true);
            } else {
              this.$set(scope.row, "outletsFlagButton", false);
            }
          } else {
            this.$set(scope.row, "outletsFlagButton", false);
          }
        },
        tableSave(scope) {
          this.index = scope.$index;
          this.$refs["tableForm"].validateField(
            [
              this.index + "transOutName",
              this.index + "transOutAcct",
              this.index + "bankName",
              this.index + "outlets",
              this.index + "payMoney",
              this.index + "useFor",
            ],
            (valid) => {
              console.log(valid);
              if (!valid) {
                this.table[scope.$index].update = false;
              } else {
                console.log("error submit!!");
                return false;
              }
            }
          );
        },
        tableDelect(scope) {
          this.table.splice(scope.$index, 1);
        },
        //查询
        query(){
            this.$refs['formData'].validate((valid) => {
                if(valid){
                    this.steps = '2';
                }
            })
        },
        //添加缴款记录
        addRecord(){
            this.steps = '3';
        },
        //缴款记录选择确定
        selectConf(){
          //确认成功
          this.steps = '4';
            if(this.payFormData.recordList && this.payFormData.recordList.length > 0){
                this.steps = '2';
            }else{

            }
        },
        submit(){
            this.$refs['payFormData'].validate((valid) => {
                if(valid){
                    this.steps = '3';
                }
            })
        },
        //复选缴款记录
        handleSelectionChange(val){
            this.payFormData.recordList = val;
        },
        //缴款记录详情
        recordDetail(scope){
            this.recordItem = scope.row;
            this.detailFlag = true;
        },
        //移除缴款记录
        removeRecord(index){
            this.payFormData.recordList.splice(index, 1)
        },
        handleSizeChange(val){
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        
    },

    filters: {
        amountFormat(val){
            return mathTools.addDecollator(val) + '元';
        },
        acctNoFormat(val){
            return mathTools.formatBankNo(val);
        }
    }
}
</script>
<style lang="scss">
    .pay-confirm{
        .table-wrapper{
            td{
                padding-left: 20px;
            }
        }
        .el-table__header .el-table-column--selection .cell .el-checkbox:after {
            content: "全选";
        }
        .del-icon{
            position: absolute;
            right: 20px;
            top: 50%;
        }
    }
    .cont {
      >ul>li {
        list-style: none;
      }
      .ul1 {
        margin-left: 67px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 96px;
      }
      .ul2 {
        >li+li {
          margin-top: 23px;
        }
        width: 99px;
      }
      .ul3 {
        margin-left: 249px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 96px;
      }
      .ul4 {
        margin-right: 117px;
        >li+li {
          margin-top: 23px;
          width:176px;
        }
      }
    }
    .cont1 {
      >ul>li {
        list-style: none;
      }
      .ul1 {
        margin-left: 52px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 96px;
      }
      .ul2 {
        >li+li {
          margin-top: 23px;
        }
        width: 224px;
      }
      .ul3 {
        margin-left: 125px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 96px;
      }
      .ul4 {
        margin-right: 103px;
        >li+li {
          margin-top: 23px;
          width:176px;
        }
      }
    }
    .success_icon{
      width: 210px;
      height: 211px;
      text-align: center;
      margin-left: 371px;
      margin-top: 60px;
      line-height: 32px;
    }
    .p_icon{
      color: #059c5d;
      font-size: 51px;
    }
    .p1_icon{
	    font-family: PingFang-SC-Bold;
	    font-size: 22px;
	    font-weight: normal;
	    font-stretch: normal;
	    letter-spacing: 0px;
	    color: #1b1b1b;
    }
    .p2_icon{
	    font-family: PingFang-SC-Light;
	    font-size: 16px;
	    font-weight: normal;
	    font-stretch: normal;
	    letter-spacing: 0px;
	    color: #999999;
    }
</style>