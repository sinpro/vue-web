<template>
    <div>
        <title-bar title="基本信息"></title-bar>
        <div class="f16 mb50">
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">付款户名</span>
                    <span class="ml25">北京易诚互动网络技术有限公司</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">收款户名</span>
                    <span class="ml25">北京易诚互动网络技术有限公司</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">付款账号</span>
                    <span class="ml25">890909 **** 9099</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">收款账号</span>
                    <span class="ml25">9430 0390 0000 0000 001</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">付款银行</span>
                    <span class="ml25">四川农信</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">收款银行 </span>
                    <span class="ml25">中国银行小坝支行</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">金额</span>
                    <span class="ml25">100,000.00元</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">大写金额</span>
                    <span class="ml25">拾万圆整</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">手续费</span>
                    <span class="ml25">10.00元</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">大写金额</span>
                    <span class="ml25">拾元整</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">备注</span>
                    <span class="ml25">每日货款</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">交易状态</span>
                    <span class="ml25">交易成功</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">交易渠道</span>
                    <span class="ml25">企业网银</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">交易时间</span>
                    <span class="ml25">2020-01-01 19:01:01</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">录入员</span>
                    <span class="ml25">张三</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">流水号</span>
                    <span class="ml25">42342342134213</span>
                </el-col>
            </el-row>
        </div>
       
        <p class="leftBar f22 mtb20">审批流程</p>
        <auditProcess :list="list"></auditProcess>

        <div class="tac mb20">
            <el-button size="small"  >电子回单</el-button>
            <el-button size="small"  >返回</el-button>
            
            <el-button size="small" @click="revoke"  type="primary"  >撤销</el-button>
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