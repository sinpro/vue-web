<template>
  <div class="payeeInfo">
    <title-bar title="收款人详情"></title-bar>
    <span class="titlebutton">
      <el-button type="danger" @click="deletePayee">删除收款人</el-button>
    </span>
    <div class="cen-form flex alc wrap mb30">
      <div class="item">
        <span class="label cp2">收款户名</span>
        <span class="value"></span>
      </div> 
      <div class="item">
        <span class="label cp2">分组</span>
        <span class="value"></span>
      </div>
      <div class="item">
        <span class="label cp2">收款账号</span>
        <span class="value">145645645646546546</span>
      </div>
      <div class="item">
        <span class="label cp2">收款银行</span>
        <span class="value">145645645646546546</span>
      </div>
      <div class="item">
        <span class="label cp2">昵称</span>
        <span class="value">145645645646546546</span>
      </div>
      <div class="item">
        <span class="label cp2">网点</span>
        <span class="value">145645645646546546</span>
      </div>
    </div>
    <p class="tac mtb56">
      <el-button size="medium">返回</el-button>
      <el-button size="medium">修改收款人</el-button>
      <el-button size="medium" type="primary">转账</el-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    deletePayee() {
      this.$confirm("", "确认删除该收款人信息吗？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.$MessageWarn({
            type: "success",
            title: "提醒",
            message: "删除成功",
          });
        })
        .catch(() => {});
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.payeeInfo {
  position: relative;

  .titlebutton {
    .el-button {
      width: 115px;
      padding: 7px;
      font-size: 14px;
      background: #fff !important;
      color: #ed3d3d;
      &:hover {
        background: #fdecec !important;
        color: #e85858;
      }
      &:focus {
        background: #fdecec !important;
        color: #e85858;
      }
    }
    position: absolute;
    top: 0;
    right: 0;
  }
  .cen-form {
    align-items: flex-start;
    .item {
      width: 50%;
      margin-bottom: 24px;
      .el-button {
        padding: 0;
      }
      .label {
        display: inline-block;
        width: 140px;
        text-align: right;
        margin-right: 24px;
      }
      .value {
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

