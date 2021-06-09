<template>
  <div class="acct-list">
    <el-dialog
      title="账户查询"
      size="medium"
      center
      :visible.sync="value"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <el-form label-width="auto">
        <el-form-item label="关键词:">
          <el-input
            v-model="condition"
            placeholder="支持账号和户名模糊查询"
          ></el-input>
          <el-button type="primary" size="mini" class="ml30">查询</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" ref="payeeTable" stripe max-height="425px">
        <el-table-column label="选择" width="80">
          <template slot-scope="scope">
            <el-radio v-model="tableRadio" :label="scope.row.acctNo"></el-radio>
          </template>
        </el-table-column>
        <el-table-column
          prop="acctName"
          label="户名"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="acctNo"
          label="账号"
          width="250"
        ></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="$emit('input', false)" size="medium">取消</el-button>
        <el-button type="primary" @click="toSubmit" size="medium"
          >确定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentPage4: 4,
      tableRadio: {},
      tabPosition: "left",
      condition: "",
      tableData: [],
    };
  },
  methods: {
    init() {
      //获取收款人数据
      if (this.value == true) {
        let _this = this;
        this.$http
          .request(_this, "POST", "/TC010517.do")
          .then((res) => {
            if (res.data.body.errorCode === "0") {
              this.tableData = res.data.body.acctInfo;
            }
          });
      }
    },
    toSubmit() {
      let acctObj = {};
      this.tableData.forEach((item, index) => {
        if (item.acctNo == this.tableRadio) {
          acctObj = item;
        }
      });
      this.$emit("accoutConfirm", acctObj);
      this.$emit("input", false);
    
    },
    toCancle() {
      this.$emit("input", false);
      this.$emit("toCancle");
    },
  },

  mounted() {
    // this.init()
  },
};
</script>
<style lang="scss">
.acct-list {

}
</style>