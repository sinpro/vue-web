<template>
    <div>
        <title-bar title="基本信息"></title-bar>
        <div class="f16 mb50">
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">合同号</span>
                    <span class="ml25">8888 99999 88888</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">产品名称</span>
                    <span class="ml25">税金贷</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">借据号</span>
                    <span class="ml25">8888 99999 88888</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">担保方式</span>
                    <span class="ml25">抵押</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">贷款本金</span>
                    <span class="ml25">8888元</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">剩余本金</span>
                    <span class="ml25">5.00元</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">起息日</span>
                    <span class="ml25">2020-09-09</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">到期日</span>
                    <span class="ml25">2020-09-09</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">利率类型</span>
                    <span class="ml25">浮动利率</span>>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">基点</span>
                    <span class="ml25">ss</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">执行利率(年化)</span>
                    <span class="ml25">8%</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">逾期利率(年化)</span>
                    <span class="ml25">4%</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">贷款机构</span>
                    <span class="ml25">简阳农商行</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">贷款状态</span>
                    <span class="ml25">正常</span>
                </el-col>
            </el-row>
        </div>
        <title-bar title="还款信息"></title-bar>
        <div class="f16 mb50 ">
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">本金</span>
                    <span class="ml25">8888</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">还款账号</span>
                    <span class="ml25">8888 99999 88888</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">利息</span>
                    <span class="ml25">8888元</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">审批客户经理</span>
                    <span class="ml25">李希</span>
                </el-col>
            </el-row>
            <el-row class="mt20" >
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">预计还款总额</span>
                    <span class="ml25 ctips">8888元</span>
                </el-col>
                <el-col :span="12">
                    <span class="inline-block tar w200 gray3">还款进度</span>
                    <span class="ml25 ctips">受理中</span>
                </el-col>
            </el-row>
            
        </div>
        <p class="leftBar f22 mtb20">审批流程</p>
        <auditProcess :list="list"></auditProcess>

        <div class="tac mb20">
            <el-button size="small"  >电子回单</el-button>
            <el-button size="small" type="primary">返回</el-button>
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
    }
}
</script>