<template>
    <div class="one-stop-transfer">
        <div>
            <el-row class="borderb mb10">
                <span class=' fl ml20 mb5'>原流水信息</span>
            </el-row>
            <table class='wr98 ml20' cellspacing="0" border="1">
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
            </div>
            <div>
            <el-row class="borderb mb20">
                <span class=' fl ml20 mt50'>多级账簿调入信息</span>
            </el-row>
            <el-form ref="formData" :model="formData" :rules="formRules" label-width="35%">
                <el-form-item label="转入账簿：" prop="number">
                    <el-select v-model="formData.number" placeholder="请选择">
                        <el-option v-for="(item, index) in numList" 
                            :key='index'
                            :label="item.label" 
                            :value="item.value"> 
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="调账原因：">
                    <el-input v-model="formData.name" placeholder="请输入"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <el-row class="tc mt10">
            <el-button type="primary" @click='getBack'>返回</el-button>
            <el-button type="info" @click='agree'>确认</el-button>
        </el-row>
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
                detailFlag: false,
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
            //返回
            getBack(){
                this.$router.go(-1)
            },
            agree(){
                this.$router.push({
                    path:'/cashManagement/accountPord',
                    query:{
                        number:this.formData.number,
                        name:this.formData.name
                    }
                })
            },
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