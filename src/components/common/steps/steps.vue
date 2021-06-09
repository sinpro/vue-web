<template>
  <div class="common-steps ptb20 tc">
    <el-steps
      :active="activeIndex"
      process-status="process"
      finish-status="success"
      align-center
      class="inline-block"
    >
      <el-step
        v-for="(item, index) in stepsList"
        :key="index"
        :title="item.title"
        :description="item.description"
        :status="item.status"
      ></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  props: {
    stepsList: {
      type: Array,
      default: () => [
        {
          title: "填写信息",
          description: "",
        },
        {
          title: "确认信息",
          description: "",
        },
        {
          title: "提交结果",
          description: "",
        },
      ],
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
    finishStatus: {
      type: String,
      default: "success",
    },
  },
};
</script>

<style lang="scss" >
.common-steps {
}
</style>