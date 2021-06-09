<template>
  <div class="queryOnTheDialInfo">
    <title-bar title="交易详情"></title-bar>
    <div class="cen-form flex alc wrap mb10">
      <div class="item">
        <span class="label cp2">批次号</span>
        <span class="value"></span>
      </div>
      <div class="item">
        <span class="label cp2">资金用途</span>
        <span class="value">145645645646546546</span>
      </div>
      <div class="item">
        <span class="label cp2">付款户名</span>
        <span class="value">1000000元</span>
      </div>
      <div class="item">
        <span class="label cp2">代发原文件</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">付款账号</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">预约发放</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">总金额</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">发放日期</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">总笔数</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">隐藏明细</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">成功金额</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">提交时间</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">成功笔数</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">失败原因</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">交易状态</span>
        <span class="value">12笔</span>
      </div>
    </div>
    <p class="leftBar">审批流程</p>
    <auditProcess :list="list"></auditProcess>
    <div class="tac mtb56">
      <el-button type="primary">返回</el-button>
    </div>
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