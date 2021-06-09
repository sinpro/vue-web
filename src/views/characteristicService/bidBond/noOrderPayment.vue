<template>
    <div class="no-order-pay">
        <div v-show="steps=='1'" class="payee-wrapper">
            <el-form :model="formData" :rules="payeeRules" ref="formData" label-width="312px" >
                <title-bar title="付款人信息"></title-bar>
                <el-form-item label="付款帐号：" prop="payeeAcctNo" class="mt20">
                    <el-select v-model="formData.payeeAcctNo">
                        <el-option value="1" label="卡一"></el-option>
                        <el-option value="2" label="卡二"></el-option>
                        <el-option value="3" label="卡三"></el-option>
                    </el-select>
                    <el-button type="text" class="ml10 vat" @click="acctQuaery">账户查询</el-button>
                    <p class="lh16 mt12 ml16">可用余额:<span class='money'>10,000元</span></p>
                </el-form-item>
                <title-bar title="订单信息"></title-bar>
                <el-form-item label="收款账号：" prop="payAcctNo" class="mt20">
                    <el-input v-model="formData.payAcctNo"></el-input>
                    <el-button type="text" class="ml10" @click="searchPayee">常用收款人</el-button>
                </el-form-item>
                <el-form-item label="收款户名：" prop="payAcctName">
                    <el-input v-model="formData.payAcctName"></el-input>
                </el-form-item>
                <el-form-item label="转账金额：" prop="transAmount">
                    <el-popover
                        placement="top-start"
                        width="200"
                        trigger="manual"
                        v-model="visible"
                    >
                        <div  class="tips-content">
                            <div>
                                {{formData.transAmount | getMoneyUnit}}
                            </div>
                            <div>
                                {{formData.transAmount | formatMoney}}
                            </div>
                        </div>  
                        <el-input slot="reference"  v-model="formData.transAmount" @focus='handleFocus' @blur="handleBlur" @input.native="handleInput" placeholder="请输入转账金额"></el-input>
                    </el-popover>
                    <p>{{formData.transAmount | amountUpper}}</p>
                </el-form-item>
                <el-form-item label="用途：" prop="purpose"  placeholder="请选择">
                    <el-select v-model="formData.purpose">
                        <el-option value="1" label="用途一"></el-option>
                        <el-option value="2" label="用途二"></el-option>
                        <el-option value="3" label="用途三"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="备注：" prop="remark">
                    <el-input v-model="formData.remark" placeholder="请输入备注"></el-input>
                </el-form-item>
                <div class="tc">
                    <el-button type="primary" @click="submit">提交</el-button>
                </div>
            </el-form>
        </div>

        <div v-if="steps == '2'" class="batchStopSuccess">
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
        <!-- 常用收款人 -->
        <payee-list v-if="payeeFlag" :payeeFlag="payeeFlag" @handleClose="payeeFlag = false" @payeeConfirm="payeeConfirm"></payee-list>
    </div>
</template>

<script>
import mathTools from 'utils/mathTools.js'
import AccountList from "../components/AccountList"; //账户查询
import PayeeList from "../components/payeeList"; //收款人列表
export default {
    components: {
      AccountList,
      PayeeList,
    },
//   props: {
//     formData: {
//       Type: Object,
//       default: () => {},
//     },
//   },
    data () {
        return {
            steps:'1',
            accountFlag: false, //账户查询
            payeeFlag: false, //收款人列表
            visible: false,
            formData:{
                payeeAcctNo:'',
                payAcctNo:'',
                payAcctName:'',
                transAmount:'',
                purpose:'',
                remark:'',
            },
            payeeRules:{
                payeeAcctNo:[
                    { required: true, message: '请选择付款人信息', trigger: 'change' }
                ],
                payAcctNo:[
                    { required: true, message: '请输入收款账号', trigger: 'blur' }
                ],
                payAcctName:[
                    { required: true, message: '请输入收款户名', trigger: 'blur' }
                ],
                transAmount:[
                    { required: true, message: '请输入转账金额', trigger: 'blur' }
                ],
                purpose:[
                    { required: true, message: '请选择用途', trigger: 'change' }
                ]
            },
        }
    },

    methods: {
        handleFocus(e){
            this.visible = e.target.value ? true : false;
        },
        handleBlur(e){
            this.visible = false;
        },
        handleInput(e) {
            this.visible = e.target.value ? true : false;
            // 通过正则过滤小数点后两位
            let transAmount = (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null
            this.$set(this.formData, 'transAmount', transAmount)
        },

        submit(){
            this.$refs["formData"].validate((vaild) => {
                if(vaild){
                    this.steps = 2
                }
            });
        },
        //查询收款人
        searchPayee() {
          this.payeeFlag = true;
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
        //常用收款人弹窗选择回调
        payeeConfirm(payeeItem) {
          this.payeeFlag = false;
          this.$set(this.formData,"payAcctNo",mathTools.formatBankNo(payeeItem.acctNo));
          this.$set(this.formData, "payAcctName", payeeItem.acctName);
          //this.$set(this.formData, "bankName", payeeItem.bankName);
          //this.$set(this.formData, "branchName", payeeItem.branchName);
          // this.formData = payeeItem;
        },
    },

    filters: {
        amountUpper(val){
            if(val){
                return mathTools.formatChinese(val);
            }
        },
        getMoneyUnit(val){
            if(val){
                return mathTools.getMoneyUnit(val);
            }
        },
        //余额格式化
        formatMoney(val){
            if(val){
                return mathTools.addDecollator(val);
            }
        },
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