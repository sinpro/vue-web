<template>
    <div class="plr30">
        <div>
            <div>
                <el-form ref="formData" :model="formData" :rules="formRules" label-width="150px">
                    <el-row :gutter="24">
                        <el-col :span="9">
                            <el-form-item label="企业名称：">
                                <el-input v-model="formData.name" :disabled="true" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="15">
                            <el-form-item label="账号：" prop="number">
                                <el-select v-model="formData.number" placeholder="请选择">
                                    <el-option v-for="(item, index) in numList" 
                                        :key='index'
                                        :label="item.label" 
                                        :value="item.value"> 
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span='24'>
                            <el-form-item label="交易日期：" prop="value2">
                                <el-date-picker v-model="formData.value2" type="daterange" unlink-panels
                                    range-separator="~" start-placeholder="开始日期" end-placeholder="结束日期" style='width:300px'>
                                </el-date-picker>
                                <el-radio-group v-model="formData.resource" class="pl30">
                                    <el-radio label="近7天"></el-radio>
                                    <el-radio label="近1月"></el-radio>
                                    <el-radio label="近3月"></el-radio>
                                    <el-radio label="近1年"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                        <el-col :span="9">
                            <el-form-item label="交易类型：" prop="交易类型">
                                <el-select v-model="formData.交易类型" placeholder="请选择">
                                    <el-option v-for="(item, index) in 收支list" 
                                        :key='index'
                                        :label="item.label " 
                                        :value="item.value"> 
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
            <el-row class="tc mt10">
                <el-button type="primary" @click='getList'>查询</el-button>
                <el-button type="info" @click='reset'>重置</el-button>
            </el-row>
            
            <el-row class="borderb">
            <span class=' fl ml20'>明细列表</span>
            <span class='fr mt10 mr20'>总比数：{{aa}}笔</span>
        </el-row>
        <el-table border class="mtb20" :data="otherTransList">
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column min-width='120px' prop="交易时间" label="交易时间"></el-table-column>
            <el-table-column min-width='120px' prop="交易类型" label="交易类型"></el-table-column>
            <el-table-column min-width='120px' prop="交易金额" label="交易金额"></el-table-column>
            <el-table-column min-width='120px' prop="备注" label="备注"></el-table-column>
        </el-table>
        <el-pagination
            class='fr'
            :page-size="10"
            layout="total, prev,pager, next, jumper"
            :total="40">
        </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                aa:'100',
                formData: {
                    name:'',
                    number:'',
                    transOutAcct: '',
                    startDate: '',
                    endDate: '',
                    transStatus: '',
                    resource: '',
                    value2: '',
                    收支方向:'全部',
                    业务类型:'全部'
                },
                formRules: {
                    number:[{required: true, message: '请选择账号', trigger: 'blur' }],
                    value2: [{required: true,message: '请选择提交日期',trigger: 'blur'}],
                    业务类型: [{required: true,message: '请选择交易状态',trigger: 'blur' }],
                },
                otherTransList:[
                    {账号:'',户名:'',上级账号:'',上级户名:'',币种:'',上存余额:'',不归集余额:''}
                ],
                numList:[],
                transItem: {},
                detailFlag: false,
                detailInfo: false,
                detailItem: {},
                收支list:[
                    {lable:'0',value:'全部'},
                    {lable:'1',value:'活期质押'},
                    {lable:'2',value:'活期解押'}
                ],
                typelist:[
                    {lable:'0',value:'全部'},
                    {lable:'1',value:'资金上存'},
                    {lable:'2',value:'资金下拨'},
                    {lable:'3',value:'内部结息'},
                    {lable:'4',value:'其他'}
                ]
            }
        },
        mounted() {
            // this.getnumber()//获取账号列表
        },
        methods: {
            getnumber(){
                let params = {}
                this.$http.request(this,'POST','api/MC007013.do',params).then(res =>{
                console.log(res)
                this.numList = res.list
                }).catch(function(error) {});
            },
            //查询
            getList(){
                let params = {
                    name:this.formData.name,
                    number:this.formData.number
                }
                this.$http.request(this,'POST','api/MC007013.do',params).then(res =>{
                console.log(res)
                }).catch(function(error) {});
            },
            //重置
            reset(){
                this.formData.number = ''
            },
            //明细详情
            getDetail(scope) {
                this.transItem = scope.row;
                this.detailInfo = true;
                // sessionStorage.setItem('batchTransItem', JSON.stringify(this.transItem));
                // this.$router.push('/paymentSettlement/batchTransDetail')
            },
        }
    }
</script>