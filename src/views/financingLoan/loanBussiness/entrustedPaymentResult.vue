<template>
    <div>
        <span>受托支付总金额：</span><span class="money" >600,000.00元</span><span class="ml30">总笔数：1笔</span>
        <auditProcess :list="list"></auditProcess>
        <div class="tac mt50">
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
                type: "tips",
                name: "王思聪",
                time: "2020-02-02 12:00:00",
                },
            ],
        }
    },
    
}
</script>