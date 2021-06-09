<template>
  <div class="app">
    <title-bar title="联行号查询"></title-bar>
    <el-form
      ref="formData"
      label-width="120px"
      :inline="true"
      :rules="rules"
      :model="formData"
    >
      <el-form-item label="银行名称" prop="bankName">
        <el-select v-model="formData.bankName" placeholder="--请选择--">
          <el-option
            v-for="(bankName, index) in accountList"
            :key="index"
            :label="bankName.label"
            :value="bankName.val"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="地区" prop="region">
        <el-select v-model="formData.region" placeholder="--请选择--">
          <el-option
            v-for="(region, index) in accountList"
            :key="index"
            :label="region.label"
            :value="region.val"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="关键字" prop="keyWord">
        <el-input
          v-model="formData.keyWord"
          placeholder="请输入用户名称或联行号关键字"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="tc mtb30">
      <el-button type="primary" @click="search">查询</el-button>
    </div>
    <div>
      <el-table border :data="transData">
        <el-table-column prop="drawer" label="联行号"> </el-table-column>
        <el-table-column prop="draftNumber" label="网点名称"></el-table-column>
      </el-table>
    </div>
    <div class="mt30 mr10 fr">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :layout="
          total / pageSize > 30
            ? 'prev, pager, next, jumper'
            : 'prev, pager, next'
        "
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rules: {
        bankName: [
          { required: true, message: "请选择银行名称", trigger: "change" },
        ],
        region: [{ required: true, message: "请选择地区", trigger: "change" }],
      },
      accountList: [
        {
          label: "账号1",
          val: 0,
        },
        {
          label: "账号2",
          val: 1,
        },
      ],
      formData: {},
      transData: [
        {
          draftNumber: "1234567890123456312432425",

          drawer: "北方交易公司",
        },
        {
          draftNumber: "1234567890123456312432425",

          drawer: "北方交易公司",
        },
        {
          draftNumber: "1234567890123456312432425",
          drawer: "北方交易公司",
        },
        {
          draftNumber: "1234567890123456312432425",
          drawer: "北方交易公司",
        },
        {
          draftNumber: "1234567890123456312432425",
          drawer: "北方交易公司",
        },
      ],
      currentPage: 0,
      pageSize: 10,
      total: 10,
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    search() {
      this.$refs.formData.validate((valid) => {
        if (valid) {
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss">
.app {
}
</style>