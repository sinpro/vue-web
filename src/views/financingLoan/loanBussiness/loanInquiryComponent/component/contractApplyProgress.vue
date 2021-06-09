<template>
    <div class="f16">
        <div class="BoxShadow p25 mt20" v-for="(item,index) in 2" :key="index" >
            <div class="flexsb">
               <div class="flex" style="align-items: center;">
                    <p class="f20 bold ">疫情企业贷款</p>
                    <el-tag v-if="show" class="ml20" effect="plain">受理成功</el-tag>
                    <el-tag v-else type="danger" class="ml20" effect="plain">受理失败</el-tag>
               </div>
               <div>
                   <span class="cg ml50 " @click="cancle">取消</span>
               </div>
            </div>
            <div class="mb20 mt20 flexc">
                <el-steps :active="2"  process-status="error"  style="width:450px">
                    <el-step title="申请" ></el-step>
                    <el-step title="审批" ></el-step>
                    <el-step title="结果" ></el-step>
                </el-steps>
            </div>
            <div class="flexsb gray2 pt25 f16 bordert" v-if="show">
                <div>
                    <p class="f18 c-primary mb10">等额本息</p>
                    <span class="">还款方式</span>
                </div>
                <div>
                    <p class="f18 c-primary mb10">是</p>
                    <span class="">是否可循环</span>
                </div>
                <div>
                    <p class="f18 c-primary mb10">商业用途</p>
                    <span class="">用途</span>
                </div>
                <div class="w230">
                    <p class="mb10">8888 8888 8888 8888 888</p>
                    <span class="">还款账号</span>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            show:true,
        }
    },
    methods:{
        
        //取消
        cancle(){
            this.$confirm('确定要取消贷款申请吗？', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
                }).then(() => {
                // this.$message({
                //     type: 'success',
                //     message: '删除成功!'
                // });
                }).catch(() => {
                // this.$message({
                //     type: 'info',
                //     message: '已取消删除'
                // });
            });
            
        },
    }
    
}
</script>

<style lang="scss">

</style>