<template>
  <div class="noticeDepositIn">
    <el-tabs v-if="activeIndex==0" v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane label="通知存款存入" name="noticeDepositIn"></el-tab-pane>
      <el-tab-pane label="通知存款支取" name="noticeDepositOut"></el-tab-pane>
    </el-tabs>


    <steps :activeIndex="activeIndex">
      <el-step title="填写信息"></el-step>
      <el-step title="确认信息"></el-step>
      <el-step title="交易结果"></el-step>
    </steps>
    <div v-if="activeIndex==0">
      <el-form ref="formData" label-width="312px" :rules="rules" :model="formData" class="mt30">
        <el-form-item label="企业名称:">
          <el-input disabled v-model="formData.kay"></el-input>
        </el-form-item>
        <el-form-item label="转出账号:" prop="bankName">
          <el-select v-model="formData.bankName" placeholder="--请选择--">
            <el-option v-for="(bankName, index) in accountList" :key="index" :label="bankName.label"
              :value="bankName.val">
            </el-option>
          </el-select>
          <div class="ml18 f14 gray2">
            余额：<span class="money">{{balance}}元</span>
          </div>
        </el-form-item>
        <el-form-item label="通知类型:" prop="radio">

          <el-radio-group v-model="formData.radio">
            <el-radio label="一天通知存款"></el-radio>
            <el-radio label="七天通知存款"></el-radio>
          </el-radio-group>
          <div v-if="formData.radio=='一天通知存款'" class="ctips f14 lh14 mt5">一天通知存款需要提前一天建立通知</div>
          <div v-else class="ctips f14 lh14 mt5">七天通知存款需要提前七天建立通知</div>
        </el-form-item>
        <el-form-item label="存入金额:" prop="money">
          <el-input v-model="formData.money" @input.native="moneyInput" :placeholder="`最低起存${placeholder}万元`">
          </el-input>
          <div class="ml18 f14 gray2 lh14 mt10">
            <p>{{ mounyBig }}</p>
            <p class="mt10">
              <span>
                年利率：<span class="money ">3.3%</span>
              </span>
            </p>
          </div>
        </el-form-item>
        <el-form-item label="查看" label-width="312px">
          <el-button class="instruction" type="text" @click.native="dialogVisibles=true">《产品说明书》</el-button>
        </el-form-item>
      </el-form>
      <div class="tac mtb56">
        <el-button type="primary" @click.native="goNext">下一步</el-button>
      </div>


      <div class="wPro mtb20">
        <p>温馨提示</p>
        <p>1.我们；</p>
        <p>2.我们；</p>
      </div>
    </div>

    <div v-if="activeIndex==1" class="mt28">
      <title-bar title="确认信息"></title-bar>
      <div class="f16 lh16 mt36 ulDiv">
        <ul class="ul1 cp3 tar mr20">
          <li>企业名称</li>
          <li>转出账号</li>
          <li>存入金额</li>
          <li>大写金额</li>
        </ul>
        <ul class="ul2 cp1">
          <li>北京易诚互动网络技术有限公司</li>
          <li>8888 9999 8888 9999</li>
          <li>100,000.00元</li>
          <li>拾万元整</li>
        </ul>
        <ul class="ul3 cp3 tar mr20">
          <li>年利率</li>
          <li>币种</li>
          <li>通知类型</li>
          <li>起息日</li>
        </ul>
        <ul class="ul4 cp1">
          <li>2.34%</li>
          <li>人民币</li>
          <li>一天通知存款</li>
          <li>2020-01-10</li>
        </ul>
      </div>
      <div class="tac mt56 mb100">
        <el-button size="medium" @click.native="goLast">上一步</el-button>
        <el-button size="medium" type="primary" @click.native="goNext1">提交</el-button>
      </div>
    </div>
    <div v-if="activeIndex==2">
      <div class="flex f16 lh16 mb24 mt48">
        <p>存入金额：</p>
        <p class="mr36 cy money">20,000.00元</p>
        <p>存款类型：</p>
        <p class="cy">一天通知存款</p>
      </div>
      <div>
        <auditProcess :list="list"></auditProcess>
      </div>
      <div class="tac mt56 mb100">
        <el-button size="medium" @click.native="goNext0">完成</el-button>
        <el-button size="medium" type="primary" @click.native="goNext0">再存一笔</el-button>
      </div>
    </div>

    <el-dialog title="产品说明书" :visible.sync="dialogVisibles" :show-close='false' center size='medium' text>
      <div>
        文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisibles = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import mathTools from "utils/mathTools.js";
  import auditProcess from "src/components/auditProcess/index.vue";


  export default {
    components: {
      auditProcess
    },
    data() {
      var validator = (rule, value, callback) => {
        let money = Number(this.formData.money.replace(/,/g, ""))
        if (money > this.balance) {
          callback(new Error('存入金额不能大于账户余额'));
        } else if (money < this.placeholder0) {
          callback(new Error('存入金额不能小于起存金额'));
        } else {
          callback();
        }
      };
      return {
        activeName: 'noticeDepositIn',
        activeIndex: 0,
        mounyBig: '',
        balance: 2000000,
        placeholder0: 500000,
        dialogVisibles: false,
        formData: {
          kay: '北京易诚互动网络技术股份有限公司',
          bankName: '5465653625363548 | 别名1',
          resource: '',
          money: '',
          radio: '一天通知存款',
        },
        rules: {
          bankName: [{
            required: true,
            message: "请选择",
            trigger: "change"
          }, ],
          region: [{
            required: true,
            message: "请选择",
            trigger: "change"
          }],
          radio: [{
            required: true,
            message: "请选择",
            trigger: "change"
          }],
          money: [{
            validator: validator,
            trigger: "change"
          }],
        },
        accountList: [{
            label: "5465653625363548 | 别名1",
            val: "0",
          },
          {
            label: "5465653625363548 | 别名1",
            val: "1",
          },
        ],
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


      }
    },
    methods: {
      goNext0() {
        this.activeIndex = 0;
      },
      goNext1() {
        this.activeIndex = 2;
      },
      goLast() {
        this.activeIndex = 0;
      },
      moneyInput(e) {
        this.formData.money = mathTools.moneyCheck(e.target.value)
        this.mounyBig = mathTools.formatChinese(e.target.value.replace(/,/g, ''));
      },
      handleClick() {
        if (this.activeName == 'noticeDepositOut') {
          this.$router.push('/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositOut')
        }
      },
      goNext() {
        this.$refs["formData"].validate((valid) => {
          if (valid) {
            this.activeIndex = 1;
          } else {
            return false;
          }
        });
      }
    },
    computed: {
      placeholder() {
        return String(this.placeholder0).slice(0, -4)
      }
    }
  }

</script>

<style lang="scss">
  .noticeDepositIn {
    .instruction {
      color: #4367d6;
    }

    .mt28 {
      margin-top: 28px;
    }

    .ulDiv {
      display: flex;
      margin-left: 100px;

      .ul2 {
        width: 396px;
      }

      ul>li+li {
        margin-top: 24px;
      }
    }
  }

</style>
