<template>
  <div class="osq">
    <el-form
      ref="formData"
      label-width="120px"
      :rules="rules"
      :inline="true"
      :model="formData"
    >
      <el-form-item label="付款户名" prop="transOutAcct">
        <el-select v-model="formData.transOutAcct" placeholder="--请选择--">
          <el-option
            v-for="(transOutAcct, index) in accountList"
            :key="index"
            :label="transOutAcct.label"
            :value="transOutAcct.val"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="付款账号" prop="transOutAcct">
        <el-select v-model="formData.transOutAcct" placeholder="--请选择--">
          <el-option
            v-for="(transOutAcct, index) in accountList"
            :key="index"
            :label="transOutAcct.label"
            :value="transOutAcct.val"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="金额区间:" prop="num">
        <el-input
          v-model="formData.minNum"
          placeholder="请输入"
          class="w145"
          @input.native="NumInput"
        ></el-input>
        <span class="mlr10 f16">~</span>
        <el-input
          v-model="formData.maxNum"
          placeholder="请输入"
          class="w145"
          @input.native="NumInput"
        ></el-input>
      </el-form-item>
      <el-form-item label="交易状态" prop="tansStatus">
        <el-select v-model="formData.tansStatus" placeholder="--请选择--">
          <el-option
            v-for="(tansStatus, index) in accountList"
            :key="index"
            :label="tansStatus.label"
            :value="tansStatus.val"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收款户名" prop="accName">
        <el-input v-model="formData.accName"></el-input>
      </el-form-item>
      <el-form-item label="收款账号" prop="accNum">
        <el-input v-model="formData.keyWord"></el-input>
      </el-form-item>
      <el-form-item label="交易日期" prop="dealDate">
        <el-input v-model="formData.dealDate"></el-input>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="formData.quickTime">
          <el-radio label="近7天"></el-radio>
          <el-radio label="近1月"></el-radio>
          <el-radio label="近3月"></el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-row class="tc mt10 mb30">
      <el-button @click="reset" size="mini">重置</el-button>
      <el-button type="primary" @click="search" size="mini">查询</el-button>
    </el-row>
    <title-bar title="查询列表"></title-bar>
    <el-table :data="tableData" class="mt20">
      <el-table-column
        label="提交时间"
        prop="subTime"
        width="210"
      ></el-table-column>
      <el-table-column
        label="付款账号"
        prop="transOutAcct"
        width="190"
      ></el-table-column>
      <el-table-column
        label="收款户名"
        prop="transAmount"
        show-overflow-tooltip
        width="170"
      ></el-table-column>
      <el-table-column
        label="收款账号"
        prop="accNum"
        width="190"
      ></el-table-column>
      <el-table-column
        label="对方户名"
        prop="otherAcc"
        show-overflow-tooltip
        width="170"
      ></el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <a @click="detail(scope)">详情</a>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="total / pageSize > 1"
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
    <div class="tc mtb56">
      <el-button type="primary" @click="search">下载</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      let minNum = Number(mathTools.delDecollator(this.formData.minNum + ""));
      let maxNum = Number(mathTools.delDecollator(this.formData.maxNum + ""));
      if (minNum === "" || maxNum === "") {
        callback(new Error("请输入票据金额"));
      } else if (minNum < 0 || maxNum < 0) {
        callback(new Error("最小金额、最大金额必须大于0"));
      } else if (minNum > maxNum) {
        callback(new Error("最小金额不能大于最大金额"));
      } else {
        callback();
      }
    };
    return {
      step: 0,

      activeName: "first",
      formData: {
        amountS: 0.0,
      },
      rules: {
        num: [
          {
            required: true,
            trigger: "change",
            validator: validatePass,
          },
        ],
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
      tableData: [
        {
          subTime: "2020-06-29 18:00:00",
          transOutAcct: "999022 **** 0099",
          transAmount: "北京易诚互动网络技术股份有限公司",
          accNum: "633324 **** 8438",
          otherAcc: "北京易诚互动网络技术股份有限公司",
        },
        {
          subTime: "2020-06-29 18:00:00",
          transOutAcct: "999022 **** 0099",
          transAmount: "北京易诚互动网络技术股份有限公司",
          accNum: "633324 **** 8438",
          otherAcc: "北京易诚互动网络技术股份有限公司",
        },
        {
          subTime: "2020-06-29 18:00:00",
          transOutAcct: "999022 **** 0099",
          transAmount: "北京易诚互动网络技术股份有限公司",
          accNum: "633324 **** 8438",
          otherAcc: "北京易诚互动网络技术股份有限公司",
        },
        {
          subTime: "2020-06-29 18:00:00",
          transOutAcct: "999022 **** 0099",
          transAmount: "北京易诚互动网络技术股份有限公司",
          accNum: "633324 **** 8438",
          otherAcc: "北京易诚互动网络技术股份有限公司",
        },
        {
          subTime: "2020-06-29 18:00:00",
          transOutAcct: "999022 **** 0099",
          transAmount: "北京易诚互动网络技术股份有限公司",
          accNum: "633324 **** 8438",
          otherAcc: "北京易诚互动网络技术股份有限公司",
        },
      ],
    };
  },
  methods: {
    NumInput(e) {
      e.target.value = mathTools.formattingMoney(e.target.value);
      e.target.value = mathTools.addDecollator(e.target.value);
      this.formData.num = this.formData.num + 1;
    },
    // 查询
    search() {},
    // 重置
    reset() {},
    // 详情页
    detail() {
      this.$router.push({
        path: "/paymentSettlement/transferQuery/oneStopDetail",
      });
    },
  },
};
</script>
<style lang="scss">
.osq {
  .w145 {
    width: 145px;
  }
  .no_ml {
    .el-form-item__content {
      margin-left: 0px !important;
    }
  }
}
</style>