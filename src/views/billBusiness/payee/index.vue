<template>
  <div class="payeeIndex">
    <el-form
      :inline="true"
      v-if="activeName == 'drawAbillPayee' || activeName == 'negotiablityPayee'"
    >
      <el-form-item label="搜索:">
        <el-input v-model="formData" placeholder="请输入关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="query" size="mini">查询</el-button>
      </el-form-item>
    </el-form>
    <div
      class="position-r mt36"
      v-if="activeName == 'drawAbillPayee' || activeName == 'negotiablityPayee'"
    >
      <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
        <el-tab-pane label="出票收款人" name="drawAbillPayee"></el-tab-pane>
        <el-tab-pane label="背书收款人" name="negotiablityPayee"></el-tab-pane>
      </el-tabs>
      <el-button class="titlebutton" icon="el-icon-plus" @click="goAdd"
        >新增收款人</el-button
      >
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: '',
      activeName: 'drawAbillPayee',
      oldqueryDate: ''
    };
  },
  mounted() {
    this.activeName = this.$route.name;
    this.handleClick();
  },
  watch: {
    $route() {
      this.activeName = this.$route.name;
    }
  },
  methods: {
    goAdd() {
      if (this.activeName == 'drawAbillPayee') {
        this.$router.push({
          path: '/bill/payee/drawAbillPayee/drawAbillAdd'
        });
      } else {
        this.$router.push({
          path: '/bill/payee/negotiablityPayee/negotiablityAdd'
        });
      }
    },
    query() {
      // if (this.oldqueryDate !== this.formData) {
      //   this.oldqueryDate = this.formData;
      if (this.activeName == 'drawAbillPayee') {
        this.$router.push({
          path: '/bill/payee/drawAbillPayee/',
          query: { val: this.formData }
        });
      } else {
        this.$router.push({
          path: '/bill/payee/negotiablityPayee/',
          query: { val: this.formData }
        });
      }
      // }
    },
    handleClick() {
      if (this.$route.name !== this.activeName) {
        this.formData = '';
        if (this.activeName == 'drawAbillPayee') {
          this.$router.push({
            path: '/bill/payee/drawAbillPayee'
          });
        } else {
          this.$router.push({
            path: '/bill/payee/negotiablityPayee'
          });
        }
      }
    }
  }
};
</script>
<style lang="scss">
.payeeIndex {
  .titlebutton {
    width: 115px;
    padding: 7px;
    font-size: 14px;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>