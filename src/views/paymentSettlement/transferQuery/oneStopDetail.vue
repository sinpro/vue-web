<template>
  <div class="dataCard">
    <title-bar title="交易详情"></title-bar>

    <div class="cen-form flex alc wrap mb30">
      <div class="item">
        <span class="label cp2">付款户名</span>
        <span class="value"></span>
      </div>
      <div class="item">
        <span class="label cp2">收款户名</span>
        <span class="value"></span>
      </div>
      <div class="item">
        <span class="label cp2">付款账号</span>
        <span class="value">145645645646546546</span>
      </div>
      <div class="item">
        <span class="label cp2">收款账号</span>
        <span class="value">145645645646546546</span>
      </div>
      <div class="item">
        <span class="label cp2">付款银行</span>
        <span class="value">145645645646546546</span>
      </div>
      <div class="item">
        <span class="label cp2">收款银行</span>
        <span class="value">145645645646546546</span>
      </div>
      <div class="item">
        <span class="label cp2">转账金额</span>
        <span class="value">1000000元</span>
      </div>
      <div class="item">
        <span class="label cp2">大写金额</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">手续费</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">大写金额</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">用途</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">备注</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">交易渠道</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">交易状态</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">录入员</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">提交时间</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">转账方式</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">流水号</span>
        <span class="value">12笔</span>
      </div>
      <div class="item">
        <span class="label cp2">转出日期</span>
        <span class="value">12笔</span>
      </div>
    </div>
    <p class="leftBar">审批流程</p>
    <div class="step mtb20 wr100 bgbrand ptb30 plr70 borderbox flex">
      <div class="mt10">
        <div class="step-success">
          <i class="el-icon-check"></i>
        </div>
        <div class="step-inner"></div>
        <div class="step-success">
          <i class="el-icon-check"></i>
        </div>
        <div class="step-inner"></div>
        <div class="step-tips bgtips">
          <div></div>
          <div></div>
        </div>
        <div class="step-inner"></div>
        <div class="step-success bgg">
          <i class="el-icon-check"></i>
        </div>
        <div class="step-inner info"></div>
        <div class="step-info">
          <div></div>
          <div></div>
        </div>
        <div class="step-inner"></div>
        <div class="step-error bgerror">
          <i class="el-icon-check"></i>
        </div>
      </div>
      <div class="ml20 content">
        <div class="content-item-success">
          <p class="">提交成功</p>
          <p class="gray2 nameTime">
            <span>张三｜提交人</span><span>2021-01-01 13:32:22</span>
          </p>
        </div>
        <div class="content-item-success">
          <p class="">提交成功</p>
          <p class="gray2 nameTime">
            <span>张三｜提交人</span><span>2021-01-01 13:32:22</span>
          </p>
        </div>
        <div class="content-item-tips">
          <p class="ctips">待授权</p>
          <p class="gray2 nameTime">
            <span>张三｜提交人</span>
          </p>
        </div>
        <div class="content-item-end">
          <p class="cg">完成</p>
        </div>
        <div class="content-item-info">
          <p class="gray2">完成</p>
        </div>
        <div class="content-item-error">
          <p class="ctips">审批拒绝</p>
          <p class="gray2 nameTime">
            <span>张三｜提交人</span><span>2021-01-01 13:32:22</span>
          </p>
          <p class="cerror">拒绝原因：等等等等等</p>
        </div>
      </div>
    </div>
    <div class="tc mtb56" v-if="type">
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <div class="tc mtb56" v-else>
      <el-button @click="goBack" size="medium">返回</el-button>
      <el-button type="primary" @click="goBack" size="medium"
        >重新转账</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: true,
      formData: {
        tradingStatus: "0",
      },
      tableData: [
        {
          subTime: "2020-06-29 18:00:00",
          transOutAcct: "999022 **** 0099",
          transAmount: "北京易诚互动网络技术股份有限公司",
          accNum: "633324 **** 8438",
          otherAcc: "北京易诚互动网络技术股份有限公司",
          result: "交易成功",
        },
        {
          subTime: "2020-06-29 18:00:00",
          transOutAcct: "999022 **** 0099",
          transAmount: "北京易诚互动网络技术股份有限公司",
          accNum: "633324 **** 8438",
          otherAcc: "北京易诚互动网络技术股份有限公司",
          result: "交易成功",
        },
        {
          subTime: "2020-06-29 18:00:00",
          transOutAcct: "999022 **** 0099",
          transAmount: "北京易诚互动网络技术股份有限公司",
          accNum: "633324 **** 8438",
          otherAcc: "北京易诚互动网络技术股份有限公司",
          result: "交易成功",
        },
        {
          subTime: "2020-06-29 18:00:00",
          transOutAcct: "999022 **** 0099",
          transAmount: "北京易诚互动网络技术股份有限公司",
          accNum: "633324 **** 8438",
          otherAcc: "北京易诚互动网络技术股份有限公司",
          result: "交易失败",
        },
        {
          subTime: "2020-06-29 18:00:00",
          transOutAcct: "999022 **** 0099",
          transAmount: "北京易诚互动网络技术股份有限公司",
          accNum: "633324 **** 8438",
          otherAcc: "北京易诚互动网络技术股份有限公司",
          result: "交易失败",
        },
      ],
    };
  },
  methods: {
    detail() {},
    goBack() {
      location.reload();
    },
  },
  filters: {
    toType(value) {
      switch (value) {
        case "0": {
          return "状态1";
        }
        case "1": {
          return "状态2";
        }
        case "2": {
          return "状态3";
        }
        case "3": {
          return "状态4";
        }
        case "4": {
          return "状态5";
        }
        case "5": {
          return "状态6";
        }
        case "6": {
          return "状态7";
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.dataCard {
  .cen-form {
    align-items: flex-start;
    .item {
      width: 50%;
      margin-bottom: 24px;
      .el-button {
        padding: 0;
      }
      .label {
        display: inline-block;
        width: 140px;
        text-align: right;
        margin-right: 24px;
      }
      .value {
        .tab {
          display: inline-block;
          min-width: 54px;
          padding: 0 8px;
          height: 22px;
          line-height: 22px;
          font-size: 14px;
          text-align: center;
          color: #fff;
          border-radius: 20px;
          background: #c6a34f;
        }
      }
    }
  }
  .step {
    .content div:first-child {
      margin-top: -16px;
    }
    .content .content-item-success {
      height: 80px;
      & p:first-child {
        font-size: 18px;
        padding-top: 16px;
      }
      & p:last-child {
        margin-top: 10px;
      }
    }
    .content .content-item-tips {
      height: 95px;
      & p:first-child {
        font-size: 22px;
        padding-top: 20px;
      }
      & p:last-child {
        margin-top: 15px;
      }
    }
    .content .content-item-info {
      height: 80px;
      line-height: 80px;
    }
    .content .content-item-end {
      font-size: 22px;
      height: 95px;
      line-height: 95px;
    }
    .content .content-item-error {
      height: 95px;
      & p:first-child {
        font-size: 22px;
        padding-top: 12px;
      }
      & p:nth-last-child(2) {
        margin-top: 15px;
      }
      & p:last-child {
        font-size: 14px;
        margin-top: 8px;
      }
    }
    .nameTime {
      & span:first-child {
        display: inline-block;
        width: 240px;
      }
    }
    .step-success {
      margin-left: 7px;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: #99d4b9;
      line-height: 30px;
      text-align: center;
      color: #fff;
      i {
        font-weight: bold;
      }
    }
    .step-success.bgg {
      margin-left: 0px;
      position: relative;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      font-size: 25px;
    }
    .step-tips {
      position: relative;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      & :first-child {
        position: absolute;
        left: 20px;
        top: 6px;
        height: 18px;
        width: 3px;
        background: #fff;
      }
      & :last-child {
        position: absolute;
        right: 6px;
        top: 22px;
        width: 18px;
        height: 3px;
        background: #fff;
      }
    }
    .step-error {
      margin-left: 0px;
      position: relative;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      font-size: 25px;
      color: #fff;
      i {
        font-weight: bold;
      }
    }
    .step-inner {
      height: 50px;
      width: 3px;
      background: #99d4b9;
      margin-left: 20px;
    }
    .info {
      background: #dedcd9;
    }
    .step-info {
      position: relative;
      margin-left: 7px;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      line-height: 30px;
      text-align: center;
      background: #dedcd9;
      & :first-child {
        position: absolute;
        left: 13.5px;
        top: 6px;
        height: 9px;
        width: 2px;
        background: #fff;
      }
      & :last-child {
        position: absolute;
        right: 7px;
        top: 13.5px;
        width: 9px;
        height: 2px;
        background: #fff;
      }
    }
  }
}
</style>