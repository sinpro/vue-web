<template>
    <div class="f16">
        <div class="BoxShadow p25 mt20" v-for="(item,index) in 2" :key="index" >
            <div class="flexsb" style="align-items: center;">
               <div class="flex" style="align-items: center;">
                    <p class="f20 bold ">疫情企业贷款</p>
                    <el-tag v-if="show==1" class="ml20" effect="plain">审批通过</el-tag>
                    <el-tag v-else-if="show==2" type="warning" class="ml20" effect="plain">待审批</el-tag>
                    <el-tag v-else type="danger" class="ml20" effect="plain">审批拒绝</el-tag>
                    
                    <span class="ml20 gray2">合同号：8899990000999990</span>
               </div>
               <div>
                   <span class="cg ml50 " @click="goToDetails">详情</span>
               </div>
            </div>
            <div class="flexsb gray2 mt25 f16 ">
                <div>
                    <p class="f22 cy mb10">100,000.00</p>
                    <span class="">借款金额(元)</span>
                </div>
                <div>
                    <p class="f22 c-primary mb10">100,000.00</p>
                    <span class="">借款余额(元)</span>
                </div>
                <div>
                    <p class="f22 c-primary mb10">10%</p>
                    <span class="">执行利率</span>
                </div>
                <div class=" lh25" style="width:250px">
                    <p class="">开始日期：2021-03-10</p>
                    <span class="">结束日期：2022-03-10</span>
                    <br>
                    <span class="">借据号：4182309482093480921</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
           show:1
        }
    },
    methods:{
        
        //去详情页面
        goToDetails(){
            this.$router.push('/financeBussiness/loanBussiness/loanRepaymentDetails')
        },
    }
    
}
</script>

<style lang="scss">

</style>