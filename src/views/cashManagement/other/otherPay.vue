<template>
    <div class="one-stop-transfer">
        <el-form ref="formData" :model="formData" :rules="formRules" label-width="35%">
            <!-- <p class="leftGoldBar borderb pb10 mb20 bold f16 mt30 green">付款人信息</p> -->
            <title-bar title="付款人信息"></title-bar>
            <el-form-item label="企业名称：" prop="name">
                <el-input v-model="formData.name" :disabled="true" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="付款账户：" prop="transOutAcct">
                <el-select v-model="formData.transOutAcct" placeholder="请选择">
                    <el-option v-for="(account, index) in numList" 
                        :key='index'
                        :label="account.label " 
                        :value="account.val"> 
                    </el-option>
                </el-select>
                <!-- <el-checkbox-group v-model="form.type" class="inline ml30">
                    <el-checkbox label="设置为默认账户" name="type"></el-checkbox>
                </el-checkbox-group> -->
            </el-form-item>
            <p class="bg-gray border mb10 tac w140" style="border-radius:4px;margin-top:-10px;margin-left:40%">余额：1,233,124</p>
            <!-- <el-form-item label="付款账簿：" prop="transOutAcct">
                <el-select v-model="formData.transOutAcct" placeholder="请选择">
                    <el-option v-for="(account, index) in numList" 
                        :key='index'
                        :label="account.label " 
                        :value="account.val"> 
                    </el-option>
                </el-select>
            </el-form-item> -->
            <title-bar title="收款人信息"></title-bar>
            <!-- <el-form-item label="划转类型：" prop="划转">
                <el-radio-group v-model="formData.划转" class="p10">
                    <el-radio label="资金上划"></el-radio>
                    <el-radio label="资金下拨"></el-radio>
                </el-radio-group>
            </el-form-item> -->
            <!-- <el-form-item label="收款账户：" prop="accName">
                <el-select v-model="formData.accName" placeholder="请选择">
                    <el-option v-for="(account, index) in numList" 
                        :key='index'
                        :label="account.label " 
                        :value="account.val"> 
                    </el-option>
                </el-select>
                <a class="ml30" @click="searchPayee">常用收款人</a>
            </el-form-item> -->
            <el-form-item label="收款户名：" prop="accName">
                <el-input v-model="formData.accName" placeholder="请输入"></el-input>
                <a class="ml30" @click="searchPayee">常用收款人</a>
            </el-form-item>
            <el-form-item label="收款账号：" prop="accNo">
                <el-input v-model="formData.accNo" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="收款银行：" prop="bankName">
                <el-select v-model="formData.bankName" @change="changeIsInnerBank" @click.native="showBankList()"
                    filterable allow-create placeholder="请选择">
                </el-select>
                <bank-list v-model="BankListSwitch"></bank-list>
            </el-form-item>
            <!-- <el-form-item label="网点：" prop="branchName">
                <el-select v-model="formData.branchName" placeholder="请选择网点">
                    <el-option v-for="(account, index) in unionPayList" :key='index' :value="account.unionNum"
                        :label="account.branchName">
                    </el-option>
                </el-select>
                <span class="ml30">模糊搜索</span>
            </el-form-item> -->
            <el-form-item label="转账金额：">
                <el-input v-model="formData.payMoney" @input.native="handleInput" placeholder="请输入转账金额"></el-input>
            </el-form-item>
            <el-form-item label="大写金额：">
                {{formData.payMoneyUpper}}
            </el-form-item>
            <!-- <el-form-item label="转账方式：" prop="resource">
                <el-radio-group v-model="formData.resource" class="p10">
                    <el-radio label="实时"></el-radio>
                    <el-radio v-if="!isInnerBank" label="普通"></el-radio>
                    <el-radio label="次日"></el-radio>
                    <el-radio label="预约"></el-radio>
                </el-radio-group>
                <div style="color:red;font-size:10px">{{formData.resource | timeOfTransMeth}}</div>
            </el-form-item>

            <el-form-item label="转出日期：" v-if="formData.resource=='预约'" prop="transferDate">
                <el-date-picker v-model="formData.dateValue" type="date" placeholder="选择转出日期">
                </el-date-picker>
            </el-form-item>


            <el-form-item label="手续费：">
                <el-input v-model="formData.payMoneyCharge" disabled></el-input>
                <a class="ml30" @click="settleStandard">手续费标准</a>
            </el-form-item> -->

            <el-form-item label="用途：" prop="useFor">
                <el-select v-model="formData.useFor" placeholder="请选择用途">
                    <el-option v-for="(account, index) in useForList" :key='index' :value="account">
                    </el-option>
                </el-select>
                <span class="ml30">用途编辑</span>
                <!-- <el-checkbox-group v-model="form.type1" class="inline ml30">
                    <el-checkbox label="下拨不归集" name="type1"></el-checkbox>
                </el-checkbox-group> -->
            </el-form-item>
            <el-form-item label="备注：">
                <el-input v-model="formData.note" placeholder="请输入备注"></el-input>
            </el-form-item>
            <div class="formW_200">
                <el-checkbox-group v-model="form.ofen" class="inline">
                    <el-checkbox label="保存至常用收款人" name="type"></el-checkbox>
                </el-checkbox-group>
            </div>
        </el-form>

        <el-row class="tc mtb30">
            <el-button type="info" @click="transReset">重置</el-button>
            <el-button type="primary" @click="transConfirm">下一步</el-button>
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
                formRules: {
                    transOutAcct: [{
                        required: true,
                        message: '请选择付款账号',
                        trigger: 'change'
                    }],
                    transferDate: [{
                        required: true,
                        message: '请选择转出日期',
                        trigger: 'change'
                    }],
                    bankName: [{
                        required: true,
                        message: '请选择付款账号',
                        trigger: 'change'
                    }],
                    area: [{
                        required: true,
                        message: '请选择地区',
                        trigger: 'change'
                    }],
                    city: [{
                        required: true,
                        message: '请选择地区',
                        trigger: 'change'
                    }],
                    accNo: [{
                        required: true,
                        message: '请选择输入账号',
                        trigger: 'change'
                    }],
                    useFor: [{
                        required: true,
                        message: '请选择用途',
                        trigger: 'change'
                    }],
                    accName: [{
                        required: true,
                        message: '请输入收款账户户名',
                        trigger: 'blur'
                    }],
                    transInBranch: [{
                        required: true,
                        message: '请输入收款账户开户行',
                        trigger: 'blur'
                    }],
                    payeeAcctType: [{
                        required: true,
                        message: '请选择收款方账户类型',
                        trigger: 'change'
                    }],
                    transMoney: [{
                        required: true,
                        message: '请输入转账金额',
                        trigger: 'blur'
                    }],
                    transType: [{
                        required: true,
                        message: '请选择转账类型',
                        trigger: 'change'
                    }],
                    transWay: [{
                        required: true,
                        message: '请选择转账方式',
                        trigger: 'change'
                    }],

                    transPhone: [{
                        required: true,
                        message: '请输入收款方手机号',
                        trigger: 'blur'
                    }],
                    transPurpose: [{
                        required: true,
                        message: '请选择用途',
                        trigger: 'change'
                    }],
                    processDate: [{
                        required: true,
                        message: '请选择预约处理日期',
                        trigger: 'blur'
                    }],
                    processTime: [{
                        required: true,
                        message: '请选择预约时间',
                        trigger: 'blur'
                    }],
                    processPhone: [{
                        required: true,
                        message: '请输入预约通知手机号',
                        trigger: 'blur'
                    }],
                    resource: [{
                        required: true,
                        message: '请选择转账方式',
                        trigger: 'blur'
                    }],
                    branchName: [{
                        required: true,
                        message: '请选择转账方式',
                        trigger: 'blur'
                    }],
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
                this.$refs['formData'].validate((valid) => {
                    if (valid) {
                        this.$emit('transConfirm')
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
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