<template>
    <div>
        <title-bar title="基本信息"></title-bar>
        <div class="f16 mb50">
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">贷款金额</span>
                    <span class="ml25">1,000,000.00元</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">产品名称</span>
                    <span class="ml25">税金贷</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">合同号</span>
                    <span class="ml25">8888 99999 88888</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">执行利率(年化)</span>
                    <span class="ml25">14%</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">担保方式</span>
                    <span class="ml25">抵押</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">剩余可借金额 </span>
                    <span class="ml25">5.00元</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">还款方式</span>
                    <span class="ml25">分期还款</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">合同起始日期</span>
                    <span class="ml25">2020-09-09</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">利率类型</span>
                    <span class="ml25">浮动利率</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">合同到期日</span>
                    <span class="ml25">2020-09-09</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">利率调整周期</span>
                    <span class="ml25">每年1月1日</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">放款机构</span>
                    <span class="ml25">绵阳农商行</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">基点</span>
                    <span class="ml25">18LBP</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">支付方式</span>
                    <span class="ml25">受托支付</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">放款渠道</span>
                    <span class="ml25">网银</span>
                </el-col>
            </el-row>
        </div>
        <title-bar title="放款信息"></title-bar>
        <div class="f16 mb50 ">
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">借款金额</span>
                    <span class="ml25 money">200,000.00元</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">借款到期日</span>
                    <span class="ml25">2022-10-10</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12" class="flex">
                    <span class="inline-block tar w200 gray3">文件信息</span>
                    <div class="ml25">
                        <div>
                            <i class="el-icon-paperclip"></i>
                            <span class="ml10">支用资料文件一</span>
                            <a class="ml20">下载</a>
                        </div>
                        <div class="mt10">
                            <i class="el-icon-paperclip"></i>
                            <span class="ml10">支用资料文件二</span>
                            <a class="ml20">下载</a>
                        </div>
                    </div>


                </el-col>
            </el-row>
            
            
        </div>

        <div>
             <div class="flexsb  borderb ">
                <div class="cg f18 border4b pb10 pl20 pr20">受托对手信息</div>
                <div class="tar f16 cp1 ">
                    <span>受托笔数：5笔</span>
                    <span class="ml40">总金额：819,876.98元</span>
                </div>
            </div>
            <el-table :data="list" stripe style="width: 100%" class="mt25">
                <el-table-column prop="name" label="收款户名"></el-table-column>
                <el-table-column prop="account" label="收款账号"></el-table-column>
                <el-table-column prop="bank" label="收款银行"></el-table-column>
                <el-table-column prop="net" label="网点"></el-table-column>
                <el-table-column prop="payMoney" label="受托支付金额(元)"></el-table-column>
              
            </el-table>


        </div>
        <p class="leftBar f22 mtb20">审批流程</p>
        <auditProcess :list="list"></auditProcess>

        <div class="tac mb20">
            <el-button size="small"  >返回</el-button>
            <el-button size="small" @click="revoke"  >撤销</el-button>
            <el-button size="small" type="primary" @click="modify">修改</el-button>
        </div>





    </div>
</template>
<script>
import auditProcess from "src/components/auditProcess/index.vue";
export default {
    components: {
        auditProcess,
    },
    data(){
        return {
            list: [
        {
          type: "finish",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
          account:"1234557890",
          bank:"四川银行",
          net:"巴中市农村信用合作...",
          payMoney:'800,000.00'
        },
        {
          type: "tips",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
           account:"1234557890",
          bank:"四川银行",
          net:"巴中市农村信用合作...",
          payMoney:'800,000.00'
        },
        {
          type: "success",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
           account:"1234557890",
          bank:"四川银行",
          net:"巴中市农村信用合作...",
          payMoney:'800,000.00'
        },
        {
          type: "info",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
           account:"1234557890",
          bank:"四川银行",
          net:"巴中市农村信用合作...",
          payMoney:'800,000.00'
        },
        {
          type: "errer",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
          desc: "错误信息",
           account:"1234557890",
          bank:"四川银行",
          net:"巴中市农村信用合作...",
          payMoney:'800,000.00'
        },
      ],

        }
    },
    methods:{
        modify(){
            this.$router.push('/financeBussiness/loanBussiness/loanDetailsModify')
        },
        revoke(){
            this.$confirm('确定要撤消贷款申请吗？', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
             }).then(() => {
               
            }).catch(() => {
                       
            });
        }
    }
}
</script>