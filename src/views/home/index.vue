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
import { mapGetters,mapMutations } from 'vuex';
export default {
  name:'Home',
  data(){
    return {

    }
  },
  components:{
    bankHeader
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
  height: 500px;
  background-color: red;
}
</style>
