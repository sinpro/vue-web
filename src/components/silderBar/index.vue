<template>
  <div class="silder-bar">
    <el-row>
    <el-col :span="24">
      <el-menu
          default-active="1-1-1"
          :default-openeds="[menuList[0].id,menuList[0].children[0].id]"

          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <silderMenu :menuList="menuList"></silderMenu>
      </el-menu>
    </el-col>
    </el-row>
  </div>
</template>
<script>
import silderMenu from './silderMenu';
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
  components:{
    silderMenu
  },
  mounted(){

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="scss" scoped>
.silder-bar{
  overflow: hidden;
  .el-menu {
     border-right: none!important;
    /deep/.el-menu-item.is-active{
      background-color: pink!important;
    }
  }
}
</style>
