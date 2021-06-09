<template>
    <div class="plr30">
        <div>
            <el-row class="borderb">
            <span class=' fl ml20'>入池票据信息</span>
        </el-row>
        <el-table border class="mtb20" :data="otherTransList">
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column min-width='100px' prop="票号" label="票号"></el-table-column>
            <el-table-column min-width='100px' prop="票据类型" label="票据类型"></el-table-column>
            <el-table-column min-width='100px' prop="票面金额" label="票面金额"></el-table-column>
            <el-table-column min-width='100px' prop="到期日" label="到期日"></el-table-column>
            <el-table-column min-width='100px' prop="出票人" label="出票人"></el-table-column>
            <el-table-column min-width='100px' prop="承兑人" label="承兑人"></el-table-column>
        </el-table>
        <el-row class="tc mt10">
            <el-button type="primary" @click='goback'>返回</el-button>
            <el-button type="info" @click='submit'>提交</el-button>
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
            //返回
            goback(){
                this.$router.go(-1)
            },
            //提交
            submit(){
                console.log('1')
            },
        }
    }
</script>