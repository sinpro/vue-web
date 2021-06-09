<template>
    <div class="one-stop-transfer">
        <el-form ref="formData" :model="formData" label-width="35%">
            <el-form-item label="企业名称：">
                <el-input v-model="formData.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="活期账号：">
                <el-select v-model="formData.transOutAcct" :disabled="true">
                    <el-option v-for="(account, index) in numList" 
                        :key='index'
                        :label="account.label " 
                        :value="account.val"> 
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="账户余额：">
                <el-input v-model="formData.payMoney" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="转入金额：">
                <el-input v-model="formData.payMoney" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="大写金额：">
                <el-input v-model="formData.payMoneyUpper" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="用途：">
                <el-input v-model="formData.useFor" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="备注：">
                <el-input v-model="formData.note" :disabled="true"></el-input>
            </el-form-item>
        </el-form>

        <el-row class="tc mtb30">
            <el-button type="info" @click="getback">上一步</el-button>
            <el-button type="primary" @click="submit">提交</el-button>
        </el-row>

        <payee-list v-model="payeeFlag" @payeeConfirm='payeeConfirm'></payee-list>
        <settle-standard v-model="settleFlag"></settle-standard>
        <receiving-bank v-model="bankFlag" @bankConfirm='bankConfirm'></receiving-bank>

    </div>
</template>

<script>
    import mathTools from 'utils/mathTools.js'
    import demoData from '../demoData'
    import PayeeList from '../components/payeeList' //收款人列表
    import SettleStandard from '../components/settleStandard' //结算标准
    import BankList from '../components/bankList' //结算标准
    import ReceivingBank from '../components/receivingBank'
    export default {
        components: {
            PayeeList,
            SettleStandard,
            ReceivingBank,
            BankList
        },
        props: {
            // formData: {
            //     Type: Object,
            //     default: () => {}
            // }
        },
        data() {
            return {
                numList:[],
                isInnerBank: true,
                accountList: [{
                        label: '行内银行',
                        val: '行内',
                        isInnerBank: true,
                    },
                    {
                        label: '行外银行',
                        val: '行外',
                        isInnerBank: false,
                    },
                ],
                purposeList: demoData.purposeList,
                areaList: demoData.provinceList,
                cityList: demoData.cityList,
                unionPayList: demoData.unionPayList,
                useForList: ['转账', '转账2'],

                payeeFlag: false, //收款人列表
                settleFlag: false, //结算标准
                bankFlag: false, //查询收款行
                BankListSwitch: false, //查询银行列表
                form: {
                    type: '',
                    ofen: '',
                },
                formData: {
                    type1:'',
                    划转:'',
                    name:'111',
                    netPoint: '',
                    transOutAcct: '',
                    area: '',
                    transType: '',
                    payeeAcctType: '',
                    transInAcct: '',
                    transInName: '',
                    savePayee: '',
                    transInBranch: '',
                    transMoney: '',
                    note: '',
                    resource: '',
                    useFor: '',
                    payMoneyCharge: '100.00',
                },
            }
        },
        methods: {
            showBankList() { //银行列表
                this.BankListSwitch = true
            },
            changeIsInnerBank(val) {
                val == '行内' ? this.isInnerBank = true : this.isInnerBank = false
            },
            //查询收款人
            searchPayee() {
                this.payeeFlag = true;
            },
            payeeConfirm(payeeItem) {
                // console.log(111111,payeeItem)
                this.formData.accNo = payeeItem.accNo;
                this.formData.accName = payeeItem.accName;
                this.formData.bankName = payeeItem.bankName;
                this.formData.branchName = payeeItem.branchName;
                // this.formData = payeeItem; 

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
                // console.log('bankItem:', bankItem)
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
                this.$set(this.formData, 'payMoneyUpper', mathTools.formatChinese(e.target.value))
            },
            //提交
            transConfirm() {
                this.$refs['formData'].validate((valid) => {ne
                    if (valid) {
                        this.$emit('transConfirm')
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //上一步
            getback(){
                this.$router.go(-1)
            },
            //提交
            submit(){
                console.log(1)
            },
            transReset() {
                this.$emit('transReset');
                this.$refs['formData'].clearValidate();

            }
        },
        filters: {
            timeOfTransMeth(val) {
                // console.log(val)
                switch (val) {
                    case '实时':
                        return '预计5分钟到账，到账日期已对方行实际为准。'
                        break
                    case '次日':
                        return '预计次日到账，实际到账时间以对方行入账为准。'
                        break
                    case '预约':
                        return '根据预约时间发起转账'
                        break
                    case '普通':
                        return '预计2小时内到账，实际到账时间以对方行入账为准。'
                        break
                }
            }
        }
    }
</script>

<style lang="scss">
    .one-stop-transfer {
        .shortInput {

            .el-input__inner,
            .el-input,
            .el-select {
                width: 123px;


            }

        }

        .shortInput01 {
            width: 16%;
        }
    }
</style>