<template>
    <div class="one-stop-transfer">
        <div>
            <el-row class="borderb mb10">
                <span class=' fl ml20 mb5'>横向扫款利息信息</span>
            </el-row>
            <table class='ml40' style='width:96%' cellspacing="0" border="1">
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
        </div>
        <el-row class="tc mt10">
            <el-button type="primary" @click='getBack'>返回</el-button>
            <el-button type="info" @click='submit'>提交</el-button>
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
            submit(){
                console.log('1')
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