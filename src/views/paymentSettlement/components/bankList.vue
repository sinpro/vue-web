<template>
  <div class="bank-select">
    <el-dialog
      title="银行查询"
      :visible.sync="value"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :show-close="false"
      center=""
      size="medium"
    >
      <div class="flex">
        <el-tabs tab-position="top" v-model="activeName">
          <el-tab-pane label="热门银行"> </el-tab-pane>
          <el-tab-pane label="ABCD"> </el-tab-pane>
          <el-tab-pane label="EFGH"> </el-tab-pane>
          <el-tab-pane label="JKLM"> </el-tab-pane>
          <el-tab-pane label="NPQR"> </el-tab-pane>
          <el-tab-pane label="STWX"> </el-tab-pane>
          <el-tab-pane label="YZ"> </el-tab-pane>
        </el-tabs>
        <div class="select-input">
          <el-input
            :class="activeName ? '' : 'is-select'"
            placeholder="asjdahdja"
            v-model="keyWords"
            @focus="inputFocus"
            prefix-icon="el-icon-search"
          ></el-input>
        </div>
      </div>
      <div class="tab-con">
        <el-radio
          v-model="bankNo"
          :value="item.bnkNo"
          v-for="(item, index) in bankList"
          :key="index"
        >
          <span class="inline-block h40 lh40">{{ item.bnkNm }}</span>
        </el-radio>
      </div>
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
      keyWords: "",
      bankNo: "",
      activeName: "热门银行",
      bankList: [],
    };
  },
  methods: {
    init() {
      //获取收款人数据
      if (this.value == true) {
        let _this = this;
        this.$http
          .request(_this, "POST", "/.do", {
            queryCd: activeName ? (activeName == "热门银行" ? "1" : "2") : "3",
            groupScp: activeName,
            keyWords: this.keyWords,
          })
          .then((res) => {
            if (res.data.body.errorCode === "0") {
              this.bankList = res.data.body.bankList;
            }
          });
      }
    },

    toSubmit() {
      let bankItem = {};
      this.bankList.forEach((item, index) => {
        if (item.bankNo == this.bankNo) {
          bankItem = item;
        }
      });
      this.$emit("bankSelect", bankItem);
      this.$emit("input", false);
    },
    toCancle() {
      this.$emit("input", false);
      this.$emit("toCancle");
    },
    inputFocus() {
      this.activeName = "";
    },
  },

  mounted() {
    this.init();
  },
};
</script>
<style lang="scss">
.bank-select {
  .tab-con {
    height: 300px;
  }
  .select-input {
    padding-bottom: 3px;
    .el-input {
      position: relative;
      top: -1px;
      border-top: 0px;
      border-right: 0px;
      border-left: 0px;
      border-bottom: 1px solid #f0f0f0;
      input {
        border: none;
        background: #f0f0f0;
      }
    }
  }
  .is-select {
    border: none !important;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background: #059c5d;
      position: relative;
      top: -2px;
    }
  }
}
</style>