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
import { mapGetters, mapMutations } from 'vuex';
import { getActiveClickArr } from 'utils';
export default {
  data() {
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
      defaultOpeneds: [] //
    };
  },
  components: {
    silderMenu
  },
  computed: {
    ...mapGetters(['getSliderMenus', 'getSliderMenusAct', 'getBreadcrumb'])
  },
  mounted() {},
  methods: {
    ...mapMutations([
      'setSliderMenus',
      'setUserMenusAct',
      'setSliderMenusAct',
      'setBreadcrumb'
    ]),
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.setSliderMenusAct(key);
      const breadcrumbList = getActiveClickArr(key, [this.getSliderMenus]);
      this.setBreadcrumb(breadcrumbList);
      const keys = this.getBreadcrumb.map(item => item.id);
      const path = this.getBreadcrumb.map(item => item.path);
      this.defaultOpeneds = keys;
      this.$router.push(path[path.length - 1]);
    }
  }
};
</script>
<style lang="scss" scoped>
.silder-bar {
  overflow: hidden;
  .el-menu {
    border-right: none !important;
    
  }
}
</style>
<style lang="scss">
.silder-bar {
  .el-submenu__icon-arrow {
    right: 16px;
  }
  .el-submenu .el-menu-item {
    min-width: 184px;
  }
  > div > .el-submenu > .el-submenu__title {
    padding-left: 16px !important;
  }
  > div > .el-menu-item {
    padding-left: 16px !important;
  }
  //设置选中el-menu-item时的样式
  .el-menu-item.is-active {
    color: #fff;
    background: -o-linear-gradient(to right, #c6ab75, #e8d2a2);
    background: linear-gradient(to right, #c6ab75, #e8d2a2);
    background-blend-mode: normal, normal;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#c6ab75',endColorstr='#e8d2a2',gradienttype=1);
  }
  .el-menu-item:not(.is-active):focus,
  .el-menu-item:not(.is-active):hover,
  .el-submenu__title:hover {
    background: #fff;
  }
  .el-menu-item,
  .el-submenu__title {
    height: auto !important;
    padding: 15px;
    line-height: 20px !important;
    span {
      display: block;
      width: 7em;
      white-space: pre-wrap;
      line-height: 20px !important;
    }
  }
}
</style>
