<template>
  <div class="dealQuery">
    <title-bar title="跨行收款交易查询"></title-bar>
    <el-form
      :inline="true"
      ref="formData"
      label-width="120px"
      :rules="rules"
      :model="formData"
    >
      <el-form-item label="收款户名:" prop="bankName">
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

      <el-form-item label="收款账号:" prop="region">
        <el-select v-model="formData.region" placeholder="--请选择--">
        </el-select>
      </el-form-item>
      <el-form-item label="交易日期:" prop="keyWord">
        <el-date-picker
          v-model="formData.keyWord"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="keyWord">
        <el-radio-group v-model="radio">
          <el-radio :label="3">近3月</el-radio>
          <el-radio :label="6">近6月</el-radio>
          <el-radio :label="9">近1年</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="付款户名:" prop="keyWord">
        <el-input
          v-model="formData.keyWord"
          placeholder="请输入用户名称或联行号关键字"
        ></el-input>
      </el-form-item>
      <el-form-item label="付款账号:" prop="keyWord">
        <el-input
          v-model="formData.keyWord"
          placeholder="请输入用户名称或联行号关键字"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="tc mt16 mb56">
      <el-button type="primary" @click="search" size="mini">查询</el-button>
    </div>
    <div>
      <el-table border :data="transData">
        <el-table-column prop="drawer" label="提交时间" width="180">
        </el-table-column>
        <el-table-column
          prop="draftNumber"
          label="付款户名"
          width="180"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="draftNumber"
          label="付款账号"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="draftNumber"
          label="收款户名"
          width="180"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="draftNumber"
          label="收款账号"
          width="200"
        ></el-table-column>
        <el-table-column prop="name" label="操作" width="82" fixed="right">
          <template slot-scope="scope">
            <el-button type="text">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="mtb30 tar">
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
    <div class="wPro">
      <p>温馨提示</p>
      <p>查询时间跨度不能超过半年，最多可查询3年的交易。</p>
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
      total: 10,
      pageSize: 10,
      currentPage: 0,
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
.dealQuery {
}
</style>