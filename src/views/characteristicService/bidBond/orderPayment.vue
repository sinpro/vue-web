<template>
    <div class="no-order-pay">
        <div class="payee-wrapper" v-if="steps=='1'">
            <el-form :model="formData" :rules="rules" ref="formData" label-width="312px">
                <title-bar title="付款人信息"></title-bar>
                <el-form-item label="付款人信息：" prop="payeeAcctNo" class="mt20">
                    <el-select v-model="formData.payeeAcctNo">
                        <el-option value="1" label="卡一"></el-option>
                        <el-option value="2" label="卡二"></el-option>
                        <el-option value="3" label="卡三"></el-option>
                    </el-select>
                    <el-button type="text" class="ml10 vat" @click="acctQuaery">账户查询</el-button>
                    <p class="lh16 mt12 ml16">可用余额:<span class='money'>10,000元</span></p>
                </el-form-item>
                <!-- <title-bar title="订单信息" class="mt30"></title-bar> -->
                <el-button style='width:108px;margin-left:840px;margin-top: 30px;' @click="steps = '2'">+点击添加</el-button>
                <title-bar style="margin-top: -30px;" title="订单信息"></title-bar>
                <el-table :data="formData.orderList" border>
                  <el-table-column label="交易时间" prop="transDate"></el-table-column>
                  <el-table-column label="交易金额(元)" prop="transAmount"></el-table-column>
                  <el-table-column label="对方账号" prop="transAcctNo">
                      <template slot-scope="scope">
                          <span>{{scope.row.transAcctNo | acctNoFormat}}</span>
                      </template>
                  </el-table-column>
                  <el-table-column label="对方户名" prop="transAcctName"></el-table-column>
                  <el-table-column label="操作">
                      <template slot-scope="scope">
                          <a @click="delList(scope)">删除</a>
                      </template>
                  </el-table-column>
                </el-table>
                <el-form-item label="总金额(元)：">
                    <el-input v-model="formData.totalAmount" placeholder="请输入总金额"></el-input>
                    <p>手续费：
                        <span class="money">{{1111 }}元</span>
                        <el-button type="text" class="ml10" @click="settleStandard">手续费标准</el-button>
                    </p>
                </el-form-item>
                <el-form-item label="总笔数：">
                    <el-input v-model="formData.count" placeholder="请输入总笔数"></el-input>
                </el-form-item>
                <el-form-item label="备注：">
                    <el-input v-model="formData.remark" placeholder="请输入备注"></el-input>
                </el-form-item>
                <div class="tc">
                    <el-button type="primary" @click='steps=3'>提交</el-button>
                </div>
            </el-form>
        </div>

        <!-- 订单记录 -->
        <div v-if="steps == '2'">
            <title-bar title="订单保证金"></title-bar>
            <el-form :model="orderFormData" class="mt10" :rules="recordRules" ref="orderFormData" >
                <el-form-item label="交易日期" prop="transDate">
                    <el-date-picker
                        v-model="orderFormData.transDate"
                        type="daterange"
                        :clearable="false"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                    <el-button class='ml30' style='width:96px' type='primary'>查询</el-button>
                </el-form-item>
            </el-form>
            <el-table :data="orderList" @selection-change="handleSelectionChange" stripe style="margin: 20px 0">
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
                        <a @click="orderDetail(scope)">详情</a>
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
            <div class="tc mt30">
                <el-button type="primary" @click="selectConf">确定</el-button>
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

        <div v-if="steps == '3'" class="batchStopSuccess">
            <span>总金额： </span>
            <span class="moneybold f20">40,000.00元</span>
            <span class="ml8 gray2"
              >(大写：叁拾万元整 )</span
            >
            <div class="mt20 wr100 h200 bgbrand ptb30 plr70 borderbox flex alc">
              <div>
                <div class="step-success mt10">
                  <i class="el-icon-check"></i>
                </div>
                <div class="step-inner"></div>
                <div class="step-errer bgtips">
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="ml20">
                <div>
                  <p class="f18 lh34">交易已提交</p>
                  <p class="gray2">2021-01-01 13:32:22</p>
                </div>
                <div class="mt30">
                  <p class="f22 ctips lh40">待审批</p>
                  <p>下一级审批人：王校长</p>
                </div>
              </div>
            </div>
            <div class="mtb56 tc">
              <el-button type="primary" @click='steps=1'>完成</el-button>
            </div>
        </div>

        <!-- 账户查询 -->
        <account-list v-model="accountFlag" @accoutConfirm="accoutConfirm"></account-list>
        <!-- 手续费 -->
        <settle-standard v-model="settleFlag"></settle-standard>
    </div>
</template>

<script>
import mathTools from 'utils/mathTools.js'
import AccountList from "../components/AccountList"; //账户查询
import SettleStandard from "../components/settleStandard"; //手续费标准
export default {
    components: {
      AccountList,
      SettleStandard
    },
    data () {
        return {
            accountFlag: false, //账户查询
            settleFlag: false, //手续费标准
            steps:'1',
            currentPage: 1,
            detailFlag: false,
            orderItem:{},
            formData:{
                payeeAcctNo:'',
                orderList:[],
                totalAmount:'1232131123',
                count:'10',
                remark:''
            },
            rules:{
                payeeAcctNo:[
                    { required: true, message: '请选择付款人信息', trigger: 'change' }
                ]
            },
            orderFormData:{
                transDate:"",
            },
            recordRules:{
                transDate:[
                    { required: true, message: '请选择', trigger: 'change' }
                ]
            },
            orderList:[
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
            ]
        }
    },

    methods: {
        // 手续费
        settleStandard() {
          this.settleFlag = true;
        },
        //账户查询弹窗选择回调
        accoutConfirm(acctObj) {
        //   this.formData.transOutName = acctObj.acctName;
        //   this.formData.transOutAlise = acctObj.acctAlise;
          this.formData.payeeAcctNo = acctObj.acctNo;
        //   this.formData.transOutBalance = acctObj.balance;
        },
        acctQuaery() {
          this.accountFlag = true;
        },
        //订单记录详情
        orderDetail(scope){
            this.orderItem = scope.row;
            this.detailFlag = true;
        },
        //复选订单
        handleSelectionChange(val){
            this.orderFormData.orderList = val;
            console.log(this.orderFormData.orderList)
        },
        //订单记录选择确定
        selectConf(){
            if(this.orderFormData.orderList && this.orderFormData.orderList.length > 0){
                this.steps = '1';
                this.formData.orderList = this.orderFormData.orderList
            }else{

            }
        },
        //删除记录
        delList(scope){
            console.log(scope.$index)
            let inx = scope.$index
            this.formData.orderList.splice(inx,1)
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
    .no-order-pay{
        .el-icon-circle-close{
            position: absolute;
            right: 20px;
            top: 40%;
            &::before{
                font-size: 20px;
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
    .batchStopSuccess {
        .step-success {
          margin-left: 7px;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background: #99d4b9;
          line-height: 30px;
          text-align: center;
          color: #fff;
          i {
            font-weight: bold;
          }
        }
    .step-errer {
      position: relative;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      & :first-child {
        position: absolute;
        left: 20px;
        top: 6px;
        height: 18px;
        width: 3px;
        background: #fff;
      }
      & :last-child {
        position: absolute;
        right: 6px;
        top: 22px;
        width: 18px;
        height: 3px;
        background: #fff;
      }
    }
    .step-inner {
      height: 50px;
      width: 3px;
      background: #99d4b9;
      margin-left: 20px;
    }
  }
</style>