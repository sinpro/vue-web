<template>
    <div class="receiving-bank">
        <el-dialog  :visible.sync="value" center :close-on-press-escape='false' :close-on-click-modal='false' :show-close='false'>
            <p class="bg-darkgray ptb10 mb20">填写查询信息</p>
            <el-form ref="formData" :model="formData" :rules="formRules" label-width="250px">
                <el-form-item label="开户行：" prop="openBranch">
                    <el-select v-model="formData.openBranch" placeholder="转出子公司账号">
                        <el-option v-for="(branch, index) in branchList" 
                            :key='index'
                            :label="branch.label" 
                            :value="branch.val"> 
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="省份：" prop="province">
                    <el-select v-model="formData.province" placeholder="转出子公司账号">
                        <el-option v-for="(province, index) in provinceList" 
                            :key='index'
                            :label="province.label" 
                            :value="province.val"> 
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="城市：" prop="city">
                    <el-select v-model="formData.city" placeholder="转出子公司账号">
                        <el-option v-for="(city, index) in cityList" 
                            :key='index'
                            :label="city.label" 
                            :value="city.val"> 
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="开户行关键字：">
                    <el-input v-model="formData.keyword"></el-input>
                </el-form-item>
            </el-form>
            <div class="tc mtb20">
                <el-button type="primary" @click="toCancle">查询</el-button>
                <el-button type="info" @click="toCancle">重置</el-button>
            </div>

            <el-table border :data="openBankList" 
                highlight-current-row
                @current-change="handleCurrentChange">
                <el-table-column width="150" prop="bankSerial" label="联行号" ></el-table-column>
                <el-table-column width="150" prop="bankType" label="类型" ></el-table-column>
                <el-table-column prop="bankName" label="开户名称" ></el-table-column>
            </el-table>
            <div class="tc mt20">
                <el-button type="primary" @click="bankConfirm">确定</el-button>
                <el-button type="info" @click="toCancle">关闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import demoData from '../demoData'
export default {
    props:{
        value:{
            type: Boolean,
            default: false,
        },
    },
    data () {
        return {
            branchList: demoData.branchList,
            provinceList: demoData.provinceList,
            cityList: demoData.cityList,
            openBankList:demoData.openBankList,
            bankItem:{},
            formData:{
                openBranch:'',
                province:'',   
                city:'',   
                keyword:'',      
            },
            formRules:{
                openBranch:[{required: true, message: '请选择开户行', trigger: 'change' }],
                province:[{required: true, message: '请选择省份', trigger: 'change' }],
                city:[{required: true, message: '请选择城市', trigger: 'change' }],
            },
        }
    },
    methods:{
        handleCurrentChange(val){
            this.bankItem = val;
        },
        bankConfirm(){
            this.$emit('bankConfirm', this.bankItem)
            this.$emit('input', false);
        },
        toCancle(){
            this.$emit('input', false);
            this.$emit('toCancle');
        },
    }
}
</script>
<style lang="scss">
    .receiving-bank{
        .el-dialog__header{
            border-bottom: none;
        }
    }
</style>