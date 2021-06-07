<template>
  <div class="bank-header">
    <div class="bank-header-search"></div>
    <div class="bank-header-nav">
      <ul class="clearfix">
        <li :class="[{'act':item.id===getUserMenusAct},'fll','cursorPot']" v-for="item in getUserMenus" :key="item.id" @click="switchNav(item)">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters,mapMutations } from 'vuex';
export default {
  name:'bankHeader',
  data(){
    return {
      currentNav:'1',
      navList:[]
    }
  },
  computed: {
    ...mapGetters([
      "getUserMenus",
      "getUserMenusAct"
    ]),
  },
  components:{

  },
  mounted(){
    console.log(this.getUserMenus,this.getUserMenusAct,'0987')
  },
  methods:{
    ...mapMutations([
      "setSliderMenus",
      "setUserMenusAct"
    ]),
    switchNav(data){
      console.log(data,'0000')
      this.setSliderMenus(Object.freeze(data || []));
      // this.currentNav=data.id;
      this.setUserMenusAct(data.id);
      if(data.children&&data.children.length>0){
        this.$router.push(data.children[0].path)
      }else{
        this.$router.push(data.path)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.bank-header{
  //height: 120px;
  &-search{
    height: 74px;
  }
  &-nav{
    height: 46px;
    ul{
      width: 1200px;
      margin: 0 auto;
      li{
        font-size: 16px;
        color: #333333;
        padding:12px 18px;
      }
      li.act{
        background-image: linear-gradient(-41deg, #C6AB75 0%, #E8D2A2 100%);
        border-radius: 17.5px 0.5px 17.5px 0.5px;
      }
    }
  }
}
</style>
