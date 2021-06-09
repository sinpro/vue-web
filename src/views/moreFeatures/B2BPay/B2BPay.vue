<template>
  <div class="B2BPay">
    <div v-if="step==0">
      <div class="divClass">
        <p class="p1 bgbrand cp1">订单信息</p>
        <p class="p2  cp1 tac bold f20">惠农商城</p>
        <div class="flex">
          <div class="ulClass flex f16 lh16">
            <ul class="u1 cp3 tar">
              <li>订单编号</li>
              <li v-if="onSale==true">优惠金额</li>
              <li>交易时间</li>
              <li>订单有效期</li>
            </ul>
            <ul class="u2 cp1">
              <li>202109445568843</li>
              <li v-if="onSale==true" class="money onsaleclass">20.00元</li>
              <li>2021-03-09 14:56:45</li>
              <li class="cerror">2小时（需要在2小时内完成审批）</li>
            </ul>
          </div>
          <div class="ulClass2 flex">
            <ul class="cp3 tar">
              <li>支付金额¥</li>
              <li v-if="onSale==true">订单金额¥</li>
            </ul>
            <ul>
              <li class="moneybold f34">880.00</li>
              <li v-if="onSale==true" class="cp3 unistall">900.00</li>
            </ul>
          </div>
        </div>
      </div>
      <title-bar title="选择付款账号"></title-bar>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="450px">
        <el-form-item label="付款账号：" prop="transInAcct">
          <el-select v-model="ruleForm.transInUsefor" placeholder="请选择收款账号">
            <el-option v-for="(account, index) in accountList" :key='index' :label="account.label" :value="account.val">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预留信息:" prop="text">
          <el-input v-model="ruleForm.text" :disabled="true"></el-input>
          <p class="f14 ctips ml10">请务必确认您的预留信息是否正确！</p>
        </el-form-item>

      </el-form>
      <div class="tac">
        <el-button type="primary" class="mtb56" @click.native="step=1">提交</el-button>
      </div>
    </div>
    <div v-if="step==1">
      <p class="p2 cp1 f16">
        <span>支付金额：</span>
        <span class="mr36 money">2.00元 </span>
        <span>订单号：</span>
        <span>1213231313131</span>
      </p>
    <auditProcess :list="list"></auditProcess>
    </div>

    <div class="wPro mtb20">
      <p>温馨提示</p>
      <p>1.本行仅提供便捷安全的网上支付服务，一切由于商品质量/送货服务等引起的争议均由客户及商户自行解决；</p>
      <p>2.账户和密码请您妥善保管。如因账号及密码保管不善，可能会造成被他人冒用而导致经济损失，银行对此不负责任；</p>
      <p>3.为了保障您的账户安全，请尽量避免在网吧等公共场所使用您的企业网上银行。</p>
    </div>

  </div>
</template>
<script>
  import auditProcess from "@src/components/auditProcess/index.vue";

  export default {
    components: {
      auditProcess
    },
    data() {
      return {
        onSale: false,
        step: 0,
        ruleForm: {},
        rules: {
          transInAcct: [{
            trigger: 'blur',
            required: true,
          }],
        },
        accountList: [{
            label: '457643456745',
            val: '11'
          },
          {
            label: '4678654436346',
            val: '11'
          },
        ],
        list: [{
            type: "finish",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
          },
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
          {
            type: "success",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
          },
          {
            type: "info",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
          },
          {
            type: "errer",
            name: "王思聪",
            time: "2020-02-02 12:00:00",
            desc: "错误信息",
          },
        ],
      }
    },
  }

</script>
<style lang="scss">
  .B2BPay {
    padding: 0 24px;
    box-sizing: border-box;

    .divClass {
      width: 1152px;
      border-radius: 2px;
      box-shadow: 0px 2px 9px 0px #0000001a;
      margin: 56px 0px;

      >.p1 {
        width: 1088px;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        padding: 16px 32px;
      }

      >.p2 {
        margin-top: 32px;
        margin-bottom: 46px;
      }
    }

    .ulClass {
      margin-left: 206px;
      margin-bottom: 56px;

      ul>li+li {
        margin-top: 24px;
      }

      .u1 {
        margin-right: 22px;
      }

      .u2 {
        width: 398px;
      }
    }

    .ulClass2 {
      margin-top: 28px;

      >ul>li+li {
        margin-top: 24px;

      }

      >ul:first-child {
        margin-right: 22px;
      }

      >ul:nth-child(2) {
        margin-top: -15px;

        >li:nth-child(2) {
          margin-top: 20px;
        }
      }
    }

    .onsaleclass {
      color: #ff8315;
    }

    .moneybold {
      color: #1b1b1b;
    }

    .unistall {
      text-decoration: line-through;
    }

    .p2 {
      >span {
        display: inline-block;
      }

      margin-top: 56px;
      margin-bottom: 24px;
      margin-left: 128px;
    }
  }

</style>
