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
                            <el-form-item label="他行账号：" prop="number">
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
                        <!-- <el-col :span="9">
                            <el-form-item label="收支方向" prop="收支方向">
                                <el-select v-model="formData.收支方向" placeholder="请选择">
                                    <el-option v-for="(item, index) in 收支list" 
                                        :key='index'
                                        :label="item.label " 
                                        :value="item.value"> 
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="15">
                            <el-form-item label="交易类型:" prop="交易类型">
                                <el-select v-model="formData.交易类型" placeholder="请选择">
                                    <el-option v-for="(item, index) in typelist" 
                                        :key='index'
                                        :label="item.label " 
                                        :value="item.value"> 
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col> -->
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
            <el-table-column min-width='120px' prop="交易币种" label="交易币种"></el-table-column>
            <el-table-column min-width='120px' prop="交易金额" label="交易金额"></el-table-column>
            <el-table-column min-width='120px' prop="对方账号" label="对方账号"></el-table-column>
            <el-table-column min-width='120px' prop="对方户名" label="对方户名"></el-table-column>
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
        
            <!-- 明细详情 -->
            <el-dialog :visible.sync="detailInfo" :close-on-click-modal='false' :close-on-press-escape='false'>
                <div slot="title" class="tl f18 bold">转账明细详情</div>
                <table class='wr100' cellspacing="0" border="1">
                    <tr class="h40 ">
                        <td class="p5" rowspan="3">账户信息</td>
                        <td class="wr10 pl10">账号</td>
                        <td class="wr40 pl10">{{}}</td>
                        <td class="p5" rowspan="3">对方信息</td>
                        <td class="wr10 pl10">账号</td>
                        <td class="wr40 pl10">{{}}</td>
                    </tr>
                    <tr class="h40 ">
                        <td class="wr10 pl10">户名</td>
                        <td class="wr30 pl10">{{}}</td>
                        <td class="wr10 pl10">户名</td>
                        <td class="wr30 pl10">{{}}</td>
                    </tr>
                    <tr class="h40 ">
                        <td class="wr10 pl10">开户行</td>
                        <td class="wr30 pl10">{{}}</td>
                        <td class="wr10 pl10">开户行</td>
                        <td class="wr30 pl10">{{}}</td>
                    </tr>
                    <tr class="h40 ">
                        <td class="pl10" colspan="2">交易金额</td>
                        <td class="pl10" colspan="4">
                            <div>
                                <span class='fl'>4,813,098,410,510.00</span>
                                <span class='pl20'>大写:(人民币)一万六千四百五十三以三千四百零五万七千两百零五</span>
                            </div>
                        </td>
                    </tr>
                    <tr class="h40 ">
                        <td class="pl10" colspan="2">收支方向</td>
                        <td class="pl10"></td>
                        <td class="pl10" colspan="2">交易类型</td>
                        <td class="pl10"></td>
                    </tr>
                    <tr class="h40 ">
                        <td class="pl10" colspan="2">用途</td>
                        <td class="pl10" colspan="4"></td>
                    </tr>
                    <tr class="h40 ">
                        <td class="pl10" rowspan="2" colspan="2">附言</td>
                        <td class="pl10" rowspan="2" colspan="4"></td>
                    </tr>
                    <tr class="h40 ">
                    </tr>
                </table>
                <el-row slot="footer" class="dialog-footer tc">
                    <el-button type="info" style='line-height:0' class="mt20" @click="detailInfo=false">下载</el-button>
                    <el-button type="info" style='line-height:0' class="mt20" @click="detailInfo=false">打印</el-button>
                </el-row>
            </el-dialog>
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
                detailInfo: false,
                detailItem: {},
                收支list:[
                    {lable:'0',value:'全部'},
                    {lable:'1',value:'收入'},
                    {lable:'2',value:'支出'}
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
            },
        }
    }
</script>