<template>
  <div class="batchInfoConfirm">
    <title-bar title="确认信息"></title-bar>
    <el-table :data="tableData" stripe>
      <el-table-column prop="id" label="票据类型" width="160">
      </el-table-column>
      <el-table-column prop="name" label="出票日期" width="160">
      </el-table-column>
      <el-table-column prop="code" label="到期日期" width="160">
      </el-table-column>
      <el-table-column prop="code" label="票据金额:" width="160">
      </el-table-column>
      <el-table-column prop="code" label="收款人名称" width="160">
      </el-table-column>
      <el-table-column prop="code" label="承兑人名称" width="160">
      </el-table-column>
      <el-table-column prop="code" label="是否转让" width="160">
      </el-table-column>
      <el-table-column prop="name" label="操作" width="82" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="openInfo(scope)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="tc mtb50">
      <el-button @click="confirmBack" size="medium">上一步</el-button>
      <el-button type="primary" @click="transSubmit" size="medium"
        >提交</el-button
      >
    </el-row>

    <el-dialog title="默认大" :visible.sync="infoFlay" size="medium" text>
      <title-bar title="票据信息"></title-bar>
      <div class="cen-form flex alc wrap">
        <div class="item">
          <span class="label cp2">企业名称</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">收款人名称</span>
          <span class="value">145645645646546546</span>
        </div>
        <div class="item">
          <span class="label cp2">账号</span>
          <span class="value">1000000元</span>
        </div>
        <div class="item">
          <span class="label cp2">收款人账号</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">票据类型</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">收款人开户行名称</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">出票日期</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">收款人开户行行号</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">到期日期</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">承兑人类型</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">金额</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">标题名称</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">大写金额</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">能否转让</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">交易合同号</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">出票备注</span>
          <span class="value">12笔</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteInfo()" size="medium">删除</el-button>
        <el-button type="primary" @click="updateInfo()" size="medium"
          >修改</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    tableData: {
      Type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      index: "",
      infoData: {},
      infoFlay: false,
      settleFlag: false, //结算标准
    };
  },
  methods: {
    openInfo(scope) {
      this.index = scope.$index;
      this.infoData = scope.row;
      this.infoFlay = true;
    },
    updateInfo() {
      window.sessionStorage.setItem("billDrawIndex", this.index);
      this.$router.push({
        path: "/bill/drawAbill/drawAbillApply/batchApply/updateBatchApply",
      });
    },
    deleteInfo() {
      this.$confirm("删除确认", "确认删除此条出票信息吗？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.tableData.splice(this.index, 1);
          this.infoFlay = false;
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
    //上一步
    confirmBack() {
      this.$emit("input", "infoFill");
    },
    //确认
    transSubmit() {
      this.$emit("transSubmit");
    },
  },
};
</script>

<style lang="scss" scoped>
.batchInfoConfirm {
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
}
</style>