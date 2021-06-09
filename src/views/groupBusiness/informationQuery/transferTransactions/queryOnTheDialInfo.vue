<template>
  <div class="queryOnTheDialInfo">
    <title-bar title="交易详情"></title-bar>
    <div class="cen-form flex alc wrap mb10">
      <div class="item">
        <span class="label cp2">付款户名</span>
        <span class="value"></span>
      </div>
      <div class="item">
        <span class="label cp2">收款户名</span>
        <span class="value">145645645646546546</span>
      </div>
      <div class="item">
        <span class="label cp2">付款账号</span>
        <span class="value">1000000元</span>
      </div>
      <div class="item">
        <span class="label cp2">收款账号</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">付款银行</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">收款银行</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">上划金额</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">划拨类型</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">大写金额</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">交易时间</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">交易渠道</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">流水号</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">录入员</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">用途</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">交易状态</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">备注</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">失败原因</span>
        <span class="value">12笔</span>
      </div>
    </div>
    <p class="leftBar">审批流程</p>
    <auditProcess :list="list"></auditProcess>
    <div class="tac mtb56">
      <el-button size="medium">返回</el-button>
      <el-button size="medium">电子回单</el-button>
      <el-button type="primary" size="medium">再次发起</el-button>
    </div>
    <div class="tac mtb56">
      <el-button size="medium">返回</el-button>
      <el-button type="primary" size="medium">重新发起</el-button>
    </div>

    <el-dialog
      title="回单详情"
      :visible.sync="dialogVisibleb"
      size="medium"
      text
    >
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleb = false" size="medium"
          >下载</el-button
        >
        <el-button type="primary" @click="dialogVisibleb = false" size="medium"
          >打印</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import auditProcess from "src/components/auditProcess/index.vue";

export default {
  components: {
    auditProcess,
  },
  data() {
    return {
      dialogVisibleb: false,
      list: [
        {
          type: "finish",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "tips",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "success",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "info",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
        },
        {
          type: "errer",
          name: "王思聪",
          time: "2020-02-02 12:00:00",
          desc: "错误信息",
        },
      ],
    };
  },
  methods: {},
  created() {
    window.sessionStorage.getItem("queryOnTheDialInfo");
  },
};
</script>
<style lang="scss">
.queryOnTheDialInfo {
  .cen-form {
    align-items: flex-start;
    margin-top: 34px;
    .item {
      width: 50%;
      margin-bottom: 24px;
      .label {
        display: inline-block;
        width: 160px;
        text-align: right;
        margin-right: 24px;
      }
    }
  }
}
</style>