<template>
    <div class="plr30">
        <div>
            <el-row class="borderb">
                <span class=' fl ml20'>多级账簿利息信息</span>
            </el-row>
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
                <el-button type="info" style='line-height:0' class="mt20" @click="goback">返回</el-button>
                <el-button type="info" style='line-height:0' class="mt20" @click="detailInfo=false">提交</el-button>
            </el-row>
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
            let value = sessionStorage.getItem('interestEntry')
            this.entryData = value
            console.log('1213',value)
        },
        methods: {
            getnumber(){
                let params = {}
                this.$http.request(this,'POST','api/MC007013.do',params).then(res =>{
                console.log(res)
                this.numList = res.list
                }).catch(function(error) {});
            },
            //返回
            goback(){
                this.$router.go(-1)
            },

        }
    }
</script>