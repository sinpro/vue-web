<template>
  <div>
    <div class="loansAndloans">
      <el-tabs class="eltabs" v-model="activeName" type="card" @tab-click="selectValue">
        <el-tab-pane label="贷款放款" name="贷款放款">
          <loan-loans ></loan-loans>
        </el-tab-pane>
        <el-tab-pane label="受托支付" name="受托支付"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import loanLoans from './loansAndloansComponent/loanAndloan'
import entrustedPayment from './loansAndloansComponent/entrustedPayment'
export default {
  components:{
    loanLoans,
    entrustedPayment
  },
  data(){
    return{
      activeName:"贷款放款"
    }
  },
  methods:{
    selectValue(){
      if(this.activeName=='受托支付'){
        this.$router.push('/financingLoan/loanBussiness/entrustedPayment')
      }
        console.log("dianle",this.activeName)
    }
  }
}
</script>