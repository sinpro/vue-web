<template>
    <div>
      
        <div>
            <div class="borderb flexsb">
                <div class="cg f18 border4b pb10">企业基本信息</div>
                <div></div>
            </div>
            <div class=" mt20">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="310px" class="demo-ruleForm">
                    <el-form-item label="产品名称:" prop="name1"><el-input disabled v-model="ruleForm.name1"></el-input></el-form-item>
                    <el-form-item label="企业名称:" prop="name2"><el-input disabled v-model="ruleForm.name2"></el-input></el-form-item>
                    <el-form-item label="证件类型:" prop="name3"><el-input disabled v-model="ruleForm.name3"></el-input></el-form-item>
                    <el-form-item label="证件号码:" prop="name4"><el-input disabled v-model="ruleForm.name4"></el-input></el-form-item>
                    <el-form-item required label="联系人姓名:" prop="name5"><el-input  v-model="ruleForm.name"></el-input></el-form-item> 
                    <el-form-item required label="联系人电话:" prop="name6"><el-input  v-model="ruleForm.name"></el-input></el-form-item>
                    <el-form-item required label="实际经营地址:" prop="name7">
                        <div class="flex select_address">
                            <el-input disabled v-model="ruleForm.address"></el-input>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                            
                        </div>

                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div>
            <div class="borderb flexsb">
                <div class="cg f18 border4b pb10">贷款基本信息</div>
                <div></div>
            </div>
            <div class=" mt20">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="310px" class="demo-ruleForm">
                    
                    <el-form-item required label="申请贷款金额(元):" prop="name5"><el-input  v-model="ruleForm.name"></el-input></el-form-item> 
                    <el-form-item required label="申请贷款金额(元):" prop="name6">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <a class="ml10 " @click="dialogVisible=true">试算</a>
                    </el-form-item>
                    <el-form-item required label="贷款用途:" prop="name6">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <div class="tac mb50">
                <el-button type="primary"  class="mt30" size="small" @click="submit">提交</el-button>
            </div>
        </div>


        <el-dialog  size="medium" text title="试算结果"  :visible.sync="dialogVisible" >
            <el-form :model="loanForm" :rules="loanRules" ref="loanForm" label-width="100px" class="demo-ruleForm">
                <el-row>
                    <el-col :span="12">
                        <el-form-item required label="还款方式" prop="loanWay">
                        <el-select v-model="loanForm.loanWay" placeholder="请选择">
                            <el-option label="等额本息" value="1"></el-option>
                            <el-option label="等额本金" value="2"></el-option>
                        </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item required label="贷款利率" prop="loanRate">
                            <el-input v-model="loanForm.loanRate"></el-input>
                            <br>
                            <el-tooltip class="item" effect="dark" content="贷款市场报价利率：1年 3.88%，5年 3.88%。" placement="top-start">
                                <!-- <a  @click="loanSelect=true">利率查询</a> -->
                                <a>利率查询</a>
                            </el-tooltip>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        
            <div>
                    
                <div class="tar f16 mt20 gray1 " >
                    <span>还款总额：876,548.98元</span>
                    <span>利息总额：876,548.98元</span>
                </div>
                <el-table :data="tableData" class="mt20"  style="width: 100%">
                    <el-table-column label="期次" prop="date"> </el-table-column>
                    <el-table-column label="本金(元)" prop="date"> </el-table-column>
                    <el-table-column label="利息(元)" prop="date"> </el-table-column>
                    <el-table-column label="合计(元)" prop="rate"> </el-table-column>
                </el-table>
            </div>
            <div class="mb20 tac">
                <el-button type="primary" @click="dialogVisible=false">关闭</el-button>
            </div>
            
        </el-dialog>



    </div>
</template>
<script>
export default {
    data(){
        return {
            loanForm:{},
            dialogVisible:false,
            rules:{
                name:[{ required: true, message: '请输入联系人姓名', trigger: 'blur' },]
            },
            ruleForm:{
                name:"中小企业信用贷款",
                address:"四川省"
            },
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
            }],
            value: ''
        }
    },
    methods:{
        //体交申请
        submit(){
            this.$router.push("/financeBussiness/loanBussiness/myApplicationResult")
        },
    }
}
</script>
<style lang="scss">
.select_address{
    .el-input, .el-textarea{
        width: 100%;
        margin-right: 10px;

    }
    .el-input{
        width: 155px;
    }
}
    
</style>