<template>
  <div class="home">
    <!--头部组件-->
    <bankHeader></bankHeader>
    <!--内容-->
    <div class="content">
      首页内容
    </div>
  </div>
</template>
<script>
import bankHeader from 'src/components/bankHeader';
export default {
  name:'Home',
  data(){
    return {

    }
  },
  components:{
    bankHeader
  },
  mounted(){

  },
}
</script>
<style lang="scss" scoped>
.content{
  height: 500px;
  background-color: red;
}
</style>
