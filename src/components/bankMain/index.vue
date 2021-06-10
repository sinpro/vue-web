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
          <el-breadcrumb separator=">">
            <el-breadcrumb-item
              v-for="(item, i) in getBreadcrumb"
              :key="item.id"
              :to="{ path: item.path }"
            >
              <a href="/" v-if="i === 0">{{ item.name }}</a>
              <span v-else>{{ item.name }}</span>
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
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'bankMain',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getBreadcrumb'])
  },
  components: {
    silderBar
  },
  watch: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.bank-main {
  width: 100%;
  &-cont {
    width: 1200px;
    margin: 0 auto;
    padding: 24px 0;
    height: calc(100vh - 220px);
    &-left {
      float: left;
      width: 184px;
      background-color: #fff;
      height: calc(100%);
      overflow: auto;
    }
    &-right {
      float: right;
      width: 992px;
      height: calc(100%);
      overflow: auto;
      background-color: #fff;
      &-breadcrumb {
        padding: 20px 24px 36px;
        box-sizing: border-box;
        font-size: 14px;
        background-color: #fff;
      }
      &-content {
        padding: 0 24px;
      }
    }
  }
}
</style>
<style lang="scss">
.bank-main {
  .el-breadcrumb__inner a,
  .el-breadcrumb__inner.is-link {
    color: #999999;
    font-weight: 500 !important;
  }
  .el-breadcrumb__inner a:hover{
    color: #059C5D;
  }
  .el-breadcrumb__separator {
    margin: 0 8px;
    font-weight: 100;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    color: #1b1b1b;
  }
}
</style>
