<template>
    <div class="">
        <div v-show="steps=='1'">
            <div>
                <el-form ref="formData" :model="formData" :rules="formRules" label-width="135px">
                    <el-row :gutter="24">
                        <el-col :span="11">
                            <el-form-item label="付款帐户:">
                                <el-input v-model="formData.name" :disabled="true" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="9">
                            <el-form-item label="套餐名称:" prop="number">
                                <el-select v-model="formData.number" placeholder="请选择" >
                                    <el-option v-for="(item, index) in numList" 
                                        :key='index'
                                        :label="item.label" 
                                        :value="item.value"> 
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item label="购买渠道:" prop=" 分配状态">
                                <el-select v-model="formData. 分配状态" placeholder="请选择">
                                    <el-option v-for="(item, index) in typelist" 
                                        :key='index'
                                        :label="item.label " 
                                        :value="item.value"> 
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="9">
                            <el-form-item label=" 交易状态:" prop=" 分配状态">
                                <el-select v-model="formData. 分配状态" placeholder="请选择">
                                    <el-option v-for="(item, index) in typelist" 
                                        :key='index'
                                        :label="item.label " 
                                        :value="item.value"> 
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span='24'>
                            <el-form-item label="交易日期:" prop="value2">
                                <el-date-picker v-model="formData.value2" type="daterange" unlink-panels
                                    range-separator="~" start-placeholder="开始日期" end-placeholder="结束日期">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
            <el-row class="tc mt10">
                <el-button type="primary" size='mini' @click='getList'>查询</el-button>
            </el-row>
        <el-table :border='true' class="mtb20" :data="otherTransList">
            <el-table-column min-width='110px' prop="交易时间" label="交易时间"></el-table-column>
            <el-table-column min-width='110px' prop="购买渠道" label="购买渠道"></el-table-column>
            <el-table-column min-width='110px' prop="付款账户" label="付款账户"></el-table-column>
            <el-table-column min-width='110px' prop="套餐名称" label="套餐名称"></el-table-column>
            <el-table-column min-width='110px' prop="套餐笔数" label="套餐笔数"></el-table-column>
            <el-table-column min-width='110px' prop="套餐收费标准" label="套餐收费标准"></el-table-column>
            <el-table-column min-width='110px' prop="交易状态" label="交易状态"></el-table-column>
            <el-table-column prop="postscript" label="操作" >
                <template slot-scope="scope">
                    <a @click="getDetail(scope)">详情</a>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class='fr'
            :page-size="10"
            layout="total, prev,pager, next, jumper"
            :total="40">
        </el-pagination>
        </div>
        <div v-show="steps=='2'">
            <el-form ref="formData" :model="formData" label-width="35%" class="formW_800">
                <el-row :gutter="24">
                    <el-col :span="12">
                        <el-form-item label="购买渠道：" class="mt10">
                            {{formData.name}}
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="mt10" label="交易时间：">
                            {{formData.num}}笔
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="mt10" label="套餐名称：">
                            {{formData.num}}笔
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="mt10" label="套餐笔数：">
                            {{formData.num}}笔
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="mt10" label="套餐收费标准：">
                            {{formData.num}}笔
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="mt10" label="套餐截止日：">
                            {{formData.num}}笔
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="mt10" label="包含业务：">
                            {{formData.num}}笔
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="mt10" label="使用渠道：">
                            {{formData.num}}笔
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="mt10" label="付款账号">
                            {{formData.num}}笔
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item class="mt10" label="交易状态：">
                            {{formData.num}}笔
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            
            <el-row class="tc mtb30">
                <el-button type="info" @click="before">返回</el-button>
                <el-button type="primary" @click="submit">撤销交易</el-button>
            </el-row>
            <div>
                <p>温馨提示：</p>
                <p>1、套餐收费标准按月收费时，您购买套餐即时生效即使扣费后，将在之后每月1号进行扣款；</p>
                <p>2、每月套餐优惠包含套餐内业务笔数。超出部分将按业务交易标准手续费进行收取；</p>
                <p>3、套餐购买后，每个周期自动续费，可在套餐购买明细取消自动续费；</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formData:{
                   name:'',
                   num:'',
                   money:'',
                   date:'',
                   type:'',
                   transInUsefor:''
               },
               payList:{
                   name:'1',
                   num:'2',
                   money:'3',
                   date:'4',
                   type:'5',
                   transInUsefor:''
               },
                steps:1,
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
                    分配状态:'全部',
                    交易类型:'全部'
                },
                formRules: {
                    number:[{required: true, message: '请选择账号', trigger: 'blur' }],
                    value2: [{required: true,message: '请选择提交日期',trigger: 'blur'}],
                    交易类型: [{required: true,message: '请选择交易状态',trigger: 'blur' }],
                },
                otherTransList:[
                    {账号:'',户名:'',上级账号:'',上级户名:'',币种:'',上存余额:'',不归集余额:''}
                ],
                numList:[],
                transItem: {},
                detailFlag: false,
                detailInfo: false,
                detailItem: {},
                typelist:[
                    {lable:'0',value:'全部'},
                    {lable:'1',value:'已分配'},
                    {lable:'2',value:'未分配'},
                    {lable:'3',value:'分配失败'},
                ]
            }
        },
        mounted() {
            // this.getnumber()//获取账号列表
        },
        methods: {
            //下一步
            next(){
                this.steps=3
            },
            //上一步
            before(){
                this.steps=1
            },
            //撤销
            submit(){
                alert(1)
            },
            getDetail(scope){
                // this.transItem = scope.row;
                // this.formData = this.payList
                // this.steps = 2
                this.$router.push({
                    path:'/more/meal/payRecord/recordDet'
                })
            },
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
        }
    }
</script>
<style lang="scss">
</style>