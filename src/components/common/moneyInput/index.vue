<template>
  <div class="moneyInput">
    <el-popover
      placement="top-start"
      width="230"
      trigger="manual"
      v-model="visible"
      offset="0"
    >
      <div class="tips-content">
        <div style="height: 20px">
          {{ MoneyUnit }}
        </div>
        <div>
          {{ formatMoney }}
        </div>
      </div>
      <el-input
        slot="reference"
        v-model="inputValue"
        @focus="handleFocus"
        @blur="handleBlur"
        @input.native="handleInput"
        :placeholder="placeholder"
      ></el-input>
    </el-popover>
    <div class="maxmoney f14 mt12" v-if="inputValue">
      {{ payMoneyUpper }}
    </div>
  </div>
</template>

<script>
import mathTools from "utils/mathTools.js";
export default {
  name: "moneyInput",
  model: {
    prop: "payMoney",
    event: "inputChange",
  },
  props: {
    payMoney: {
      type: String,
      default: "",
    },
    placeholder:{
      type: String,
      default: "请输入转账金额",
    }
  },
  data() {
    return {
      visible: false,
      inputValue: this.payMoney,
      formatMoney: "",
      MoneyUnit: "",
      payMoneyUpper: "",
    };
  },
  methods: {
    handleFocus(e) {
      this.visible = e.target.value ? true : false;
    },
    handleBlur(e) {
      this.visible = false;
    },
    handleInput(e) {
      this.visible = e.target.value ? true : false;
      let value = mathTools.formattingMoney(e.target.value);
      this.formatMoney = mathTools.addDecollator(value);
      this.MoneyUnit = mathTools.getMoneyUnit(value);
      this.inputValue = this.formatMoney;
      this.$emit("inputChange", this.inputValue);
      this.payMoneyUpper = mathTools.formatChinese(value);
    },
  },
};
</script>

<style lang="scss" >
</style>