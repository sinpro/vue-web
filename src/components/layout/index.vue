<template>
  <div>
    <!--头部-->
    <bankHeader id="bankHeader"></bankHeader>
    <!--内容-->
    {{isFixed}}222
    <bankMain id="bankMain"></bankMain>
    <!--头部-->
    <bankFooter id="bankFooter" :class="!isFixed?'posfixB':''"></bankFooter>
  </div>
</template>
<script>
import bankHeader from '../bankHeader';
import bankMain from '../bankMain';
import bankFooter from '../bankFooter';
export default {
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
      console.log(this.isFixed)
    }
  },
  beforeDestroy() {
    window.removeEventListener('click', this.hasScrollbar)
  }
}
</script>
<style lang="scss" scoped>
.posfixB{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
