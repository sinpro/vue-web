<template>
  <div class="silder-bar">
    <el-row>
    <el-col :span="24">
      <el-menu
          :default-active="getSliderMenusAct"
          :default-openeds="defaultOpeneds"
          :unique-opened="true"
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
import {getActiveClickArr} from 'utils';
export default {
  data(){
    return {
      // menuLists:[
      //   {
      //     name:'导航1',
      //     id:'1',
      //     icon:'el-icon-location',
      //     children:[
      //       {
      //         name:'导航1-1',
      //         id:'1-1',
      //         icon:'el-icon-location',
      //         children:[
      //           {
      //             name:'导航1-1-1',
      //             id:'1-1-1',
      //             icon:'el-icon-location',
      //           },
      //           {
      //             name:'导航1-1-2',
      //             id:'1-1-2',
      //             icon:'el-icon-location',
      //           },
      //           {
      //             name:'导航1-1-3',
      //             id:'1-1-3',
      //             icon:'el-icon-location',
      //           },
      //         ]
      //       },
      //     ]
      //   },
      //   {
      //     name:'导航2',
      //     id:'2',
      //     icon:'el-icon-location',
      //     children:[
      //       {
      //         name:'导航2-1',
      //         id:'2-1',
      //         icon:'el-icon-location',
      //       },
      //       {
      //         name:'导航2-2',
      //         id:'2-2',
      //         icon:'el-icon-location',
      //       },
      //       {
      //         name:'导航2-3',
      //         id:'2-3',
      //         icon:'el-icon-location',
      //       },
      //       {
      //         name:'导航2-4',
      //         id:'2-4',
      //         icon:'el-icon-location',
      //       },
      //     ]
      //   },
      //   {
      //     name:'导航3',
      //     id:'3',
      //     icon:'el-icon-location',
      //     children:[]
      //   },
      // ],
      defaultOpeneds:[],//
    }
  },
  components:{
    silderMenu
  },
  computed: {
    ...mapGetters([
      "getSliderMenus",
      "getSliderMenusAct",
      "getBreadcrumb"
    ]),
  },
  mounted() {
  },
  methods: {
    ...mapMutations([
      "setSliderMenus",
      "setUserMenusAct",
      "setSliderMenusAct",
      "setBreadcrumb"
    ]),
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
       console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      this.setSliderMenusAct(key)
      const breadcrumbList=getActiveClickArr(key,[this.getSliderMenus]);
      this.setBreadcrumb(breadcrumbList)
      const keys = this.getBreadcrumb.map(item => item.id);
      const path = this.getBreadcrumb.map(item => item.path);
      this.defaultOpeneds=keys;
      this.$router.push(path[path.length - 1]);
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
      //filter: progid:DXImageTransform.Microsoft.gradient(GradientType=270deg, startColorstr=#C6AB75 0%, endColorstr=#E8D2A2 100%);
      color:#fff;
    }
    /deep/.el-submenu{
      .el-submenu__icon-arrow{
        margin-top:-3px;
      }
    }
    /deep/.el-menu-item{
      span{
        word-wrap: break-word;
        word-break: break-all;
        display: inline-block;
        line-height: 23px;
      }
    } 
  }
}
</style>
