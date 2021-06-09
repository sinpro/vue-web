<template>
    <div>
        <span>还款总额：<span class="money">6,000.00元</span></span>
        <span class="ml30">本金：<span class="money">6,000.00元</span></span>
        <span class="ml30">利息：<span class="money">6,000.00元</span></span>
        <span class="ml30">违约金：<span class="money">6,000.00元</span></span>
        <auditProcess :list="list"></auditProcess>
        <div class="tac mb20">
            <el-button size="small"  >返回</el-button>
            <el-button size="small" type="primary">继续还款</el-button>
        </div>
    </div>
</template>
<script>
import auditProcess from "src/components/auditProcess/index.vue";
export default {
    components:{
        auditProcess
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
    },
    
}
</script>