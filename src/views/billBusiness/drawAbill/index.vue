<template>
  <div class="osq">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" v-if="activeName=='oneStopApply'||activeName=='batchApply'">
      <el-tab-pane label="单笔申请" name="oneStopApply"> </el-tab-pane>
      <el-tab-pane label="批量申请" name="batchApply"> </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "oneStopApply",
    };
  },
  mounted() {
    this.activeName = this.$route.name;
  },
  watch: {
    $route() {
      this.activeName = this.$route.name;
    },
  },
  methods: {
    handleClick() {
      if (this.activeName == "oneStopApply") {
        this.$router.push({
          path: "/bill/drawAbill/drawAbillApply/oneStopApply",
        });
      } else {
        this.$router.push({
          path: "/bill/drawAbill/drawAbillApply/batchApply",
        });
      }
    },
  },
};
</script>