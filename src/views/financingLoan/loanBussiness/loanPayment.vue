<template>
  <div class="loanRepayment mb20">
    <el-tabs class="eltabs" v-model="activeName" type="card"  @tab-click="selectClass">
      <el-tab-pane label="还款进度查询" name="还款进度查询">
        <!-- <progress-query></progress-query> -->
      </el-tab-pane>
      <el-tab-pane label="贷款还款" name="贷款还款">
        <repaymentList></repaymentList>
        <div class="mt20 mb20">
            <el-pagination
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import repaymentList from './loanRepaymentComponent/component/repaymentList'

import progressQuery from './loanRepaymentComponent/progressQuery'
export default {
  name:"loanRepayment",
  components:{
    progressQuery,
    repaymentList
  },
  data(){
    return {
      activeName:"贷款还款"
    }
  },
  methods:{
    selectClass(){
      console.log(this.activeName)
      if(this.activeName=='还款进度查询'){
        this.$router.push('/financingLoan/loanBussiness/loanRepayment')
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>