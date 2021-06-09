<template>
  <div class="autoTMInfo">
    <title-bar title="划拨计划基本信息"></title-bar>
    <div class="cen-form flex alc wrap">
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
        <span class="label cp2">划拨类型</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">划拨方式</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">周期类型</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">用途</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">计划执行周期</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">备注</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">下次计划执行日期</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">计划状态</span>
        <span class="value">12笔</span>
      </div>
    </div>
    <div v-if="!info">
      <title-bar title="划拨计划交易记录"></title-bar>
      <el-table :data="tableData" stripe>
        <el-table-column prop="name" label="交易时间"> </el-table-column>
        <el-table-column prop="name" label="金额（元）"> </el-table-column>
        <el-table-column prop="name" label="交易状态">
          <template slot-scope="scope">
            <el-tooltip
              v-if="scope.row.type == 'error'"
              class="item"
              effect="dark"
              content="Top Left 提示文字"
              placement="top-end"
            >
              <i class="el-icon-question cg"></i> </el-tooltip
          ></template>
        </el-table-column>
        <el-table-column prop="name" label="操作" width="116">
          <template slot-scope="scope">
            <el-button v-if="scope.row.type !== 'error'" type="text" @click=""
              >电子回单</el-button
            >
            <el-button v-else type="text" @click="info = true"
              >查看详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <p class="leftBar">审批流程</p>
      <div class="bgbrand stepList">
        <p class="leftBarB">
          <span>原审批流程</span
          ><span class="gray2"
            ><i :class="!oldBox ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i
            >{{ !oldBox ? "收起" : "展开" }}</span
          >
        </p>

        <auditProcess
          v-if="oldBox"
          :background="false"
          :list="list"
        ></auditProcess>
        <p class="leftBarB">
          <span>终止计划（当前）</span
          ><span class="gray2"
            ><i :class="!newBox ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i
            >{{ !newBox ? "关闭" : "展开" }}</span
          >
        </p>
        <auditProcess
          v-if="newBox"
          :background="false"
          background
          :list="list"
        ></auditProcess>
      </div>
      <auditProcess :list="list"></auditProcess>
    </div>
    <div class="tac mtb56" v-if="info">
      <el-button type="primary">返回</el-button>
    </div>
    <div class="tac mtb56" v-else>
      <el-button size="medium">返回</el-button>
      <el-button size="medium">终止</el-button>
      <el-button size="medium" type="primary">修改</el-button>
      <el-button size="medium" type="primary">重新发起</el-button>
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
      oldBox: true,
      newBox: true,
      info: false,
      id: "",
      tableData: [{ type: "error" }],
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
      ],
    };
  },
  created() {
    this.id = window.sessionStorage.getItem("autoTMInfoId");
  },
};
</script>
<style lang="scss">
.autoTMInfo {
  .cen-form {
    align-items: flex-start;
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
  .leftBarB {
    width: 580px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .stepList {
    padding: 32px 56px;
  }
}
</style>