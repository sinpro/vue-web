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
                            <el-form-item label=" 分配状态" prop=" 分配状态">
                                <el-select v-model="formData. 分配状态" placeholder="请选择">
                                    <el-option v-for="(item, index) in typelist" 
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
            <el-table-column min-width='100px' prop="结息日期" label="结息日期"></el-table-column>
            <el-table-column min-width='80px' prop="分配状态" label="分配状态"></el-table-column>
            <el-table-column min-width='80px' prop="收支方向" label="收支方向"></el-table-column>
            <el-table-column min-width='120px' prop="利息" label="利息"></el-table-column>
            <el-table-column min-width='120px' prop="对方账号" label="对方账号"></el-table-column>
            <el-table-column min-width='120px' prop="对方户名" label="对方户名"></el-table-column>
            <el-table-column min-width='100px' prop="对方所属银行" label="对方所属银行"></el-table-column>
            <el-table-column min-width='100px' prop="起息日" label="起息日"></el-table-column>
            <el-table-column min-width='100px' prop="止息日" label="止息日"></el-table-column>
            <!-- <el-table-column prop="postscript" label="操作" >
                <template slot-scope="scope">
                    <a @click="godistribution(scope)">分配</a>
                </template>
            </el-table-column> -->
        </el-table>
        <el-pagination
            class='fr'
            :page-size="10"
            layout="total, prev,pager, next, jumper"
            :total="40">
        </el-pagination>
        
            <el-dialog :visible.sync="detailInfo" :close-on-click-modal='false' :close-on-press-escape='false'>
                <div slot="title" class="tl f18 bold">资金归集利息信息</div>
                <table class='wr100' cellspacing="0" border="1">
                    <tr class="h40 ">
                        <td class="wr20 pl10">结息日期：</td>
                        <td class="wr30 pl10">{{}}</td>
                        <td class="wr20 pl10">结息流水号：</td>
                        <td class="wr30 pl10">{{}}</td>
                    </tr>
                    <tr class="h40 ">
                        <td class="pl10">付息账号：</td>
                        <td class="pl10">{{}}</td>
                        <td class="pl10">付息户名：</td>
                        <td class="pl10">{{}}</td>
                    </tr>
                    <tr class="h40 ">
                        <td class="pl10">收息账号：</td>
                        <td class="pl10">{{}}</td>
                        <td class="pl10">收息户名：</td>
                        <td class="pl10">{{}}</td>
                    </tr>
                    <tr class="h40 ">
                        <td class="pl10">收支方向：</td>
                        <td class="pl10">{{}}</td>
                        <td class="pl10">交易币种：</td>
                        <td class="pl10">{{}}</td>
                    </tr>
                    <tr class="h40 ">
                        <td class="pl10">利息：</td>
                        <td class="pl10">{{}}</td>
                        <td class="pl10">大写金额：</td>
                        <td class="pl10">{{}}</td>
                    </tr>
                    <tr class="h40 ">
                        <td class="pl10">起息日：</td>
                        <td class="pl10">{{}}</td>
                        <td class="pl10">止息日：</td>
                        <td class="pl10">{{}}</td>
                    </tr>
                </table>
                <el-row slot="footer" class="dialog-footer tc">
                    <el-button type="info" style='line-height:0' class="mt20" @click="detailInfo=false">返回</el-button>
                    <el-button type="info" style='line-height:0' class="mt20" @click="detailInfo=false">提交</el-button>
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
            //分配
            godistribution(scope) {
                this.transItem = scope.row;
                let value = scope.row
                // sessionStorage.setItem('interestEntry', JSON.stringify(value));
                sessionStorage.setItem('interestEntry', 111);
                this.$router.push('/cashManagement/interestEntry')
            },
        }
    }
</script>