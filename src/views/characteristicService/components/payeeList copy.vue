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
                scrollCurrentIndex,
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
          <div class="lstn payee-con-list" ref="payeeWrapper" id="payeeWrapper">
            <ul class="payee-wrapper">
              <li
                v-for="(item, index) in tableData"
                :key="index"
                class="payee-list-hook"
              >
                <span class="title gray1">{{ item.name }}</span>
                <ul class="lstn mtb10">
                  <li
                    v-for="(payee, payeeIndex) in item.payeeArr"
                    :key="payeeIndex"
                  >
                    <div class="content">
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
import BScroll from "better-scroll";
export default {
  props: {
    payeeFlag: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      condition: "",
      radioNo: "",
      scrollY: "",
      index: "",
      payeesHeightList: [0],
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
    this.$nextTick(() => {
      //引用better-scroll插件
      this._initScroll();
      // //获取每类分组的高度
      this._caluPayeesHeight();
    });
  },
  methods: {
    //初始化滑动
    _initScroll() {
      this.menu_scroll = new BScroll(this.$refs.menuWrapper, {
        click: true,
        tap: true,
      });
      this.payee_scroll = new BScroll(this.$refs.payeeWrapper, {
        probeType: 3,
      });
      this.$refs.payeeWrapper.addEventListener("scroll", (pos) => {
        this.scrollY = this.$refs.payeeWrapper.scrollTop;
      });
      //   this.payee_scroll.on("scroll", (pos) => {
      //       console.log(pos);
      //     this.scrollY = Math.abs(Math.round(pos.y));
      //   });
      
    },
    _caluPayeesHeight() {
      let payeesList = this.$refs.payeeWrapper.getElementsByClassName(
        "payee-list-hook"
      );
      if (payeesList && payeesList.length > 0) {
        let totalHeight = 0;
        for (let i = 0; i < payeesList.length; i++) {
          totalHeight += payeesList[i].clientHeight;
          this.payeesHeightList.push(totalHeight);
        }
      }
    },
    selectMenu(index, event) {
      let targetY = this.payeesHeightList[index];
      this.index = index;
      let payeesList = this.$refs.payeeWrapper.getElementsByClassName(
        "payee-list-hook"
      );
      this.payee_scroll.scrollToElement(payeesList[index], 300);
    },
    init() {
      //获取收款人数据
    },
    toSubmit() {
      let payeeItem = {};
      this.tableData.forEach((item, index) => {
        item.payeeArr.forEach((payee, index) => {
          if (payee.acctNo == this.radioNo) {
            payeeItem = payee;
          }
        });
      });
      this.$emit("payeeConfirm", payeeItem);
    },
    handleClose() {
      this.$emit("handleClose");
    },
  },
  computed: {
    scrollCurrentIndex() {
      for (let i = 0; i < this.payeesHeightList.length; i++) {
        let height1 = this.payeesHeightList[i];
        let height2 = this.payeesHeightList[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          this.index = i;
          return i;
        }
      }
      return 0;
    },
  },
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
        overflow: auto;
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
      .el-radio {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>