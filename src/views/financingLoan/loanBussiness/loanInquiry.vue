<template>
  <div class="loanInquiry">
    <el-tabs class="eltabs" v-model="activeName" type="card" @tab-click="selectClass">
      <el-tab-pane label="贷款合同查询" name="贷款合同查询">
        <loan-contract></loan-contract>
      </el-tab-pane>
      <el-tab-pane label="申请进度查询" name="申请进度查询">
        <!-- <application-progress></application-progress> -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import loanContract from "./loanInquiryComponent/loanContract";
import applicationProgress from "./loanInquiryComponent/applicationProgress"
export default {
  name:"loanInquiry",
    components:{
      loanContract,
      applicationProgress
    },
    data(){
      return{ 
        activeName: '贷款合同查询'
       }
    },
    methods:{
      selectClass(){
        console.log(this.activeName)
        if(this.activeName=='申请进度查询'){
          this.$router.push('/financeBussiness/loanBussiness/loanInquiryApply')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
.loanInquiry{
  margin-bottom: 50px;
  .eltabs{
    margin-top:20px;
  }
}
</style>