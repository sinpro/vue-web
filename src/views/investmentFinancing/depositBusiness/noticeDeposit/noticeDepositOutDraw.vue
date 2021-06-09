<template>
  <div class="noticeDepositOutDraw">
    <div class="tac stepClass">
      <el-steps class="inline-block" :active="active" finish-status="success" align-center process-status='process'>
        <el-step title="填写信息"></el-step>
        <el-step title="确认信息"></el-step>
        <el-step title="交易结果"></el-step>
      </el-steps>
    </div>
    <title-bar v-if="step!=2" title="通知存款信息"></title-bar>

    <div v-if="step!=2" class="ulDiv f16 lh16 flex">
      <ul class="ul1 tar mr20 cp3">
        <li>户名</li>
        <li>通知存款账号</li>
        <li>通知存款本金</li>
        <li>币种</li>
      </ul>
      <ul class="ul2 cp1">
        <li>北京易诚互动网络技术有限公司</li>
        <li>6231 5725 3712 5312</li>
        <li>100,000.00元</li>
        <li>人民币</li>
      </ul>
      <ul class="ul3 tar mr20 cp3">
        <li>年利率</li>
        <li>起息日</li>
        <li>通知类型 </li>
        <li>存款证实书</li>
      </ul>
      <ul class="ul4 cp1">
        <li>6.56%</li>
        <li>2020-01-01</li>
        <li>七天通知存款</li>
        <li>未打印</li>
      </ul>
    </div>
    <title-bar v-if="step!=2" title="支取信息"></title-bar>

    <el-form v-if="step==0" :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="312px"
      class="flex mt36">
      <el-form-item label="转入账号:" prop="account">
        <el-input v-model="ruleForm.account"  placeholder="请输入" :disabled="true">
        </el-input>
      </el-form-item>
      <el-form-item label="支取金额:" prop="moneyArea1">
        <el-input v-model="ruleForm.moneyArea1" class="moneyArea" @input.native="moneyInput" placeholder="请输入" maxlength="24">
        </el-input>
        <el-button class="ml15" type="text">全部金额</el-button>
        <p class="tipsClass f14 lh14 cp1">{{mounyBig}}</p>
        <p class="tipsClass f14 lh14 cp1">预计利息：<span class="cy">100.00元</span></p>
      </el-form-item>   
    </el-form>
    <div v-if="step==1" class="ulDiv2 f16 lh16 flex">
      <ul class="ul1 tar mr20 cp3">
        <li>转入账号</li>
        <li>支取金额</li>
      </ul>
      <ul class="ul2 cp1">
        <li>9999 9999 9999 8888</li>
        <li>100,000.00元</li>
      </ul>
      <ul class="ul3 tar mr20 cp3">
        <li>大写金额</li>
        <li>预计利息</li>
      </ul>
      <ul class="ul4 cp1">
        <li>拾万元整</li>
        <li>10.00元</li>
      </ul>
    </div>


    <div v-if="step==2">
      <div class="flex f16 lh16 mb24 mt48">
        <p>支取金额：</p>
        <p class="mr36 cy">20,000.00元</p>
        <p>利息：</p>
        <p class="cy">100.00元</p>
      </div>
      <div>
        <auditProcess :list="list"></auditProcess>
      </div>
    </div>


    <div v-if="step==0" class="tac mt36 mb56">
      <el-button size="medium" @click.native="goBack1">返回</el-button>
      <el-button size="medium" type="primary" @click.native="goNext1">下一步</el-button>
    </div>

    <div v-if="step==1" class="tac mt36 mb56">
      <el-button size="medium" @click.native="goBack2">上一步</el-button>
      <el-button size="medium" type="primary" @click.native="goNext2">提交</el-button>
    </div>

    <div v-if="step==2" class="tac mt56 mb100">
      <el-button size="medium" @click.native="goOver">完成</el-button>
      <el-button size="medium" type="primary" @click.native="goDetail">查看交易详情</el-button>
    </div>



    <div v-if="step==0" class="wPro mtb20">
      <p>温馨提示</p>
      <p>1.我们；</p>
      <p>2.我们；</p>
      <p>3.我们；</p>
      <p>4.我们。</p>
    </div>






  </div>
</template>

<script>
  import auditProcess from "src/components/auditProcess/index.vue";
  import mathTools from 'utils/mathTools.js'

  export default {
    components: {
      auditProcess
    },

    data() {
      var validatePass = (rule, value, callback) => {
        if (Number(this.ruleForm.moneyArea1.replace(/,/g, "")) > Number(this.ruleForm.moneyArea2.replace(/,/g, ""))) {
          callback(new Error('“起始金额”不能大于“终止金额”'));
        } else {
          callback();
        }
      };
      return {
        step: 0,
        tips: 2, //1,留存金额小于最低起存金额。2,仅可全部支取
        tipsNum: 3,
        isNext: true, //是否可以下一步
        active: 0,
        mounyBig: '',
        list: [{
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
        ruleForm: {
          name: '北京易诚互动网络技术股份有限公司',
          region: '1253453453|别名',
          resource: '近1月',
          value1: '',
          moneyArea1: '',
          moneyArea2: '',
          type: '行外转账-收入',
          type2: '全部',
          account: '8888888888888888 | 别名1',
        },
        rules: {
          moneyArea1: [{
            required: true,
            validatePass: validatePass,
            trigger: 'blur'
          }],
        },
      };
    },
    methods: {
      goOver() {
        this.$router.push("/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositOut")

      },
      goDetail() {

      },
      goNext1() {
        if (this.isNext) {
          this.active = 1;
          this.step = 1;
        }
      },
      goNext2() {
        if (this.isNext) {
          this.active = 2;
          this.step = 2;
        }
      },
      goBack1() {
        this.$router.go(-1)
      },
      goBack2() {
        this.active = 0;
        this.step = 0;
      },
      moneyInput(e) {
        this.ruleForm.moneyArea1 = mathTools.moneyCheck(e.target.value)
        this.mounyBig = mathTools.formatChinese(e.target.value.replace(/,/g, ''));
      },
    },
    mounted() {},
  };

</script>
<style lang="scss">
  .noticeDepositOutDraw {
    .stepClass {
      margin-top: 26px;
      margin-bottom: 38px;
    }

    .ulDiv {
      margin-top: 5px;
      margin-left: 67px;
      margin-bottom: 48px;

      >ul>li+li {
        margin-top: 23px;
      }

      .ul2 {
        width: 364px;
      }
    }

    .tipsClass {
      margin-left: 17px;
      margin-top: 11px;
    }

    .ulDiv2 {
      margin-top: 5px;
      margin-left: 99px;
      margin-bottom: 58px;

      >ul>li+li {
        margin-top: 23px;
      }

      .ul2 {
        width: 380px;
      }
    }

    .mt48 {
      margin-top: 48px;
    }
  }

</style>
