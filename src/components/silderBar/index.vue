<template>
  <div class="silder-bar">
    <el-row>
    <el-col :span="24">
      <el-menu
          default-active="1-1-1"
          :default-openeds="[menuList[0].id,menuList[0].children[0].id]"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
      >
          <silderMenu :menuList="getSliderMenus.children"></silderMenu>
      </el-menu>
    </el-col>
    </el-row>
  </div>
</template>
<script>
import silderMenu from './silderMenu';
import { mapGetters,mapMutations } from 'vuex';
export default {
  data(){
    return {
      menuList:[
        {
          name:'导航1',
          id:'1',
          icon:'el-icon-location',
          children:[
            {
              name:'导航1-1',
              id:'1-1',
              icon:'el-icon-location',
              children:[
                {
                  name:'导航1-1-1',
                  id:'1-1-1',
                  icon:'el-icon-location',
                },
                {
                  name:'导航1-1-2',
                  id:'1-1-2',
                  icon:'el-icon-location',
                },
                {
                  name:'导航1-1-3',
                  id:'1-1-3',
                  icon:'el-icon-location',
                },
              ]
            },
          ]
        },
        {
          name:'导航2',
          id:'2',
          icon:'el-icon-location',
          children:[
            {
              name:'导航2-1',
              id:'2-1',
              icon:'el-icon-location',
            },
            {
              name:'导航2-2',
              id:'2-2',
              icon:'el-icon-location',
            },
            {
              name:'导航2-3',
              id:'2-3',
              icon:'el-icon-location',
            },
            {
              name:'导航2-4',
              id:'2-4',
              icon:'el-icon-location',
            },
          ]
        },
        {
          name:'导航3',
          id:'3',
          icon:'el-icon-location',
          children:[]
        },
      ]
    }
  },
  computed: {
    ...mapGetters([
      "getSliderMenus"
    ]),
  },
  components:{
    silderMenu
  },
  mounted() {
    let aaa=[this.getSliderMenus];
    console.log(this.getFirstActiveArr(aaa), 666)
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key,keyPath);

      // console.log(this.getFirstActiveArr(this.getSliderMenus),'pppp')
    },
    getFirstActiveArr(orignArr, path) {
      //获取首次进来的数据列表
      path = path || [];
      var that = this;
      for (var i = 0; i < orignArr.length; i++) {
        var tmpPath = path.concat();
        tmpPath.push(orignArr[i]);
        if (!orignArr[i].children.length) {
          return tmpPath;
        }
        if (orignArr[i].children && orignArr[i].children.length > 0) {
          var findResult = that.getFirstActiveArr(
              orignArr[i].children,
              tmpPath
          );
          if (findResult) {
            return findResult;
          }
        }
      }
    },
    getActiveClickArr(bsnCode, orignArr, path=[]) {
      //获取对应bsnCode的数据列表
      var that = this;
      for (var i = 0; i < orignArr.length; i++) {
        var tmpPath = path.concat();
        tmpPath.push(orignArr[i]);
        if (orignArr[i].bsnCode === bsnCode) {
          return tmpPath;
        }
        if (orignArr[i].children && orignArr[i].children.length > 0) {
          var findResult = that.getActiveClickArr(
              bsnCode,
              orignArr[i].children,
              tmpPath
          );
          if (findResult) {
            return findResult;
          }
        }
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.silder-bar{
  overflow: hidden;
  .el-menu {
     border-right: none!important;
    /deep/.el-menu-item.is-active{
      background-image: linear-gradient(270deg, #C6AB75 0%, #E8D2A2 100%);
      color:#fff;
    }
  }
}
</style>
