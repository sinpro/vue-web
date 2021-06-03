<template>
  <div class="silder-menu">
    <template v-for="item in menuList">
      <el-submenu
        :key="item.id"
        v-if="item.children&&!!item.children.length"
        :index="item.id"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <silderMenu :menuList="item.children"></silderMenu>
      </el-submenu>
    <el-menu-item
      v-else
      :key="item.id"
      :index="item.id"
    >
      <i :class="item.icon"></i>
      <span>{{item.name}}</span>
    </el-menu-item>
    </template>
  </div>
</template>
<script>
export default {
  name: "silderMenu",
  data(){
    return { }
  },
  props:['menuList'],
  mounted(){
    console.log(this.menuList,222)
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>
