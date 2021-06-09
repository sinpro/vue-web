<template>
    <div class="f16">
        <div class="BoxShadow p25 mt20" v-for="(item,index) in 2" :key="index" >
            <div class="flexsb" style="align-items: center;">
               <div class="flex" style="align-items: center;">
                    <p class="f20 bold ">疫情企业贷款</p>
                    <el-tag v-if="show" class="ml20" effect="plain">有效</el-tag>
                    <el-tag v-else type="danger" class="ml20" effect="plain">无效</el-tag>
                    
                    <span class="ml20 gray2">合同号：8899990000999990</span>
               </div>
               <div>
                   <span class="cg">贷款支用</span>
                   <span class="cg ml50 " @click="goToIouInquiry">借据</span>
               </div>
            </div>
            <div class="flexsb gray2 mt25 f16 mb25">
                <div>
                    <p class="f22 cy mb10">100,000.00</p>
                    <span class="">合同金额(元)</span>
                </div>
                <div>
                    <p class="f22 c-primary mb10">100,000.00</p>
                    <span class="">剩余可借金额(元)</span>
                </div>
                <div>
                    <p class="f22 c-primary mb10">100,000.00</p>
                    <span class="">担保方式</span>
                </div>
                <div class="w230">
                    <p class="mb10">开始日期：2021-03-10</p>
                    <span class="">结束日期：2022-03-10</span>
                </div>
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
            <div class="tac mt24 gray2 f16" @click="isshow">
                <div v-if="!show">
                    <i class="el-icon-arrow-down"></i>
                    <span >展开</span>
                </div>
                <div v-else>
                    <i class="el-icon-arrow-up"></i>
                    <span >收起</span>
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
        isshow(){
            this.show=!this.show
        },
        //去借据查询页面
        goToIouInquiry(){
            this.$router.push('/financeBussiness/loanBussiness/IouInquiry')
        },
    }
    
}
</script>

<style lang="scss">

</style>