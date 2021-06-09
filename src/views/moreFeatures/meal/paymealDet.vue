<template>
    <div class="">
        <div>
            <title-bar title="套餐详情"></title-bar>
            <div class="cont11 flex">
                <ul class="ul1 cp3 f16 lh16 tar">
                    <li>购买渠道</li>
                    <li>套餐笔数</li>
                    <li>套餐收费标准</li>
                    <li>套餐周期</li>
                    <li>包含业务</li>
                </ul>
                <ul class="ul2 cp1 f16 lh16">
                    <li>1234</li>
                    <li>67890</li>
                    <li>100.00元/月</li>
                    <li>个人所得税</li>
                    <li>个人所得税</li>
                </ul>
                <ul class="ul3 cp3 f16 lh16 tar">
                    <li>套餐名称</li>
                    <li>套餐剩余笔数</li>
                    <li>套餐截止日</li>
                    <li>使用渠道</li>
                </ul>
                <ul class="ul4 cp1 f16 lh16">
                    <li>51413</li>
                    <li>北京易诚有限公司</li>
                    <li>10,000.00元</li>
                    <li>个人所得税</li>
                </ul>
            </div>
            <title-bar title="扣费记录"></title-bar>
            <el-table :border='true' class="mtb20" :data="otherTransList">
                <el-table-column width='400px' prop="付款账号" label="付款账号"></el-table-column>
                <el-table-column width='400px' prop="扣费时间" label="扣费时间"></el-table-column>
                <el-table-column width='110px' prop="状态" label="状态"></el-table-column>
            </el-table>
            <el-row class="tc mtb30">
                <el-button size='medium' v-show='typestate==1' @click="submit">取消续费</el-button>
                <el-button size='medium' type="primary" @click="before">返回</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                paystate:0,//
                typestate:0,//柜面 0，非柜面 1
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
            //返回
            before(){
                this.$router.go(-1)
            },
            //取消续费
            submit(){
                alert(1)
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
.cont11 {
      >ul>li {
        list-style: none;
      }
      .ul1 {
        margin-left: 158px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 96px;
      }
      .ul2 {
        >li+li {
          margin-top: 23px;
        }
        width: 90px;
      }
      .ul3 {
        margin-left: 159px;
        >li+li {
          margin-top: 23px;
        }
        margin-right: 22px;
        width: 96px;
      }
      .ul4 {
        margin-right: 164px;
        >li+li {
          margin-top: 23px;
          width:128px;
        }
      }
    }
</style>