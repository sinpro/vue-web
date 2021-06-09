<template>
  <el-row>
    <div class="search-tabs">
      <div class="search-tabs-header">
        <div @click="panel = 'search'" :class="[
          'search-tabs-header-icon',
          panel == 'search' ? 'search-tabs-header-icon-active' : ''
        ]">
          搜索
        </div>
        <div @click="panel = 'setting'" :class="[
          'search-tabs-header-icon',
          panel == 'setting' ? 'search-tabs-header-icon-active' : ''
        ]">
          设置
        </div>
      </div>
      <div class="search-tabs-panel">
        <template v-if="panel == 'search'">
          <slot name="search"></slot>
        </template>
        <template v-if="panel == 'setting'">
          <slot name="setting"></slot>
        </template>
      </div>
    </div>
  </el-row>
  
</template>

<script>
export default {
  name: "lineTabs",
  data() {
    return {
      panel: "search"
    };
  }
};
</script>

<style lang="scss">
.search-tabs {
  float: left;
  width: 100%;
  border: 1Px solid #e9eaec;
  padding: 10px;
  .search-tabs-header {
    min-height: 60px;
    line-height: 30px;
    width: 50px;
    float: left;
    text-align: center;
    .search-tabs-header-icon { 
      cursor: pointer;
    }
    .search-tabs-header-icon:hover {
      color: #409EFF;
    }
  }
  .search-tabs-panel {
    float: left;
    border-left: 1Px solid #e9eaec;
    padding-left: 10px;
    width: calc(100% - 52px);
  }
  .search-tabs-header-icon-active {
    color: #409EFF;
    border-right: 3px solid #409EFF;
  }
}
</style>