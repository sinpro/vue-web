<template>
  <div class="bank-footer">
     <span>客服热线：96633（省内）</span><span>028-96633（省外）</span><span>地址：四川省成都市高新区锦城大道108号 </span><span>邮编：610041</span><span>版权所有 © 四川省农村信用社联合社版权所有 蜀ICP备05031508号</span>
  </div>
</template>
<script>
export default {
  name:'bankFooter',
  data(){
    return {

    }
  },
  components:{

  },
  mounted(){

  },
  watch:{
  },
}
</script>
<style lang="scss" scoped>
.bank-footer{
    width: 100%;
    height: 76px;
    background-color: #373737;
    padding:30px 81px;
    box-sizing: border-box;
    color: #fff;
    text-align: center;
    span{
      padding-right:3px;
    }
  }
</style>
