<template>
    <div class="">
        <div>
            <title-bar title="记录详情"></title-bar>
            <div class="cont11 flex">
                <ul class="ul1 cp3 f16 lh16 tar">
                    <li>购买渠道</li>
                    <li>套餐名称</li>
                    <li>套餐收费标准</li>
                    <li>包含业务</li>
                    <li>付款账户</li>
                </ul>
                <ul class="ul2 cp1 f16 lh16">
                    <li>1234</li>
                    <li>67890</li>
                    <li>100.00元/月</li>
                    <li>个人所得税</li>
                    <li>个人所得税</li>
                </ul>
                <ul class="ul3 cp3 f16 lh16 tar">
                    <li>交易时间</li>
                    <li>套餐笔数</li>
                    <li>套餐截止日</li>
                    <li>使用渠道</li>
                    <li>交易状态</li>
                </ul>
                <ul class="ul4 cp1 f16 lh16">
                    <li>51413</li>
                    <li>北京易诚有限公司</li>
                    <li>10,000.00元</li>
                    <li>个人所得税</li>
                    <li>个人所得税</li>
                </ul>
            </div>
            <div v-show="PayType!='1'">
                <p class="leftBar f16 mtb20">标题</p>
                <auditProcess :list="list"></auditProcess>
            </div>
            <el-row class="tc mtb30" v-show="state=='1'">
                <el-button size='medium'  @click="revoke">撤销交易</el-button>
                <el-button size='medium' type="primary" @click="before">返回</el-button>
            </el-row>
            <el-row class="tc mtb30" v-show="state=='2'">
                <el-button size='medium' type="primary" @click="before">返回</el-button>
            </el-row>
            <el-row class="tc mtb30" v-show="state=='3'">
                <el-button size='medium'  @click="before">返回</el-button>
                <el-button size='medium' type="primary" @click="submit">电子回单</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
import auditProcess from "src/components/auditProcess/index.vue";
    export default {
        components: {
          auditProcess,
        },
        data() {
            return {
                state:1,//审批中：1，审批拒绝：2，审批完成/柜面：3
                PayType:'0',//柜面 1，非柜面 0
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
                ],
                list: [
                  {
                    type: "finish",
                    name: "王思聪",
                    time: "2020-02-02 12:00:00",
                  },
                  {
                    type: "finish",
                    name: "王思聪",
                    time: "2020-02-02 12:00:00",
                  },
                  {
                    type: "tips",
                    name: "王思聪",
                    time: "2020-02-02 12:00:00",
                  },
                  {
                    type: "success",
                    name: "王思聪",
                    time: "2020-02-02 12:00:00",
                  },
                  {
                    type: "info",
                    name: "王思聪",
                    time: "2020-02-02 12:00:00",
                  },
                  {
                    type: "errer",
                    name: "王思聪",
                    time: "2020-02-02 12:00:00",
                    desc: "错误信息",
                  },
                ],
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
            //撤销
            revoke(){
                alert(1)
            },
            //电子回单
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