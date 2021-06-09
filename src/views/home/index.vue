<template>
  <div class="home">
    <!--头部组件-->
    <bankHeader></bankHeader>
    <!--内容-->
    <div class="content">
      <homePage v-if="isHome" @handleQues="()=>{isHome=false}"></homePage>
      <div class="home-ques" v-else>
        <homeQues @handleCancel="()=>{isHome=true}"></homeQues>
      </div>
      
    </div>
  </div>
</template>
<script>
import bankHeader from 'src/components/bankHeader';
import homePage from './homePage';
import homeQues from './homeQues';
import { mapGetters,mapMutations } from 'vuex';
export default {
  name:'Home',
  data(){
    return {
      isHome:true,
    }
  },
  components:{
    bankHeader,
    homePage,
    homeQues
  },
  computed: {
    ...mapGetters([
      "getUserMenus",
      "getUserMenusAct"
    ]),
  },
  mounted(){
    this.setUserMenusAct(this.getUserMenus[0].id);
  },
  methods:{
    ...mapMutations([
      "setSliderMenus",
      "setUserMenusAct"
    ]),
  }
}
</script>
<style lang="scss" scoped>
.content{
  // height: 500px;
  .home-ques{
    width: 1100px;
    margin: 0 auto;
    background: #fff;
    padding: 16px;
  }
}
</style>
