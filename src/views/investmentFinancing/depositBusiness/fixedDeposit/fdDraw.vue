<template>
  <div class="fdDraw">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="定期存款存入" name="fdDraw"></el-tab-pane>
      <el-tab-pane label="定期存款支取" name="fdDeposit"></el-tab-pane>
    </el-tabs>
    <steps :stepsList="stepsList" :activeIndex="activeIndex"></steps>

    <div class="infoFill">
      <el-form
        ref="formData"
        label-width="312px"
        :rules="rules"
        :model="formData"
      >
        <el-form-item label="企业名称:">
          <el-input disabled v-model="formData.kay"></el-input>
        </el-form-item>
        <el-form-item label="转出账号:" prop="bankName">
          <el-select v-model="formData.bankName" placeholder="--请选择--">
            <el-option
              v-for="(bankName, index) in accountList"
              :key="index"
              :label="bankName.label"
              :value="bankName.val"
            >
            </el-option>
          </el-select>
          <div class="ml18 f14 gray2">
            余额：<span class="money">20000000元</span>
          </div>
        </el-form-item>

        <el-form-item label="存期:" prop="region">
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
        <el-form-item label="存入金额:" prop="money">
          <el-input v-model="formData.money" @input.native="moneyInput">
          </el-input>
          <div class="ml18 f14 gray2">
            <p>{{ mounyBig }}</p>
            <p>
              预计到期利息：<span class="money">20000000元</span>
              <span class="ml24">
                年利率：<span class="money">3.3%</span>
              </span>
            </p>
          </div>
        </el-form-item>
        <el-form-item label="转存方式:" prop="num">
          <el-input
            v-model="formData.minNum"
            placeholder="请输入"
            class="w140"
            @input.native="NumInput"
          ></el-input>
          <div class="ml18 f14 gray2">本金与利息到期后自动转存</div>
        </el-form-item>
      </el-form>
      <div class="tac mtb56">
        <el-button @click="infoFillNext" type="primary">下一步</el-button>
      </div>
      <div class="wPro mtb20">
        <p>温馨提示</p>
        <p>1.我们；</p>
        <p>2.我们；</p>
      </div>
    </div>
    <div class="infoConfirm" v-if="steps == 'infoConfirm'">
      <title-bar title="确认信息"></title-bar>
      <div class="cen-form flex alc wrap">
        <div class="item">
          <span class="label cp2">企业名称</span>
          <span class="value"></span>
        </div>
        <div class="item">
          <span class="label cp2">年利率</span>
          <span class="value">145645645646546546</span>
        </div>
        <div class="item">
          <span class="label cp2">转出账号</span>
          <span class="value">1000000元</span>
        </div>
        <div class="item">
          <span class="label cp2">预计到期利息</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">存期</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">转存方式</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">存入金额</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">起息日</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">大写金额</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">到期日</span>
          <span class="value">12笔</span>
        </div>
        <div class="item">
          <span class="label cp2">币种</span>
          <span class="value">12笔</span>
        </div>
      </div>
      <div class="tac mt36 mb56">
        <el-button @click="infoFillNext" type="primary">下一步</el-button>
      </div>
    </div>
    <div class="success" v-if="steps == 'success'">
      <span>存入金额： </span>

      <span class="moneybold f20">10000000</span>
      <span class="ml8 gray2"
        >(大写：{{ formData.payMoney | formatChinese }} )</span
      >
      <span class="ml35">存期：三个月</span>
      <span class="ml35">存款类型：4564654564</span>
      <auditProcess :list="list"></auditProcess>
    </div>

    <stepErrer
      class="mt40"
      v-if="steps == 'errer'"
      desc="提交结果页用于反馈一系列操作任务都处理结果，本文字区域可以展示简单的补充说明。"
    >
    </stepErrer>
    <u-dialog @toSubmit="ukSubmit" v-model="showFlag"></u-dialog>
  </div>
</template>

<script>
import stepErrer from "src/components/stepErrer";
import mathTools from "utils/mathTools.js";
import auditProcess from "src/components/auditProcess/index.vue";

import UDialog from "src/components/common/ukDialog/ukDialog";
export default {
  components: {
    stepErrer,
    auditProcess,
  },
  data() {
    return {
      activeName: "fdDraw",
      formData: {},
      mounyBig: "",
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
      stepsList: [
        {
          title: "填写信息",
          description: "",
        },
        {
          title: "确认信息",
          description: "",
        },
        {
          title: "提交结果",
          description: "",
          status: "",
        },
      ],
      steps: "infoFill",
      rules: {
        bankName: [
          { required: true, message: "请选择银行名称", trigger: "change" },
        ],
        region: [{ required: true, message: "请选择地区", trigger: "change" }],
      },
    };
  },
  computed: {
    activeIndex() {
      return this.steps == "infoFill" ? 0 : this.steps == "infoConfirm" ? 1 : 2;
    },
  },
  filters: {
    acctFormat(val) {
      if (val) {
        return mathTools.formatBankNo(val);
      }
    },
    //余额格式化
    formatMoney(val) {
      if (val) {
        return mathTools.addDecollator(val);
      }
    },
    formatChinese(val) {
      if (val) {
        return mathTools.formatChinese(val);
      }
    },
  },
  methods: {
    handleClick() {
      if (this.activeName == "fdDraw") {
      } else {
        this.$router.push({
          path: "/investmentFinancing/DepositBusiness/fixedDeposit/fdDeposit",
        });
      }
    },
    moneyInput(e) {
      let value = mathTools.formattingMoney(e.target.value);
      e.target.value = mathTools.addDecollator(value);
      this.mounyBig = mathTools.formatChinese(e.target.value);
    },
    infoFillNext() {
      this.steps = "infoConfirm";
    },
  },
};
</script>
<style lang="scss">
.fdDraw {
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
