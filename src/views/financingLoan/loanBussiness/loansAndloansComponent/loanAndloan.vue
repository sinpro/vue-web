<template>
  <div class="loanAndloan mb50">
     <div class="BoxShadow p25 mt20" v-for="(item,index) in 2" :key="index"  >
        <div class="flexsb" style="align-items: center;">
            <div class="flex" style="align-items: center;">
                <p class="f20 cp1">单位定期存单质押贷款</p>
                <span class="ml20 gray2">合同号：8899990000999990</span>
            </div>
            <div>
                <span v-if="true" class="cg" @click="loanDrawing">贷款支用</span>
                <span v-else class="cg ml50 " @click="details">放款详情</span>
            </div>
        </div>
        <div class="flexsb gray2 mt25 f16">
            <div>
              <p class="f22 cy  mb10">100,000.00</p>
              <span class="">剩余可借金额(元)</span>
               
            </div>
            <div>
              <p class="f22 c-primary  mb10">100,000.00</p>
              <span class="">合同金额(元)</span>
               
            </div>
            <div>
                <p class="f22 c-primary mb10">质押</p>
                <span class="">担保方式</span>
            </div>
            <div class="w230">
                <p class="mb10">开始日期：2021-03-10</p>
                <span class="">结束日期：2022-03-10</span>
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
      contractStatus:'',
    }
  },
  methods:{

    //贷款支用
    loanDrawing(){
      this.$router.push('/financeBussiness/loanBussiness/loanDrawing')
    },
    //查看详情
    details(){
      this.$router.push('/financeBussiness/loanBussiness/loanDetails')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>