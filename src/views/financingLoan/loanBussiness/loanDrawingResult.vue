<template>
    <div>
        <span>借款金额:</span><span class="money" >600,000.00元</span><span class="ml30">借款到期日：2020-01-01</span>
        <auditProcess :list="list"></auditProcess>
        <div class="tac mt50">
            <el-button size="small">返回</el-button>
             <el-button size="small" type="primary">贷款详情</el-button>
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
                type: "tips",
                name: "王思聪",
                time: "2020-02-02 12:00:00",
                },
            ],
        }
    },
    
}
</script>