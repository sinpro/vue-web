<template>
  <div class="queryOnTheDialInfo">
    <title-bar title="详情"></title-bar>
    <div class="cen-form flex alc wrap mb10">
      <div class="item">
        <span class="label cp2">流水号</span>
        <span class="value"></span>
      </div>
      <div class="item">
        <span class="label cp2">工资单原文件</span>
        <span class="value"
          >dsdsddsdsdsdsddsdsdsddsdsdsdsd
          <el-button type="text">下载文件</el-button>
        </span>
      </div>
      <div class="item">
        <span class="label cp2">总笔数</span>
        <span class="value">1000000元</span>
      </div>
      <div class="item">
        <span class="label cp2">发放年月</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">实发工资总额</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">提交时间</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">大写金额</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">失败原因</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">发布指令</span>
        <span class="value">12笔</span>
      </div>
    </div>

    <div class="tac mtb56">
      <el-button type="primary">返回</el-button>
    </div>
    <div class="tac mtb56">
      <el-button type="primary" size="medium">返回</el-button>
      <el-button size="medium">重新发布</el-button>
    </div>
    <div class="tac mtb56">
      <el-button type="primary" size="medium">返回</el-button>
      <el-button size="medium" @click="repeal">撤销发布</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    repeal() {
      this.$confirm(
        "撤回后，员工将无法使用手机银行查询此次发布的电子工资单",
        "确定要撤回发布吗？",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true,
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    window.sessionStorage.getItem("queryOnTheDialInfo");
  },
};
</script>
<style lang="scss">
.queryOnTheDialInfo {
  .cen-form {
    align-items: flex-start;
    margin-top: 35px;
    .item {
      width: 50%;
      margin-bottom: 20px;
      line-height: 24px;
      .el-button {
        padding: 0;
      }
      .label {
        display: inline-block;
        width: 160px;
        text-align: right;
        margin-right: 24px;
      }
      .value {
        vertical-align: top;
        width: 50%;
        display: inline-block;
        word-wrap: break-word;
        .tab {
          display: inline-block;
          min-width: 54px;
          padding: 0 8px;
          height: 22px;
          line-height: 22px;
          font-size: 14px;
          text-align: center;
          color: #fff;
          border-radius: 20px;
          background: #c6a34f;
        }
      }
    }
  }
}
</style>