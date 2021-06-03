<template>
  <div>
    <!--头部-->
    <bankHeader></bankHeader>
    <!--内容-->
    <bankMain></bankMain>
    <!--头部-->
    <bankFooter></bankFooter>
  </div>
</template>
<script>
import bankHeader from '../bankHeader';
import bankMain from '../bankMain';
import bankFooter from '../bankFooter';
export default {
  name:'layout',
  data(){
    return {
      isFixed:false
    }
  },
  components:{
    bankHeader,
    bankMain,
    bankFooter
  },
  created(){},
  mounted(){
    window.addEventListener('click', this.hasScrollbar,false)
  },
  methods:{
    hasScrollbar() {
      this.isFixed= document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
    }
  },
  beforeDestroy() {
    window.removeEventListener('click', this.hasScrollbar)
  }
}
</script>
<style lang="scss" scoped>
</style>
