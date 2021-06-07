<template>
  <div class="silder-bar">
    <el-row>
    <el-col :span="24">
      <el-menu
          :default-active="defaultActive"
          :default-openeds="defaultOpeneds"
          :unique-opened="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
      >
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
      menuLists:[
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
      ],
      breadcrumbList: [], // 面包屑
    }
  },
  props:{
    menuList:{
      type:Array,
      default:()=>[]
    },
    defaultActive:{
      type:String,
      default:''
    },
    defaultOpeneds:{
      type:Array,
      default:()=>[]
    },
  },
  components:{
    silderMenu
  },
  mounted() {
  },
  methods: {
    handleOpen(key, keyPath) {
      this.$emit('handleOpen',{key,keyPath})
    },
    handleClose(key, keyPath) {
      this.$emit('handleClose',{key,keyPath})
    },
    handleSelect(key, keyPath) {
      this.$emit('handleSelect',{key,keyPath})
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
  }
}
</style>
