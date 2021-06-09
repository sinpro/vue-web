<template>
    <div class="batch-transfer">
        <div>
            <el-tabs v-model="activeName">
                <div class="flex" v-show='cardList.length>0' style="margin-left:92px">
                  <el-card style='line-height:2;width: 461px;margin-right: 24px;' v-for="(value,index) in cardList" :key="index">
                    <div class="clearfix">
                      <span style='color: #999999;font-size: 16px;'>套餐名称{{index+1}}</span>
                      <span class='icon'>已购买</span>
                      <p style='color: #1b1b1b;;font-size: 18px;'>包含业务：转账、代发</p>
                    </div>
                    <div class="cont3 flex mt50">
                        <ul class="ul1 cp3 f16 lh16 tal">
                            <li>套餐笔数</li>
                            <li>套餐收费标准</li>
                            <li>套餐截止日期</li>
                            <li>使用渠道</li>
                        </ul>
                        <ul class="ul2 cp1 f16 lh16 tar">
                            <li class='money'>50笔</li>
                            <li>67890</li>
                            <li>100.00元/月</li>
                            <li>个人所得税</li>
                        </ul>
                    </div>
                    <el-button v-show="state=='0'" type="text" style='margin-left:40%;width:100px' class="mt20" @click='pay'>购买</el-button>
                    <el-button v-show="state=='1'" type="text" style='margin-left:40%;width:100px' class="mt20" @click='pay'>详情</el-button>
                  </el-card>
                </div>
                <div class='mt24'>
                    <el-pagination
                    style="margin-right: 84px;"
                        v-show='cardList.length>0'
                        class='fr'
                        :page-size="10"
                        layout="total, prev,pager, next, jumper"
                        :total="40">
                    </el-pagination>
                </div>
                <div v-show='cardList.length==0' style='margin-left:40%;margin-top:40px'>
                    暂无套餐，敬请期待
                </div>
            </el-tabs>
        </div>
        <div class="wPro mtb56">
          <p>温馨提示</p>
          <p>1.套餐购买后，每个周期自动续费，可在套餐购买明显取消自动续费；</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                state:0,//0未购买，1已购买
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
                // this.steps=2
                // this.formData = this.payList
                if(this.state==0){
                  this.$router.push({
                    path: "/more/meal/payment1/paymoney",
                  });
                }else if(this.state==1){
                  this.$router.push({
                    path: '/more/meal/paymeal/paymealDet',
                  });
                }
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
</style>