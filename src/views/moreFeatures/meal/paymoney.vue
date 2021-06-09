<template>
    <div class="batch-transfer">
        <div v-show='steps=="1"'>
            <title-bar title="缴款信息"></title-bar>
            <div class="cont11 flex">
                <ul class="ul1 cp3 f16 lh16 tar">
                    <li>征收机关代码</li>
                    <li>纳税人编号</li>
                    <li>个人所得税</li>
                </ul>
                <ul class="ul2 cp1 f16 lh16">
                    <li>1234</li>
                    <li>67890</li>
                    <li>100.00元/月</li>
                </ul>
                <ul class="ul3 cp3 f16 lh16 tar">
                    <li>套餐截止日期</li>
                    <li>套餐截止日期</li>
                    <li>个人所得税</li>
                </ul>
                <ul class="ul4 cp1 f16 lh16">
                    <li>51413</li>
                    <li>北京易诚有限公司</li>
                    <li>10,000.00元</li>
                </ul>
            </div>
            <div class="mt30">
              <title-bar title="付款人信息"></title-bar>
              <el-form :model="payeeFormData" :rules="payeeRules" ref="payeeFormData" class="mt20" label-width="350px">
                  <el-form-item label="付款帐户:" prop="payAmount">
                      <el-input v-model="payeeFormData.payAmount" placeholder="请选择付款账户"></el-input>
                      <el-button type='text' class='ml20'>账户查询</el-button>
                  </el-form-item>
              </el-form>    
              <div class="tc mt56">
                <el-button size='medium' @click="goback">取消</el-button>
                <el-button size='medium' type="primary" @click='next'>下一步</el-button>
              </div>  
            </div>
        </div>
        <div v-show='steps=="2"'>
            <title-bar title="缴款信息"></title-bar>
            <div class="cont11 flex">
                <ul class="ul1 cp3 f16 lh16 tar">
                    <li>征收机关代码</li>
                    <li>纳税人编号</li>
                    <li>个人所得税</li>
                    <li>付款账号</li>
                </ul>
                <ul class="ul2 cp1 f16 lh16">
                    <li>1234</li>
                    <li>67890</li>
                    <li>100.00元/月</li>
                    <li>1111111111</li>
                </ul>
                <ul class="ul3 cp3 f16 lh16 tar">
                    <li>套餐截止日期</li>
                    <li>套餐截止日期</li>
                    <li>个人所得税</li>
                </ul>
                <ul class="ul4 cp1 f16 lh16">
                    <li>51413</li>
                    <li>北京易诚有限公司</li>
                    <li>10,000.00元</li>
                </ul>
            </div>
            <el-row class="tc mt56">
                <el-button size='medium' type="info" @click="before">取消</el-button>
                <el-button size='medium' type="primary" @click="submit">下一步</el-button>
            </el-row>
        </div>
        <div  v-show='steps=="1" || steps=="2"' class="wPro mtb20">
            <p>温馨提示：</p>
            <p>1. 套餐收费标准按月收费时，您购买套餐即时生效即时扣款后，将在之后每月1号进行扣款；</p>
            <p>2. 每月套餐优惠包含套餐内业务笔数，超出部分将按业务交易标准手续费进行收取；</p>
            <p>3. 每个周期结束后，套餐内未用尽的笔数将不会结转累计至下个周期；</p>
            <p>4. 套餐购买后，每个周期自动续费，可在套餐购买明细取消自动续费；</p>
            <p>5. 扣费失败但未取消自动续费时，默认此周期内无套餐，下一周期继续扣费；</p>
        </div>
        <div v-show='steps=="3"'>
            <div class='mt30'>
                <span class='pay_p'>套餐名称：套餐名称1</span>
                <span class='pay_p ml36'>套餐收费标准：<span class='money'>100.00元/月</span></span>
            </div>
            <auditProcess :list="list"></auditProcess>
            <div class="tc">
              <el-button size='medium' @click="gopay">完成</el-button>
              <el-button size='medium' type="primary" @click='next'>查看交易详情</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import auditProcess from "src/components/auditProcess/index.vue";
    export default {
        components: {
          auditProcess,
        },
        data() {
            return {
                state:0,//0为购买，1已购买
                steps:1,
               formData:{
                   name:'',
                   num:'',
                   money:'',
                   date:'',
                   type:'',
                   transInUsefor:''
               },
               payeeFormData:{
                   payAmount:''
               },
               payeeRules:{},
               payList:{
                   name:'1',
                   num:'2',
                   money:'3',
                   date:'4',
                   type:'5',
                   transInUsefor:''
               },
               formRules:{
                   transInAcct:[{required: true, message: '请选择账号', trigger: 'blur' }]
               },
               accountList:[
                   {label:'你好',val:'11'}
               ],
               activeName: 'payment',
               activeName2: 'first',
               form: {
                  name: '北京易诚互动网络技术股份有限公司',
                  region: '全部',
                  date1: '',
                },
                options: [{
                  value: '选项1',
                  label: '黄金糕'
                }, {
                  value: '选项4',
                  label: '龙须面'
                }, {
                  value: '选项5',
                  label: '北京烤鸭'
                }],
                cardList: [
                  {
                    accuntNum: '424253152',
                    accuntName: '北京易诚互动网络技术股份有限公司',
                    balance: '6353253.00',
                    bank: '简阳农商银行简阳农商银行',
                    bankType: 'own',
                    powerInfo: '1',
                    sonAc: '1',
                    isForeign: '0',
                  },
                  {
                    accuntNum: '424253152',
                    accuntName: '北京易诚互动网络技术股份有限公司',
                    balance: '6353253.00',
                    bank: '简阳农商银行简阳农商银行',
                    bankType: 'other',
                    powerInfo: '1',
                    sonAc: '0',
                    isForeign: '0',
                  }
                ],
                list: [
                  {
                    type: "finish",
                    name: "王思聪",
                    time: "2020-02-02 12:00:00",
                  },
                  {
                    type: "finish",
                    name: "王思聪",
                    time: "2020-02-02 12:00:00",
                  },
                  {
                    type: "tips",
                    name: "王思聪",
                    time: "2020-02-02 12:00:00",
                  },
                  {
                    type: "success",
                    name: "王思聪",
                    time: "2020-02-02 12:00:00",
                  },
                  {
                    type: "info",
                    name: "王思聪",
                    time: "2020-02-02 12:00:00",
                  },
                  {
                    type: "errer",
                    name: "王思聪",
                    time: "2020-02-02 12:00:00",
                    desc: "错误信息",
                  },
                ],
            }
        },
        methods: {
            //子组件想父组件传递参数 $emit
            //购买
            pay(){
                // if('已购买'){
                //     this.activeName = 'second'
                //     this.$emit('childFn', this.activeName);
                // }else{
                //     console.log('1')
                //     this.steps=2
                //     this.formData = this.payList
                // }
                this.steps=2
                this.formData = this.payList
                this.$router.push({
                  path: "/more/meal/payment1/paymoney",
                });
            },
            //取消
            goback(){
                this.$router.go(-1)
                // this.$parent.handleClick()
            },
            //下一步
            next(){
                this.steps=2
            },
            //上一步
            before(){
                this.steps=1
            },
            //提交
            submit(){
                console.log('1')
                this.steps=3
            },
            //完成
            gopay(){
                this.$router.push({
                  path: "/more/meal/payment1",
                });
            },
            //账户查询弹窗选择回调
            accoutConfirm(acctObj){
                this.formData.transOutName = acctObj.acctName;
                this.formData.transOutAlise = acctObj.acctAlise;
                this.formData.transOutAcct = acctObj.acctNo;
                this.formData.transOutBalance = acctObj.balance;
            },
            //查询收款人
            searchPayee() {
                this.payeeFlag = true;
            },
            payeeConfirm(payeeItem) {
                this.formData.transInAcct = payeeItem.account;
            },
            // 结算标准
            settleStandard() {
                this.settleFlag = true;
            },
            //查询收款行
            receiveBank() {
                this.bankFlag = true;
            },
            //收款行选择确认
            bankConfirm(bankItem) {
                console.log('bankItem:', bankItem)
                this.formData.transInBranch = bankItem.bankName;
            },
            //切换转账类型、清空页面校验信息
            transTypeChange() {
                this.$refs['formData'].clearValidate();
            },
            //金额输入框只能输入数字及小数点后两位
            handleInput(e) {
                // 通过正则过滤小数点后两位
                e.target.value = (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null
                this.$set(this.formData, 'transMoneyUpper', mathTools.formatChinese(e.target.value))
            },
            //提交
            transConfirm() {
                this.$refs['formData'].validate((valid) => {
                    if (valid) {
                        this.formData.isInput = false //控制是否显示input修改框
                        this.formDataList.push(JSON.parse(JSON.stringify(this.formData)))
                        // console.log(this.formDataList,11111111)
                        console.log(valid,11111111)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            transReset() {
                this.$emit('transReset');
                this.$refs['formData'].clearValidate();

            },
            toDelete(scope) {
                this.formDataList.splice(scope.$index, 1)
            },
        },
        mounted() {
            console.log('1')
        },
        filters: {
            //账号格式化
            acctFormat(val){
                if(val){
                    return mathTools.formatBankNo(val);
                }
            },
            //余额格式化
            formatMoney(val){
                if(val){
                    return mathTools.addDecollator(val);
                }
            },
            getMoneyUnit(val){
                if(val){
                    return mathTools.getMoneyUnit(val);
                }
            }
        }
    }
</script>

<style lang="scss">
    .batch-transfer {
        .out-acct{
            height: auto !important;
        }
    }
    .icon{
        padding: 25px 14px;
        border: 1px solid;
        margin-left: 259px;
        border-radius: 60px;
        background: #c8c3c3;
    }
    .cont11 {
      >ul>li {
        list-style: none;
      }
      .ul1 {
        margin-left: 158px;
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
        width: 90px;
      }
      .ul3 {
        margin-left: 159px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 96px;
      }
      .ul4 {
        margin-right: 164px;
        >li+li {
          margin-top: 23px;
          width:128px;
        }
      }
    }
    .cont3 {
      >ul>li {
        list-style: none;
      }
      .ul1 {
        margin-left: 5px;
        >li+li {
          margin-top: 23px;
        }
        width: 96px;
      }
      .ul2 {
        margin-right: 25px;
        margin-left: 219px;
        >li+li {
          margin-top: 23px;
        }
        width: 96px;
      }
    }
    .pay_p{
        color: #1b1b1b;
        font-size: 16px;
        font-weight: bold;
    }
</style>