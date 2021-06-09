<template>
  <div class="entrustedPayment">
    <div class="tar">
      <el-button  size="small" @click="recordQuery">受托记录查询</el-button>
    </div>
    <div class="BoxShadow p25 mt20" v-for="(item,index) in 2" :key="index"  >
        <div class="flexsb" style="align-items: center;">
            <div class="flex" style="align-items: center;">
                <p class="f20 cp1">单位定期存单质押贷款</p>
                <span class="ml20 gray2">合同号：8899990000999990</span>
            </div>
            <div>
              <span  class="cg" @click="loanDrawing">受托支付</span>
            </div>
        </div>
        <div class="flexsb gray2 mt25 f16">
            <div>
              <p class="f22 cy  mb10">100,000.00</p>
              <span class="">借款金额(元)</span>
               
            </div>
            <div>
              <p class="f22 c-primary  mb10">100,000.00</p>
              <span class="">可委托金额(元)</span>
               
            </div>
            <div>
                <p class="f22 c-primary mb10">4%</p>
                <span class="">执行利率</span>
            </div>
            <div class="w250">
                <p class="mb10">开始日期：2021-03-10</p>
                <span class="">结束日期：2022-03-10</span>
                <p class="mt10">借据号：4182309482093480921</p>
            </div>
        </div>
    </div>
    <el-pagination
    class="mt20"
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
    
    
    
  </div>
</template>
<script>
export default {
  props:{

  },
  data(){
    return {
     
    }
  },
  methods:{
    loanDrawing(){
      this.$router.push('/financeBussiness/loanBussiness/entrustedPaymentEntry')
    },

    
  }
}
</script>
<style lang="scss" scoped>
.entrustedPayment{
  .content{
    margin:30px 0;
    div{
      height:80px;
      padding:0 10px;
      span{
        margin-top:20px;
      }
      p{
        margin-top:10px;
      }
    }
    .first-table{
      line-height: 80px;
      background: rgb(224, 221, 221);
      a{
        margin-right:20px
      }
    }
    .second-table{
      margin-top:20px;
    }
  }
}
</style>