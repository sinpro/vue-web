<template>
  <div class="bank-main">
    <div class="bank-main-cont clearfix">
      <div class="bank-main-cont-left">
        <!-- 侧边栏 -->
        <silderBar
            :menuList="getSliderMenus.children"
            :defaultActive="getSliderMenusAct"
            :defaultOpeneds="defaultOpeneds"
            @handleSelect="handleSelect"
        >
        </silderBar>
      </div>
      <!-- 内容区域 -->
      <div class="bank-main-cont-right">
        <!-- 面包屑 -->
        <div class="bank-main-cont-right-breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              v-for="(item,i) in breadcrumbList"
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
      menuList:[],//菜单数据
      defaultActive:'',//默认选中
      defaultOpeneds:[],//默认打开
      breadcrumbList:[],// 面包屑
    }
  },
  computed: {
    ...mapGetters([
      "getSliderMenus",
      "getSliderMenusAct"
    ]),
  },
  components:{
    silderBar
  },

  watch: {
    // $route: {
    //   handler: function(newVal, oldVal) {
    //     this.initMenu();
    //   },
    //   immediate: true
    // }
  },
  mounted(){
    console.log(111,444)
    this.initMenu();
  },
  methods:{
    ...mapMutations([
      "setSliderMenusAct"
    ]),
    // 初始化
    initMenu(){
      this.breadcrumbList=this.getFirstActiveArr([this.getSliderMenus]);
      const keys = this.breadcrumbList.map(item => item.id);
      this.setSliderMenusAct(keys[keys.length - 1])
      // this.defaultActive=keys[keys.length - 1];
      this.defaultOpeneds=keys;
    },
    handleSelect(obj) {
      this.breadcrumbList=this.getActiveClickArr(obj.key,[this.getSliderMenus]);
      const keys = this.breadcrumbList.map(item => item.id);
      const path = this.breadcrumbList.map(item => item.path);
      console.log(path,keys,666)
      this.setSliderMenusAct(keys[keys.length - 1])
      // this.defaultActive=keys[keys.length - 1];
      this.defaultOpeneds=keys;
      this.$router.push(path[path.length - 1]);
    },
    //获取首次进来的数据列表
    getFirstActiveArr(arr,concatArr=[]) {
      let that = this;
      for (let i = 0; i < arr.length; i++) {
        let currentArr = concatArr.concat();
        currentArr.push(arr[i]);
        if (arr[i].children && arr[i].children.length > 0) {
          let resultArr = that.getFirstActiveArr(
              arr[i].children,
              currentArr
          );
          if (resultArr) {
            return resultArr;
          }
        }else{
          return currentArr;
        }
      }
    },
    //获取对应选中的当前侧边栏项的所有节点
    getActiveClickArr(id='',arr=[],concatArr=[]){
      let that = this;
      for (let i = 0; i < arr.length; i++) {
        let currentArr = concatArr.concat();
        currentArr.push(arr[i]);
        if (id&&arr[i].id === id) {
          return currentArr;
        }
        if (arr[i].children && arr[i].children.length > 0) {
          let resultArr = that.getActiveClickArr(
              id,
              arr[i].children,
              currentArr
          );
          if (resultArr) {
            return resultArr;
          }
        }
      }
    },
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
