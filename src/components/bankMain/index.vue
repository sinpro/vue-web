<template>
  <div class="bank-main">
    <div class="bank-main-cont clearfix">
      <div class="bank-main-cont-left">
        <!-- 侧边栏 -->
        <silderBar></silderBar>
      </div>
      <!-- 内容区域 -->
      <div class="bank-main-cont-right">
        <!-- 面包屑 -->
        <div class="bank-main-cont-right-breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              v-for="(item,i) in getBreadcrumb"
              :key="item.id"
              :to="{ path: item.path }"
            >
              <a href="/" v-if="i===0">{{item.name}}</a>
              <span v-else>{{item.name}}</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!-- 内容区 -->
        <div class="bank-main-cont-right-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import silderBar from '../silderBar';
import { mapGetters,mapMutations } from 'vuex';
export default {
  name:'bankMain',
  data(){
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      "getBreadcrumb"
    ]),
  },
  components:{
    silderBar
  },
  watch: {
  },
  mounted(){
    
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
.bank-main{
  background-color: #F8F8FB;
  width: 100%;
  min-height:calc(100vh - 196px);
  &-cont{
    width: 1200px;
    margin: 0 auto;
    padding: 24px 0;
    //background-color: red;
    &-left{
      float: left;
      width: 184px;
      background-color: #fff;
    }
    &-right{
      float: right;
      width: 992px;
      //height: 900px;
      background-color: #fff;
      &-breadcrumb{
        width: 100%;
        height: 28px;
        background-color: #f8f8f8!important;
      }
      &-content{
        padding: 24px;
      }
    }
  }
}
</style>
