<template>
  <div class="outlets-list">
    <el-dialog
      title="网点查询"
      size="medium"
      :visible.sync="value"
      center
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :show-close="true"
    >
      <el-form
        :inline="true"
        label-width="auto"
        ref="formData"
        :model="formData"
        :rules="formRules"
      >
        <el-form-item label="地区：" prop="city">
          <el-cascader
            class="w280"
            v-model="formData.city"
            placeholder="请选择地区"
            :options="optionsJL"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="关键字：" prop="keywords">
          <el-input
            class="w280"
            v-model="formData.keywords"
            placeholder="请输入搜索关键字"
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
        <el-table-column prop="acctName" label="联行号"></el-table-column>
        <el-table-column prop="acctNo" label="网点名称"></el-table-column>
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
// import demoData from "../demoData";
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      optionsJL:[],
      formData: {
        city: "",
        keywords: "",
      },
      tableRadio: "",
      formRules: {
        city: [
          {
            required: true,
            message: "请选择地区",
            trigger: "change",
          },
        ],
      },
      tableData: [
        {
          acctName: "ahdjkahdadajkdhajd",
          acctNo: "6228480502285113614",
          acctAlise: "别名",
          balance: "111111.00",
          acctBank: "某某银行",
        },
        {
          acctName: "ahdjkahdadajkdhajd",
          acctAlise: "别名别名别名",
          balance: "222222.00",
          acctNo: "6228480502285113615",
          acctBank: "某某银行",
        },
        {
          acctName: "ahdjkahdadajkdhajd",
          acctNo: "6228480502285113616",
          acctAlise: "别名别名别名",
          balance: "3333333333333.00",
          acctBank: "某某银行",
        },
      ],
    };
  },
  methods: {
    init() {
      //获取收款人数据
      if (this.value == true) {
        console.log(123123);
        let _this = this;
        this.$http
          .request(_this, "POST", "/CB0304.do", {
            custNo: "12580",
            groupId: "1",
            pageNo: "1",
            pageSize: "5",
          })
          .then((res) => {
            if (res.data.body.errorCode === "0") {
              this.tableData = res.data.body.payeeInfoList;
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
      console.log(acctObj)
      this.$emit("accoutConfirm", acctObj);
      this.$emit("input", false);
      // console.log(this.tableRadio)
      // this.$emit('input', false);
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
.outlets-list {
  .el-input {
    width: 280px;
    input {
      width: 280px;
    }
  }
}
</style>