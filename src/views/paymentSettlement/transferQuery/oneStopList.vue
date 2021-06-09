<template>
  <div class="osq">
    <el-form
      ref="formData"
      label-width="120px"
      class="mt20"
      :rules="rules"
      :model="formData"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="付款账户" prop="transOutAcct">
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
        </el-col>
        <el-col :span="12">
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
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-row>
            <el-col :span="14">
              <el-form-item
                label="金额区间"
                prop="amountS"
                :rules="startMoneyRule()"
              >
                <el-input
                  v-model.number="formData.amountS"
                  style="width: 95%"
                  @change="handleMinChange()"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item
                label=" ~ "
                label-width="12px"
                prop="amountL"
                :rules="endMoneyRule()"
              >
                <el-input
                  v-model.number="formData.amountL"
                  style="width: 80%"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
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
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="收款户名" prop="accName">
            <el-input v-model="formData.accName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="收款账号" prop="accNum">
            <el-input v-model="formData.keyWord"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="交易日期" prop="dealDate">
            <el-input v-model="formData.dealDate"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <div class="no_ml">
            <el-form-item>
              <el-radio-group v-model="formData.quickTime">
                <el-radio label="近7天"></el-radio>
                <el-radio label="近1月"></el-radio>
                <el-radio label="近3月"></el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
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
      class="fr"
      :page-size="10"
      layout="total, prev,pager, next, jumper"
      :total="40"
    >
    </el-pagination>
    <div class="clearboth tc">
      <el-button type="primary" @click="search" class="mtb30">下载</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: 0,
      validateCom(rule, value, callback) {
        const MIN_NUMBER = 0;
        const one = Number(value);
        if (Number.isInteger(one)) {
          if (one < MIN_NUMBER) {
            return callback(new Error("输入值必须大于0"));
          } else {
            return callback();
          }
        }
        return callback(new Error("请输入数字值"));
      },
      activeName: "first",
      formData: {
        amountS: 0.0,
      },
      rules: {},
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
    handleClick() {},
    handleMinChange() {
      // console.log(this.formData.amoz)
    },
    startMoneyRule() {
      const validateMin = (rule, value, callback) => {
        const one = Number(value);
        const max = Number(this.formData.amountL);
        if (!max || one < max) {
          this.$refs.formData.clearValidate("amountL");
          return callback();
        }
        return callback(new Error("输入值不得大于最大阈值"));
      };
      const R = [];
      R.push(
        { validator: this.validateCom, trigger: "blur", type: "number" },
        {
          required: false,
          message: "请填写交易金额最小值",
          trigger: "blur",
          type: "number",
        },
        { validator: validateMin, trigger: "blur", type: "number" }
      );
      return R;
    },
    endMoneyRule() {
      const validateMax = (rule, value, callback) => {
        const one = Number(value);
        const min = Number(this.formData.amountS);
        if (!min || one > min) {
          this.$refs.formData.clearValidate("amountS");
          return callback();
        }
        return callback(new Error("输入值不得小于最小阈值"));
      };
      const R = [];
      R.push(
        { validator: this.validateCom, trigger: "blur", type: "number" },
        {
          required: false,
          message: "请填写交易金额最大值",
          trigger: "blur",
          type: "number",
        },
        { validator: validateMax, trigger: "blur", type: "number" }
      );
      return R;
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
  .no_ml {
    .el-form-item__content {
      margin-left: 0px !important;
    }
  }
}
</style>