<template>
  <div class="payee-select">
    <el-dialog
      :visible.sync="payeeFlag"
      :before-close="handleClose"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :show-close="false"
      size="medium"
    >
      <div class="payee-list">
        <div class="menu-wrapper" ref="menuWrapper">
          <ul class="menu-list">
            <li
              class="menu-item"
              v-for="(item, menuIndex) in tableData"
              @click="selectMenu(menuIndex, $event)"
              :key="menuIndex"
              :class="[
                index == menuIndex ? 'menu-item-bgw pointer' : 'pointer',
              ]"
            >
              <span class="text">
                <span>{{ item.name }}</span>
              </span>
            </li>
          </ul>
        </div>
        <div class="payeecon">
          <div class="payee-title">常用联系人</div>
          <el-form label-width="auto">
            <el-form-item label="关键词搜索:">
              <el-input
                v-model="condition"
                placeholder="请输入搜索关键词"
              ></el-input>
              <el-button type="primary" size="mini" class="ml30"
                >查询</el-button
              >
            </el-form-item>
          </el-form>
          <div class="lstn payee-con-list swiper-container">
            <ul class="swiper-wrapper">
              <li
                v-for="(item, index) in tableData"
                :key="index"
                class="swiper-slide"
              >
                <span class="title gray1">{{ item.name }}</span>
                <ul class="lstn mtb10">
                  <li
                    v-for="(payee, payeeIndex) in item.payeeArr"
                    :key="payeeIndex"
                  >
                    <div class="content" v-if="type == 'radio'">
                      <el-radio
                        v-model="radioNo"
                        :label="payee.acctNo"
                        class="p10"
                      >
                        <div class="ml10">
                          <p class="gray1">
                            {{ payee.acctName }}
                            <span
                              class="gray2 f14"
                              style="top: -2px; position: relative"
                            >
                              |
                            </span>
                            {{ payee.acctAlise }}
                          </p>
                          <p class="mt10 gray3">{{ payee.acctNo }}</p>
                        </div>
                      </el-radio>
                    </div>
                    <div class="content" v-else>
                      <el-checkbox
                        v-model="radioList"
                        :label="payee.acctNo"
                        class="p10"
                      >
                        <div class="ml10">
                          <p class="gray1">
                            {{ payee.acctName }}
                            <span
                              class="gray2 f14"
                              style="top: -2px; position: relative"
                            >
                              |
                            </span>
                            {{ payee.acctAlise }}
                          </p>
                          <p class="mt10 gray3">{{ payee.acctNo }}</p>
                        </div>
                      </el-checkbox>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="el-dialog__footer tac">
            <el-button @click="$emit('handleClose')" size="medium"
              >取消</el-button
            >
            <el-button type="primary" @click="toSubmit" size="medium"
              >确定</el-button
            >
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Swiper from "../../../tools/swiper/idangerous.swiper2.7.6.min.js";
import "../../../tools/swiper/idangerous.swiper2.7.6.css";
export default {
  props: {
    type: {
      type: String,
      default: "radio",
    },
    payeeFlag: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      Swiper: null,
      condition: "",
      radioNo: "",
      radioList: [],
      index: "",
      tableData: [
        {
          name: "企业下挂账户",
          payeeArr: [
            {
              acctName: "北京易诚互动有限公司",
              acctAlise: "别名",
              acctNo: "6228480502285113614",
              bankName: "收款银行1",
            },
            {
              acctName: "北京易诚互动有限公司",
              acctAlise: "别名",
              acctNo: "6228480502285113615",
              bankName: "收款银行2",
            },
          ],
        },
        {
          name: "分组1",
          payeeArr: [
            {
              acctName: "北京易诚互动有限公司",
              acctAlise: "别名",
              acctNo: "6228480502285113616",
              bankName: "收款银行3",
            },
            {
              acctName: "北京易诚互动有限公司",
              acctAlise: "别名",
              acctNo: "6228480502285113617",
              bankName: "收款银行4",
            },
          ],
        },
        {
          name: "分组二",
          payeeArr: [
            {
              acctName: "北京易诚互动有限公司",
              acctAlise: "别名",
              acctNo: "6228480502285113618",
              bankName: "收款银行5",
            },
            {
              acctName: "北京易诚互动有限公司",
              acctAlise: "别名",
              acctNo: "6228480502285113619",
              bankName: "收款银行6",
            },
          ],
        },
        {
          name: "分组三",
          payeeArr: [
            {
              acctName: "北京易诚互动有限公司",
              acctAlise: "别名",
              acctNo: "6228480502285113622",
              bankName: "收款银行7",
            },
            {
              acctName: "北京易诚互动有限公司",
              acctAlise: "别名",
              acctNo: "6228480502285113623",
              bankName: "收款银行8",
            },
          ],
        },
        {
          name: "分组四",
          payeeArr: [
            {
              acctName: "北京易诚互动有限公司",
              acctAlise: "别名",
              acctNo: "6228480502285113620",
              bankName: "收款银行9",
            },
            {
              acctName: "北京易诚互动有限公司",
              acctAlise: "别名",
              acctNo: "6228480502285113630",
              bankName: "收款银行10",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    let vm = this;
    this.$nextTick(() => {
      this.swiper = new Swiper(".swiper-container", {
        mousewheelControl: true,
        mousewheelControlForceToAxis: true,
        mode: "vertical",
        slidesPerView: "auto",
        onSlideNext: function (swiper) {
          vm.index = swiper.activeIndex;
        },
      });
    });
  },
  methods: {
    selectMenu(index) {
      this.index = index;
      this.swiper.swipeTo(index);
    },
    toSubmit() {
      console.log(this.type);
      if (this.type == "radio") {
        let payeeItem = {};
        this.tableData.forEach((item, index) => {
          item.payeeArr.forEach((payee, index) => {
            if (payee.acctNo == this.radioNo) {
              payeeItem = payee;
            }
          });
        });
        this.$emit("payeeConfirm", payeeItem);
      } else {
        let payeeList = [];
        this.tableData.forEach((item, index) => {
          item.payeeArr.forEach((payee, index) => {
            if (
              this.radioList.find((e) => {
                return payee.acctNo == e;
              })
            ) {
              payeeList.push(payee);
            }
          });
        });
        this.$emit("payeeConfirm", payeeList);
      }
    },
    handleClose() {
      this.$emit("handleClose");
    },
  },
  computed: {},
};
</script>
<style lang="scss">
.payee-select {
  position: absolute;
  overflow: hidden;
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    padding: 0;
    height: 640px !important;
    max-height: 640px !important;
    overflow: hidden;
  }
  .el-radio.is-checked {
    background: #f3f3f3;
  }
  .el-radio:hover {
    background: #f3f3f3;
  }
  .payee-list {
    .menu-wrapper {
      box-sizing: border-box;
      padding-top: 70px;
      width: 200px;
      height: 100%;
      background-color: #f3f5f7;
      position: absolute;
      .menu-list {
        .menu-item {
          display: table;
          height: 50px;
          width: 200px;
          line-height: 50px;
          padding: 0 22px 0 32px;
          box-sizing: border-box;
          &-bgw {
            background: -o-linear-gradient(to right, #c6ab75, #e8d2a2);
            background: linear-gradient(to right, #c6ab75, #e8d2a2);
            background-blend-mode: normal, normal;
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#c6ab75',endColorstr='#e8d2a2',gradienttype=1);
          }
        }
      }
    }
    .payeecon {
      .payee-con-list {
        height: 426px;
      }
      .swiper-wrapper {
        height: 426px;
      }
      .swiper-slide {
        width: 100%;
      }
      .payee-title {
        font-size: 22px;
        font-weight: bold;
        line-height: 22px;
        padding: 24px 0;
        text-align: center;
      }
      margin-left: 232px;
      margin-right: 32px;
      .title {
        &::before {
          display: inline-block;
          content: "";
          width: 4px;
          height: 14px;
          background-color: #059c5d;
          margin-right: 8px;
          position: relative;
          top: 0px;
          font-weight: bold;
        }
      }

      .el-radio,
      .el-checkbox {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>